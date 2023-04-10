const ModalCZ =(props) => {
    const { Modal, Button, Table, Row, Col } = ReactBootstrap;
    const [visible, setVisible] = useState(false);
    const [coordinacion, setCoordinacion] = useState([]);
    const mapsApiKey = "AIzaSyBvwcork9Ol5dq7hWNwQOShagjEp5KhBcw";
    let coordenadas;
    const [mapUrl, setMapUrl] = useState(null);
  
    useEffect(() => {
        if (props.visible) getCas();
    }, [props.visible]);
  
    const getCas = () => {
        axios
            .get(`/public/casmunicipios/${props.coordinacion}`)
            .then(function (response) {
                setCoordinacion(response.data);
                if(response.data[0].cd_mapa){
                  coordenadas=response.data[0].cd_mapa.toString().split(",");
                  setMapUrl("https://www.google.com/maps/embed/v1/place?q=" + coordenadas[0] + "%2C%20" + coordenadas[1] + "&key=" + mapsApiKey);
                }else{
                  setMapUrl("");
                }
                
                setVisible(props.visible);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
  
    const onClose = () => {
        setVisible(false);
        props.remoteClose();
    };
  
    return (
        <Modal show={visible} onHide={onClose} dialogClassName="modal-dialog modal-lg">
            <Modal.Header closeButton>
                <Modal.Title>Coordinación de Zona</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center">Detalles de la Coordinación de Zona</h5>
                <Row>
                    <p>
                          Son oficinas institucionales en las que INAEBA ofrece sus servicios de alfabetización, 
                          primaria y secundaria para las personas en rezago educativo que habitan en los 46 municipios 
                          del estado de Guanajuato.
                    </p>
                </Row>
                <Row>
                    <Col md={6}>
                        <Table striped bordered hover>
                            <tbody>
                                {coordinacion.map((item) => (
                                    <React.Fragment key={item.id_cassa}>
                                        <tr>
                                            <td><b>Nombre de la coordinación</b></td>
                                            <td>{item.cas_nombre}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Calle</b></td>
                                            <td>{item.cd_calle}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Número</b></td>
                                            <td>{item.cd_num}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Colonia</b></td>
                                            <td>{item.cd_col}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Entre calles</b></td>
                                            <td>{item.cd_ubic}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Teléfono</b></td>
                                            <td>{item.cd_tel}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                      <iframe width="100%" height="300" loading="lazy" allowFullScreen 
                          src={mapUrl}>
                      </iframe>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
  };