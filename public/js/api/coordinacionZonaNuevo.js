const { useState, useEffect } = React;
const { Modal, Button, Table, Row, Col, Badge, Card } = ReactBootstrap;

/*COMBO INICIO*/
class Inicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            municipios: [],
            visibleModal: false,
            visibleModalCZ: false,
            municipioSeleccionado: "",
            nombreMunicipio: "",
            coordinacionSeleccionada: ""
        };
    }

    componentDidMount() {
        const contex = this;
        axios
            .get("/public/municipio")
            .then(function (response) {
                contex.setState({ municipios: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    selectMunicipio = (event) => {
        console.log('selectMunicipio: ' + event);
        let index = event.target.selectedIndex;
        this.setState({
            municipioSeleccionado: event.target.value,
            nombreMunicipio: event.target.options[index].text,
            visibleModal: true,
        });
    };

    closeModal = () => {
        this.setState({
            visibleModal: false
        });
    };

    closeModalCZ = () => {
        this.setState({
            visibleModalCZ: false
        });
    };

    showDetalleCoordinacion = (coordinacionZona) =>{
        this.setState({
            visibleModalCZ: true,
            coordinacionSeleccionada: coordinacionZona
        });
    }

    showDataCZ(name) {
        //alert(`hello, ${name}`);
        let index = name;
        this.setState({
            municipioSeleccionado: name,
            nombreMunicipio: name,
            visibleModal: true,
        });
      }


    render() {
        return (
            <div>
                <Row>
                    <Col xl={12} sm={12}>
                        <center>
                            <img src={"/img/coordinaciones/63.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(63)}></img>

                            <img src={"/img/coordinaciones/72.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(72)}></img>

                            <img src={"/img/coordinaciones/69.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(69)}></img>

                            <img src={"/img/coordinaciones/92.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(92)}></img>

                            <img src={"/img/coordinaciones/87.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(87)}></img>

                            <img src={"/img/coordinaciones/79.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(79)}></img>

                            <img src={"/img/coordinaciones/80.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(80)}></img>

                            <img src={"/img/coordinaciones/66.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(66)}></img>

                            <img src={"/img/coordinaciones/67.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(67)}></img>

                            <img src={"/img/coordinaciones/88.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(88)}></img>

                            <img src={"/img/coordinaciones/76.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(76)}></img>

                            <img src={"/img/coordinaciones/71.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(71)}></img>

                            <img src={"/img/coordinaciones/81.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(81)}></img>

                            <img src={"/img/coordinaciones/82.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(82)}></img>

                            <img src={"/img/coordinaciones/83.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(83)}></img>

                            <img src={"/img/coordinaciones/68.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(68)}></img>

                            <img src={"/img/coordinaciones/90.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(90)}></img>

                            <img src={"/img/coordinaciones/94.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(94)}></img>

                            <img src={"/img/coordinaciones/91.png"} className="w-30 zoom espacio_img" alt=""  onClick={() => this.showDataCZ(91)}></img>

                        </center>
                    </Col>
                </Row>

                <ModalCas
                    visible={this.state.visibleModal}
                    municipio={this.state.municipioSeleccionado}
                    municipioNombre={this.state.nombreMunicipio}
                    remoteClose={this.closeModal}
                    showDetalleCoordinacion={this.showDetalleCoordinacion}
                />
                <ModalCZ
                    visible={this.state.visibleModalCZ}
                    remoteClose={this.closeModalCZ}
                    coordinacion={this.state.coordinacionSeleccionada}
                />

            </div>
        );
    }
}

/*COMBO FIN*/

/*MODAL, INCLUIDA LA INFORMACIÓN DE LA IZQUIERDA*/
const ModalCas = (props) => {
    const { Modal, Button, Table, Row, Col, Badge, Card } = ReactBootstrap;
    const [ visible, setVisible ] = useState(false);
    const [ centros, setCentros ] = useState([]);
    const [ idCentroComunitario, setIdCentroComunitario ] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [MpioAtiende, setMpioAtiende] = useState(null);
    const [coordinador, setCoordinador] = useState(null);
    const [calle, setCalle] = useState(null);
    const [numero, setNumero] = useState(null);
    const [colonia, setcolonia] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [sede, setSede] = useState(null);
    const [mapa, setMapa] = useState(null);
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        if (props.visible) getCas();
        if (props.visible) getDatosCZ();
    }, [props.visible]);

    const getCas = () => {
        axios
            .get(`/public/casactivos/${props.municipio}`)
            .then(function (response) {
                setCentros(response.data);
                setVisible(props.visible);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const getDatosCZ = ()=>{
        console.log('ejecutando');
        let g = props.municipioNombre;
        console.log(g);
        const mapsApiKey = "AIzaSyBvwcork9Ol5dq7hWNwQOShagjEp5KhBcw";
        let coordenadas;

        axios
            .get(`/public/datosModal/${props.municipio}`)
            .then(function (response) {

                /*setCentros(response.data);
                setVisible(props.visible);*/
                console.log(response.data[0]);
                setMpioAtiende(response.data[0].MpioAtiende);
                setCoordinador(response.data[0].NombreCZ);
                setCalle(response.data[0].cd_calle);
                setNumero(response.data[0].cd_num);
                setcolonia(response.data[0].cd_col);
                setTelefono(response.data[0].cd_tel);
                let idCoordinacion = response.data[0].id_coord;
                let foto = "/img/coordinadores/"+idCoordinacion+".png";

                setFoto(foto);
                /*if (id_coord == 63) {
                    setFoto(response.data[0].id_coord);
                }*/
                coordenadas=response.data[0].cd_mapa.toString().split(",");
                setMapa("https://www.google.com/maps/embed/v1/place?q=" + coordenadas[0] + "%2C%20" + coordenadas[1] + "&key=" + mapsApiKey);

            })
            .catch(function (error) {
                console.log('erro en el servicio');
                console.log(error);
            });
    }

    const onClose = () => {
        setVisible(false);
        setIdCentroComunitario(null);
        setNombre(null);
        props.remoteClose();
    };

    const setValues = (clave, nombre) =>{
        setIdCentroComunitario(clave)
        setNombre(nombre)
    }

    return (
        <Modal show={visible} onHide={onClose} dialogClassName="modal-dialog modal-xl" >
            <Modal.Header className="lt-head2 efecto_sombra">

              {/*<Modal.Title className="textcentro">Centros de Asesoría en {props.municipioNombre} </Modal.Title>*/}
                <Modal.Title className="textcentro">
                <p className="cargo" >Coordinador del municipio de <span style={{fontSize:24, color: "#03A9F4"}}> {MpioAtiende}</span></p>
                </Modal.Title>

                <Button style={{padding: "5px 10px",border:"none",borderRadius: "8px",background: "#22B8F0",color: "#ffffff",  fontfamily: "Proxima Nova-Regular",  fontSize: 12}} variant="secondary" onClick={onClose}>
                    X
                </Button>
            </Modal.Header>

            <Modal.Body>

            <Row style={{padding: 15}}>
              <Col md={6} style={{}}>
              <p  className="comollegar">
              &nbsp;
              </p>

                <br/>
                <div className="alineacionvertical">
                  <img src={foto} className="photo" alt="Coordinador"></img>
                  <p class="name_ccd">{coordinador}</p>

                  <p className="formato_texto alto_espacio"><i className="fa fa-home" aria-hidden="true"></i> {calle} No. {numero} Colonia {colonia}  {props.municipioSeleccionado}</p>
                  <p className="formato_texto alto_espacio"><i className="fa fa-phone" aria-hidden="true"></i> {telefono}</p>
                  <p className="formato_texto alto_espacio"><i className="fa fa-clock-o" aria-hidden="true"></i> Lunes a Viernes de 8:00 a 15:30 hrs.</p>
                  </div>

              </Col>

              <Col md={6} style={{padding:0}}>
              <p  className="comollegar">
              <i class="fa fa-map-marker" aria-hidden="true"></i> Cómo llegar
              </p>
              <center><iframe style={{borderRadius: "8px"}}  width="100%" height="350" loading="lazy" allowFullScreen src={mapa}></iframe></center>
              </Col>
            </Row>
            </Modal.Body>

            {/*
            <Modal.Footer>
              <Button style={{padding: "8px 25px",borderRadius: "8px",border: "none",background: "#22B8F0", color: "#ffffff",fontfamily: "Proxima Nova-Regular",fontSize: 12  }}  variant="secondary" onClick={onClose}>Cerrar</Button>
            </Modal.Footer>
            */}

        </Modal>
    );
};

/*MODAL FIN*/


/*INFORMACIÓN CCD EN LA DERECHA DEL MODAL*/
const CentroComunitario = (props) => {
    const { Card, Table } = ReactBootstrap;
    const [data, setData] = useState([]);
    const mapsApiKey = "AIzaSyBvwcork9Ol5dq7hWNwQOShagjEp5KhBcw";
    let coordenadas;
    const [mapUrl, setMapUrl] = useState(null);


    useEffect(() => {
        if(props.centroComunitario != null){
            getData();
        }
    }, [props.centroComunitario]);

    const getData = () => {
        axios
            .get(`/public/casdetalles/${props.centroComunitario}`)
            .then(function (response) {
                setData(response.data);
                coordenadas=response.data[0].cd_mapa.toString().split(",");
                setMapUrl("https://www.google.com/maps/embed/v1/place?q=" + coordenadas[0] + "%2C%20" + coordenadas[1] + "&key=" + mapsApiKey);
            })
            .catch(function (error) {
                console.log(error);
            });


    };

    return (
    <React.Fragment>
            <Card style={{border:"none"}}>
                    {/*<Card.Title className="lt-head">Información del Centro de Asesoría {props.nombre != null && props.nombre != 'undefinied' ? props.nombre : 'Seleccione una coordinación'}</Card.Title>*/}
                    <Card.Title className="formato_titulo_principal" style={{color: "#1C61AC", fontSize: 28}}>Estamos a tus órdenes en: {props.nombre != null && props.nombre != 'undefinied' ? '' : 'Seleccione una coordinación'}</Card.Title>

                    <Card.Subtitle className="mb-2 row-lin2 text-center">
                    </Card.Subtitle>


                    {data.map((item) => (
                        <React.Fragment key={props.centroComunitario}>

                    <div className="ubicacion_ccd">
                      <div className="name_ccd">{props.nombre}</div>
                      <div className="formato_texto">
                        <p style={{ lineHeight: 1.3 }}> <i class="fa fa-home" aria-hidden="true"></i> {item.cd_calle != null && item.cd_calle != 'undefinied' ? item.cd_calle : ''}, {item.cd_num != null && item.cd_num != 'undefinied' ? item.cd_num : ''}, {item.cd_col != null && item.cd_col != 'undefinied' ? item.cd_col : ''} <br/>
                        C.P. {item.cd_codp != null && item.cd_codp != 'undefinied' ? item.cd_codp : ''}
                        <br/>
                        Entre calles: {item.cd_ubic != null && item.cd_ubic != 'undefinied' ? item.cd_ubic : ''}<br/>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>

                    <div className="mapa_location">
                        <iframe style={{borderRadius: "8px"}}  width="95%" height="350" loading="lazy" allowFullScreen src={mapUrl}></iframe>
                    </div>

                    </React.Fragment>
                ))}

            </Card>
        </React.Fragment>

    );
};

function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea"));
