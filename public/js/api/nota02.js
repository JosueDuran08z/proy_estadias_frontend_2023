const { useState, useEffect } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

const Noticia = () => {
    const [cargando, setCargando] = useState(true);
    const [leerNoticia, setLeerNoticia] = useState(false);
    const [noticia, setNoticia] = useState();
    const URL_API_TOKEN =
        'https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024';
    const URL_API_NOTICIA =
        'https://dhernandeza.inaeba.edu.mx/public/getNoticiaActiva/';
    const URL_API_STORAGE = 'https://storage.inaeba.edu.mx/public/getFile/';

    const getNoticia = () => {
        const url = window.location.href;
        const idNoticia = url.substring(url.lastIndexOf("/") + 1);

        /* axios
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
                        const noticiaResponse = data;
                        setLeerNoticia(true);
                        setNoticia({
                            id: noticiaResponse.id,
                            nombre_archivo: noticiaResponse.nombre_archivo,
                            url: URL_API_STORAGE + noticiaResponse.nombre_archivo,
                            titulo: noticiaResponse.titulo,
                            tooltip: noticiaResponse.titulo,
                            descripcion: noticiaResponse.descripcion,
                            fecha_publicacion: noticiaResponse.fecha_publicacion
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        })
        .catch((error) => console.log(error)); */
        setCargando(false);
        setLeerNoticia(true);
        setNoticia({
            id: 1,
            nombre_archivo: 'OzHZtP46NpdmZu9dbbAgLvnyXBI139Ptvpb1y5BI.jpg',
            url: URL_API_STORAGE + 'OzHZtP46NpdmZu9dbbAgLvnyXBI139Ptvpb1y5BI.jpg',
            titulo: 'Noticia 1',
            tooltip: 'Noticia 1',
            descripcion: `
                <h3><i>Además se ofrece la incorporación a los programas educativos para que \r\nlas personas de 15 años y más, aprendan a leer, a escribir, terminen la \r\nprimaria y secundaria.\r\n</i></h3><p>\r\n<br><font color=\"#ffffff\"><span style=\"background-color: rgb(0, 0, 0);\">León, Guanajuato a 15 de enero de 2022. \r\nEl Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) \r\ntiene presencia en el Feria Estatal de León 2023 para promocionar los \r\nservicios educativos para las personas de 15 años y más que requieran \r\naprender a leer, a escribir, o concluir la educación básica.\r\n<br></span></font>\r\n<font color=\"#ffffff\"><span style=\"background-color: rgb(0, 0, 0);\"><br>Dentro\r\n del Pabellón Guanajuato se ubica el stand del instituto en la sala B300\r\n y en el estacionamiento de poliforum se colocó la Unidad Móvil, en \r\nambos se puede presentar el Examen Único de Reconocimiento de Saberes \r\ndonde se obtiene el resultado de manera inmediata, quienes lo acreditan \r\npodrán recibir el certificado oficial de educación básica.\r\n</span></font></p>
            `,
            fecha_publicacion: '2023-04-25',
        });
    };

    const regresar = () => (window.location.href = "../noticias");

    useEffect(() => getNoticia(), []);

    useEffect(() => console.log(noticia), [noticia]);

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
