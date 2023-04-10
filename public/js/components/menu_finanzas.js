const { useState } = React;
const { Modal, Row, Button, Col } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleModal: true,
            aniosVisible: [],
            anio: (new URLSearchParams(window.location.search).get("anio") != null ? new URLSearchParams(window.location.search).get("anio") : new Date().getFullYear())
        };
    }

    componentDidMount() {
        //let anioActual = new Date().getFullYear()-5;
        let anioActual = new Date().getFullYear()-5; // dhernandeza, es para que no muestre el 2022
        //let anioActual = 2021;
        let auxAnios = [];
        for(var i = 0; i < 6; i++ ){
            auxAnios.push(anioActual);
            anioActual++;
        }
        this.setState({aniosVisible:auxAnios});
    }

    render() {
        return (
            <div className="container">
                <div className="bd-highlight yearFisc text-center">
                    <Row>
                    {this.state.aniosVisible.map((anioActual) =>{
                        return (
                            <Col xs={6} sm={6} md={2} lg={2} xl={2} key={anioActual}>
                                <div key={"anio_"+anioActual} className={"flex-fill bd-highlight" + (anioActual.toString() === this.state.anio.toString() ? " active" : "")}>
                                    <a href={"year"+anioActual+"?anio="+anioActual} className={anioActual.toString() === this.state.anio.toString() ? "lnkYearSel" : "lnkYear"}>{anioActual}</a>
                                </div>
                            </Col>
                        );
                    })}
                    </Row>
                </div>
                <div className="text-center">
                    <a href="http://transparencia.guanajuato.gob.mx//transparencia/informacion_publica_cuenta_publica.php#cpdiv" target="_blank" className="lnkYear lh-1">
                        Detalle de la Cuenta Pública Estatal
                    </a>
                </div>
            </div>
        );
    }
}

function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea"));