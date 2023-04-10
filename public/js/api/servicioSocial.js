const { useState, useEffect, useRef, forwardRef, useImperativeHandle } = React;
const ServicioSocial = forwardRef((props, ref) =>{

    useImperativeHandle(ref, () => ({
        setErrores() {
            setNombreEscuelaError(($("#txtNombreEscuela").val() === "" || $("#txtNombreEscuela").val() === null));
            setNombreEscuelaError2(($("#txtNombreEscuela").val() !== "" && $("#txtIdEscuela").val() === ""));
            setNuevaEscuelaError(($("#txtNuevaEscuela").val() === "" || $("#txtNuevaEscuela").val() === null));
            setNivelesEducativosError(($("#slcNivelAcademico").val() === "0" || $("#slcNivelAcademico").val() === null));
            setCuatrimestresError(($("#slcCuatrimestre").val() === "0" || $("#slcCuatrimestre").val() === null));
            setActividadesErrror(($("#slcActividad").val() === "0" || $("#slcActividad").val() === null));
            setHorasError(($("#txtHoras").val() === "0" || $("#txtHoras").val() === "" || $("#txtHoras").val() === null));
        }
    }));

    const { Row, Col, Form } = ReactBootstrap;
    const [ sugerencias, setSugerencias ] = useState([]);
    const [ nivelesEducativos, setNivelesEducativos ] = useState([]);
    const [ cuatrimestres, setCuatrimestres ] = useState([]);
    const [ actividades, setActividades ] = useState([]);
    const [ nombreEscuela, setNombreEscuela ] = useState("");
    const [ nuevaEscuela, setNuevaEscuela ] = useState("");
    const [ idEscuela, setIdEscuela ] = useState("");
    const [ nivelesEducativosError, setNivelesEducativosError ] = useState(false);
    const [ cuatrimestresError, setCuatrimestresError ] = useState(false);
    const [ actividadesErrror, setActividadesErrror ] = useState(false);
    const [ horasError, setHorasError ] = useState(false);
    const [ nuevaEscuelaError, setNuevaEscuelaError ] = useState(false);
    const [ nombreEscuelaError, setNombreEscuelaError ] = useState(false);
    const [ nombreEscuelaError2, setNombreEscuelaError2 ] = useState(false);
    const [ checkE, setCheckE ] = useState(false);
    const [ cuatri, setCuatri ] = useState(false);

    useEffect(() => {
        getNivelesEducativos();
        getCuatrimestres();
        getActividades();
    },[props.nombrePreRegistro]);

    const getNivelesEducativos = () => {
        setNivelesEducativos([{id:2,nombre:"Secundaria"},{id:3,nombre:"Preparatoria"},{id:4,nombre:"Universidad"}]);
    };

    const getCuatrimestres = () => {
        setCuatrimestres([
            {id:1,nombre:"Primero"}, {id:2,nombre:"Segundo"}, {id:3,nombre:"Tercero"},
            {id:4,nombre:"Cuarto"}, {id:5,nombre:"Quinto"}, {id:6,nombre:"Sexto"},
            {id:7,nombre:"Séptimo"}, {id:8,nombre:"Octavo"}, {id:9,nombre:"Noveno"},
            {id:10,nombre:"Décimo"}, {id:11,nombre:"Décimo primero"}
        ]);
    };

    const getActividades = () => {
        setActividades([
            { id: 1, nombre: 'Asesor' }, 
            { id: 2, nombre: 'Promotor' }, 
            { id: 3, nombre: 'Apoyo Administrativo' },
            { id: 4, nombre: 'Aplicador' }, 
            /*{ id: 6, nombre: 'Promotor en Linea' }, */
            { id: 7, nombre: 'Otro Proyecto' },
            { id: 8, nombre: 'Prácticas Profesionales' }
        ]);
    };

    const checkedBox = (e) => {
        setCheckE(e.target.checked);  
        if(e){
            setNombreEscuela("");
            $("#txtNombreEscuela").val("");
        }else{
            setNuevaEscuela("");
        }
    }

    const onTextChanged = (e) => {
        setNombreEscuelaError(false);
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
          const regex = new RegExp(`${value}`, 'i');
          suggestions = props.escuelas.sort().filter(v => regex.test(v));
          
          if(suggestions.length === 0)
            suggestions = ['Sin resultados'];
        }else{
            suggestions=[];
        }
        
        setSugerencias(suggestions);
        setNombreEscuela(value);
        setIdEscuela("");
    }

    const suggestionSelected = (value) => {
        if(value === "Sin resultados"){
            setNombreEscuela("");
            setNombreEscuelaError(true);
        }          
        else{
            setNombreEscuela(value);
            $("#txtNombreEscuela").val(value);
        }
        setSugerencias([]);
        
        props.escuelasData.forEach(el => {
          if (el.name === value) {
            setIdEscuela(el.id);
          }
        });

        setNombreEscuelaError2(false);        
    }

    return(
        <React.Fragment>
            <div className="container">
                <div>
                    <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Nivel Académico</span></h3>
                </div>
                <Row>
                    <Col md={12}>
                    {checkE == false ?
                        <React.Fragment>
                            <Form.Label><i className="bi bi-asterisk text-danger"></i> Nombre del Instituto</Form.Label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblEscuela"><i className="bi bi-bank2"></i></span>
                                <Form.Control className={nombreEscuelaError || nombreEscuelaError2 ? " is-invalid" :""} id="txtNombreEscuela" onChange={onTextChanged} onBlur={(e) => {setNombreEscuelaError((e.target.value === "" || e.target.value === null));}} type="text" placeholder="Buscar" aria-describedby="msgErrorNombreEscuela" autoComplete="off" />
                                {sugerencias.length > 0 ?
                                    <div className="col-md-12 justify-content-md-center ">
                                        <div className="srchList chossen">
                                            <ul>
                                                {sugerencias.map((item,i) => 
                                                    <li key={"li-"+i} className="chossenLi" onClick={() => suggestionSelected(item)} value={item}>
                                                        {item}
                                                    </li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    : ''
                                }
                                <div id="msgErrorNombreEscuela" className="invalid-feedback">
                                    {nombreEscuelaError ? "El campo es obligatorio." : nombreEscuelaError2 ? "Debe seleccionar una opción o marcar la casilla para escribir su respuesta." : "" }</div>
                                <input type="hidden" id="txtIdEscuela" value={idEscuela} />
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Form.Label><i className="bi bi-asterisk text-danger"></i> Escribe tu escuela</Form.Label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblNuevaEscuela"><i className="bi bi-bank2"></i></span>
                                <Form.Control className={nuevaEscuelaError ? " is-invalid":""} type="text" id="txtNuevaEscuela" name="txtNuevaEscuela" onChange={(e) => {setNuevaEscuela(e.target.value); setNuevaEscuelaError(false);}} onBlur={(e) => setNuevaEscuelaError((e.target.value === "" || e.target.value === null))} placeholder="Escribe tu escuela" aria-describedby="msgErrorNuevaEscuela"/>
                                <div id="msgErrorNuevaEscuela" className="invalid-feedback">El campo es obligatorio.</div>
                            </div>
                        </React.Fragment>
                    }
                    </Col>
                    <Col md={12}>
                        <Form.Check name="checkE" id="check" type="checkbox" label="No está en la lista" onChange={checkedBox} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label><i className="bi bi-asterisk text-danger"></i> Nivel Educativo</Form.Label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblNivelAcademico"><i className="bi bi-bank2"></i></span>
                            <Form.Select 
                                className={nivelesEducativosError ? " is-invalid":""}
                                id="slcNivelAcademico"
                                name="slcNivelAcademico"
                                defaultValue="0"
                                aria-describedby="msgErrorNivelEducativo"
                                onClick={(e) => setNivelesEducativosError((e.target.value === "0"))}
                                onChange={(e) => {setCuatri(e.target.value > 2); setNivelesEducativosError(false)}}
                            >
                                <option disabled value="0">Selecciona</option>
                                {nivelesEducativos.map((item) => 
                                    <option
                                        key={"Option"+item.id}
                                        value={item.id}>                                    
                                        {item.nombre}
                                    </option>
                                )}
                            </Form.Select>
                            <div id="msgErrorNivelEducativo" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </Col>
                    {cuatri ?
                        <Col>
                            <Form.Label><i className="bi bi-asterisk text-danger"></i> Cuatrimestre</Form.Label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblCuatrimestre"><i className="bi bi-sort-numeric-up-alt"></i></span>
                                <Form.Select 
                                    className={cuatrimestresError ? " is-invalid":""}
                                    id="slcCuatrimestre"
                                    name="slcCuatrimestre"
                                    defaultValue="0"
                                    aria-describedby="msgErrorCuatrimestre"
                                    onClick={(e) => setCuatrimestresError((e.target.value === "0"))}
                                    onChange={(e)=>setCuatrimestresError(false)}
                                >
                                    <option disabled value="0">Selecciona</option>
                                    {cuatrimestres.map((item) => 
                                        <option
                                            key={"Option"+item.id}
                                            value={item.id}>                                    
                                            {item.nombre}
                                        </option>
                                    )}
                                </Form.Select>
                                <div id="msgErrorCuatrimestre" className="invalid-feedback">El campo es obligatorio.</div>
                            </div>
                        </Col>
                        :
                        ''
                    }

                    <Col>
                        <Form.Label><i className="bi bi-asterisk text-danger"></i> Actividad</Form.Label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblActividad"><i className="bi bi-journals"></i></span>
                            <Form.Select 
                                className={actividadesErrror ? " is-invalid":""}
                                id="slcActividad"
                                name="slcActividad"
                                defaultValue="0"
                                aria-describedby="msgErrorActividad"
                                onClick={(e) => setActividadesErrror((e.target.value === "0"))}
                                onChange={(e)=>setActividadesErrror(false)}
                            >
                                <option disabled value="0">Selecciona</option>
                                {actividades.map((item) => 
                                    <option
                                        key={"Option"+item.id}
                                        value={item.id}>                                    
                                        {item.nombre}
                                    </option>
                                )}
                            </Form.Select>
                            <div id="msgErrorActividad" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label><i className="bi bi-asterisk text-danger"></i> Horas</Form.Label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblHoras"><i className="bi bi-clock"></i></span>
                            <Form.Control className={horasError ? " is-invalid":""} type="number" id="txtHoras" name="txtHoras" onChange={(e) => {setHorasError(false);}} onBlur={(e) => setHorasError((e.target.value === "" || e.target.value === null))} placeholder="Número de horas" aria-describedby="msgErrorHoras"/>
                            <div id="msgErrorHoras" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
});
