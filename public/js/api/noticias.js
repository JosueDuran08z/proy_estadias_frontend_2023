
const { useState } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaNoticias:[],
            leerNoticia:false,
            noticia:[],
            listaSugerencias:[],
            cargando:false,
            primerAcceso:true,
            anioMin:2017,
            anioMax:2020
        };
    }

    componentDidMount() {
        this.getDatos();
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
        axios
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
            });
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
                                                        {this.state.listaNoticias.map((noticia)=>{
                                                            return(
                                                                <Card key={noticia.idNoticia} className="mb-2">
                                                                    <Row style={{marginLeft:"2px", marginRight:"2px"}}>
                                                                        <Col xs={12} sm={12} md={2} lg={2} xl={2} className="text-center">
                                                                            <img className="rounded" width="100%" src={noticia.rutaFoto} title={noticia.tooltip} alt={noticia.tooltip}/>
                                                                        </Col>
                                                                        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                                                                            <div className="container">
                                                                                <h6><a className="linkNoticias" href="#" onClick={()=>this.getNoticia(noticia.idNoticia)}>{noticia.titular}</a></h6>
                                                                                <hr/>
                                                                                <p className="text-justify resumenNoticia">
                                                                                    {noticia.descripcion}
                                                                                </p>
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
                                        {this.state.listaSugerencias.map((sugerencia) =>{
                                            return (
                                                <tr height="130" key={sugerencia.idNoticia}>
                                                    <td width="51%"> 
                                                        <img src={sugerencia.rutaFoto} width="173" alt={sugerencia.tooltip} title={sugerencia.tooltip} className="fotoland"/>
                                                    </td>
                                                    <td width="49%" className="align-middle">
                                                        <a className="linkNoticias" href="#" onClick={()=>this.getNoticia(sugerencia.idNoticia)}>
                                                            {sugerencia.titular}
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
function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactArea")); 