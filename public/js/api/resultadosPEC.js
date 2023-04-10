const { useState } = React;
const { Card, Row, Col, Button } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cargando:false,
            Toast:false,
            alertBody:[]
        };
    }

    changeCURP =(event)=>{
        let curp = event.target.value;
        if (curp.length != null && curp.length == 18){
            this.setState({
                cargando:true
            });
            axios
                .get(`/public/resultadospec/${curp}`)
                .then((response) =>{
                    switch(response.data.status){
                        case "warning":
                            this.setState({
                                alertBody:{
                                    header: '¡Upps! No se encontraron coincidencias',
                                    body: response.data.message,
                                    variante: "warning"
                                }
                            });
                            break;
                        case "primary":
                            this.setState({
                                alertBody:{
                                    header: '¡Ya puedes consultar el estatus de tus resultados!',
                                    body: response.data.message,
                                    variante: "primary"
                                }
                            });
                            break;
                        case "danger":
                            this.setState({
                                alertBody:{
                                    header: '¡Upps! Ha ocurrido un error',
                                    body: response.data.message,
                                    variante: "danger"
                                }
                            });
                            break;
                        case "success":
                            this.setState({
                                alertBody:{
                                    header: '¡Felicidades! Tus resultados están listos',
                                    body: response.data.message,
                                    variante: "success"
                                }
                            });
                            break;
                        default:
                            this.setState({
                                alertBody:{
                                    header: '¡Upps! Parace que algo salió mal',
                                    body: 'Sentimos la molestias que esto puede ocasionar, intente nuevamente o póngase en contacto con nosotros al 01-800-7INAEBA (746-2322)',
                                    variante: "warning"
                                }
                            });
                            break;
                    }
                    this.setState({
                        Toast:true,
                        cargando:false
                    });
                })
                .catch((error)=>{
                    this.setState({
                            Toast:true,
                            alertBody:{
                                header: '¡Upps! Ha ocurrido un error',
                                body: 'Es posible que la conexión haya fallado, intente nuevamente.',
                                variante: "danger"
                            },
                            cargando:false
                        });
                });
        }
    }

    closeAlert =()=>{
        this.setState({
            Toast:false
        });
    }

    render() {
        return (
            <Card className="tituloss">
                <Card.Header className="text-center">
                    <Card.Title className="row-lin2">Consulta el resultado de tu éxamen único</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            <div>
                                <label className="form-label"> CURP</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="lblCURP"><i className="bi bi-person-bounding-box"></i></span>
                                    <input className="form-control" id="txtCURP" type="text" placeholder="Ingrese la CURP completa" aria-label="CURP" onChange={this.changeCURP}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {this.state.cargando ?
                        (
                            <Row>
                                <Col className="text-center">
                                    <div className="spinner-grow text-secondary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </Col>
                            </Row>
                        )
                        :('')
                    }
                    <Row>
                        <Col xs={12}>
                            <Alert 
                                visible={this.state.Toast}
                                body={this.state.alertBody}
                                remoteClose={this.closeAlert}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea"));