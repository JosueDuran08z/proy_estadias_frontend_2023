const { useState, useEffect, useRef, forwardRef, useImperativeHandle } = React;
const { Row, Col, Button } = ReactBootstrap;

class Egresados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iniciaProceso:true,
            conoceCURP: false,
            curpValidada: false,
            datosPersonales: null,
            certificados:null,
            mensajes:null,
            edad:true,
            existeCURP:true,
            errorConsulta:false,
            statusValidacion:false,
            servicioSocial:false,
            seguimientoEgresado:false,
            tipoPreRegistro: (new URLSearchParams(window.location.search).get("tipoPreRegistro") != null ? new URLSearchParams(window.location.search).get("tipoPreRegistro") : ""),
            preRegistros:[
                {id: "a370bd77203d4b13df42d0b76b201b96", nombre:"Beneficiarios"},
                {id: "ffbc17ae7cdad5d436c01d15ce12bf64", nombre:"Servicio Social"},
                {id: "f84552838654fabe5f015062ef39c214", nombre:"Egresados"},
                {id: "a8b619634dd797f8a2c5b687e6dbaa17", nombre:"Duplicado de certificado"}
            ]
        };
    }

    iniciarProceso = (resp) =>{
        this.setState({
            iniciaProceso:false,
            conoceCURP:resp
        });
    }

    reiniciarProceso = () =>{
        this.setState({
            iniciaProceso:true,
            conoceCURP:false,
            curpValidada:false,
            seguimientoEgresado:false,
            datosPersonales:null
        });
    }

    validarCURP = (curp) => {
        let tipoPreRegistro=this.state.tipoPreRegistro;
        this.setState({
            statusValidacion:true
        });
        let promCertCOA = new Promise((resolve, reject) =>{
            try {
                axios
                    .get(`/public/certificadocoa/${curp}`)
                    .then(function (response) {
                        let total = response.data.length;
                        console.log('Certificado COA');
                        console.log(total);
                        if(total >=1){
                        /*if(response.data.promedio === "" && response.data.folio === ""){*/
                            resolve(true);
                        }else{
                            resolve(false);
                        }             
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
            } catch (error) {
                
            }
        });

        let promCertPEC = new Promise((resolve, reject) =>{
            try {
                axios
                    .get(`/public/certificadopec/${curp}`)
                    .then(function (response) {
                        if(response.data.dCalFinal === "" && response.data.cRFE === ""){
                            resolve(false);
                        }else{
                            resolve(true);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
            } catch (error) {
                
            }
        });

        let promCertMEVyT = new Promise((resolve, reject) =>{
            try {
                axios
                    .get(`/public/certificadosasa/${curp}`)
                    .then(function (response) {
                        if(response.data.folio === "" && response.data.fconclusion === ""){
                            resolve(false);
                        }else{
                            resolve(true);
                        }
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
            } catch (error) {
                
            }
        });

        let promCertSEG = new Promise((resolve, reject) =>{
            try {
                axios
                    .get(`/public/certificadoseg/${curp}`)
                    .then(function (response) {
                        if(response.data.folio === "" && response.data.nivel === ""){
                            resolve(false);
                        }else{
                            //resolve(true);
                            resolve(response.data[0]);
                        }
                        /*console.log("CERTIFICADO SEG  ENCONTRADO");
                        let dato1 = response.data[0];
                        console.log(dato1);
                        console.log('');
                        let smsCertificado="";
                        let folioCert     = datosCertificado.folio;
                        let nivelCert     = datosCertificado.nivel;
                        let cctCert       = datosCertificado.cct;
                        let cicloCert     = datosCertificado.ciclo;
                        let municipioCert = datosCertificado.municipio;
                        let smsCertificado="Folio de certificado: "+folioCert+ " Nivel "+ nivelCert+" Clave Centro de Trabajo: "+cctCert+" ciclo escolar "+cicloCert+" en el municipio de "+ municipioCert;
                        console.log(smsCertificado);*/

                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
            } catch (error) {
                
            }
        });

        let promServSocial = new Promise((resolve,reject) =>{
            // Consulta si ya tiene un servicio social activo
            try {
                axios
                    .get('/public/servicioverificacurp/' + curp)
                    .then(function (response) {
                        if (response.data.length >= 1 && response.data[0].serv_curp.length === 18) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch(function (error) {
                        reject("Error: " + error);
                    });
            } catch (error) {
                
            }
        });

        let promEgresado = new Promise((resolve,reject) =>{
            try {
                axios
                    .get(`/public/validaformularioegresados/${curp}`)
                    .then(function(response){
                        if(response.data[0] === 1){
                            resolve(true);
                        }else{
                            resolve(false);
                        }
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            } catch (error) {
                resolve("error");
            }
        });

        let promCURP = new Promise((resolve, reject) =>{
            try {
                axios
                    .get(`/public/serviciocurp/${curp}`)
                    .then(function (response) {
                        if(response.data){
                            if (response.data[0] == "0"){
                                resolve("Sin resultados");
                            } else {
                                let datosPersona = response.data.split(',');
                                let sdt = new Date((datosPersona[6].substring(3,5) + "/" + datosPersona[6].substring(0,2) + "/" + datosPersona[6].substring(6)));
                                let difdt = new Date(new Date() - sdt);
                                let mapeoDatos = [{
                                                nombre: datosPersona[1],
                                                apellido1:datosPersona[2],
                                                apellido2:datosPersona[3],
                                                curp:datosPersona[4],
                                                sexo:(datosPersona[5] == "M" ?"Mujer":"Hombre"),
                                                fNacimiento:datosPersona[6],
                                                pais:datosPersona[7],
                                                id_edoOrig:datosPersona[8],
                                                edoOrig:datosPersona[9],
                                                id_mpioOrig:datosPersona[8]+""+datosPersona[10],
                                                edad:(difdt.toISOString().slice(0, 4) - 1970)
                                            }];
            
                                if(tipoPreRegistro === "a370bd77203d4b13df42d0b76b201b96"){ // Registro beneficiarios
                                    if(mapeoDatos[0].edad > 9){
                                        promCertCOA.then(resCOA =>{
                                            console.log('valor');
                                            console.log(resCOA);
                                            if (!resCOA){
                                                promCertPEC.then(resPEC =>{
                                                    if(!resPEC){
                                                        promCertMEVyT.then(resMEVyT =>{
                                                            if (!resMEVyT){
                                                                promCertSEG.then(resSEG =>{
                                                                    if(!resSEG){
                                                                        resolve( mapeoDatos );
                                                                    }else{ 
                                                                        let folio = resSEG.folio;
                                                                        let cct    = resSEG.cct;
                                                                        let municipio = resSEG.municipio;
                                                                        let ciclo     = resSEG.ciclo;
                                                                        let nivel = resSEG.nivel;
                                                                        resolve("SEG"+", Folio:  "+folio+ " con clave centro de trabajo: "+ cct+ " de "+ nivel+" con ciclo escolar "+ ciclo+ " en el municipio de "+ municipio +" Para descargar su certificado puede hacer el tramite en: https://trayectoriaeducativa.seg.guanajuato.gob.mx/index.aspx ");
                                                                        
                                                                    }
                                                                });
                                                            }else{
                                                                resolve("MEVyT, La persona ya cuenta con certificado de SECUNDARIA, para realizar el tramite copie la siguiente ruta en una nueva pestaña del navegador y siga las instrucciones: https://www.inaeba.guanajuato.gob.mx/inaeba/servicios/ce.php. o puede dirijirse al menu TRAMITES Y SERVICIOS, DUPLICADO DE CERTIFICADO");
                                                            }
                                                        });
                                                    }else{
                                                        resolve("PEC , (Programa Especial de Certificación) el cual para descargarlo puede hacerlo en la siguiente ruta: https://www.inaeba.guanajuato.gob.mx/inaeba/servicios/ce.php  o directamente en el menu, TRAMITES Y SERVICIOS opción Duplicado de Certificado");
                                                    }
                                                });
                                            }else{
                                                resolve("COA, para realizar el tramite de duplicado dirijase al menu prinicpal a la opción TRAMITES Y SERVICIOS en el apartado Duplicado de Certificado o ingrese a la siguiente ruta y siga las instrucciones: https://www.inaeba.guanajuato.gob.mx/inaeba/servicios/ce.php");
                                            }
                                        });
                                    }else{
                                        resolve("Edad");                        
                                    }
                                }else if (tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64"){ // Servicio social                    
                                    
                                    promServSocial.then(resServ =>{
                                        if(resServ){
                                            resolve("Servicio activo");
                                        }else{
                                            resolve( mapeoDatos );
                                        }
                                    })
                                    .catch(error =>{
                                        reject("Error: " +error);
                                    });
                                }else if(tipoPreRegistro === "f84552838654fabe5f015062ef39c214"){ // Seguimiento egresados
                                    promEgresado.then(respEgres =>{
                                        if(respEgres){
                                            resolve("Seguimiento activo");
                                        }else{
                                            resolve(mapeoDatos);
                                        }
                                    });
                                    
                                }                                
                            }
                        }else{
                            resolve("Sin resultados");
                        }
                                    
                    })
                    .catch(function (error) {
                        reject("Error: "+ error)
                    });
            } catch (error) {
                
            }
        });

        

        promCURP.then(resCURP =>{

            /*let myarray = resCURP.split(",");
            let folio = myarray[1];

        console.log(o);*/


            if(resCURP.includes("COA") || resCURP.includes("PEC") || resCURP.includes("MEVyT") || resCURP.includes("SEG")){
                this.setState({
                    certificados:resCURP,
                    statusValidacion:false
                });
            }else if (resCURP.includes("Edad")){
                this.setState({
                    edad:false,
                    statusValidacion:false
                });
            }else if(resCURP.includes("Sin resultados")){
                this.setState({
                    existeCURP:false,
                    statusValidacion:false
                });
            }else if(resCURP.includes("Servicio activo")){
                this.setState({
                    servicioSocial:true,
                    statusValidacion:false
                });
            } else if(resCURP.includes("Seguimiento activo")){
                this.setState({
                    seguimientoEgresado:true,
                    statusValidacion:false
                });
            }
            else{
                this.setState({
                    statusValidacion:false,
                    conoceCURP:true,
                    curpValidada: true,
                    datosPersonales : resCURP
                });
            }
        }).
        catch((error) =>{
            this.setState({
                statusValidacion:false,
                errorConsulta:true
            });
        });
    };

    resetEdad =()=>{
        this.setState({edad:true});
    }

    resetExisteCURP =()=>{
        this.setState({existeCURP:true});
    }
    
    resetCertificados =()=>{
        this.setState({certificados:null});
    }

    setEstatusValidacion = (status) =>{
        this.setState({statusValidacion:status});
    }

    resetServicioSocial = () =>{
        this.setState({servicioSocial:false});
    }

    resetSeguimientoEgresado = () =>{
        this.setState({seguimientoEgresado:false});
    }

    resetErrorConsulta = () =>{
        this.setState({errorConsulta:false});
    }

    setErrorConsulta = () =>{
        this.setState({errorConsulta:true,statusValidacion:false});
    }
    closeAlert = ()=>{}

    render() {
        let item=this.state.preRegistros.find(item => item.id === this.state.tipoPreRegistro);
        let nombrePreRegistro = (item != undefined ? item.nombre:"");
        return (
            <React.Fragment>
                {this.state.tipoPreRegistro.length === 32 ?
                    (
                        <div>
                            {this.state.iniciaProceso ? 
                                (
                                    
                                    <CardConoceCURP
                                        nombrePreRegistro={nombrePreRegistro}
                                        tipoPreRegistro ={this.state.tipoPreRegistro}
                                        iniciarProceso={this.iniciarProceso}
                                    />
                                )
                                :
                                (
                                    <React.Fragment>
                                        {!this.state.conoceCURP ? 
                                        (
                                            <CardDesconoceCURP 
                                                nombrePreRegistro={nombrePreRegistro}
                                                tipoPreRegistro={this.state.tipoPreRegistro}
                                                reiniciarProceso={this.reiniciarProceso}
                                                validarCURP={this.validarCURP}
                                                certificados={this.state.certificados}
                                                existeCURP={this.state.existeCURP}
                                                statusValidacion={this.state.statusValidacion}
                                                servicioSocial={this.state.servicioSocial}
                                                errorConsulta={this.state.errorConsulta}
                                                resetEdad={this.resetEdad}
                                                resetExisteCURP={this.resetExisteCURP}
                                                resetCertificados={this.resetCertificados}
                                                resetServicioSocial={this.resetServicioSocial}
                                                setEstatusValidacion={this.setEstatusValidacion}
                                                resetErrorConsulta={this.resetErrorConsulta}
                                                setErrorConsulta={this.setErrorConsulta}
                                            />
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                {!this.state.curpValidada ? 
                                                    (
                                                        <CardValidaCURP 
                                                            nombrePreRegistro={nombrePreRegistro}
                                                            tipoPreRegistro={this.state.tipoPreRegistro}
                                                            validarCURP={this.validarCURP}
                                                            reiniciarProceso={this.reiniciarProceso}
                                                            edad={this.state.edad}
                                                            certificados={this.state.certificados}
                                                            existeCURP={this.state.existeCURP}
                                                            errorConsulta={this.state.errorConsulta}
                                                            statusValidacion={this.state.statusValidacion}
                                                            servicioSocial={this.state.servicioSocial}
                                                            seguimientoEgresado={this.state.seguimientoEgresado}
                                                            resetEdad={this.resetEdad}
                                                            resetExisteCURP={this.resetExisteCURP}
                                                            resetCertificados={this.resetCertificados}
                                                            resetServicioSocial={this.resetServicioSocial}
                                                            resetErrorConsulta={this.resetErrorConsulta}
                                                            resetSeguimientoEgresado={this.resetSeguimientoEgresado}
                                                        />
                                                    )
                                                    :
                                                    (
                                                        <CardFormulario 
                                                            nombrePreRegistro={nombrePreRegistro}
                                                            tipoPreRegistro={this.state.tipoPreRegistro}
                                                            datosPersona={this.state.datosPersonales}
                                                            reiniciarProceso={this.reiniciarProceso}
                                                        />
                                                    )
                                                }
                                            </React.Fragment>
                                        )
                                        }
                                    </React.Fragment>
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <div>
                            <Alert visible={true}
                                body={{
                                    variante:"warning",
                                    header:"¡Upps! ¿Cómo llegaste aquí?",
                                    body:"Parece que no accediste a esta página con la información necesaria, intenta usar los links que están disponibles para poder visualizar correctamente el contenido. Sentimos las molestias causadas",
                                }}
                                remoteClose={this.closeAlert}
                            />
                        </div>
                    )
                }
                <form action="#">
                    <Row>
                        <Col xs={12} className="mx-auto">                                
                            <div className="g-recaptcha" data-size="invisible" data-sitekey="6Lc-ZsscAAAAACPrrfYwDQJ_0sfav_kQ8O0XSmLz">
                                
                            </div>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        );
    }
}

const CardConoceCURP = (props) =>{
    const {Card, Row, Col} = ReactBootstrap;

    return(
        <Card>
            <Card.Header>
                <Card.Title><center>Datos de Contacto</center></Card.Title>
            </Card.Header>
            <Card.Body>
                    <Row>
                        <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                            <div>
                                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="lblFechaNacimiento"><i className="bi bi-calendar3"></i></span>
                                    <input className={"form-control"} id="txtFechaNacimiento" type="text" aria-label="Fecha de nacimiento"  aria-describedby="msgErrorFechaNacimiento" autoComplete="off"/>
                                    <div id="msgErrorFechaNacimiento" className="invalid-feedback">El campo es obligatorio.</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                            <div>
                                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Telefono</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="lblFechaNacimiento"><i className="bi bi-calendar3"></i></span>
                                    <input className={"form-control"} id="txtFechaNacimiento" type="text" aria-label="Fecha de nacimiento"  aria-describedby="msgErrorFechaNacimiento" autoComplete="off"/>
                                    <div id="msgErrorFechaNacimiento" className="invalid-feedback">El campo es obligatorio.</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                            <div>
                                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Correo</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="lblFechaNacimiento"><i className="bi bi-calendar3"></i></span>
                                    <input className={"form-control"} id="txtFechaNacimiento" type="text" aria-label="Fecha de nacimiento"  aria-describedby="msgErrorFechaNacimiento" autoComplete="off"/>
                                    <div id="msgErrorFechaNacimiento" className="invalid-feedback">El campo es obligatorio.</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
    );
}

const CardDesconoceCURP = (props) =>{
    const { Card, Row, Col } = ReactBootstrap;
    const [ estados, setEstados ] = useState([]);
    const [ generos, setGeneros ] = useState([]);
    const [ fNacimiento, setFNacimiento ] = useState("");
    const [ nombre, setNombre ] = useState("");
    const [ apePaterno, setApePaterno ] = useState("");
    const [ apeMaterno, setApeMaterno ] = useState("");
    const [ sexo, setSexo ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ nombreError, setNombreError ] = useState(false);
    const [ apellido1Error, setApellido1Error ] = useState(false);
    const [ apellido2Error, setApellido2Error ] = useState(false);
    const [ fNacimientoError, setFNacimientoError ] = useState(false);
    const [ estadoError, setEstadoError ] = useState(false);
    const [ sexoError, setSexoError ] = useState(false);
    const [ Toast, setToast ] = useState(false);
    const [ alertbody, setAlertBody ] = useState({body:'',variante:'',header:''});

    useEffect(() => {
        getEstados();
        getGeneros();
        $("#txtFechaNacimiento").datepicker({
            dateFormat:"dd/mm/yy",
            onSelect:function(date){
                setFNacimiento(date);
                setFNacimientoError(false);
            },
            changeYear:true
        });
    },[props.nombrePreRegistro]);

    const closeAlert = () => {
        setToast(false);
    };

    const getEstados = () => {
        axios
            .get("/public/estados")
            .then(function (response) {
                setEstados(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getGeneros = () =>{
        setGeneros([{id:"H",nombre:"Hombre"},{id:"M",nombre:"Mujer"}]);
    }

    const consultarCURP = () =>{
        var sdt = new Date((fNacimiento.substring(3,5) + "/" + fNacimiento.substring(0,2) + "/" + fNacimiento.substring(6)));
        var difdt = new Date(new Date() - sdt);

        if(nombre.length > 4 && apePaterno.length > 2 && apeMaterno.length > 2 && sexo.length > 0 && fNacimiento.length === 10 && estado != ""){
            props.setEstatusValidacion(true);
            if (props.tipoPreRegistro === "a370bd77203d4b13df42d0b76b201b96"){
                if(!((difdt.toISOString().slice(0, 4) - 1970) > 9)){
                    props.setEstatusValidacion(false);
                    setToast(true);
                    setAlertBody({
                        header: '¡Upps! Aún no cumples la edad mínima.',
                        body: 'Te informamos que debido a tu edad, no es posible continuar con el proceso de inscripción ya que no tienes los 10 años cumplidos.',
                        variante: 'warning'
                    });
                    return false;
                }
            }

            try {
                axios
                    .post(`/public/serviciocurpseg?txtNombre=${nombre}&txtApPat=${apePaterno}&txtApMat=${apeMaterno}&txtSexo=${sexo}&txtFecha=${fNacimiento}&txtEstado=${estado}`)
                    .then(function(response){
                        if(response.data.dato.length == 18){
                            props.validarCURP(response.data.dato);
                        }else{
                            props.setEstatusValidacion(false);
                            setToast(true);
                            setAlertBody({
                                header: '¡Upps! Algo salió mal',
                                body: 'No se encontró ningún registro relacionado con la información ingresada. Revisa que los datos proporcionados sean correctos e intenta de nuevo o consulta tu CURP en https://www.gob.mx/curp/',
                                variante: 'warning'
                            });
                        }
                    })
                    .catch(function(error){
                        console.log("Error -->"+error);
                        props.setErrorConsulta();
                    });
            } catch (error) {
                
            }
            
        }else{
            setNombreError((nombre.length === 0));
            setApellido1Error((apePaterno.length === 0));
            setApellido2Error((apeMaterno.length === 0));
            setFNacimientoError((fNacimiento.length !== 10));
            setEstadoError((estado.length === 0));
            setSexoError((sexo.length === 0));
        }
    }

    return(
        <Card>
            <Card.Header>
                <Card.Title>Registro de {props.nombrePreRegistro}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row className="text-center">
                    <h6><b>Ingrese sus datos como aparece en su acta de nacimiento.</b></h6>
                </Row>

                {props.certificados != null ?
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <h4 className="alert-heading">¡Upps! No es posible continuar.</h4>
                                <hr/>
                                <p>La CURP ingresada ya cuenta con un certificado {props.certificados} registrado.</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetCertificados()}></button>
                            </div>
                        </Row>
                    )
                    :
                    (
                        <div></div>
                    )
                }

                {props.servicioSocial ?
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <h4 className="alert-heading">¡Upps! Servicio Social encontrado.</h4>
                                <hr/>
                                <p>Los datos de la persona ingresados ya tiene un servicio social registrado.</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetServicioSocial()}></button>
                            </div>
                        </Row>
                    )
                    :
                    (
                        ''
                    )
                }

                {props.errorConsulta ?
                    (
                        <Row className="container">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>¡Upps!</strong> No fue posible comunicarse con el servicio de consulta, sentimos los inconvenientes que esto representa, puede intentarlo nuevamente más tarde.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetErrorConsulta()}></button>
                            </div>
                        </Row>
                    )
                    :
                    ('')
                }

                    <Row>
                        <Col md={12}>
                            <Alert visible={Toast}
                                body={alertbody}
                                remoteClose={closeAlert} 
                            />
                        </Col>
                    </Row>

                    <form id="formConsultarCURP">
                        <div className="container">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={4}>
                                    <div>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre(s)</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblNombre"><i className="bi bi-person-fill"></i></span>
                                            <input className={"form-control" + (nombreError ? " is-invalid" : "")} onBlur={(e) => setNombreError((e.target.value === "" || e.target.value === null))} id="txtNombre" type="text" placeholder="Nombre(s)" aria-label="Nombre(s)" aria-describedby="msgErrorNombre" onChange={(e) => {setNombre(e.target.value); setNombreError(false);}}/>
                                            <div id="msgErrorNombre" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={4}>
                                    <div>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Primer apellido</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblApellido1"><i className="bi bi-person-fill"></i></span>
                                            <input className={"form-control" + (apellido1Error ? " is-invalid" : "")} onBlur={(e) => setApellido1Error((e.target.value === "" || e.target.value === null))} id="txtApellido1" type="text" placeholder="Primer apellido" aria-label="Primer apellido" onChange={(e) => {setApePaterno(e.target.value); setApellido1Error(false);}} aria-describedby="msgErrorApellido1"/>
                                            <div id="msgErrorApellido1" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={4}>
                                    <div>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Segundo apellido</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblApellido2"><i className="bi bi-person-fill"></i></span>
                                            <input className={"form-control" + (apellido2Error ? " is-invalid" : "")} onBlur={(e) => setApellido2Error((e.target.value === "" || e.target.value === null))} id="txtApellido2" type="text" placeholder="Segundo apellido" aria-label="Segundo apellido" onChange={(e) => {setApeMaterno(e.target.value); setApellido2Error(false);}} aria-describedby="msgErrorApellido1"/>
                                            <div id="msgErrorApellido2" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col xs={12} sm={6} md={6} lg={4} xl={4} >
                                    <div>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Fecha de nacimiento</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblFechaNacimiento"><i className="bi bi-calendar3"></i></span>
                                            <input className={"form-control" + (fNacimientoError ? " is-invalid" : "")} onBlur={(e) => setFNacimientoError((e.target.value === "" || e.target.value === null))} id="txtFechaNacimiento" type="text" placeholder="dd/mm/yyyy" aria-label="Fecha de nacimiento" onChange={(e) => {setFNacimiento(e.target.value); setFNacimientoError(false);}} aria-describedby="msgErrorFechaNacimiento" autoComplete="off"/>
                                            <div id="msgErrorFechaNacimiento" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Entidad Federativa</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblEdo"><i className="bi bi-geo-alt-fill"></i></span>
                                        <select
                                            className={"form-select " + (estadoError ? " is-invalid" : "")}
                                            aria-label="Estado"
                                            defaultValue="0"
                                            id="slcEstado"
                                            aria-describedby="msgErrorEstado"
                                            onClick={(e) => setEstadoError((e.target.value === "0" || e.target.value === null))}
                                            onChange={(e) => {setEstado(e.target.value); setEstadoError(false)}}
                                        >
                                            <option disabled value="0">
                                                Selecciona una opción
                                            </option>
                                            {estados.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.edo_curp}
                                                        value={i.edo_curp}
                                                    >
                                                        {i.edo_desc}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div id="msgErrorEstado" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Genero</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblGenero"><i className="bi bi-geo-alt-fill"></i></span>
                                        <select
                                            className={"form-select " + (sexoError ? " is-invalid" : "")}
                                            aria-label="Genero"
                                            defaultValue="0"
                                            id="slcGenero"
                                            aria-describedby="msgErrorSexo"
                                            onClick={(e) => setSexoError((e.target.value === "0" || e.target.value === null))}
                                            onChange={(e) => {setSexo(e.target.value); setSexoError(false);}}
                                        >
                                            <option disabled value="0">
                                                Selecciona una opción
                                            </option>
                                            {generos.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.id}
                                                        value={i.id}
                                                    >
                                                        {i.nombre}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div id="msgErrorSexo" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </form>
                    <Row>
                        <Col xs={10} sm={10} md={4} className="mx-auto d-grid">
                            <button onClick={()=>props.reiniciarProceso(false)} type="button" className="btn btn-info"><i className="bi bi-arrow-left-circle"></i> Regresar</button>
                        </Col>
                        <Col xs={10} sm={10} md={4} className="mx-auto d-grid">
                            <button onClick={()=>consultarCURP()}type="button" className="btn btn-success">
                                {!props.statusValidacion ? 
                                    (
                                        <React.Fragment>
                                            Continuar <i className="bi bi-arrow-right-circle"></i>
                                        </React.Fragment>
                                    )
                                    :
                                    (
                                        <React.Fragment>
                                            <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                                            <span className="text-white">  Consultando...</span>
                                        </React.Fragment>
                                )}                                
                            </button>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
    );
}

const CardValidaCURP = (props) =>{
    const {Card, Row, Col} = ReactBootstrap;
    const [curp, setCURP] = useState(null);
    const [curpValida, setCurpValida] = useState(true);

    const consultarCURP = () =>{        
        if(curp != null && curp.length == "18"){
            props.validarCURP(curp);
        }else{
            setCurpValida(false);
        }
    }

    return(
        <Card>
            <Card.Header>
                <Card.Title>Registro de {props.nombrePreRegistro}</Card.Title>
            </Card.Header>
            <Card.Body>
                {props.existeCURP ? 
                    (
                        <div>
                            {props.certificados != null ?
                                (
                                    <Row className="container">
                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong>¡Upps!</strong> La CURP ingresada ya cuenta con un certificado: {props.certificados}.
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetCertificados()}></button>
                                        </div>
                                    </Row>
                                )
                                :
                                (
                                    <div></div>
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>¡Upps!</strong> No se encontró ningun registro con la CURP especificada.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetExisteCURP()}></button>
                            </div>
                        </Row>
                    )
                }

                {props.errorConsulta ?
                    (
                        <Row className="container">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>¡Upps!</strong> No fue posible comunicarse con el servicio de consulta, sentimos los inconvenientes que esto representa, puede intentarlo nuevamente más tarde.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetErrorConsulta()}></button>
                            </div>
                        </Row>
                    )
                    :
                    ('')
                }

                {curpValida ? 
                    (<div></div>)
                    :
                    (
                        <Row className="container">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>¡Upps!</strong> Debes ingresar una CURP para continuar el proceso.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setCurpValida(true)}></button>
                            </div>
                        </Row>
                    )
                }

                {props.edad ?
                    ('')
                    :
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <h4 className="alert-heading">¡Upps! Aún no cumples la edad mínima.</h4>
                                <hr/>
                                <p>Te informamos que debido a tu edad, no es posible continuar con el proceso de inscripción ya que no tienes los 10 años cumplidos.</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetEdad()}></button>
                            </div>
                        </Row>
                    )
                }

                {props.servicioSocial ?
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <h4 className="alert-heading">¡Upps! Servicio Social encontrado.</h4>
                                <hr/>
                                <p>Los datos de la persona ingresados ya tiene un servicio social registrado.</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetServicioSocial()}></button>
                            </div>
                        </Row>
                    )
                    :
                    (
                        ''
                    )
                }

                {props.seguimientoEgresado ?
                    (
                        <Row className="container">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <h4 className="alert-heading">¡Upps! Seguimiento de egresado encontrado.</h4>
                                <hr/>
                                <p>Los datos de la persona ingresados están relacionados con un proceso iniciado.</p>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>props.resetSeguimientoEgresado()}></button>
                            </div>
                        </Row>
                    )
                    :
                    (
                        ''
                    )
                }
                
                <Row>
                    <div>
                        <label className="form-label">Ingrese su CURP</label>
                        <div className="input-group">
                            <span className="input-group-text" id="lblCURP"><i className="bi bi-person-bounding-box"></i></span>
                            <input onChange={(evt) => {setCURP(evt.target.value)}} type="text" className="form-control" id="txtValidaCURP" name="txtValidaCURP" placeholder="CURP" aria-label="CURP" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col xs={10} sm={10} md={4} className="mx-auto d-grid">
                        <button onClick={() =>props.reiniciarProceso()} type="button" className="btn btn-info"><i className="bi bi-arrow-left-circle"></i> Regresar</button>
                    </Col>
                    <Col xs={10} sm={10} md={4} className="mx-auto d-grid">
                        <button onClick={()=>consultarCURP()} type="button" className="btn btn-success">
                            {!props.statusValidacion ? 
                                (
                                    <React.Fragment>
                                        <i className="bi bi-check-circle"></i> Validar
                                    </React.Fragment>
                                )
                                :
                                (
                                    <React.Fragment>
                                        <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                                        <span className="text-white">  Validando...</span>
                                    </React.Fragment>
                                )}
                            
                        </button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

const CardFormulario = (props) =>{
    const { Card, Row, Col } = ReactBootstrap;
    const [ estados, setEstados ] = useState([]);
    const [ estadosCiviles, setEstadosCiviles ] = useState([]);
    const [ mediosDifusion, setMediosDifusion ] = useState([]);
    const [ nivelesEstudio, setNivelesEstudio ] = useState([]);
    const [ modalidades, setModalidades ] = useState([]);
    const [ Toast, setToast ] = useState(false);
    const [ alertbody, setAlertBody ] = useState({body:'',variante:'',header:''});
    const [ curp ] = useState(props.datosPersona[0].curp);
    const [ nombre ] = useState(props.datosPersona[0].nombre);
    const [ apePaterno ] = useState(props.datosPersona[0].apellido1);
    const [ apeMaterno ] = useState(props.datosPersona[0].apellido2);
    const [ estadoOrigen ] = useState(props.datosPersona[0].id_edoOrig);
    const [ mpioOrigen ] = useState(props.datosPersona[0].id_mpioOrig);
    const [ fNacimiento ] = useState(props.datosPersona[0].fNacimiento);
    const [ sexo ] = useState(props.datosPersona[0].sexo);
    const domicilioRef = useRef();
    const servicioSocialRef = useRef();
    const seguimientoEgresadosRef = useRef();
    const [ estadoCivilError, setEstadoCivilError] = useState(false);
    const [ telefono1Error1, setTelefono1Error1] = useState(false); // : Campo requerido
    const [ telefono1Error2, setTelefono1Error2] = useState(false); // : Sólo números
    const [ telefono2Error1, setTelefono2Error1] = useState(false); // : Solo números
    const [ correo1Error1, setCorreo1Error1] = useState(false); // : Campo requerido
    const [ correo1Error2, setCorreo1Error2] = useState(false); // : Correo inválido
    const [ correo2Error1, setCorreo2Error1] = useState(false); // : Correo inválido
    const [ errorDatosDomicilio, setErrorDatosDomicilio ] = useState(false);
    const [ errorMedioDifusion, setErrorMedioDifusion] = useState(false);
    const [ errorNivel, setErrorNivel] = useState(false);
    const [ errorModalidad, setErrorModalidad] = useState(false);
    const [ escuelas, setEscuelas ] = useState([]);
    const [ escuelasData, setEscuelasData ] = useState([]);
    const [ declaratoriasAceptadas, setDeclaratoriasAceptadas ] = useState(0);
    const [ registrando, setRegistrando ] = useState(false);
    const [ registroCompleto, setRegistroCompleto ] = useState(false);

    useEffect(() => {
        getEstados();
        getEstadosCivil();
        if (props.tipoPreRegistro == "a370bd77203d4b13df42d0b76b201b96"){
            getMediosDifusion();
            getNivelesEstudio();
            getModalidades();
        }
    },[props.nombrePreRegistro]);

    const getEstadosCivil = () => {
        axios
            .get(`/public/estadocivil`)
            .then(function (response) {
                setEstadosCiviles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getMediosDifusion = () => {
        axios
            .get(`/public/medio`)
            .then(function (response) {
                setMediosDifusion(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getModalidades = () => {
        axios
            .get(`/public/modalidad`)
            .then(function (response) {
                setModalidades(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getNivelesEstudio = () => {
        let niveles = new Array();
        niveles.push({id:1,nombre:'Invitar a una persona para que aprenda a leer y escribir'});
        niveles.push({id:2,nombre:'Primaria'});
        if(props.datosPersona[0].edad >= 15){
            niveles.push({id:3,nombre:"Secundaria"});
        }
        setNivelesEstudio(niveles);
    };

    const getEstados = () => {
        axios
            .get("/public/estados")
            .then(function (response) {
                setEstados(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const validarTelefono = (e) =>{
        return /^[0-9]+$/.test(e);
    }

    const validarCorreo = (e) =>{
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e);
    }

    const closeAlert = () => {
        setToast(false);
    };
    
    const guardarRegistro = (e) =>{
        e.preventDefault();
        let form = e.target;
        let camposValidos = true;
        console.log("Guardar registro");
        // Seteo de errores para visualizar en formulario
        setEstadoCivilError((form.slcEstadoCivil ? form.slcEstadoCivil.value === "0" : false));
        setTelefono1Error1((form.txtTel1.value === ""));
        setTelefono1Error2(( !(form.txtTel1.value === "" ) && !validarTelefono(form.txtTel1.value) ));
        setCorreo1Error1((form.txtEmail1.value === ""));
        setCorreo1Error2(( !(form.txtEmail1.value === "") && !validarCorreo(form.txtEmail1.value) ));
        setTelefono2Error1((!(form.txtTel2.value === "" ) && !validarTelefono(form.txtTel2.value)));
        setCorreo2Error1((!(form.txtEmail2.value === "" ) && !validarCorreo(form.txtEmail2.value)));
        domicilioRef.current.setErrores();
        if( props.tipoPreRegistro === "a370bd77203d4b13df42d0b76b201b96" ){
            setErrorMedioDifusion(form.slcMedioDifusion.value === "0");
            setErrorNivel(form.slcNivel.value === "0");
            setErrorModalidad(form.slcModalidad.value === "0");
        } else if( props.tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64" ){
            servicioSocialRef.current.setErrores();
        } else if( props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214" ){
            seguimientoEgresadosRef.current.setErrores();
        }

        // Validación de campos comunes
        if(
            form.txtTel1.value === "" ||
            form.txtEmail1.value === "" ||
            ( !(form.txtTel1.value === "" ) && !validarTelefono(form.txtTel1.value) ) ||
            ( !(form.txtEmail1.value === "") && !validarCorreo(form.txtEmail1.value) ) ||
            ( !(form.txtTel2.value === "" ) && !validarTelefono(form.txtTel2.value) ) || 
            ( !(form.txtEmail2.value === "" ) && !validarCorreo(form.txtEmail2.value) ) ||
            form.slcPais.value === "0" ||
            form.slcEstado.value === "0" ||
            form.slcMunicipio.value === "0" ||
            form.slcLocalidad.value === "0" ||
            form.slcAsentHum.value === "0" ||
            form.txtAsentHum.value === "" ||
            form.slcVialidad.value === "0" ||
            form.txtVialidad.value === "" ||
            form.txtNumExt.value === "" ||
            form.txtCodigoPostal.value === "" ||
            (form.slcPais.value === "2" && 
                (form.slcEstadoUSA ? form.slcEstadoUSA.value === "0" : false) ||
                (form.slcCondadoUSA ? form.slcCondadoUSA.value === "0" : false) ||
                (form.slcCiudadUSA ? form.slcCiudadUSA.value === "0" : false)
            )
        ){
            camposValidos = false;
        }

        // Validación de información respecto al tipo de preRegistro
       switch(props.tipoPreRegistro){
            case "a370bd77203d4b13df42d0b76b201b96": //Beneficiarios
                if(
                    (form.slcEstadoCivil ? form.slcEstadoCivil.value === "0" : false) ||
                    /*Se comentó el 02/12/21 dhernandeza, estos cmpo no aplican en el formulario de mevyt */
                    /*form.slcVialidad1.value === "0" ||
                    form.txtVialidad1.value === "" ||
                    form.slcVialidad2.value === "0" ||
                    form.txtVialidad2.value === "" || */                   
                    form.slcMedioDifusion.value === "0" ||
                    form.slcNivel.value === "0" ||
                    form.slcModalidad === "0"
                ){
                    camposValidos = false;
                }
                break;
            case "ffbc17ae7cdad5d436c01d15ce12bf64": // Servicio Social
                if(
                    ( form.txtNuevaEscuela ? form.txtNuevaEscuela.value === "" : false) ||
                    ( form.txtNombreEscuela ? form.txtNombreEscuela.value === "" : false) ||
                    ( form.txtIdEscuela ? form.txtIdEscuela.value === "" : false) ||
                    ( form.slcNivelAcademico.value === "0") ||
                    ( form.slcActividad.value === "0") ||
                    ( form.txtHoras.value === "0" || form.txtHoras.value === "") ||
                    ( form.slcCuatrimestre && form.slcCuatrimestre.value === "0")
                ){
                    camposValidos = false;
                }
                break;
            case "f84552838654fabe5f015062ef39c214": // Egresados
                if(
                    form.slcServicioSalud.value === "_" ||
                    form.slcLimitacion.value === "_" ||
                    form.slcServicio.value === "_" ||
                    form.slcIdioma.value === "_" ||
                    form.slcEmpleo.value === "_" ||
                    form.slcOficio.value === "_" ||
                    form.slcGradoEstudio.value === "0" ||
                    form.slcMedioDifusion.value === "0" ||
                    form.slcVinculacion.value === "0"
                ){
                    camposValidos = false;
                }
                break;
            case "a8b619634dd797f8a2c5b687e6dbaa17": // Duplicado de certificados
                break;
       }

        if (!camposValidos) 
        {
            setAlertBody({
                header: '¡Upps! Algo salió mal',
                body: 'Al menos uno de los campos no cumple con los requisitos, revisa los campos en rojo para continuar.',
                variante: 'danger'
            });
            setToast(true);
        }else{
            let formValido = true;

            let promCaptcha = new Promise((resolve,reject) =>{
                try {
                    let token = grecaptcha.execute();
                    token.then(function(){
                        setTimeout(function(){
                            resolve(grecaptcha.getResponse());
                        },500);
                        console.log('ESTE ES EL TOKEN')
                        console.log(token);
                    })
                    .catch(function(){
                        reject(false);
                    });    
                } catch (error) {
                    reject(false);
                }
            });

            // Registro de beneficiarios
            if(props.tipoPreRegistro === "a370bd77203d4b13df42d0b76b201b96"){
                // --> Primaria debe tener 10 años cumplidos
                // --> Secundaria debe tener 15 años cumplidos
                if(
                    (form.slcNivel.value === "2" && props.datosPersona[0].edad < 10) || 
                    (form.slcNivel.value === "3" && props.datosPersona[0].edad < 15) ){
                    formValido = false;
                    setAlertBody({
                        header: '¡Upps! No es posible realizar su registro.',
                        body: 'No cumple con el requisito de la edad correspondiente al nivel solicitado, para mayor información favor de comunicarse al número 01-800-7INAEBA (746-2322).  ',
                        variante: 'warning'
                    });
                    setToast(true);
                }

                if(declaratoriasAceptadas !== 4){
                    formValido = false;
                    setAlertBody({
                        header: '¡Upps! Debes aceptar las declaratorias.',
                        body: 'Para poder continuar con tu registro es necesario que aceptes las declaratorias mencionadas anteriormente.',
                        variante: 'warning'
                    });
                    setToast(true);
                }
            }

            if(formValido){
                setRegistrando(true);
                const formData = new FormData();
                formData.append("txtTipoPreRegistro",props.tipoPreRegistro)
                formData.append("txtCURP", curp);
                formData.append("txtNombre", nombre);
                formData.append("txtApellido1", apePaterno);
                formData.append("txtApellido2", apeMaterno);
                formData.append("slcEstadoOrigen", estadoOrigen);
                formData.append("txtMpioOrigen", mpioOrigen);
                formData.append("txtFechaNacimiento", fNacimiento.substring());
                formData.append("txtSexo", sexo.substring(0,1));
                formData.append("slcEstadoCivil", form.slcEstadoCivil ? form.slcEstadoCivil.value : "");
                formData.append("txtTel1", form.txtTel1.value);
                formData.append("txtEmail1", form.txtEmail1.value);
                formData.append("txtTel2", form.txtTel2.value);
                formData.append("txtEmail2", form.txtEmail2.value);
                formData.append("slcPais", form.slcPais.value);
                formData.append("slcEstado", form.slcEstado.value);
                formData.append("slcMunicipio", form.slcMunicipio.value +","+form.slcMunicipio[form.slcMunicipio.selectedIndex].innerText);
                formData.append("slcLocalidad", form.slcLocalidad.value +","+form.slcLocalidad[form.slcLocalidad.selectedIndex].innerText);
                formData.append("slcAsentHum", form.slcAsentHum.value);
                formData.append("txtAsentHum", form.txtAsentHum.value);
                formData.append("slcVialidad", form.slcVialidad.value);
                formData.append("txtVialidad", form.txtVialidad.value);
                formData.append("slcVialidad1", form.slcVialidad1 ? form.slcVialidad1.value : "");
                formData.append("txtVialidad1", form.txtVialidad1 ? form.txtVialidad1.value : "");
                formData.append("slcVialidad2", form.slcVialidad2 ? form.slcVialidad2.value : "");
                formData.append("txtVialidad2", form.txtVialidad2 ? form.txtVialidad2.value : "");
                formData.append("txtNumExt", form.txtNumExt.value);
                formData.append("txtNumInt", form.txtNumInt.value);
                formData.append("txtCodigoPostal", form.txtCodigoPostal.value);
                formData.append("slcEstadoUSA", (form.slcEstadoUSA ? form.slcEstadoUSA.value : "" ));
                formData.append("slcCondadoUSA", (form.slcCondadoUSA ? form.slcCondadoUSA.value : "" ));
                formData.append("slcCiudadUSA", (form.slcCiudadUSA ? form.slcCiudadUSA.value : "" ));

                // Validamos el captcha y obtenemos token para su comprobación
                /*promCaptcha.then((resp) =>{
                    let token = resp;
                    if(token === ""){
                        token = grecaptcha.getResponse();
                    }*/
                    /*if(token !== "" && token !== false)
                    {*/
                        let token="dhernandeza";
                        formData.append("tokenCaptcha", token);
                        if(props.tipoPreRegistro === "a370bd77203d4b13df42d0b76b201b96")
                        { // Beneficiarios
                            formData.append("slcMedioDifusion" , form.slcMedioDifusion.value);
                            formData.append("slcNivel", form.slcNivel.value);
                            formData.append("slcModalidad", form.slcModalidad.value);
                            console.log("Registro de beneficiario");

                            axios
                                ({
                                    method: "post",
                                    url: "/public/guardarformulariomevyt",
                                    data: formData,
                                    headers: { "Content-Type": "multipart/form-data" }
                                })
                                .then((response) =>{
                                    switch(response.data.status){
                                        case "warning":
                                            setAlertBody({
                                                header: '¡Upps! No es posible continuar con el registro',
                                                body: response.data.message,
                                                variante: "warning"
                                            });
                                            break;
                                        case "danger":
                                            setAlertBody({
                                                header: '¡Upps! Ha ocurrido un error',
                                                body: response.data.message,
                                                variante: "danger"
                                            });
                                            break;
                                        case "primary":
                                            setAlertBody({
                                                header: '¡Upps! No es posible continuar con tu registro',
                                                body: response.data.message,
                                                variante: "primary"
                                            });
                                            break;
                                        case "success":
                                            setAlertBody({
                                                header: '¡Felicidades! Tu registro fue realizado exitósamente',
                                                body: response.data.message,
                                                variante: "success"
                                            });
                                            setRegistroCompleto(true);
                                            break;
                                        default:
                                            setAlertBody({
                                                header: '¡Upps! Parace que algo salió mal',
                                                body: 'Sentimos la molestias que esto puede ocasionar, intente nuevamente o póngase en contacto con nosotros al 01-800-7INAEBA (746-2322)',
                                                variante: "warning"
                                            });
                                            break;
                                    }
                                    setToast(true);
                                    setRegistrando(false);
                                })
                                .catch((error)=>{
                                    setAlertBody({
                                        header: '¡Upps! Ha ocurrido un error',
                                        body: 'Es posible que la conexión haya fallado, intente nuevamente.',
                                        variante: "danger"
                                    });
                                    setToast(true);
                                    setRegistrando(false);
                                });

                        }


                        else if(props.tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64")
                        { // Servicio Social
                            formData.append("txtNombreEscuela", (form.txtNombreEscuela ? form.txtNombreEscuela.value:""));
                            formData.append("txtNuevaEscuela", (form.txtNuevaEscuela ? form.txtNuevaEscuela.value:""));
                            formData.append("txtIdEscuela", (form.txtIdEscuela ? form.txtIdEscuela.value:""));
                            formData.append("slcNivelAcademico", form.slcNivelAcademico.value);
                            formData.append("slcActividad", form.slcActividad.value);
                            formData.append("slcCuatrimestre",(form.slcCuatrimestre ? form.slcCuatrimestre.value : ""));
                            formData.append("txtHoras", form.txtHoras.value);
                            axios
                            ({
                                method: "post",
                                url: "/public/guardardatos",
                                data: formData,
                                headers: { "Content-Type": "multipart/form-data" }
                            })
                            .then((response) =>{
                                switch(response.data.status){
                                    case "warning":
                                        setAlertBody({
                                            header: '¡Upps! No es posible continuar con tu registro',
                                            body: response.data.message,
                                            variante: "warning"
                                        });
                                        break;
                                    case "danger":
                                        setAlertBody({
                                            header: '¡Upps! Ha ocurrido un error',
                                            body: response.data.message,
                                            variante: "danger"
                                        });
                                        break;                                    
                                    case "primary":
                                        setAlertBody({
                                            header: '¡Upps! No es posible continuar con tu registro',
                                            body: response.data.message,
                                            variante: "primary"
                                        });
                                        break;
                                    case "success":
                                        setAlertBody({
                                            header: 'Tu solicitud de Servicio Social ha sido recibida',
                                            body: response.data.message,
                                            variante: "success"
                                        });
                                        setRegistroCompleto(true);
                                        break;
                                    default:
                                        setAlertBody({
                                            header: '¡Upps! Parace que algo salió mal',
                                            body: 'Sentimos la molestias que esto puede ocasionar, intente nuevamente o póngase en contacto con nosotros al 01-800-7INAEBA (746-2322)',
                                            variante: "warning"
                                        });
                                        break;
                                }
                                setToast(true);
                                setRegistrando(false);
                            })
                            .catch((error)=>{
                                setAlertBody({
                                    header: '¡Upps! Ha ocurrido un error',
                                    body: 'Es posible que la conexión haya fallado, intente nuevamente.',
                                    variante: "danger"
                                });
                                setToast(true);
                                setRegistrando(false);
                            });
                        }


                        else if(props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214")
                        { // Seguimiento a egresados
                            formData.append("slcServicioSalud",form.slcServicioSalud.value);
                            formData.append("slcLimitacion",form.slcLimitacion.value);
                            formData.append("slcEmpleo",form.slcEmpleo.value);
                            formData.append("slcServicio",form.slcServicio.value);
                            formData.append("slcIdioma",form.slcIdioma.value);
                            formData.append("slcOficio",form.slcOficio.value);
                            formData.append("slcGradoEstudio",form.slcGradoEstudio.value);
                            formData.append("slcMedioDifusion",form.slcMedioDifusion.value);
                            let intereses = Array.from(form.slcVinculacion.selectedOptions, option => option.value);
                            let cadenaIntereses = "";
                            for(var i = 0;i < intereses.length; i++){
                                cadenaIntereses+=intereses[i]+(i === intereses.length-1 ? "":",")
                            }
                            formData.append("slcVinculacion",cadenaIntereses);
                            console.log("Registro de seguimiento a egresados");
                    
                            axios
                            ({
                                method: "post",
                                url: "/public/guardarformularioegresados",
                                data: formData,
                                headers: { "Content-Type": "multipart/form-data" }
                            })
                            .then((response) =>{
                                switch(response.data.status){
                                    case "warning":
                                        setAlertBody({
                                            header: '¡Upps! No es posible continuar con tu registro',
                                            body: response.data.message,
                                            variante: "warning"
                                        });
                                        break;
                                    case "danger":
                                        setAlertBody({
                                            header: '¡Upps! Ha ocurrido un error',
                                            body: response.data.message,
                                            variante: "danger"
                                        });
                                        break;                                    
                                    case "primary":
                                        setAlertBody({
                                            header: '¡Upps! No es posible continuar con tu registro',
                                            body: response.data.message,
                                            variante: "primary"
                                        });
                                        break;
                                    case "success":
                                        setAlertBody({
                                            header: 'Hemos recibido tu solicitud',
                                            body: response.data.message,
                                            variante: "success"
                                        });
                                        setRegistroCompleto(true);
                                        break;
                                    default:
                                        setAlertBody({
                                            header: '¡Upps! Parace que algo salió mal',
                                            body: 'Sentimos la molestias que esto puede ocasionar, intente nuevamente o póngase en contacto con nosotros al 01-800-7INAEBA (746-2322)',
                                            variante: "warning"
                                        });
                                        break;
                                }
                                setToast(true);
                                setRegistrando(false);
                            })
                            .catch((error)=>{
                                console.log(error);
                                console.log('***************');
                                console.log(error);
                                console.log('***************');
                                setAlertBody({
                                    header: '¡Upps! Ha ocurrido un error',
                                    body: 'Es posible que la conexión haya fallado, intente nuevamente.',
                                    variante: "danger"
                                });
                                setToast(true);
                                setRegistrando(false);
                            });
                        
                        }
                        /*else if(token==="")
                        {
                            console.log("Vacío");
                            guardarRegistro(e);
                        }else{
                            setToast(true);
                            setRegistrando(false);
                            setAlertBody({
                                header: '¡Upps! No fue posible autentificar tu solicitud',
                                body: 'Ha ocurrido un error al verificar que no eres un robot, intenta recargando la página.',
                                variante: "warning"
                            });
                        }
                   //}*/
                /*}).catch((error) =>{
                    setToast(true);
                    setRegistrando(false);
                    setAlertBody({
                        header: '¡Upps! No fue posible autentificar tu solicitud',
                        body: 'Ha ocurrido un error al verificar que no eres un robot, intenta recargando la página.',
                        variante: "warning"
                    });
                });*/
            }else{
                console.log("form inválido");
            }
        }
        return false;
    }

    const setLocalidadComplemento =(municipio,localidad) =>{
        if (localidad != 0){
            getEscuelas(municipio,localidad);
        }
    }

    const getEscuelas = (idMunicipio,idLocalidad) =>{
        if(idMunicipio > 0 && idLocalidad > 0){
            axios
                .get('public/escuelas/' + idMunicipio + '/id_loc/' + idLocalidad )
                .then(function (response) {
                    const result = response.data;
                    if (result.length > 0) {
                        const resultados = result.map(function (el) {
                        return el.esc_nombre + '-' + el.esc_cct;
                        });
                        const resultados1 = result.map(function (el) {
                        return { name: el.esc_nombre + '-' + el.esc_cct, id: el.id_esc };
                        });
                        setEscuelas(resultados);
                        setEscuelasData(resultados1);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else{
            console.log("No se seleccionó municipio o localidad");
        }
    }

    const validarDeclaratorias = (e) =>{
        let auxDeclaratorias = declaratoriasAceptadas;
        if (e.target.checked){
            setDeclaratoriasAceptadas(auxDeclaratorias+1);
        }else{
            setDeclaratoriasAceptadas(auxDeclaratorias-1);
        }
    }

    return(
        <Card>
            <Card.Header>
                <Card.Title>Registro de {props.nombrePreRegistro}</Card.Title>
            </Card.Header>
            <Card.Body>
                <form id="formPreRegistro" action='/' onSubmit={(e)=>guardarRegistro(e)} encType="multipart/form-data">
                    <div className="container">
                        <div>
                            <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Datos generales</span></h3>
                        </div>
                        <Row>
                            <div>
                                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> CURP</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="lblCURP"><i className="bi bi-person-bounding-box"></i></span>
                                    <input className="form-control" id="txtCURP" type="text" disabled placeholder="CURP" aria-label="CURP" value={props.datosPersona[0].curp}/>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre(s)</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblNombre"><i className="bi bi-person-fill"></i></span>
                                        <input className="form-control" id="txtNombre" type="text" disabled placeholder="Nombre(s)" aria-label="Nombre(s)" value={props.datosPersona[0].nombre}/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Primer apellido</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblApellido1"><i className="bi bi-person-fill"></i></span>
                                        <input className="form-control" id="txtApellido1" type="text" disabled placeholder="Primer apellido" aria-label="Primer apellido" value={props.datosPersona[0].apellido1}/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Segundo apellido</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblApellido2"><i className="bi bi-person-fill"></i></span>
                                        <input className="form-control" id="txtApellido2" type="text" disabled placeholder="Segundo apellido" aria-label="Segundo apellido" value={props.datosPersona[0].apellido2}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Estado de origen</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblEdo"><i className="bi bi-geo-alt-fill"></i></span>
                                        <select
                                            className="form-select"
                                            aria-label="Estado"
                                            value={props.datosPersona[0].id_edoOrig}
                                            id="slcEstadoOrigen"
                                            disabled
                                        >
                                            <option disabled value="0">
                                                Selecciona una opción
                                            </option>
                                            {estados.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.id_edo}
                                                        value={i.id_edo}
                                                    >
                                                        {i.edo_desc}
                                                    </option>
                                                );                                                    
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Fecha de nacimiento</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblFechaNacimiento"><i className="bi bi-calendar3"></i></span>
                                        <input className="form-control" id="txtFechaNacimiento" type="text" disabled placeholder="Fecha de nacimiento" aria-label="Fecha de nacimiento" value={props.datosPersona[0].fNacimiento}/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Sexo</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblSexo"><i className="bi bi-gender-ambiguous"></i></span>
                                        <input className="form-control" id="txtSexo" type="text" disabled placeholder="Sexo" aria-label="Sexo" value={props.datosPersona[0].sexo}/>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col xs={12} className="visually-hidden">
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Municipio de origen</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="lblMpioOrigen"><i className="bi bi-geo-fill"></i></span>
                                        <input className="form-control" id="txtMpioOrigen" type="text" disabled placeholder="Municipio de origen" aria-label="Municipio de origen" value={props.datosPersona[0].id_mpioOrig}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {props.tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64" || props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214" ? 
                            ('')
                            :
                            (
                                <Row>
                                    <Col xs={12}>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Estado Civil</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblEstadoCivil"><i className="bi bi-gender-ambiguous"></i></span>
                                        <select
                                            className={"form-select" + (estadoCivilError ? " is-invalid" : "")}
                                            aria-label="Género"
                                            defaultValue="0"
                                            id="slcEstadoCivil"
                                            aria-describedby="msgErrorEstadoCivil"
                                            onClick = {(e) => setEstadoCivilError((e.target.value === "0" || e.target.value == null))}
                                            onChange={(e) => {setEstadoCivilError(false);}}
                                            required
                                        >
                                            <option disabled value="0">
                                                Selecciona una opción
                                            </option>
                                            {estadosCiviles.map((i) => {
                                                return (
                                                    <option
                                                        key={"Option" + i.eclv_id}
                                                        value={i.eclv_id}
                                                    >
                                                        {i.eclv_nombre}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div id="msgErrorEstadoCivil" className="invalid-feedback">El campo es obligatorio.</div>
                                    </div>
                                    </Col>
                                </Row>
                            )
                        }
                        

                        <Row>
                            <Col xs={12} sm={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Teléfono 1</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblTel1"><i className="bi bi-telephone-fill"></i></span>
                                        <input className={"form-control" + (telefono1Error1 || telefono1Error2 ? " is-invalid" : "")} onBlur={(e) => {if (e.target.value != "" && e.target.value != null){setTelefono1Error2(!validarTelefono(e.target.value));}else {setTelefono1Error1(true);}}} id="txtTel1" type="text" placeholder="Teléfono 1" aria-label="Teléfono 1" onChange={(e) => {setTelefono1Error1(false); setTelefono1Error2(false);}} aria-describedby="msgErrorTelefono1"/>
                                        <div id="msgErrorTelefono1" className="invalid-feedback">
                                            {telefono1Error1 ? 
                                                'El campo es obligatorio.'
                                                :
                                                'Debe utilizar solo números.'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Correo 1</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblEmail1"><i className="bi bi-envelope-fill"></i></span>
                                        <input className={"form-control" + (correo1Error1 || correo1Error2 ? " is-invalid" : "")} onBlur={(e) => {if(e.target.value != "" && e.target.value != null){setCorreo1Error2(!validarCorreo(e.target.value))}else{setCorreo1Error1(true);}}} id="txtEmail1" type="email" placeholder="Correo 1" aria-label="Correo 1" onChange={(e) => {setCorreo1Error1(false); setCorreo1Error2(false);}} aria-describedby="msgErrorCorreo1"/>
                                        {correo1Error1 ?
                                            <div id="msgErrorCorreo1" className="invalid-feedback">El campo es obligatorio.</div> : ''
                                        }
                                        {correo1Error2 ?
                                            <div id="msgErrorCorreo1" className="invalid-feedback">El correo ingresado no es válido.</div> : ''}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={6}>
                                <div>
                                    <label className="form-label">Teléfono 2</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblTel2"><i className="bi bi-telephone-fill"></i></span>
                                        <input className={"form-control" + (telefono2Error1 ? " is-invalid" : "")} onBlur={(e) => {if(e.target.value != "" && e.target.value != null){setTelefono2Error1(!validarTelefono(e.target.value))}}} id="txtTel2" type="text" placeholder="Teléfono 2" aria-label="Teléfono 2" onChange={(e) => {setTelefono2Error1(false);}} aria-describedby="msgErrorTelfono2"/>
                                        <div id="msgErrorTelfono2" className="invalid-feedback">Debe utilizar solo números.</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div>
                                    <label className="form-label">Correo 2</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblEmail2"><i className="bi bi-envelope-fill"></i></span>
                                        <input className={"form-control" + (correo2Error1 ? " is-invalid" : "")} onBlur={(e) => {if(e.target.value != "" && e.target.value != null){setCorreo2Error1(!validarCorreo(e.target.value))}}} id="txtEmail2" type="email" placeholder="Correo 2" aria-label="Correo 2" onChange={(e) => {setCorreo2Error1(false);}} aria-describedby="msgErrorCorreo2"/>
                                        <div id="msgErrorCorreo2" className="invalid-feedback">El correo ingresado no es válido.</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <div className="container">
                        <DatosDomiciliarios 
                            ref={domicilioRef}
                            tipoPreRegistro={props.tipoPreRegistro}
                            setLocalidad = {setLocalidadComplemento}
                            setErrorDatosDomicilio = {setErrorDatosDomicilio}
                        />
                    </div>
                    <br/>
                    {props.tipoPreRegistro == "a370bd77203d4b13df42d0b76b201b96" ? /* Beneficiarios */
                        (
                            <div className="container">
                                <div>
                                    <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Servicio solicitado</span></h3>
                                </div>

                                <Row>
                                    <Col xs={12} md={6}>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Por cuál medio se enteró?</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblMedioDifusion"><i className="bi bi-megaphone-fill"></i></span>
                                            <select
                                                className={"form-select" + (errorMedioDifusion ? " is-invalid" : "")}
                                                aria-label="Medio de difusión"
                                                defaultValue="0"
                                                id="slcMedioDifusion"
                                                aria-describedby="msgErrorMedioDifusion"
                                                onChange={(e) => {setErrorMedioDifusion(false);}}
                                                onClick={(e) => setErrorMedioDifusion((e.target.value === "0" || e.target.value == null))}
                                                required
                                            >
                                                <option disabled value="0">
                                                    Selecciona una opción
                                                </option>
                                                {mediosDifusion.map((i) => {
                                                    return (
                                                        <option
                                                            key={"Option" + i.id_medio}
                                                            value={i.id_medio}
                                                        >
                                                            {i.medio}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            <div id="msgErrorMedioDifusion" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nivel a cursar</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblNivel"><i className="bi bi-spellcheck"></i></span>
                                            <select
                                                className={"form-select" + (errorNivel ? " is-invalid" : "")}
                                                aria-label="Nivel a cursar"
                                                defaultValue="0"
                                                id="slcNivel"
                                                aria-describedby="msgErrorNivel"
                                                onChange={(e) => {setErrorNivel(false);}}
                                                onClick={(e) => setErrorNivel((e.target.value === "0" || e.target.value === null))}
                                                required
                                            >
                                                <option disabled value="0">
                                                    Selecciona una opción
                                                </option>
                                                {nivelesEstudio.map((i) => {
                                                    return (
                                                        <option
                                                            key={"Option" + i.id}
                                                            value={i.id}
                                                        >
                                                            {i.nombre}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            <div id="msgErrorNivel" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12}>
                                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Modalidad</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="lblModalidad"><i className="bi bi-megaphone-fill"></i></span>
                                            <select
                                                className={"form-select" + (errorModalidad ? " is-invalid" : "")}
                                                aria-label="Modalidad"
                                                defaultValue="0"
                                                id="slcModalidad"
                                                aria-describedby="msgErrorModalidad"
                                                onChange={(e) => {setErrorModalidad(false);}}
                                                onClick={(e) => setErrorModalidad((e.target.value === "0" || e.target.value == null))}
                                                required
                                            >
                                                <option disabled value="0">
                                                    Selecciona una opción
                                                </option>
                                                {modalidades.map((i) => {
                                                    return (
                                                        <option
                                                            key={"Option" + i.mod_id}
                                                            value={i.mod_id}
                                                        >
                                                            {i.mod_nombre}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            <div id="msgErrorModalidad" className="invalid-feedback">El campo es obligatorio.</div>
                                        </div>
                                    </Col>
                                </Row>

                                <div>
                                    <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Declaratorias</span></h3>
                                </div>

                                <Row>
                                    <Col>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="chkDeclaratoria1" onChange={(e)=>validarDeclaratorias(e)}/>
                                        <label className="form-check-label text-justify" htmlFor="chkDeclaratoria1">
                                            1. 'Declaración de NO haber obtenido certificado de estudios del nivel que pretende estudiar en el INAEBA. 
                                            Con fundamento en el Artículo 3 de la Constitución Política de los Estados Unidos Mexicanos, y el Artículo 
                                            247, fracción I del Código Penal Federal, bajo protesta de decir verdad, manifiesto que no recibo ninguno 
                                            de los apoyos señalados en las reglas de Operación, así como no haber obtenido certificado/certificación 
                                            de estudios de nivel primaria y/o secundaria, según sea el caso, en alguna institución de educación.'
                                        </label>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="chkDeclaratoria2" onChange={(e)=>validarDeclaratorias(e)}/>
                                        <label className="form-check-label text-justify" htmlFor="chkDeclaratoria2">
                                            2. 'Autorizo el uso de la información registrada en este documento o sistema, con la finalidad de generar y 
                                            respaldar datos relevantes para la toma de decisiones en los procesos de planificación, control escolar, 
                                            evaluación educativa o de investigación.'
                                        </label>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="chkDeclaratoria3" onChange={(e)=>validarDeclaratorias(e)}/>
                                        <label className="form-check-label text-justify" htmlFor="chkDeclaratoria3">
                                            3. 'Manifiesto bajo protesta de decir verdad que la información y los datos aquí asentados, así como 
                                            los documentos que proporcionó por este medio, son verdaderos y, que durante mi estancia en los Estados 
                                            Unidos de América curse (primaria y/o secundaria o equivalente), o bien que curse en la República 
                                            Mexicana algún grado de educación primaria o secundaria, sin embargo no cuento con documentación 
                                            alguna que lo acredite, reconozco que en caso de faltar a la verdad, estaré incurriendo en el delito 
                                            de falsedad de declaración ante una autoridad pública distinta de la judicial, y podría ser acreedor(a) 
                                            a una pena de cuatro a ocho años de prisión y de cien a trescientos días multa (art. 247, fracción I 
                                            del Código Penal Federal), y demás sanciones aplicables.'
                                        </label>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="chkDeclaratoria4" onChange={(e)=>validarDeclaratorias(e)}/>
                                        <label className="form-check-label text-justify" htmlFor="chkDeclaratoria4">
                                            4. Acepto realizar los exámenes de manera presencial.
                                        </label>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        ) 
                        : 
                        ('')
                    }

                    {props.tipoPreRegistro == "ffbc17ae7cdad5d436c01d15ce12bf64" ? /* SERVICIO SOCIAL */
                        (
                            <ServicioSocial 
                                ref={servicioSocialRef}
                                escuelas={escuelas}
                                escuelasData={escuelasData}
                            />
                        )
                        :
                        ('')
                    }

                    {props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214" ? /* SEGUIMIENTO A EGRESADOS */
                        (
                            <SeguimientoEgresados
                                ref={seguimientoEgresadosRef}
                            />
                        )
                        :
                        ('')
                    }

                    <div className="container">
                        <Row>
                            <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                                <button onClick={() =>props.reiniciarProceso()} type="button" className="btn btn-info"><i className="bi bi-arrow-left-circle"></i> Regresar</button>
                            </Col>
                            <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                                {registroCompleto ?
                                    ('')
                                    :
                                    (
                                    <button type="submit" disabled={props.tipoPreRegistro == "a370bd77203d4b13df42d0b76b201b96" ? (declaratoriasAceptadas === 4 ? false:true) : false} className="btn btn-success">
                                        {!registrando ? 
                                        (
                                            <React.Fragment>
                                                <i className="bi bi-check-circle"></i> Registrar
                                            </React.Fragment>
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                                                <span className="text-white">  Registrando...</span>
                                            </React.Fragment>
                                        )}
                                    </button>
                                )
                                }
                                
                            </Col>
                        </Row>
                    </div>
                </form>

                {props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214" ?
                    (
                        <Row className="text-center container">
                            <Col xs={12}>
                                <span className="badge text-dark text-break">
                                    <h4>Si requieres ayuda comunícate al correo:<br/> atencionaegresados@inaeba.edu.mx</h4>
                                </span>
                            </Col>
                        </Row>
                    )
                    :
                    ('')
                }

                <Alert visible={Toast}
                    body={alertbody}
                    remoteClose={closeAlert} 
                />
            </Card.Body>
        </Card>
    );
}

function App() {
    return <Egresados />;
}
ReactDOM.render(<App />, document.getElementById("reactAreaFormEgresados"));