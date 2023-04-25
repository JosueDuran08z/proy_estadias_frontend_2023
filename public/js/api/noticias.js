const { useState, useEffect } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

const Noticias = () => {
    const [listaNoticias, setListaNoticias] = useState([]);
    const [leerNoticia, setLeerNoticia] = useState(false);
    const [listaSugerencias, setListaSugerencias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [primerAcceso, setPrimerAcceso] = useState(true);
    const [anioMin, setAnioMin] = useState();
    const [anioMax, setAnioMax] = useState();
    const [datePickerInicializado, setDatePickerInicializado] = useState(false);
    const URL_API_TOKEN =
        'https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024';
    const URL_API_NOTICIAS =
        'https://dhernandeza.inaeba.edu.mx/public/getNoticiaActiva/';
    const URL_API_STORAGE = 'https://storage.inaeba.edu.mx/public/getFile/';

    const getDatos = () => {
        const anioActual = new Date().getFullYear();
        const mesActual = new Date().getMonth() + 1;
        getNoticias(mesActual, anioActual);
    };

    const getNoticias = (mes, anio) => {
        axios
        .post(URL_API_TOKEN)
        .then(({ data: { access_token } }) => {
            if (access_token) {
            axios
                .get(`${URL_API_NOTICIAS + anio}/${mes}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then(({ data }) => {
                    const noticias = [];

                    if (data?.length > 0) {
                        let lista = data;

                        for (var i = 0; i < lista.length; i++) {
                            noticias.push({
                                id: lista[i].id,
                                nombre_archivo: lista[i].nombre_archivo,
                                url: URL_API_STORAGE + lista[i].nombre_archivo,
                                titulo: lista[i].titulo,
                                tooltip: lista[i].titulo,
                                descripcion: lista[i].descripcion,
                                fecha_publicacion: lista[i].fecha_publicacion
                            });
                        }
                    }

                    const anioMin = noticias.reduce((min, noticia) => {
                        const anio = parseInt(noticia.fecha_publicacion.split('-')[0]);
                        return anio < min ? anio : min;
                    }, Infinity);
                    const anioMax = noticias.reduce((max, noticia) => {
                        const anio = parseInt(noticia.fecha_publicacion.split('-')[0]);
                        return anio > max ? anio : max;
                    }, -Infinity);
                    setListaNoticias(noticias);
                    setCargando(false);
                    setAnioMin(anioMin);
                    setAnioMax(anioMax);

                    if (primerAcceso || listaSugerencias.length === 0) {
                        setListaSugerencias(noticias);
                        setPrimerAcceso(false);
                    }
                })
                .catch((error) => console.log(error));
            }
        })
        .catch((error) => console.log(error));
    };

    const getNoticia = (idNoticia) => window.location.href = `./nota/${idNoticia}`;

    const inicializarDatePicker = () => {
        $(".date-picker").datepicker({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: "MM yy",
            minDate: new Date(anioMin, 0, 1),
            maxDate: new Date(anioMax, 11, 1),
            defaultDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            onClose: (dateText, inst) => {
                $(".date-picker").datepicker(
                    "setDate",
                    new Date(inst.selectedYear, inst.selectedMonth, 1)
                );
                getNoticias(inst.selectedMonth + 1, inst.selectedYear);
            },
        });

        $(".date-picker").datepicker(
            "setDate",
            new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        );

        setDatePickerInicializado(true);
    };

    useEffect(() => anioMin && anioMax && !datePickerInicializado && inicializarDatePicker(), [anioMin, anioMax])

    useEffect(() => getDatos(), []);

    return (
        <Row>
            <Col xs={12} sm={8} md={8} lg={8}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Subtitle className="row-lin2">Elija la combinación de mes y año</Card.Subtitle>
                                <div className="input-group mb-3 row-lin2">
                                    <span className="input-group-text" id="basic-addon1">Fecha: </span>
                                    <input type="text" className="form-control date-picker" placeholder="MM/yyyy" aria-label="Fecha" aria-describedby="Fecha"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div>
                    {
                        cargando ?
                        (
                            <div className="text-center" style={{height:"200px"}}>
                                <div className="spinner-border m-5" style={{width:"3rem",height:"3rem"}} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : listaNoticias.length ?
                        (
                            <React.Fragment>
                                {listaNoticias.map(({ id, nombre_archivo, titulo, descripcion })=>{
                                    return(
                                        <Card key={id} className="mb-2">
                                            <Row style={{marginLeft:"2px", marginRight:"2px"}}>
                                                <Col xs={12} sm={12} md={2} lg={2} xl={2} className="text-center">
                                                    <img className="rounded" width="100%" src={URL_API_STORAGE + nombre_archivo} title={titulo} alt={titulo}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                                                    <div className="container">
                                                        <h6><a className="linkNoticias" href="#" onClick={() => getNoticia(id)}>{titulo}</a></h6>
                                                        <hr/>
                                                        <div className="resumenNoticia" dangerouslySetInnerHTML={{ __html: descripcion }} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    );
                                })}
                            </React.Fragment>
                        ) :
                        (
                            <div className="alert alert-success" role="alert">
                                <h4 className="alert-heading text-center">¡Upps No hemos encontrado noticias este mes!</h4>
                                <hr/>
                                <p className="mb-0">Parece que no se han registrado noticias en el mes seleccionado, si deseas puedes seleccionar una fecha diferente.</p>
                            </div>
                        )
                    }
                </div>
            </Col>
        </Row>
    );
}

ReactDOM.render(<Noticias/>, document.getElementById("reactNoticias"));
