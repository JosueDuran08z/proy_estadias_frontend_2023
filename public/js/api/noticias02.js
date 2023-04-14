
const { useState } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

class Noticias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            listaNoticias:[],
            leerNoticia:false,
            noticia:{},
            listaSugerencias:[],
            cargando:false,
            primerAcceso:true,
            anioMin:null,
            anioMax:null,
            URL_API_TOKEN: "https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024",
            URL_API_BANNERS: "https://dhernandeza.inaeba.edu.mx/public/getBannerActivo",
            URL_API_STORAGE: "https://storage.inaeba.edu.mx/public/getFile/"
        };
    }

    componentDidMount() {
        this.getDatos();
    }

    getToken() {
        axios.post(URL_API_TOKEN).then(({ data : { access_token } }) => setToken(access_token))
            .catch(error => console.log(error));
    }

    getDatos(){
        let context = this;
        axios
            .get(`/public/anio`)
            .then(function(response){
                let anios = [];
                response.data.forEach(anio => {
                    anios.push(anio.anios);
                });

                const anioActual = new Date().getFullYear();

                if (!anios.includes(anioActual))
                    anios.push(anioActual);

                context.setState({
                    anioMin:Math.min.apply(null,anios),
                    anioMax:Math.max.apply(null,anios)
                });
                context.getNoticias((new Date().getMonth()+1),(new Date().getFullYear()));
                context.inicializarDatePicker();
            })
            .catch(function(error){
                console.log(error);
            });
    }

    getNoticias = (mes, anio) =>{
        let context=this;
        let noticias = [];
        this.setState({
            cargando:true
        });
        console.clear();
        console.log(mes, anio);
        /* axios
            .get(`/public/listanoticias/${anio}/mes/${mes}`)
            .then(function(response){
                if(response.data.length > 0){
                    let lista = response.data;
                    for(var i = 0; i < lista.length; i++){
                        noticias.push(
                            {
                                idNoticia:lista[i].mnot_ID,
                                rutaFoto:"https://inaeba.guanajuato.gob.mx/n/archivos/media/"+lista[i].elemento[0].demp_archivo,
                                titular:lista[i].mnot_titular,
                                tooltip:lista[i].elemento[0].demp_tooltip,
                                descripcion:lista[i].mnot_noticia
                            }
                        );
                    }
                }

                context.setState({
                    listaNoticias: noticias,
                    cargando:false
                });
                if(context.state.primerAcceso || context.state.listaSugerencias.length === 0){
                    context.setState({
                        listaSugerencias:noticias,
                        primerAcceso:false
                    });
                }
            })
            .catch(function(error){
                console.log(error);
            }); */
        const noticiasArray = [
            {
                id: 1,
                nombre_archivo: "OzHZtP46NpdmZu9dbbAgLvnyXBI139Ptvpb1y5BI.jpg",
                titulo: "Noticia 1",
                descripcion: `
                    <h3><b>Eréndira certificó secundaria y asegura tener metas muy altas.
                    </b></h3><p>
                    <br>León,
                    Guanajuato a 22 de enero de 2023. La decisión de retomar los estudios
                    con el Instituto de Alfabetización y Educación Básica para Adultos
                    (INAEBA) le cambio la vida a María Eréndira Ortiz Picón.
                    <br>
                    <br>“¡Ahora
                    quiero estudiar la prepa!, mi meta es estar en un trabajo fijo en el
                    área de contabilidad o haciendo un inventario; ya no quiero sacrificarme
                    tanto como antes, porque, aunque trabajara de empleada en una casa, era
                    una friega”.
                    <br>
                    <br>Luego de certificar la secundaria con INAEBA,
                    Eréndira puso una lonchería donde puede equilibrar el tiempo con su
                    familia y podrá continuar con sus estudios de preparatoria.
                    <br>
                    <br>Tiene
                    5 hijos, para quienes busca ser un ejemplo y asegura que con el apoyo
                    de su esposo Isaac, logró obtener su certificado. Agregó que se siente
                    agradecida con los asesores académicos del instituto quiénes le
                    brindaron todas las herramientas que necesitaba.
                    <br>
                    </p>
                `
            },
            {
                id: 2,
                nombre_archivo: "c5pV6KtSCeMElSzUaHpVPcI1yAzHQmziDmUqTduE.jpg",
                titulo: "Noticia 2",
                descripcion: `
                    <h3><i>Además se ofrece la incorporación a los programas educativos para que
                    las personas de 15 años y más, aprendan a leer, a escribir, terminen la
                    primaria y secundaria.
                    </i></h3><p>
                    <br><font color="#ffffff"><span style="background-color: rgb(0, 0, 0);">León, Guanajuato a 15 de enero de 2022.
                    El Instituto de Alfabetización y Educación Básica para Adultos (INAEBA)
                    tiene presencia en el Feria Estatal de León 2023 para promocionar los
                    servicios educativos para las personas de 15 años y más que requieran
                    aprender a leer, a escribir, o concluir la educación básica.
                    <br></span></font>
                    <font color="#ffffff"><span style="background-color: rgb(0, 0, 0);"><br>Dentro
                    del Pabellón Guanajuato se ubica el stand del instituto en la sala B300
                    y en el estacionamiento de poliforum se colocó la Unidad Móvil, en
                    ambos se puede presentar el Examen Único de Reconocimiento de Saberes
                    donde se obtiene el resultado de manera inmediata, quienes lo acreditan
                    podrán recibir el certificado oficial de educación básica.
                    </span></font></p>
                `
            }
        ];

        context.setState({
            listaNoticias: noticiasArray,
            cargando:false
        });

        if(context.state.primerAcceso || context.state.listaSugerencias.length === 0){
            context.setState({
                listaSugerencias:noticiasArray,
                primerAcceso:false
            });
        }
    }

    getNoticia = (idNoticia) =>{
        console.log('noticia #: '+idNoticia);
        window.location.href='./nota/'+idNoticia;
        let context = this;
        axios
            .get(`/public/noticia/${idNoticia}`)
            .then(function(response){
                if(response.data.length > 0){
                    let noti = response.data[0];
                    let elementos = [];
                    for(var i = 0; i<noti.elemento.length;i++){
                        elementos.push({
                            rutaFoto:"https://inaeba.guanajuato.gob.mx/n/archivos/media/"+noti.elemento[i].demp_archivo,
                            tooltip:noti.elemento[i].demp_tooltip,
                            idFoto:noti.elemento[i].demp_ID
                        });
                    }
                    context.setState({
                        leerNoticia:true,
                        noticia:{
                            idNoticia: noti.mnot_ID,
                            titular: noti.mnot_titular,
                            texto:noti.mnot_noticia,
                            elemento:elementos
                        }
                    });
                }

            })
            .catch(function(error){
                console.log(error);
            });
    }

    regresar = () =>{
        this.setState({
            leerNoticia:false,
            noticia:[]
        });
    }

    inicializarDatePicker = () =>{
        let context = this;
        $('.date-picker').datepicker( {
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'MM yy',
            minDate: new Date(context.state.anioMin,0,1),
            maxDate: new Date(context.state.anioMax,11,1),
            defaultDate: new Date(new Date().getFullYear(), new Date().getMonth(),1),
            onClose: function(dateText, inst) {
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
                context.getNoticias(inst.selectedMonth+1, inst.selectedYear);
            }
        });
        $('.date-picker').datepicker('setDate', new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    }

    render() {
        return (
            <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                    <Row className={this.state.leerNoticia ? "visually-hidden":""}>
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
                    {!this.state.leerNoticia ?
                        (
                            <div>
                                {this.state.cargando ?
                                    (
                                        <div className="text-center" style={{height:"200px"}}>
                                            <div className="spinner-border m-5" style={{width:"3rem",height:"3rem"}} role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ):(
                                        <React.Fragment>
                                            {this.state.listaNoticias.length > 0 ?
                                                (
                                                    <React.Fragment>
                                                        {this.state.listaNoticias.map(({ id, nombre_archivo, titulo, descripcion })=>{
                                                            return(
                                                                <Card key={id} className="mb-2">
                                                                    <Row style={{marginLeft:"2px", marginRight:"2px"}}>
                                                                        <Col xs={12} sm={12} md={2} lg={2} xl={2} className="text-center">
                                                                            <img className="rounded" width="100%" src={this.state.URL_API_STORAGE + nombre_archivo} title={titulo} alt={titulo}/>
                                                                        </Col>
                                                                        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                                                                            <div className="container">
                                                                                <h6><a className="linkNoticias" href="#" onClick={()=>this.getNoticia(id)}>{titulo}</a></h6>
                                                                                <hr/>
                                                                                <div className="resumenNoticia" dangerouslySetInnerHTML={{ __html: descripcion }} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </Card>
                                                            );
                                                        })}
                                                    </React.Fragment>
                                                ):(
                                                    <div className="alert alert-success" role="alert">
                                                        <h4 className="alert-heading text-center">¡Upps No hemos encontrado noticias este mes!</h4>
                                                        <hr/>
                                                        <p className="mb-0">Parece que no se han registrado noticias en el mes seleccionado, si deseas puedes seleccionar una fecha diferente.</p>
                                                    </div>
                                                )
                                            }

                                        </React.Fragment>
                                    )
                                }

                            </div>
                        ):(
                            <div>
                                <h1 className="text-center">{this.state.noticia.titular}</h1>
                                <div className="fotonot">
                                    {this.state.noticia.elemento.map((foto)=>{
                                        return(
                                            <img className="liFoto rounded" key={foto.idFoto} src={foto.rutaFoto} width="262" alt={foto.tooltip} title={foto.tooltip} />
                                        );
                                    })}
                                </div>
                                <div className="noticia text-justify text-raw">
                                    {this.state.noticia.texto}
                                </div>
                                <Row>
                                    <Col xs={10} sm={10} md={5} lg={4} xl={4} className="d-grid">
                                        <Button variant="info" onClick={()=>this.regresar()}>
                                            <i className="bi bi-arrow-left-circle"></i> Regresar
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        )
                    }
                </Col>
                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <div className="dest-he">
                        {this.state.leerNoticia ?
                            (
                                <Table borderless>
                                    <tbody>
                                        {this.state.listaSugerencias.map(({id, nombre_archivo, titulo}) =>{
                                            return (
                                                <tr height="130" key={id}>
                                                    <td width="51%">
                                                        <img src={this.state.URL_API_STORAGE + nombre_archivo} width="173" alt={tooltip} title={tooltip} className="fotoland"/>
                                                    </td>
                                                    <td width="49%" className="align-middle">
                                                        <a className="linkNoticias" href="#" onClick={()=>this.getNoticia(id)}>
                                                            {titular}
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            ):(
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoyinaeba%2F&amp;tabs=timeline&amp;width=320&amp;height=450&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
                                    width="100%"
                                    height="450"
                                    style={{ border:"none",overflow:"hidden" }}
                                    scrolling="no"
                                    allowtransparency="true"
                                ></iframe>
                            )
                        }
                    </div>
                </Col>
            </Row>
        );
    }
}

ReactDOM.render(<Noticias/>, document.getElementById("reactNoticias"));
