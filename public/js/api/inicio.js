const { useState, useEffect } = React;

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

    render() {
        return (

            <div>

                <select
                    /*className="form-select row-lin2"*/
                    className ="format_combo"
                    aria-label="Default select example"
                    onChange={this.selectMunicipio}
                    defaultValue="0"
                    style={{width:"100%"}}
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

    useEffect(() => {
        if (props.visible) getCas();
    }, [props.visible]);

    const getCas = () => {
        console.log('getCas cassas activas');
        
        axios
            .get(`/public/casactivos/${props.municipio}`)
            .then(function (response) {
                let cassa_clave = response.data[0]['cassa_clave'];
                let cas_nombre = response.data[0]['cas_nombre'];
                setValues(cassa_clave, cas_nombre)
                setCentros(response.data);
                setVisible(props.visible);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

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
            <Modal.Header className="lt-head2 efecto_sombra" style={{padding:0}}>

              {/*<Modal.Title className="textcentro">Centros de Asesoría en {props.municipioNombre} </Modal.Title>*/}
                <Modal.Title className="textcentro" style={{padding:0}}>
                <h1 className="format_titulo_mod_ccd text-center" style={{padding:0}}>Centros Comunitarios Digitales</h1>
                <h2 className="format_subtitulo_mod_ccd text-center" style={{}}>CONOCE LA UBICACIÓN DE NUESTROS CENTROS DE ASESORÍA EN TU MUNICIPIO</h2>
                </Modal.Title>

                <Button style={{
          padding: "5px 10px",
          margin: 8,
          border:"none",
          borderRadius: "8px",
          background: "#22B8F0",
          color: "#ffffff",
          fontfamily: "Proxima Nova-Regular",
          fontSize: 12
        }} variant="secondary" onClick={onClose}>
                    X
                </Button>
            </Modal.Header>

            <Modal.Body style={{paddingTop: 0}}>
                <Row>
                </Row>
                <Row >
                    <Col md={6} style={{margin:0, padding:0 }}>
                    <div>
                    <h2 className="vineta_titulo2" >{props.municipioNombre}</h2>
                    <div className="barra_sep">&nbsp;</div>
                    <div className="bordeado">
                      <table className="format_table">
                        <tbody>
                        {centros.map((row, i) => {
                              return (

                          <tr key={"tbl" + i}>
                            <td>
                              <ul className="listaul">
                                <li className="listali"><img className="imgSpace" src="/img/cuadro.png"/><a href="#" onClick={() =>
                                    setValues(row.cassa_clave, row.cas_nombre)
                                } className="enlace">{row.cas_nombre}</a></li>
                              </ul>
                            </td>
                          </tr>
                              );
                          })}
                        </tbody>
                      </table>
                    </div>
                   </div>
                    </Col>


                    <Col md={6} style={{margin:0}}>
                    <div className="" ><br/>
                        {idCentroComunitario != null ? (
                            <CentroComunitario centroComunitario={idCentroComunitario} nombre={nombre} showDetalleCoordinacion={props.showDetalleCoordinacion}/>
                        ) : (
                            <Card>
                                <Card.Body>
                                    Seleccione un centro comunitario para ver el
                                    detalle.
                                </Card.Body>
                            </Card>
                        )}
                        </div>
                    </Col>
                </Row>
            </Modal.Body>

            {/*
            <Modal.Footer>
                <Button
                style={{padding: "8px 25px",borderRadius: "8px",border: "none",background: "#22B8F0", color: "#ffffff",fontfamily: "Proxima Nova-Regular",fontSize: 12  }}  variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
            </Modal.Footer>*/}
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

                    {/*
                    <Card.Subtitle className="mb-2 row-lin2 text-center">
                    </Card.Subtitle>
                    */}

                    {data.map((item) => (
                        <React.Fragment key={props.centroComunitario}>

                    <div className="ubicacion_ccd">
                      <div className="name_ccd">{props.nombre}</div>
                      <div className="formato_texto">
                        <p style={{ lineHeight: 1.3 }}> <i class="fa fa-home" aria-hidden="true"></i> {item.cd_calle != null && item.cd_calle != 'undefinied' ? item.cd_calle : ''}, {item.cd_num != null && item.cd_num != 'undefinied' ? item.cd_num : ''}, {item.cd_col != null && item.cd_col != 'undefinied' ? item.cd_col : ''} <br/>
                        C.P. {item.cd_codp != null && item.cd_codp != 'undefinied' ? item.cd_codp : ''}
                        <br/>
                        Entre calles: {item.cd_ubic != null && item.cd_ubic != 'undefinied' ? item.cd_ubic : ''}
                        </p>
                      </div>
                    </div>

                    <div className="mapa_location" style={{paddingTop:0}}>
                        <iframe style={{borderRadius: "8px"}}  width="95%" height="300" loading="lazy" allowFullScreen src={mapUrl}></iframe>
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
