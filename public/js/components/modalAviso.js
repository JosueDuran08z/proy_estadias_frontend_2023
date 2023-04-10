const { useState } = React;
const { Modal, Row, Button } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleModal: true,
            urlBase: "",
        };
    }
    componentDidMount() {
        let urlBase = window.location.href;
        this.setState({
            urlBase: urlBase,
        });
        if (localStorage.getItem('avisoPrivacidad') == 'accept') {
            this.closeModal();
        }
    }
    closeModal = () => {
        this.setState({
            visibleModal: false,
        });
    };

    viewModal = () =>{
        this.setState({
            visibleModal: true,
        });
    }

    acceptAviso = () => {
        this.closeModal();
        localStorage.setItem('avisoPrivacidad', 'accept')
        console.log('Aceptó el aviso');
    }



    render() {
        return (
            <Modal
                show={this.state.visibleModal}
                onHide={this.closeModal}
                dialogClassName="modal-dialog modal-lg"
            >
                <Modal.Header className="lt-head">
                    <Modal.Title className="textcentro">
                        <i className="text-baloo tituloss text-center">
                            AVISO DE PRIVACIDAD SIMPLIFICADO DEL INAEBA
                        </i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="tituloss">
                    <p>
                        El Instituto de Alfabetización y Educación Básica para
                        Adultos del estado de Guanajuato, en lo sucesivo INAEBA,
                        con domicilio en Bulevar Delta 201, Sexto Piso, col.San
                        José de Santa Julia, C.P.37530, León, Gto., es el
                        responsable de la protección, incorporación y
                        tratamiento de sus datos personales, y al respecto le
                        informa lo siguiente:
                        <br />
                        <br />
                        Los datos personales que recabamos de usted, los
                        utilizaremos con las siguientes finalidades que son
                        necesarias para el servicio que solicita: brindar
                        puntual seguimiento al ingreso de las solicitudes que
                        los ciudadanos realizan respecto a los servicios de
                        alfabetización, primaria y secundaria, programas
                        especiales e institucionales, becas y servicio social;
                        verificar la calidad del servicio que otorga ala
                        población en rezago, ya sea de alfabetización como de
                        certificación de primaria y secundaria, asimismo para
                        consulta en la inspección para el cumplimiento de
                        procesos de las diversas unidades administrativas en
                        apego a la normativa vigente y aplicable; conformar el
                        expediente del trabajador y / o trabajadora conforme a
                        la normativa vigente, dar el alta en los sistemas de
                        nóminas, tener conocimiento si es padre o madre con
                        fines de reconocerles en su día, dar de alta, alimentar
                        la plantilla y organigramas, elaboración de constancias,
                        elaboración de hojas únicas para otorgar prestaciones
                        conforme a la normativa vigente, así como elaborar el
                        finiquito en caso de retirarse de la Institución;
                        emisión de identificaciones así como la difusión de
                        mensajes de comunicación interna; para ligar actividades
                        realizadas en el instituto como referente o
                        identificador en la captación de educandos, e
                        identificador de los exámenes que hayan aplicado; emitir
                        certificado de competencia para aquellas personas que
                        son declaradas competentes, hacer la inscripción de los
                        beneficiarios al sistema y para verificar que el alumno
                        presente alguna discapacidad para poder ser atendido
                        bajo el modelo COA; generar y respaldar datos relevantes
                        para la toma de decisiones en los procesos de
                        planificación, control escolar, evaluación educativa,
                        análisis e investigación, relativos a los servicios
                        educativos de educación para personas jóvenes y adultas;
                        elaborar el registro en los diferentes proyectos como lo
                        son: Examen único, servicio social y beca PROMAJOVEN,
                        dar de alta en los sistemas de SASA, SAU, SIGA, SUBE y
                        llevar a cabo el proceso de calificación y
                        certificación, además de la recopilación de información
                        para la elaboración de los convenios correspondientes;
                        inscribir, acreditar y certificar a la población del
                        estado beneficiaria en los programas educativos que se
                        ofrecen en el Instituto, integrar los expedientes
                        necesarios para emitir las constancias de alfabetización
                        y certificados de primaria y secundaria. <br />
                        <br />
                        En cualquier momento el INAEBA puede hacer
                        modificaciones o actualizaciones al presente Aviso de
                        Privacidad, para la atención de novedades legislativas y
                        / o políticas internas.Toda modificación al presente
                        Aviso de Privacidad se le hará de su conocimiento por
                        medio de la publicación del mismo en nuestra página de
                        internet  
                        <a
                            href={
                                this.state.urlBase +
                                "inaeba/avisosdeprivacidadINAEBA"
                            }
                        >
                            {this.state.urlBase +
                                "inaeba/avisosdeprivacidadINAEBA"}
                        </a>
                          , o en las instalaciones del INAEBA.
                    </p>
                    <div className="container">
                        <div class="row">
                            <div class="col-md-4">
                                
                                <img
                                    src={
                                        this.state.urlBase +
                                        "/img/img/soyINAEBA.jpg"
                                    }
                                    height="25px;"
                                />
                            </div>
                            <div class="col-md-4 offset-md-4">
                                <button className="btn btn-success"  onClick={this.acceptAviso}  > Aceptar</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactAreaModal"));
