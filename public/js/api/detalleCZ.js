const ModalCZ =(props) => {
    let idCoordinacion=props.idCzPromotor;
    let direccion = props.ladir;
    let Telefono = props.Tel;

    //let img="https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    let img="/img/coordinaciones/people.jpg";
    const ruta ="";

  const { Modal, Button, Table, Row, Col,Card } = ReactBootstrap;
  const [visible, setVisible] = useState(false);
  const [coordinacion, setCoordinacion] = useState([]);
  const mapsApiKey = "AIzaSyBvwcork9Ol5dq7hWNwQOShagjEp5KhBcw";
  let coordenadas;
  let mapa;
  const [mapUrl, setMapUrl] = useState(null);

  useEffect(() => {
      //if (props.visible) getCas();
      getCas();
  }, [props.visible]);



  const getCas = () => {
    console.log('getCas 2');
      axios
          .get(`/public/casmunicipios/${props.coordinacion}`)
          .then(function (response) {
            /*console.log('**************');
            console.log(response.data);*/
              setCoordinacion(response.data);
              if(response.data[0].cd_mapa){
                coordenadas=response.data[0].cd_mapa.toString().split(",");
                let url = "https://www.google.com/maps/embed/v1/place?q=" + coordenadas[0] + "%2C%20" + coordenadas[1] + "&key=" + mapsApiKey;
                console.log(url);
                setMapUrl(url);

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
        <Modal.Header className="lt-head2">
            <Modal.Title className="textcentro"><center>Mapa de Ubicación</center></Modal.Title>
            <Button variant="secondary" onClick={onClose}>
                X
            </Button>
        </Modal.Header>
        <Modal.Body>
            <Card>
                <Card.Body>
                    <Row>
                        <Card.Title className="lt-head">Datos de ubicación de la oficina de atención</Card.Title>
                        <Table striped bordered hover>
                                <tbody>
                                    {coordinacion.map((item) => (
                                        <React.Fragment key={item.id_cassa}>
                                            <tr>
                                                <td><b>Domicilio: </b></td>
                                                <td>{direccion}   -{idCoordinacion} - </td>
                                            </tr>
                                            <tr>
                                                <td><b>Teléfono:</b></td>
                                                <td>{Telefono}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </Table>
                    </Row>
                    <Row>

                        <Col md={12}>
                            <iframe width="100%" height="300" loading="lazy" allowFullScreen src={mapUrl}></iframe>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                  Cerrar
              </Button>
        </Modal.Footer>
    </Modal>
  );
};
