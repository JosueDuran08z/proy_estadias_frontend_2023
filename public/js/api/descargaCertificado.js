const { useState,useEffect,useRef } = React;
const { Card, Row, Col, Button } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curp:'',
            nombre:'',
            nivel:'',
            idNivel:'',
            estatusValidacion:false,
            existeCurp:true,
            tipoPreRegistro: new URLSearchParams(window.location.search).get("tipoPreRegistro"),
            iniciaProceso:false,
            encuestaContestada:false,
            solicitudPendiente:false,
            descargaDocumentos:false,
            Toast:false,
            alertBody:"",
            presentarSolicitud:false,
            showModal:false,
            modalTitle:'',
            modalBody:'',
            encuesta:[],
            datosSolicitud:[],
            datosDocumentos:[],
            datosPersona:[],
            faltantes:'',
            datosCargaDocumentos:{}
        };
    }

    componentDidMount() {
        //this.getNiveles();
    }

    setEstatusValidacion = (estatus) =>{
        this.setState({estatusValidacion:estatus})
    }

    buscarCertificadoDuplicado = (curp,nivel) =>{
<<<<<<< HEAD
        let promCURP = new Promise((resolve, reject) =>{
            axios
            .get(`/public/serviciocurp/${curp}`)
            .then(function (response) {
                if(!response.data.includes("0,0,0")){
                    let datos = response.data.split(',');
                    let sdt = new Date((datos[6].substring(3,5) + "/" + datos[6].substring(0,2) + "/" + datos[6].substring(6)));
                    let difdt = new Date(new Date() - sdt);
                    
                    let mapeoDatos = [{
                            nombre: datos[1],
                            apellido1:datos[2],
                            apellido2:datos[3],
                            curp:datos[4],
                            sexo:datos[5],
                            fNacimiento:datos[6],
                            pais:datos[7],
                            id_edoOrig:datos[8],
                            edoOrig:datos[9],
                            id_mpioOrig:datos[8]+""+datos[10],
                            edad:(difdt.toISOString().slice(0, 4) - 1970)
                        }];
                    resolve(mapeoDatos);
                }else{
                    resolve("Sin resultados");
                }
            })
            .catch(function (error) {
                console.log(error);
                resolve("error");
            });
=======
        let context = this;
        let promCURP = new Promise((resolve, reject) =>{
            axios
                .get(`/public/serviciocurp/${curp}`)
                .then(function (response) {
                    if(!response.data.includes("0,0,0")){
                        let datos = response.data.split(',');
                        let sdt = new Date((datos[6].substring(3,5) + "/" + datos[6].substring(0,2) + "/" + datos[6].substring(6)));
                        let difdt = new Date(new Date() - sdt);
                        
                        let mapeoDatos = [{
                                nombre: datos[1],
                                apellido1:datos[2],
                                apellido2:datos[3],
                                curp:datos[4],
                                sexo:datos[5],
                                fNacimiento:datos[6],
                                pais:datos[7],
                                id_edoOrig:datos[8],
                                edoOrig:datos[9],
                                id_mpioOrig:datos[8]+""+datos[10],
                                edad:(difdt.toISOString().slice(0, 4) - 1970)
                            }];
                        resolve(mapeoDatos);
                    }else{
                        resolve("Sin resultados");
                    }
                })
                .catch(function (error) {
                    resolve("error");
                });
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
        });

        let promCert = new Promise((resolve, reject) =>{
            axios
            .post(`/public/descargacertificado?txtCURP=${curp}&slcNivel=${nivel}`)
            .then(function(response){
                if(response.data.status === "success" || response.data.status === "primary"){
                    resolve(response.data);
                }
            })
            .catch(function(error){
<<<<<<< HEAD
                console.log(error);
=======
                context.setState({
                    Toast:true,
                    estatusValidacion:false,
                    alertBody:"Ocurrió un error al procesar tu solicitud, intenta nuevamente por favor"
                });
                    
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                reject("error");
            });
        });

        promCURP.then((resp) =>{
            if(resp !== "error" && resp !== "Sin resultados"){
                this.setState({
                    nombre: resp[0].nombre + " " + resp[0].apellido1 + " " + resp[0].apellido2,
                    datosPersona:resp,
                    curp:curp,
                    idNivel:nivel
                });

                promCert.then((resp2)=>{
<<<<<<< HEAD
                    if(resp2.status === "success"){
                        if(resp2.id_proceso === 1){ // Descargar documentos
=======
                    console.log(resp2);
                    console.log(resp2.id_proceso);
                        if(resp2.id_proceso === 0){ // Mensaje personalizado
                            this.setState({
                                Toast:true,
                                estatusValidacion:false,
                                alertBody:resp2.messagge
                            });
                        } else if(resp2.id_proceso === 1){ // Descargar documentos
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                            this.setState({
                                iniciaProceso:true,
                                descargaDocumentos:true,
                                encuestaContestada:true,
                                datosDocumentos:[{
                                    nombre: resp[0].nombre + " " + resp[0].apellido1 + " " + resp[0].apellido2,
                                    curp: curp,
                                    nivel:nivel,
                                    mc_id:resp2.mc_id,
                                    mc_modelo:resp2.mc_modelo,
                                    mc_rutaarchivo:resp2.mc_rutaarchivo
                                }]
                            });
                        }else if(resp2.id_proceso === 2){ //Contestar encuesta
                            //this.setState({encuesta:response});
                            this.setState({
                                iniciaProceso:true,
                                encuestaContestada:false,
                                solicitudPendiente:false,
                                documentacionPendiente:false
                            });
                        }else if(resp2.id_proceso === 3){ // Sin registro
                            this.setState({
                                alertBody:"",
                                iniciaProceso:false,
                                Toast:true,
                                estatusValidacion:false
                            });
<<<<<<< HEAD
                        }
                    }else if(resp2.status === "primary"){
                        if(resp2.id_proceso === 0){
                            this.setState({
                                Toast:true,
                                estatusValidacion:false,
                                alertBody:resp2.messagge
                            })
                        }
                    }
                })
                .catch((error)=>{
=======
                        }else if(resp2.id_proceso === 4){ // Solicitud incompleta cargar documentos
                            this.setState({
                                iniciaProceso:true,
                                descargaDocumentos:false,
                                encuestaContestada:true,
                                documentacionPendiente:true,
                                solicitudPendiente:true,
                                estatusValidacion:false,
                                datosCargaDocumentos:{
                                    curp:curp,
                                    idServicio:nivel,
                                    idSolicitud:resp2.id_Solicitud,
                                    foto: resp2.foto,
                                    ine_anverso: resp2.ine_anverso,
                                    ine_reverso: resp2.ine_reverso,
                                    cert_anverso: resp2.cert_anverso,
                                    cert_reverso: resp2.cert_reverso
                                },
                                datosSolicitud:[{
                                    nombre: resp[0].nombre + " " + resp[0].apellido1 + " " + resp[0].apellido2,
                                    folio: resp2.folio_solicitud,
                                    fechaSolicitud: resp2.fecha_solicitud,
                                    servicio: resp2.nivel,
                                    CURP: curp,
                                    estatus:resp2.id_estatus,
                                    seguimientos: resp2.seguimiento
                                }]
                            });
                        }else if(resp2.id_proceso === 5){ // Muestra estatus
                            console.log("Estatus");
                            this.setState({
                                iniciaProceso:true,
                                encuestaContestada:true,
                                solicitudPendiente:true,
                                documentacionPendiente:false,
                                estatusValidacion:false,
                                datosSolicitud:[{
                                    nombre: resp[0].nombre + " " + resp[0].apellido1 + " " + resp[0].apellido2,
                                    folio: resp2.folio_solicitud,
                                    fechaSolicitud: resp2.fecha_solicitud,
                                    servicio: resp2.nivel,
                                    CURP: curp,
                                    estatus:resp2.id_estatus,
                                    seguimientos: resp2.seguimiento
                                }]
                            });
                        }
                })
                .catch((error)=>{
                    console.log(error);
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                });

                
                
            }else{
                this.setState({
                    existeCurp:false,
                    estatusValidacion:false
                });
            }
        });
    }

    reiniciarProceso = () =>{
        this.setState({
            iniciaProceso:false,
            encuestaContestada:false,
            solicitudPendiente:false,
            estatusValidacion:false
        });
    }

    closeAlert = () =>{
        this.setState({Toast:false});
    }

<<<<<<< HEAD
    hacerSolicitud = (nivel,id) =>{
            
=======
    hacerSolicitud = (nivel,id) =>{            
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
        this.setState({
            Toast:false,
            presentarSolicitud:true,
            iniciaProceso:true,
            encuestaContestada:true,
            nivel:nivel,
            idNivel:id            
        });
    }

    closeModal = () =>{
        this.setState({
            showModal:false,
            estatusValidacion:false
        });
    }

    aceptModal = () =>{
        this.setState({showModal:false});
        setTimeout(function(){
            window.location="https://react-bootstrap.github.io/components/modal/";
        },800)
    }

    guardarSolicitud = (form) =>{
        const formData = new FormData();
        formData.append("txtCURP", this.state.datosPersona[0].curp);
        formData.append("txtNombre", this.state.datosPersona[0].nombre);
        formData.append("txtApellido1", this.state.datosPersona[0].apellido1);
        formData.append("txtApellido2", this.state.datosPersona[0].apellido2);
        formData.append("slcEstadoOrigen", this.state.datosPersona[0].id_edoOrig);
        formData.append("txtMpioOrigen", this.state.datosPersona[0].id_mpioOrig);
        formData.append("txtFechaNacimiento", this.state.datosPersona[0].fNacimiento);
        formData.append("txtSexo", this.state.datosPersona[0].sexo);
        formData.append("txtTel1", form.txtTel1.value);
        formData.append("txtEmail1", form.txtEmail1.value);
        formData.append("slcPais", form.slcPais.value);
        formData.append("slcEstado", form.slcEstado.value);
        formData.append("slcMunicipio", form.slcMunicipio.value +","+form.slcMunicipio[form.slcMunicipio.selectedIndex].innerText);
        formData.append("slcLocalidad", form.slcLocalidad.value +","+form.slcLocalidad[form.slcLocalidad.selectedIndex].innerText);
        formData.append("slcAsentHum", form.slcAsentHum.value);
        formData.append("txtAsentHum", form.txtAsentHum.value);
        formData.append("slcVialidad", form.slcVialidad.value);
        formData.append("txtVialidad", form.txtVialidad.value);
        formData.append("txtNumExt", form.txtNumExt.value);
        formData.append("txtNumInt", form.txtNumInt.value);
        formData.append("txtCodigoPostal", form.txtCodigoPostal.value);
        
        /*
        axios({
            method: "post",
            url: "/public/guardarsolicitudcertificado",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                contex.alertbody.header = "Éxito ";
                contex.alertbody.body = "Se realizo la cuenta correctamente..";
                contex.alertbody.variante = "success";
                contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid:false });
            })
            .catch(function (response) {
                contex.setState({ visualButton: true, visualButton2: false, Toast: true });
                contex.alertbody.header = "Lo sentimos algo salió mal";
                contex.alertbody.body = "No se encontraron resultados o el servicio no está disponible, inténtalo más tarde..";
                contex.alertbody.variante = "danger";
            });
            */
    }

    closeCURP = () =>{
        this.setState({existeCurp:true});
    }
    render() {
        return (
            <React.Fragment>
            {!this.state.iniciaProceso ?
                    (
                        <CardIniciaProceso
                            estatusValidacion={this.state.estatusValidacion}
                            existeCurp={this.state.existeCurp}
                            setEstatusValidacion={this.setEstatusValidacion}
                            buscarCertificadoDuplicado={this.buscarCertificadoDuplicado}
                            Toast={this.state.Toast}
                            alertBody={this.state.alertBody}
                            closeAlert={this.closeAlert}
                            hacerSolicitud={this.hacerSolicitud}
                            showModal={this.state.showModal}
                            modalTitle={this.state.modalTitle}
                            modalBody={this.state.modalBody}
                            closeCURP={this.closeCURP}
                            closeModal={this.closeModal}
                            aceptModal={this.aceptModal}
                        />
                    )
                    :
                    (
                        <React.Fragment>
                            {!this.state.encuestaContestada ? 
                                (
                                    <CardEncuesta
                                        reiniciarProceso={this.reiniciarProceso}
                                        encuesta={this.state.encuesta}
                                    />
                                ):
                                ('')
                            }

<<<<<<< HEAD
                            {this.state.solicitudPendiente ?
                                (
                                    <CardEstatusSolicitud
                                        reiniciarProceso={this.reiniciarProceso}
                                        datosSolicitud={this.state.datosSolicitud}
                                    />
                                )
                                :
                                ('')

                            }

=======
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                            {this.state.descargaDocumentos ?
                                (
                                    <CardDocumentacion
                                        estatusValidacion={this.state.estatusValidacion}
                                        setEstatusValidacion={this.setEstatusValidacion}
                                        reiniciarProceso={this.reiniciarProceso}
                                        datosDocumentos={this.state.datosDocumentos}
                                    />
                                )
                                :
                                ('')
                            }

                            {this.state.presentarSolicitud ?
                                (
                                    <CardSolicitud
                                        reiniciarProceso={this.reiniciarProceso}
                                        nombre={this.state.nombre}
                                        nivel={this.state.nivel}
                                        id={this.state.idNivel}
                                        guardarSolicitud={this.guardarSolicitud}
                                    />
                                )
                                :
                                ('')
                            }

<<<<<<< HEAD
                            {this.state.documentacionPendiente ?
                                (
                                    <CargaDocumentos
=======
                            {this.state.solicitudPendiente ?
                                (
                                    <CardEstatusSolicitud
                                        reiniciarProceso={this.reiniciarProceso}
                                        datosSolicitud={this.state.datosSolicitud}
                                    />
                                )
                                :
                                ('')

                            }

                            {this.state.documentacionPendiente ?
                                (
                                    <CargaDocumentos
                                        estatusValidacion={this.state.estatusValidacion}
                                        setEstatusValidacion={this.setEstatusValidacion}
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                        reiniciarProceso={this.reiniciarProceso}
                                        buscarCertificadoDuplicado={this.buscarCertificadoDuplicado}
                                        curp={this.state.curp}
                                        idNivel={this.state.idNivel}
<<<<<<< HEAD
                                        faltantes={this.state.faltantes}
=======
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                        datosCargaDocumentos={this.state.datosCargaDocumentos}
                                    />
                                )
                                :
                                ''
                            }
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        );
    }
}

const CardIniciaProceso = (props) =>{
    const { Card, Row, Col, Alert, Modal } = ReactBootstrap;
    const [ niveles, setNiveles] = useState([]);
    const [ CURP, setCURP ] = useState("");
    const [ nivel, setNivel ] = useState("");
    const [ curpValida, setCurpValida] = useState(true);
    const [ curpError, setCurpError ] = useState(false);
    const [ nivelError, setNivelError ] = useState(false);

    useEffect(() => {
        getNiveles();
    },[props.nombrePreRegistro]);

    const getNiveles = () => {
        setNiveles([{id:2,nombre:"Certificado de primaria"},{id:3,nombre:"Certificado de secundaria"}]);
    }

    const enviarDatos = () =>{
        props.setEstatusValidacion(true);

        if (CURP.length !== 18){
            setCurpError(true);
            setCurpValida(CURP.length === 0 ? true:false);
            props.setEstatusValidacion(false);
        }

        if(nivel === "0" || nivel === ""){
            setNivelError(true);
            props.setEstatusValidacion(false);
        }
        
        if (CURP.length === 18 && nivel !== "0" && nivel !== "") {
            setCurpValida(true);
            setCurpError(false);
            setNivelError(false);

            setTimeout(function(){
                props.buscarCertificadoDuplicado(CURP,nivel);
            },500);
        }
    }

    const hacerSolicitud =() =>{
        let nivel = $("#slcNivel option:selected").text();
        let idNivel = $("#slcNivel").val();
        props.hacerSolicitud(nivel,idNivel);
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <Card.Title>Consulta de Duplicado de Certificado</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <div>
                            <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Ingrese su CURP</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblCURP"><i className="bi bi-person-bounding-box"></i></span>
                                <input onChange={(evt) => {setCURP(evt.target.value); setCurpError(false);}} type="text" className={"form-control" + (curpError ? " is-invalid":"")} id="txtValidaCURP" name="txtValidaCURP" placeholder="CURP" aria-label="CURP" aria-describedby="msgErrorCURP" maxLength="18"/>
                                <div id="msgErrorCURP" className="invalid-feedback">{curpValida ? 'El campo es obligatorio.':'La CURP ingresada no es válida'}</div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nivel cursado</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="lblNivel"><i className="bi bi-spellcheck"></i></span>
                                    <select
                                        className={"form-select" + (nivelError ? " is-invalid" : "")}
                                        aria-label="Nivel"
                                        defaultValue="0"
                                        id="slcNivel"
                                        aria-describedby="msgErrorNivel"
                                        onChange={(e) => {setNivel(e.target.value);setNivelError(false);}}
                                    >
                                        <option disabled value="0">
                                            Selecciona una opción
                                        </option>
                                        {niveles.map((i) => {
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
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} sm={10} md={6} className="mx-auto d-grid">
                            <button onClick={()=>enviarDatos()} type="button" className="btn btn-info">
                                {!props.estatusValidacion ? 
                                    (
                                        <React.Fragment>
                                            <i className="bi bi-search"></i> Buscar
                                        </React.Fragment>
                                    )
                                    :
                                    (
                                        <React.Fragment>
                                            <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                                            <span className="text-white">  Buscando...</span>
                                        </React.Fragment>
<<<<<<< HEAD
                                    )}
                                
=======
                                    )
                                }
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                            </button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <Alert variant={"warning"} show={props.Toast}  onClose={() => props.closeAlert()} dismissible>
                                <Alert.Heading className="text-center">
<<<<<<< HEAD
                                    {props.alertBody === "" ?
                                        (
                                            props.alertBody
=======
                                    {props.alertBody !== "" ?
                                        (
                                            <React.Fragment>
                                                ¡Upps! Algo ha salido mal
                                            </React.Fragment>
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                Sin resultados
                                            </React.Fragment>
                                        )
                                    }
                                    <hr/>
                                </Alert.Heading>
                                <p className="text-justify">
<<<<<<< HEAD
                                    {props.alertBody === "" ?
=======
                                    {props.alertBody !== "" ?
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                        (
                                            props.alertBody
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                Sí eres alumno egresado, o tuviste un cambio de CURP, por favor verifica que 
                                                la CURP o los datos generales que ingresaste para acceder sean los correctos, 
                                                ya que no te hemos encontrado en la base del sistema de control escolar. Si ya 
                                                revisaste y tus datos son correctos, da <b style={{textDecorationLine: "underline", cursor:"pointer"}}><a onClick={()=>hacerSolicitud()}>click aquí</a></b>
                                            </React.Fragment>
                                        )
                                    }
                                </p>
                            </Alert>
                        </Col>
                    </Row>

                    {!props.existeCurp ? 
                        <Row>
                            <Col xs={12}>
                                <Alert variant={"warning"} show={true}  onClose={() => props.closeCURP()} dismissible>
                                    <Alert.Heading className="text-center">
                                        Sin resultados
                                        <hr/>
                                    </Alert.Heading>
                                    <p className="text-justify">
                                        Asegúrate de que la CURP ingresada sea correcta, ya que no hemos encontrado ningún registro
                                        relacionado con: {CURP}
                                    </p>
                                </Alert>
                            </Col>
                        </Row>
                        :
                        ''
                    }
                </Card.Body>
            </Card>

            <Modal show={props.showModal} onHide={props.closeModal} backdrop="static" centered keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-justify">
                        {props.modalBody}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="width-100">
                        <Row>
                            <Col xs={10} sm={10} md={6} lg={6} xl={6} className="mx-auto d-grid">
                                <Button variant="danger" onClick={props.closeModal}>
                                    En otro momento &nbsp;&nbsp;<i className="bi bi-x-circle"></i>
                                </Button>
                            </Col>
                            <Col xs={10} sm={10} md={6} lg={6} xl={6} className="mx-auto d-grid">
                                <Button variant="primary" onClick={props.aceptModal}>
                                    De acuerdo&nbsp;&nbsp;<i className="bi bi-box-arrow-up-right"></i>
                                </Button>
                            </Col>
                        </Row>
                    </div>                    
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

const CardEstatusSolicitud = (props) =>{
    const { Row,Col,Alert,Table,ProgressBar } = ReactBootstrap;
    const [ etapa, setEtapa ] = useState(1);
<<<<<<< HEAD
=======
    const [ estatus, setEstatus ] = useState("");
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf

    useEffect(() => {
        extraerDatos();
    },[props.nombrePreRegistro]);

    const extraerDatos = () =>{
        switch(props.datosSolicitud[0].estatus){
<<<<<<< HEAD
            case "Registrada":
                setEtapa(1);
                break;
            case "Validada":
=======
            case 0:
                setEstatus("Pre-Registro");
                setEtapa(1);
                break;
            case 1:
                setEstatus("Registrada");
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                setEtapa(2);
                break;
            case "En firma":
                setEtapa(3);
                break;
            case "Concluida":
                setEtapa(4);
                break;
            default:
                setEtapa(1);
                break;
        }
    }
    return (
            <div>
                <Alert variant={"primary"}>
                    <Alert.Heading className="text-center">
                        Hola <b>{props.datosSolicitud[0].nombre}</b>, se encontraron solicitudes previas de certificado
                    </Alert.Heading>
                    <hr/>
                    <Row>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead className="bg-light text-center">
                                    <tr>
                                        <th>Folio</th>
                                        <th>Fecha de solicitud</th>
                                        <th>Certificado solicitado</th>
                                        <th>CURP</th>
                                        <th>Estatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.datosSolicitud[0].folio}</td>
                                        <td>{props.datosSolicitud[0].fechaSolicitud}</td>
                                        <td>{props.datosSolicitud[0].servicio}</td>
                                        <td>{props.datosSolicitud[0].CURP}</td>
                                        <td>{props.datosSolicitud[0].estatus}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                
                    <hr/>
                    <Row>
                        <Col xs={12} className="text-center">
                            Su solicitud se encuentra:
                        </Col>
                        <Col xs={12} >
<<<<<<< HEAD
                            <Row className="text-center">
                                <Col xs={3}>
                                    <span className="textoEtapaCertificado text-success">Registrada</span>
                                    <br/>
                                    <i className="bi bi-check-circle-fill text-success etapaCertificado"></i>
                                </Col>
                                <Col xs={3} className={etapa >= 2 ? "text-success":""}>
                                    <span className="textoEtapaCertificado">Validada</span>
                                    <br/>
                                    <i className={"bi etapaCertificado " + (etapa >= 2 ? "bi-check-circle-fill":"bi-circle")}></i>
                                </Col>
                                <Col xs={3} className={etapa >= 3 ? "text-success":""}>
                                    <span className="textoEtapaCertificado">En firma</span>
                                    
                                    <br/>
                                    <i className={"bi etapaCertificado " + (etapa >= 3 ? "bi-check-circle-fill":"bi-circle")}></i>
                                </Col>
                                <Col xs={3} className={etapa >= 4 ? "text-success":""}>
                                    <span className="textoEtapaCertificado">Concluida</span>                                            
                                    <br/>
                                    <i className={"bi etapaCertificado " + (etapa == 4 ? "bi-check-circle-fill":"bi-circle")}></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <ProgressBar animated striped variant={etapa >= 1 ? "success":"light"} now={etapa >= 1 ? 100 : 0} key={1} />
                                </Col>
                                <Col xs={3}>
                                    <ProgressBar animated striped variant={etapa >= 2 ? "success":"light"} now={etapa >= 2 ? 100 : 0} key={2} />
                                </Col>
                                <Col xs={3}>
                                    <ProgressBar animated striped variant={etapa >= 3 ? "success":"light"} now={etapa >= 3 ? 100 : 0} key={3} />
                                </Col>
                                <Col xs={3}>
                                    <ProgressBar animated striped variant={etapa == 4 ? "success":"light"} now={etapa == 4 ? 100 : 0} key={4} />
                                </Col>
                            </Row>
=======
                            {!props.datosSolicitud[0].estatus.includes("Rechazada") ?
                                (
                                    <React.Fragment>                                        
                                        <Row className="text-center">
                                            <Col xs={3}>
                                                <span className="textoEtapaCertificado text-success">Registrada</span>
                                                <br/>
                                                <i className="bi bi-check-circle-fill text-success etapaCertificado"></i>
                                            </Col>
                                            <Col xs={3} className={etapa >= 2 ? "text-success":""}>
                                                <span className="textoEtapaCertificado">Validada</span>
                                                <br/>
                                                <i className={"bi etapaCertificado " + (etapa >= 2 ? "bi-check-circle-fill":"bi-circle")}></i>
                                            </Col>
                                            <Col xs={3} className={etapa >= 3 ? "text-success":""}>
                                                <span className="textoEtapaCertificado">En firma</span>
                                                
                                                <br/>
                                                <i className={"bi etapaCertificado " + (etapa >= 3 ? "bi-check-circle-fill":"bi-circle")}></i>
                                            </Col>
                                            <Col xs={3} className={etapa >= 4 ? "text-success":""}>
                                                <span className="textoEtapaCertificado">Concluida</span>                                            
                                                <br/>
                                                <i className={"bi etapaCertificado " + (etapa == 4 ? "bi-check-circle-fill":"bi-circle")}></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={3}>
                                                <ProgressBar animated striped variant={etapa >= 1 ? "success":"light"} now={etapa >= 1 ? 100 : 0} key={1} />
                                            </Col>
                                            <Col xs={3}>
                                                <ProgressBar animated striped variant={etapa >= 2 ? "success":"light"} now={etapa >= 2 ? 100 : 0} key={2} />
                                            </Col>
                                            <Col xs={3}>
                                                <ProgressBar animated striped variant={etapa >= 3 ? "success":"light"} now={etapa >= 3 ? 100 : 0} key={3} />
                                            </Col>
                                            <Col xs={3}>
                                                <ProgressBar animated striped variant={etapa == 4 ? "success":"light"} now={etapa == 4 ? 100 : 0} key={4} />
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )
                                :
                                (
                                    <React.Fragment>
                                        <Row className="text-center">
                                            <Col xs={12}>
                                                <span className="textoEtapaCertificado text-primary">Rechazada</span>
                                                <br/>
                                                <i className="bi bi-x-circle-fill text-primary etapaCertificado"></i>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <ProgressBar animated striped variant={"primary"} now={100} key={1} />
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )
                            }
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={12}>
                            <div className="text-center">
                                <h4>Seguimiento a solicitudes duplicadas de certificado</h4>
                            </div>
                            <div>
                                <Table striped bordered hover responsive>
                                    <thead className="bg-light text-center">
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Fecha de seguimiento
                                            </th>
                                            <th>
                                                Descripción
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
<<<<<<< HEAD
                                        {props.datosSolicitud[0].seguimientos.map((item) =>{
                                            return(
                                                <tr key={item.no}>
                                                    <td>{item.no}</td>
                                                    <td>{item.fecha}</td>
                                                    <td>{item.descripcion}</td>
=======
                                        {props.datosSolicitud[0].seguimientos.map((item,i) =>{
                                            return(
                                                <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{item.seg_fecha}</td>
                                                    <td>{item.seg_seguimiento}</td>
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Alert>

                <Row>
                    <Col xs={5} className="mx-auto">
                        <button onClick={()=>props.reiniciarProceso()} style={{"width" : "100%"}} type="button" className="btn btn-info">
                            <i className="bi bi-arrow-left-circle"></i> Regresar
                        </button>
                    </Col>
                </Row>
            </div>
    );
}

const CardDocumentacion = (props) =>{
    const { Row, Col, Button } = ReactBootstrap;
    const nombre = props.datosDocumentos[0].nombre;
    const curp = props.datosDocumentos[0].curp;
    const nivel = props.datosDocumentos[0].nivel;
    const mcId = props.datosDocumentos[0].mc_id;
    const modelo = props.datosDocumentos[0].mc_modelo;
    const rutaCertificado = props.datosDocumentos[0].mc_rutaarchivo;
    const [ active, setActive ] = useState(1);

    const guardarDescarga = () =>{
        axios
            .post(`/public/guardardescargacertificado/?txtCURP=${curp}&slcNivel=${nivel}&txtRuta=${rutaCertificado}`)
            .then(function(response){})
            .catch(function(error){});
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>Descarga de documentos</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <h5 className="text-center"><b>{nombre}</b> ya puedes descargar tu documentación</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" style={{textDecorationLine: "none"}} id="list-certificado-list" data-bs-toggle="list" href="#list-certificado" role="tab" aria-controls="list-certificado" onClick={() => setActive(1)}>
                                <label className="d-flex justify-content-between align-items-start" style={{fontSize: "1rem"}}>
                                    Certificado electrónico
                                    <i className={"bi bi-caret-right" + (active === 1 ? "-fill":"")}></i>
                                </label>
                            </a>
                            <a className="list-group-item list-group-item-action" style={{textDecorationLine: "none"}} id="list-carta-list" data-bs-toggle="list" href="#list-carta" role="tab" aria-controls="list-carta" onClick={() => setActive(2)}>
                                <label className="d-flex justify-content-between align-items-start" style={{fontSize: "1rem"}}>
                                    Carta del gobernador
                                    <i className={"bi bi-caret-right" + (active === 2 ? "-fill":"")}></i>
                                </label>
                            </a>
                            <a className="list-group-item list-group-item-action" style={{textDecorationLine: "none"}} id="list-diploma-list" data-bs-toggle="list" href="#list-diploma" role="tab" aria-controls="list-diploma" onClick={() => setActive(3)}>
                                <label className="d-flex justify-content-between align-items-start" style={{fontSize: "1rem"}}>
                                    Diploma
                                    <i className={"bi bi-caret-right" + (active === 3 ? "-fill":"")}></i>
                                </label>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7}>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-certificado" role="tabpanel" aria-labelledby="list-certificado-list">
                                {rutaCertificado !== "" ?
                                    (
                                        <ListaDocumentos
                                            urlImagen="/img/CertificadoElectronico.png"
                                            ruta={rutaCertificado}
                                            archivo="certificado"
                                            guardarDescarga={guardarDescarga}
                                        />
                                    )
                                    :
                                    ('')    
                                }
                            </div>
                            <div className="tab-pane fade" id="list-carta" role="tabpanel" aria-labelledby="list-carta-list">
                                <ListaDocumentos
                                    urlImagen="/img/CartaGobernador.png"
                                    ruta={"/documentos/carta_impulso.pdf"}
                                    archivo="carta"
                                />
                            </div>
                            <div className="tab-pane fade" id="list-diploma" role="tabpanel" aria-labelledby="list-diploma-list">
                                <ListaDocumentos
                                    urlImagen="/img/Diploma.png"
                                    ruta={""}
                                    archivo="diploma"
                                    mcid={mcId}
                                    modelo={modelo}
                                    curp={curp}
                                    nivel={nivel}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={5} lg={4} xl={4}>
                        <Button variant="info" onClick={props.reiniciarProceso} style={{width:"100%"}} id="btnReiniciar">
                            <i className="bi bi-arrow-left-circle"></i> Regresar
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

const ListaDocumentos = (props) =>{    
    useEffect(() => {
        events();
    },[props.archivo]);
    
    const events = () =>{
        $(".certificado").click(function(){
            props.guardarDescarga();
        });
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} className="text-center">
                    <h6>Descarga de documentos</h6>
                </Col>
            </Row>
            <Row className="text-center">
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={props.urlImagen} style={{ height:"70px",borderRadius:"0.5rem" }}/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    {props.archivo !== "diploma" ?
                        (
                            <a className={props.archivo} href={props.ruta} target="_blank">
                                <i className="bi bi-cloud-download-fill" id={"downloadDocumento_"+props.archivo} style={{fontSize: "4rem",cursor:"pointer"}}></i>
                            </a>
                        )
                        :
                        (
                            <React.Fragment>
                                {props.modelo !== "COA" ? 
                                    (
                                        <a href={`http://www.inaeba.guanajuato.gob.mx/inaeba/servicios/ce_diploma.php?curp=${props.curp}&servicio=${props.nivel}`} target="_blank">
                                            <i className="bi bi-cloud-download-fill" id={"downloadDocumento_"+props.archivo} style={{fontSize: "4rem",cursor:"pointer"}}></i>
                                        </a>
                                    )
                                    :
                                    (
                                        <form action="http://www.inaeba.guanajuato.gob.mx/sac/imprime_diploma_sitio.cfm" method="post" target="_blank">
                                            <input type="hidden" name="imprime" value="1"/>
                                            <input type="hidden" name="miuserid" value="1"/>
                                            <input type="hidden" name="imp" value="1"/>
                                            <input name="mc_id" type="hidden" value={props.mcid}/>
                                            <button className="btn btn-link" type="submit">
                                                <i className="bi bi-cloud-download-fill" id={"downloadDocumento_"+props.archivo} style={{fontSize: "4rem",cursor:"pointer"}}></i>
                                            </button>
                                        </form>
                                    )
                                }
<<<<<<< HEAD
                                
                            </React.Fragment>
                            
=======
                            </React.Fragment>
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                        )
                    }
                    
                </Col>
            </Row>
        </React.Fragment>
    );
}

const CardSolicitud = (props) =>{
    const { Card, Row, Col, Button, Form, Badge } = ReactBootstrap;
    const nombre = props.nombre;
    const nivel = props.nivel;
    const domicilioRef = useRef();
    const [ errorDatosDomicilio, setErrorDatosDomicilio ] = useState(false);
    const [ tel1, setTel1 ] = useState("");
    const [ correo1, setCorreo1 ] = useState("");
    const [ telefono1Error1, setTelefono1Error1] = useState(false); // : Campo requerido
    const [ telefono1Error2, setTelefono1Error2] = useState(false); // : Sólo números
    const [ correo1Error1, setCorreo1Error1] = useState(false); // : Campo requerido
    const [ correo1Error2, setCorreo1Error2] = useState(false); // : Correo inválido
    const [ Toast, setToast ] = useState(false);
    const [ alertbody, setAlertBody ] = useState({body:'',variante:'',header:''});

    const validarTelefono = (e) =>{
        return /^[0-9]+$/.test(e);
    }

    const validarCorreo = (e) =>{
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e);
    }

    const closeAlert = ()=>{
        setToast(false);
    }

    const guardarSolicitud = (e) =>{
        e.preventDefault();
        let form = e.target;

        // Set errores
        setTelefono1Error1((form.txtTel1.value === ""));
        setTelefono1Error2((form.txtTel1.value !== "" && !validarTelefono(form.txtTel1.value)));
        setCorreo1Error1((form.txtEmail1.value === ""));
        setCorreo1Error2((form.txtEmail1.value !== "" && !validarCorreo(form.txtEmail1.value)));
        domicilioRef.current.setErrores();

        if(
            (form.txtTel1.value === "") ||
            (form.txtTel1.value !== "" && !validarTelefono(form.txtTel1.value)) ||
            (form.txtEmail1.value === "") ||
            (form.txtEmail1.value !== "" && !validarCorreo(form.txtEmail1.value)) ||
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
            setAlertBody({
                header: '¡Upps! Algo salió mal',
                body: 'Al menos uno de los campos no cumple con los requisitos, revisa los campos en rojo para continuar.',
                variante: 'danger'
            });
            setToast(true);
        }else{
            props.guardarSolicitud(form);
        }

        return false;
    }
    return (
        <Card>
            <Card.Header>
                <Card.Title>Solicitud Duplicado de {nivel}</Card.Title>
            </Card.Header>
            <Card.Body>
                <h5 className="text-center">Solicitante: <u className="text-uppercase">{nombre}</u></h5>
                <hr/>

                <div className="container">
                    <Form onSubmit={guardarSolicitud}>
                        <Row>
                            <Col>
                                <h4><Badge bg="secondary">Ingrese los siguientes datos:</Badge></h4>
                            </Col>
                        </Row>

                        <Row>
                        <div>
                            <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Datos de Contacto</span></h3>
                        </div>
                        </Row>

                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Teléfono 1</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblTel1"><i className="bi bi-telephone-fill"></i></span>
                                        <input className={"form-control" + (telefono1Error1 || telefono1Error2 ? " is-invalid" : "")} onBlur={(e) => {if (e.target.value != "" && e.target.value != null){setTelefono1Error2(!validarTelefono(e.target.value));}else {setTelefono1Error1(true);}}} id="txtTel1" type="text" placeholder="Teléfono 1" aria-label="Teléfono 1" onChange={(e) => {setTel1(e.target.value); setTelefono1Error1(false); setTelefono1Error2(false);}} aria-describedby="msgErrorTelefono1"/>
                                        {telefono1Error1 ?
                                            <div id="msgErrorTelefono1" className="invalid-feedback">El campo es obligatorio.</div> : ''
                                        }
                                        {telefono1Error2 ?
                                            <div id="msgErrorTelefono1" className="invalid-feedback">Debe utilizar solo números.</div> : ''}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div>
                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Correo 1</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="lblEmail1"><i className="bi bi-envelope-fill"></i></span>
                                        <input className={"form-control" + (correo1Error1 || correo1Error2 ? " is-invalid" : "")} onBlur={(e) => {if(e.target.value != "" && e.target.value != null){setCorreo1Error2(!validarCorreo(e.target.value))}else{setCorreo1Error1(true);}}} id="txtEmail1" type="email" placeholder="Correo 1" aria-label="Correo 1" onChange={(e) => {setCorreo1(e.target.value); setCorreo1Error1(false); setCorreo1Error2(false);}} aria-describedby="msgErrorCorreo1"/>
                                        {correo1Error1 ?
                                            <div id="msgErrorCorreo1" className="invalid-feedback">El campo es obligatorio.</div> : ''
                                        }
                                        {correo1Error2 ?
                                            <div id="msgErrorCorreo1" className="invalid-feedback">El correo ingresado no es válido.</div> : ''}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <DatosDomiciliarios 
                            ref={domicilioRef}
                            tipoPreRegistro={"a8b619634dd797f8a2c5b687e6dbaa17"}
                            setLocalidad={()=>console.log("")}
                            setErrorDatosDomicilio = {setErrorDatosDomicilio}
                            /*domicilioAlmacenado={[{
                                id_edo:8,
                                id_mpio:8003,
                                id_local:17,
                                id_tAseHum:3,
                                nombreAsent:'Cto. Corralejo El mayorazgo Residencial',
                                id_tVial:5,
                                nombreVialidad:'La laja',
                                noExt:103,
                                noInterior:'',
                                cp:37547,
                                id_tVial1:5,
                                nombreVialiadad1:'Corralejo',
                                id_tVial2:5,
                                nombreVialiadad2:'La calera'
                            }]}*/
                        />

                        <Row>
                            <Col>
                                <div className="fade alert alert-primary show" role="alert">
                                    <b>Nota</b>: Su teléfono y correo son muy importantes, por medio de ellos nos comunicaremos.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                <Button variant="info" style={{ width:"100%" }} onClick={() => props.reiniciarProceso()}>
                                    <i className="bi bi-arrow-left-circle"></i>
                                    &nbsp;Regresar
                                </Button>
                            </Col>
                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                <Button variant="success" style={{ width:"100%" }} type="submit">
                                    Guardar&nbsp;
                                    <i className="bi bi-check-circle"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Alert visible={Toast}
                        body={alertbody}
                        remoteClose={closeAlert} 
                    /> 

                </div>
            </Card.Body>
        </Card>
    );
}

const CargaDocumentos = (props) =>{
    const { Card, Row, Col, Alert, Form } = ReactBootstrap;

    const guardarDocumentos = (e) =>{
        e.preventDefault();
        let form = e.target;
<<<<<<< HEAD

=======
        props.setEstatusValidacion(true);
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
        const formData = new FormData();
        formData.append( "txtCURP", props.datosCargaDocumentos.curp );
        formData.append( "txtIdServicio", props.datosCargaDocumentos.idServicio );
        formData.append( "txtIdSolicitud", props.datosCargaDocumentos.idSolicitud );
        formData.append( "txtCorreo", props.datosCargaDocumentos.correo );
        formData.append( "txtFoto", (form.filFoto ? (form.filFoto.files[0] !== undefined ? form.filFoto.files[0] : "" ) : "" ) );
        formData.append( "txtIne1", (form.filINEAnverso ? (form.filINEAnverso.files[0] !== undefined ? form.filINEAnverso.files[0] : "" ) : "" ) );
        formData.append( "txtIne2", (form.filINEReverso ? (form.filINEReverso.files[0] !== undefined ? form.filINEReverso.files[0] : "" ) : "" ) );
        formData.append( "txtCert1", (form.filCertAnverso ? (form.filCertAnverso.files[0] !== undefined ? form.filCertAnverso.files[0] : "" ) : "" ) );
        formData.append( "txtCert2", (form.filCertReverso ? (form.filCertReverso.files[0] !== undefined ? form.filCertReverso.files[0] : "" ) : "" ) );

        // Se guardan los archivos cargados
<<<<<<< HEAD
        /*
        axios
            ({
                method:"post",
                url:"/public/subirdocumentos",
=======
        axios
            ({
                method:"post",
                url:"/public/upload",
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                data:formData,
                headers:{"Content-Type":"multipart/form-data"}
            })
            .then(function(response){
<<<<<<< HEAD

            })
            .catch(function(error){});
            */

        // Se vuelve a consultar el servicio principal para avanzar en el proceso
        //props.buscarCertificadoDuplicado(props.curp,props.idNivel);
=======
                if(response.data.status === "success"){
                    props.buscarCertificadoDuplicado(props.curp,props.idNivel);
                    let toastLive = document.getElementById('liveToast3');
                    var toast = new bootstrap.Toast(toastLive)
                    toast.show();
                }else if(response.data.status === "warning"){
                    if(response.data.messagge.includes('formato')){
                        let toastLive = document.getElementById('liveToast');
                        var toast = new bootstrap.Toast(toastLive)
                        toast.show();
                    } else {
                        let toastLive2 = document.getElementById('liveToast2');
                        var toast = new bootstrap.Toast(toastLive2)
                        toast.show();
                    }
                }
                setEstatusValidacion(false);
            })
            .catch(function(error){
                console.log(error);
                props.setEstatusValidacion(false);
            });
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf

        return false;
    }

    const checkFile = (e) =>{        
        let file = e.target.value;
        if(file.length > 0){
            let ext = file.split(".");
            ext = ext[ext.length-1].toLowerCase();      
<<<<<<< HEAD
            let arrayExtensions = ["jpg" , "jpeg", "png"];
=======
            let arrayExtensions = ["jpg"];
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf

            if (arrayExtensions.lastIndexOf(ext) == -1) {
                let toastLive = document.getElementById('liveToast');
                var toast = new bootstrap.Toast(toastLive)
                toast.show();
                $("#"+e.target.id).val('');
            }else{
                if(e.target.files[0].size > 524288){
                    let toastLive2 = document.getElementById('liveToast2');
                    var toast = new bootstrap.Toast(toastLive2)
                    toast.show();
                    $("#"+e.target.id).val('');
                }
<<<<<<< HEAD
            }
                        
=======
            }                        
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
        }
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>Carga de archivos</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="container">
                    <Row>
                        <Col>
                            <Alert variant="info" className="text-wrap text-justify">
                                Para concluir su solicitud correctamente, es necesario completar la documentación
                                que a continuación se le indica para este proceso. 
                                En caso de no contar con los archivos en este momento,
                                puede cargarlos posteriormente ya que necesarios para que su solicitud sea atendida.
                            </Alert>
                        </Col>
                    </Row>

                    <Form onSubmit={guardarDocumentos} encType="multipart/form-data" >
<<<<<<< HEAD
                        {props.faltantes.includes("1") ? 
=======
                        {props.datosCargaDocumentos.foto === 0 ? 
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                            <Row>
                                <Col xs={12}>
                                    <div className="mb-3">
                                        <label htmlFor="filFoto" className="form-label">Foto</label>
                                        <input className="form-control doc" type="file" id="filFoto" accept="image/png, image/jpeg, image/jpg" onChange={(e) =>checkFile(e)}/>
                                    </div>
                                </Col>
                            </Row>
                            :''
                        }
                        <Row>
<<<<<<< HEAD
                            {props.faltantes.includes("2") ?
=======
                            {props.datosCargaDocumentos.ine_anverso === 0 ? 
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <div className="mb-3">
                                        <label htmlFor="filINEAnverso" className="form-label">INE anverso</label>
                                        <input className="form-control doc" type="file" id="filINEAnverso" accept="image/png, image/jpeg, image/jpg" onChange={(e) =>checkFile(e)}/>
                                    </div>
                                </Col>
                                :''
                            }
<<<<<<< HEAD
                            {props.faltantes.includes("3") ?
=======
                            {props.datosCargaDocumentos.ine_reverso === 0 ? 
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <div className="mb-3">
                                        <label htmlFor="filINEReverso" className="form-label">INE reverso</label>
                                        <input className="form-control doc" type="file" id="filINEReverso" accept="image/png, image/jpeg, image/jpg" onChange={(e) =>checkFile(e)}/>
                                    </div>
                                </Col>
                                :''
                            }
                        </Row>

                        
                        {props.idNivel === "3" ?
                            <Row>
<<<<<<< HEAD
                                {props.faltantes.includes("4") ?
=======
                                {props.datosCargaDocumentos.cert_anverso === 0 ? 
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <div className="mb-3">
                                            <label htmlFor="filCertAnverso" className="form-label">Certificado primaria anverso</label>
                                            <input className="form-control doc" type="file" id="filCertAnverso" accept="image/png, image/jpeg, image/jpg" onChange={(e) =>checkFile(e)}/>
                                        </div>
                                    </Col>
                                    :''
                                }
<<<<<<< HEAD
                                {props.faltantes.includes("5") ?
=======
                                {props.datosCargaDocumentos.cert_reverso === 0 ? 
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <div className="mb-3">
                                            <label htmlFor="filCertReverso" className="form-label">Certificado primaria reverso</label>
                                            <input className="form-control doc" type="file" id="filCertReverso" accept="image/png, image/jpeg, image/jpg" onChange={(e) =>checkFile(e)}/>
                                        </div>
                                    </Col>
                                    :''
                                }
                            </Row>
                            :
                            ''
                        }

                        <Row>
                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                <Button variant="info" className="width-100" onClick={() => props.reiniciarProceso()}>
                                    <i className="bi bi-arrow-left-circle"></i>
                                    &nbsp;Regresar
                                </Button>
                            </Col>
                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                <Button variant="success" className="width-100" type="submit">
<<<<<<< HEAD
                                    Guardar&nbsp;
                                    <i className="bi bi-check-circle"></i>
=======
                                    {props.estatusValidacion ?
                                        (
                                            <React.Fragment>
                                                <span className="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                                                <span className="text-white">  Guardando...</span>
                                            </React.Fragment>
                                        )
                                        :
                                        (
                                            <React.Fragment>
                                                Guardar&nbsp;
                                                <i className="bi bi-check-circle"></i>
                                            </React.Fragment>
                                        )
                                    }
                                    
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex:"11" }}>
                    <div id="liveToast" className="toast bg-warning" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <i className="bi bi-exclamation-triangle-fill text-warning"></i>
                            <strong className="me-auto">&nbsp;¡Upps! Archivo inválido</strong>
                            <small>Ahora</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
<<<<<<< HEAD
                            El tipo de extensión del archivo seleccionado es incorrecto, debes seleccionar una imagen (.jpg, jpeg, png).
=======
                            El tipo de extensión del archivo seleccionado es incorrecto, debes seleccionar una imagen (.jpg).
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                        </div>
                    </div>
                </div>
                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex:"11" }}>
                    <div id="liveToast2" className="toast bg-warning" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <i className="bi bi-exclamation-triangle-fill text-warning"></i>
                            <strong className="me-auto">&nbsp;¡Upps! Archivo demasiado grande</strong>
                            <small>Ahora</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            El tamaño del archivo seleccionado excede el límite permitido (512kb).
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
=======
                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex:"11" }}>
                    <div id="liveToast3" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <i className="bi bi-check2-circle text-success"></i>
                            <strong className="me-auto">&nbsp;Se han cargado tus documentos</strong>
                            <small>Ahora</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Los archivos seleccionados han sido guardados.
                        </div>
                    </div>
                </div>
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
            </Card.Body>
        </Card>
    );
}

const CardEncuesta = (props) => {
    const { Card, Row, Col, ProgressBar, Button } = ReactBootstrap;
    const [ step, setStep ] = useState(1);
    const [ respuestas, setRespuestas ] = useState([]);
    const [ comentarios, setComentarios ] = useState("");
    const [ Toast, setToast ] = useState(false);
    const [ alertBody, setAlertBody ] = useState({variante:'',body:'',header:''});

    const changeTab = (step) =>{
        setStep(step);
        $("#"+step+"-tab").click();
        $('html, body').animate({
            scrollTop: $("#reactArea").offset().top
        }, 500);
    }

    const contestaPregunta = (idPregunta,idOpcion) =>{
        let auxRespuestas = respuestas;
        let respuesta = auxRespuestas.find(element => element.idPregunta === idPregunta);
        if((respuesta === undefined) || auxRespuestas.length === 0){
            auxRespuestas.push({idPregunta:idPregunta,idOpcion:idOpcion});
        }else{
            auxRespuestas[auxRespuestas.indexOf(respuesta)].idOpcion = idOpcion;
        }
        setRespuestas(auxRespuestas);
        $("#pre-"+idPregunta).removeClass("text-danger");
    }

    const guardarEncuesta = () =>{
        let encuestaCompleta = true;
        props.encuesta.map((seccion) =>{
            let preguntas = seccion.preguntas;
            preguntas.map((pre) =>{
                let contesto = respuestas.find(element => element.idPregunta == pre.idPregunta);
                if(pre.pregunta.includes("comentario") && comentarios.length > 5){
                    $("#pre-"+pre.idPregunta).removeClass("text-danger");
                }else  if (contesto === undefined){
                    $("#pre-"+pre.idPregunta).addClass("text-danger");
                    encuestaCompleta=false;
                }
            })
        });

        setToast(true);
        if(encuestaCompleta){
            setAlertBody({
                variante:'success',
                header:'La encuesta ha sido guardada exitósamente',
                body:'Las respuestas han sido recibidas, ahora puede descargar su documentación'
            });
        }else{
            setAlertBody({
                variante:'danger',
                header:'¡Upps! Debe contestar todas las preguntas',
                body:'Revise todas las secciones y complete las preguntas faltantes resaltadas en color rojo'
            });
        }
    }

    const closeAlert = () =>{
        setToast(false);
        setAlertBody({variante:'',body:'',header:''});
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>Encuesta de satisfacción</Card.Title>
            </Card.Header>
            <Card.Body>
                <h5><i>Tu certificado está listo para descargar, por favor ayúdanos contestando la siguiente encuesta.</i></h5>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <ProgressBar animated striped variant="success" now={step * (100 / props.encuesta.length)} key={1} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                            {props.encuesta.map((s,i) =>{
                                i+=1;
                                return (
                                    <li key={"li-"+s.idSeccion} className="nav-item" role="presentation">
                                        <button className={"nav-link " + (i === 1 ? "active":"")} id={i+"-tab"} onClick={() => setStep(i)} data-bs-toggle="tab" data-bs-target={"#tab-"+i} type="button" role="tab" aria-controls={s.nombre} aria-selected={(i === 1 ? "true":"false")}>{s.nombre}</button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="tab-content container border-bottom border-start border-end" id="myTabContent">
                            {props.encuesta.map((s,i) =>{
                                i+=1;
                                let first = (i === 1 ? true:false);
                                let last = (i === props.encuesta.length);
                                let preguntas = s.preguntas;
                                return (
                                    <div key={"div-"+i} className={"tab-pane fade" + ( first ? " show active":"" )} id={"tab-"+i} role="tabpanel" aria-labelledby={i+"-tab"}>
                                        <br/>
                                        {s.descripcion !== "" && s.descripcion != null ?
                                            (
                                                <h5 className="text-center">{s.descripcion}</h5>
                                            )
                                            :
                                            ('')
                                        }
                                        {/* PREGUNTAS */}
                                        {preguntas.map((p,j) =>{
                                            let opciones = p.opciones;
                                            return(
                                                <Card key={"pre-"+j} style={{marginBottom:"5px"}}>
                                                    <Card.Body>
                                                        <Row>
                                                            <label id={"pre-"+p.idPregunta} className="form-label fw-bold">{j+1 + ".- " + p.pregunta}</label>
                                                            
                                                            {opciones.length === 0 ?
                                                                (
                                                                    <React.Fragment>
                                                                        <div className="form-floating">
                                                                            <textarea className="form-control" placeholder="Deja tus comentarios aquí" id="txtaComentarios" onChange={(e) => {setComentarios(e.target.value); }}></textarea>
                                                                            <label htmlFor="floatingTextarea"> Comentarios</label>
                                                                        </div>
                                                                    </React.Fragment>
                                                                )
                                                                :
                                                                (
                                                                    <React.Fragment>
                                                                        {opciones.map((o,k) =>{
                                                                            return(
                                                                                <Col xs={12} sm={12} md={6} lg={4} xl={4}  key={"opc-"+k}>
                                                                                    <div className="form-check ">
                                                                                    <input className="form-check-input" type="radio" name={"opcPreg-"+p.idPregunta} id={"radioOpc-"+p.idPregunta+"-"+o.idOpcion} value={o.id} onClick={()=>contestaPregunta(p.idPregunta,o.idOpcion)}/>
                                                                                    <label className="form-check-label" htmlFor={"radioOpc-"+p.idPregunta+"-"+o.idOpcion}>
                                                                                        {o.opcion}
                                                                                    </label>
                                                                                    </div>
                                                                                </Col>
                                                                            );
                                                                        })}
                                                                    </React.Fragment>
                                                                )
                                                            }
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            );
                                        })}
                                        {/* PREGUNTAS */}
                                        {/* FOOTER */}
                                        <Row>
                                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                                {first ?
                                                    (
                                                        <Button variant="danger" style={{ width:"100%" }} onClick={() => props.reiniciarProceso()}>
                                                            <i className="bi bi-x-circle"></i>
                                                            &nbsp; Cancelar
                                                        </Button>
                                                    )
                                                    :
                                                    (
                                                        <Button variant="info" style={{ width:"100%" }} onClick={() => changeTab(i-1)}>
                                                            <i className="bi bi-arrow-left-circle"></i>
                                                            &nbsp; Regresar
                                                        </Button>
                                                    )
                                                }
                                                
                                            </Col>
                                            <Col xs={10} sm={8} md={5} lg={4} xl={4} className="mx-auto">
                                                {last ?
                                                    (
                                                        <Button variant="success" style={{ width:"100%" }} type="button" onClick={() => guardarEncuesta()}>
                                                            Guardar&nbsp;
                                                            <i className="bi bi-check-circle"></i>
                                                        </Button>
                                                    )
                                                    :
                                                    (
                                                        <button className="btn bd-yellow-400" style={{ width:"100%" }} onClick={() => changeTab(i+1)}>
                                                            Siguiente&nbsp;
                                                            <i className="bi bi-arrow-right-circle"></i>
                                                        </button>
                                                    )    
                                                }
                                            </Col>
                                        </Row>
                                        {/* FOOTER */}
                                    </div>
                                );
                            })}
                        </div>
                        <Alert
                            visible={Toast}
                            body={alertBody}
                            remoteClose={closeAlert}
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea"));