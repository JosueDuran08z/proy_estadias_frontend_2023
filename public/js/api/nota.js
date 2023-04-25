const { useState, useEffect } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

const Noticia = () => {
    const [cargando, setCargando] = useState(true);
    const [leerNoticia, setLeerNoticia] = useState(false);
    const [noticia, setNoticia] = useState();
    const URL_API_TOKEN =
        "https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024";
    const URL_API_NOTICIA =
        "https://dhernandeza.inaeba.edu.mx/public/getNoticiaActiva/";
    const URL_API_STORAGE = "https://storage.inaeba.edu.mx/public/getFile/";

    const getNoticia = () => {
        const url = window.location.href;
        const idNoticia = url.substring(url.lastIndexOf("/") + 1);

        axios
        .post(URL_API_TOKEN)
        .then(({ data: { access_token } }) => {
            if (access_token) {
                axios
                .get(`${URL_API_NOTICIA + idNoticia}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then(({ data }) => {
                    if (data) {
                        setCargando(false);
                        setLeerNoticia(true);
                        setNoticia(data);
                    }
                })
                .catch((error) => console.log(error));
            }
        })
        .catch((error) => console.log(error));
    };

    const regresar = () => (window.location.href = "../noticias");

    useEffect(() => getNoticia(), []);

    return (
        <div>

            {
                cargando &&
                (
                    <div className="text-center" style={{height:"200px"}}>
                        <div className="spinner-border m-5" style={{width:"3rem",height:"3rem"}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                leerNoticia && noticia &&
                (
                    <>
                        <h1 className="text-center">{noticia.titulo}</h1>
                        <br />
                        <br />
                        <div className="text-center">
                            <img className="imgnoticias" key={noticia.id} src={URL_API_STORAGE + noticia.nombre_archivo} width="262" alt={noticia.titulo} title={noticia.titulo} />
                        </div>
                        <br />
                        <br />
                        <div className="noticia tituloss">
                            <div dangerouslySetInnerHTML={{ __html: noticia.descripcion }} />
                            <br />
                            <br />
                        </div>
                        <Row>

                            <Col xs={10} sm={10} md={5} lg={4} xl={4} className="d-grid centrar">
                                <Button variant="success" onClick={() => regresar()}>
                                    <i className="bi bi-arrow-left-circle"></i> Regresar
                                </Button>
                            </Col>
                        </Row>
                    </>
                )
            }
        </div>
    );
};

ReactDOM.render(<Noticia />, document.getElementById("reactNoticia"));
