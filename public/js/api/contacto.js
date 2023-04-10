const { useState, useEffect } = React;
const { Card, Row, Col, Button } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            municipios: [],
            asuntos: [],
            errorNombre: false,
            errorMunicipio: false,
            error1Telefono:false,
            error2Telefono:false,
            error1Correo:false,
            error2Correo:false,
            errorAsunto:false,
            errorComentario:false,
            enviando:false,
            Toast:false,
            alertbody:{body:'',variante:'',header:''}
        };
        this.closeAlert = this.closeAlert.bind(this);
    }

    componentDidMount() {
        this.getMunicipios();
        this.getAsuntos();
    }
    getMunicipios = () =>{
        const context = this;
        axios
            .get(`/public/municipio`)
            .then(function (response) {
                context.setState({ municipios: response.data });
            })
            .catch(function (error) {
            });
    }
    getAsuntos = () =>{
        const context = this;
        axios
            .get(`/public/asunto`)
            .then(function (response) {
                context.setState({ asuntos: response.data });
            })
            .catch(function (error) {
            });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            enviando:true
        });
        
        let promCaptcha = new Promise((resolve,reject) =>{
            try {
                let token = grecaptcha.execute();            
                token.then(function(){
                    let token = "";
                    setTimeout(function(){
                        token = grecaptcha.getResponse();
                        resolve(token);
                    },350);
                })
                .catch(function(error){
                    reject(false);
                });     
            } catch (error) {
                reject(error.message);
            }
        });

        promCaptcha.then((resp) =>{
            if(resp === ""){
                resp = grecaptcha.getResponse();
            }
            /* SE QUITA EL CAPTCHA PORQUE NO FUNCIONA, HA CADUCADO */
            /*if(resp !== "" && resp != undefined){*/
                let form = e.target;
                if (form.txtNombre.value && form.slcMunicipios.value != 0 && form.txtTelefono.value &&
                    form.txtCorreoE.value && form.slcAsunto.value != 0 && form.txtComentario.value
                    ){
                        const formData = new FormData();
                        formData.append("txtNombre",form.txtNombre.value);
                        formData.append("slcMunicipio",form.slcMunicipios[form.slcMunicipios.selectedIndex].innerText);
                        formData.append("txtTelefono",form.txtTelefono.value);
                        formData.append("txtCorreoE",form.txtCorreoE.value);
                        formData.append("slcAsunto",form.slcAsunto[form.slcAsunto.selectedIndex].innerText);
                        formData.append("txtComentario",form.txtComentario.value);
                        formData.append("txtToken",resp);

                        axios
                            ({
                                method: "post",
                                url: "/public/contactoformulario",
                                data: formData,
                                headers: { "Content-Type": "multipart/form-data" }
                            })
                            .then((response) =>{
                                switch(response.data.status){
                                    case "warning":
                                        this.setState({
                                            alertbody:{
                                                header: '¡Upps! No es posible continuar con el registro',
                                                body: response.data.message,
                                                variante: "warning"
                                            }
                                        });
                                        break;
                                    case "danger":
                                        this.setState({
                                            alertbody:{
                                                header: '¡Upps! Ha ocurrido un error',
                                                body: response.data.message,
                                                variante: "danger"
                                            }
                                        });
                                        break;
                                    case "success":
                                        this.setState({
                                            alertbody:{
                                                header: '¡Agradecemos tu comentario!',
                                                body: response.data.message,
                                                variante: "success"
                                            }
                                        });
                                        break;
                                    default:
                                        this.setState({
                                            alertbody:{
                                                header: '¡Upps! Parace que algo salió mal',
                                                body: 'Sentimos la molestias que esto puede ocasionar, intente nuevamente o póngase en contacto con nosotros al 01-800-7INAEBA (746-2322)',
                                                variante: "warning"
                                            }
                                        });
                                        break;
                                }
                                this.setState({
                                    Toast:true,
                                    enviando:false
                                });
                            })
                            .catch((error)=>{
                                this.setState({
                                    alertbody:{
                                        header: '¡Upps! Ha ocurrido un error',
                                        body: 'Es posible que la conexión haya fallado, intente nuevamente.',
                                        variante: "danger"
                                    }
                                });
                                this.setState({
                                    Toast:true,
                                    enviando:false
                                });
                            });
                }else{
                    this.setState({
                        Toast:true,
                        alertbody:{
                            header: '¡Upps! Algo salió mal',
                            body: 'Al menos uno de los campos no cumple con los requisitos, revisa los campos en rojo para continuar.',
                            variante: 'danger'
                        },
                        enviando:false
                    });

                    this.setState({
                        errorNombre: !(form.txtNombre.value),
                        errorMunicipio: (form.slcMunicipios.value == 0),
                        error1Telefono: !(form.txtTelefono.value),
                        error2Telefono: (form.txtTelefono.value ? (this.validarTelefono(form.txtTelefono.value) ? false: true) :false),
                        error1Correo: !(form.txtCorreoE.value),
                        error2Correo: (form.txtCorreoE.value ? (this.validarCorreo(form.txtCorreoE.value) ? false: true) :false),
                        errorAsunto: (form.slcAsunto.value == 0),
                        errorComentario: !(form.txtComentario.value)
                    });
                }
            /*}else{
                this.setState({
                    Toast:true,
                    alertbody:{
                        header: '¡Upps! Algo salió mal',
                        body: 'No fue posible autentificar tu solicitud, intenta recargando la página..',
                        variante: 'danger'
                    },
                    enviando:false
                });
            }*/
        }).catch((error) =>{
            console.log(error)
            this.setState({
                Toast:true,
                alertbody:{
                    header: '¡Upps! Algo salió mal',
                    body: 'No fue posible autentificar tu solicitud, intenta recargando la página...',
                    variante: 'danger'
                },
                enviando:false
            });
        });
        
        return false;
    }

    closeAlert (){
        this.setState({
            Toast:false
        });
    }
    validarTelefono(telefono){
        return /^[0-9]+$/.test(telefono);
    }
    validarCorreo(correo){
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo);
    }
    render() {
        return (
            <Card className="tituloss">
                <Card.Body>
                    <form id="formContacto" className="container" onSubmit={this.onSubmit}>
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Nombre completo</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblNombre"><i className="bi bi-person-fill"></i></span>
                                        <input className={"form-control" + (this.state.errorNombre ? " is-invalid":"")} onBlur={(e) => this.setState({errorNombre: (!e.target.value)})} id="txtNombre" type="text" placeholder="Nombre completo" aria-label="Nombre completo" onChange={(e) => this.setState({nombre:e.target.value,errorNombre:false})} aria-describedby="msgErrorNombre"/>
                                        <div id="msgErrorNombre" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Municipio</label>
                                    <div className="input-group has-validation row-lin2">
                                        <span className="input-group-text" id="lblMunicipio"><i className="bi bi-geo-alt-fill"></i></span>
                                        <select
                                            className={"form-select" + (this.state.errorMunicipio ? " is-invalid":"")}
                                            aria-label="Municipios"
                                            onClick={(e) => this.setState({errorMunicipio: (e.target.value == 0)})}
                                            onChange={(e) => this.setState({municipio:e.target.value, errorMunicipio:false})}
                                            defaultValue="0"
                                            id="slcMunicipios"
                                            aria-describedby="msgErrorMunicipio"
                                        >
                                            <option disabled value="0">
                                                Selecciona un municipio
                                            </option>
                                            {this.state.municipios.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.id_mpio}
                                                        value={i.id_mpio}
                                                    >
                                                        {i.mpio_desc}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div id="msgErrorMunicipio" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Teléfono</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblTelefono"><i className="bi bi-telephone-fill"></i></span>
                                        <input className={"form-control" + (this.state.error1Telefono || this.state.error2Telefono ? " is-invalid" : "")} onBlur={(e) => this.setState({error1Telefono: (!e.target.value), error2Telefono: (e.target.value ? (this.validarTelefono(e.target.value) ? false : true) :false) })} id="txtTelefono" type="text" placeholder="Teléfono" aria-label="Teléfono" onChange={(e) => this.setState({telefono:e.target.value, error1Telefono:false, error2Telefono:false})} aria-describedby="msgErrorTelefono"/>
                                        {this.state.error1Telefono ?
                                            (
                                                <div id="msgErrorTelefono" className="invalid-feedback">El campo es obligatorio.</div>
                                            ):("")
                                        }
                                        {this.state.error2Telefono ?
                                            (
                                                <div id="msgErrorTelefono" className="invalid-feedback">Debes usar solo números.</div>
                                            ):("")
                                        }
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Correo Electrónico</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblCorreoE"><i className="bi bi-envelope-fill"></i></span>
                                        <input className={"form-control" + (this.state.error1Correo || this.state.error2Correo ? " is-invalid":"")} onBlur={(e) => this.setState({error1Correo : !(e.target.value), error2Correo: (e.target.value ? (this.validarCorreo(e.target.value) ? false : true) : false)})} id="txtCorreoE" type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" onChange={(e) => this.setState({correoE:e.target.value, error1Correo:false, error2Correo:false})} aria-describedby="msgErrorCorreo"/>
                                        {this.state.error1Correo ?
                                            (
                                                <div id="msgErrorCorreo" className="invalid-feedback">El campo es obligatorio.</div>
                                            ):("")
                                        }
                                        {this.state.error2Correo ?
                                            (
                                                <div id="msgErrorCorreo" className="invalid-feedback">Debes ingresar un correo válido.</div>
                                            ):("")
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Asunto</label>
                                    <div className="input-group mb-3 has-validation row-lin2">
                                        <span className="input-group-text mb-3"><i className="bi bi-megaphone-fill"></i></span>
                                        <select
                                            className={"form-select mb-3" + (this.state.errorAsunto ? " is-invalid" : "")}
                                            aria-label="Asunto"
                                            defaultValue="0"
                                            id="slcAsunto"
                                            aria-describedby="msgErrorAsunto"
                                            onClick={(e) => this.setState({errorAsunto : (e.target.value == 0)})}
                                            onChange={(e) => this.setState({asunto:e.target.value, errorAsunto:false})}
                                        >
                                            <option disabled value="0">
                                                Selecciona un asunto
                                            </option>
                                            {this.state.asuntos.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.ctb_ID}
                                                        value={i.ctb_ID}
                                                    >
                                                        {i.ctb_tipo}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div id="msgErrorAsunto" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger" style={{"fontSize":"0.5rem"}}></i> Escriba su comentario</label>
                                    <div className="input-group mb-3 has-validation">
                                        <span className="input-group-text mb-3" id="lblComentario"><i className="bi bi-chat-right-text-fill"></i></span>
                                        <textarea className={"form-control mb-3" + (this.state.errorComentario ? " is-invalid" : "")} onBlur={(e) => this.setState({errorComentario: !(e.target.value)})} id="txtComentario" placeholder="Escriba su comentario" aria-label="Comentario" style={{height:"150px"}} onChange={(e) => this.setState({comentario:e.target.value, errorComentario:false})} aria-describedby="msgErrorComentario"/>
                                        <div id="msgErrorComentario" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} className="mx-auto">                                
                                <div className="g-recaptcha" data-size="invisible" data-sitekey="6Lc-ZsscAAAAACPrrfYwDQJ_0sfav_kQ8O0XSmLz">
                                    
                                </div>
                            </Col>
                        </Row>

                        <Row className="container">
                            <div className="border border-secondary text-center">
                                <p className="text-justify">
                                    En cumplimiento con lo dispuesto por la Ley General de Protección de Datos Personales 
                                    en Posesión de Sujetos Obligados, así como en la Ley de Protección de Datos Personales 
                                    en Posesión de Sujetos Obligados para el Estado de Guanajuato, se hace del conocimiento 
                                    público que todos los datos personales proporcionados a este Instituto de Alfabetización 
                                    y Educación Básica para Adultos del Estado de Guanajuato, serán tratados estrictamente en 
                                    los términos de dichas Leyes, así como de acuerdo a lo señalado en los Avisos de Privacidad 
                                    respectivos que se encuentran en
                                </p>
                                <a href="/inaeba/avisosdeprivacidadINAEBA">
                                        http://www.inaeba.guanajuato.gob.mx/inaeba/avisosprivacidadINAEBA
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={4}>
                            </Col>
                            <Col xs={12} sm={12} md={4} className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    {this.state.enviando ?
                                        (
                                            <React.Fragment>
                                                Enviando...  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </React.Fragment>
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                Enviar comentario <i className="bi bi-check-circle"></i>
                                            </React.Fragment>
                                        )
                                    }
                                </button>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                            </Col>
                        </Row>
                        <Row>
                            <Alert visible={this.state.Toast}
                                body={this.state.alertbody}
                                remoteClose={this.closeAlert} 
                            />
                        </Row>
                    </form>
                </Card.Body>
            </Card>
        );
    }
}
function App(){
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea"));