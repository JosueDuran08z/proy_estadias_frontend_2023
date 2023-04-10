const { useState, useEffect } = React;
const { Carousel } = ReactBootstrap;
class ClaseBanners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannersArray: [],
        };
    }
    componentDidMount() {
        const context = this;
        axios
            .get("https://dhernandeza.inaeba.edu.mx/public/getActiveBanner")
            .then(function (response) {
                context.setState({ bannersArray: response.data });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <Carousel>
                    {this.state.bannersArray.map((i) => {
                        return (
                            <Carousel.Item key={i.id} interval={3500}>
                                <a target='_blank' href={i.hipervinculo}>
                                    <img
                                        className="d-block w-100"
                                        src={
                                            "https://storage.inaeba.edu.mx/security/getFile/" +
                                            i.nombre_archivo
                                        }
                                        alt={i.descripcion}
                                    />
                                </a>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </React.Fragment>
        );
    }
}

function App() {
    return <ClaseBanners />;
}

ReactDOM.render(<App />, document.getElementById("reactBanner"));
