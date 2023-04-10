const { useState, useEffect, useRef, forwardRef, useImperativeHandle } = React;
const SeguimientoEgresados = forwardRef((props, ref) =>{

    useImperativeHandle(ref, () => ({
        setErrores() {
            setServicioSaludError(($("#slcServicioSalud").val() === "_" || $("#slcServicioSalud").val() === null));
            setLimitacionError(($("#slcLimitacion").val() === "_") || $("#slcLimitacion").val() === null);
            setServicioError(($("#slcServicio").val() === "_") || $("#slcServicio").val() === null);
            setIdiomaError(($("#slcIdioma").val() === "_") || $("#slcIdioma").val() === null);
            setEmpleoError(($("#slcEmpleo").val() === "_") || $("#slcEmpleo").val() === null);
            setOficioError(($("#slcOficio").val() === "_") || $("#slcOficio").val() === null);
            setGradoEstudioError(($("#slcGradoEstudio").val() === "0") || $("#slcGradoEstudio").val() === null);
            setMedioDifusionError(($("#slcMedioDifusion").val() === "0") || $("#slcMedioDifusion").val() === null);
            setVinculacionError(($("#slcVinculacion").val() === "0") || $("#slcVinculacion").val() === null);
        }
    }));

    const { Row, Col } = ReactBootstrap;
    const [ siNo, setSiNo ] = useState([]);
    const [ discapacidades, setDiscapacidades ] = useState([]);
    const [ servicios, setServicios ] = useState([]);
    const [ gradosEstudio, setGradosEstudio ] = useState([]);
    const [ mediosDifusion, setMediosDifusion ] = useState([]);
    const [ vinculaciones, setVinculaciones ] = useState([]);
    const [ servicioSaludError, setServicioSaludError ] = useState(false);
    const [ limitacionError, setLimitacionError ] = useState(false);
    const [ servicioError, setServicioError ] = useState(false);
    const [ idiomaError, setIdiomaError ] = useState(false);
    const [ empleoError, setEmpleoError ] = useState(false);
    const [ oficioError, setOficioError ] = useState(false);
    const [ gradoEstudioError, setGradoEstudioError ] = useState(false);
    const [ medioDifusionError, setMedioDifusionError ] = useState(false);
    const [ vinculacionError, setVinculacionError ] = useState(false);

    useEffect(()=>{
        getSiNo();
        getDiscapacidades();
        getServicios();
        getGradosEstudio();
        getMediosDifusion();
        getVinculaciones();
    },[props.nombrePreRegistro]);

    const getSiNo = ()=>{
        setSiNo([{id:'1', nombre: 'Sí'},{id:'0', nombre:'No'}]);
    };

    const getDiscapacidades = () =>{
        axios
            .get(`/public/limitacion`)
            .then((response) =>{
                setDiscapacidades(response.data);
            })
            .catch((error)=>{

            });
    }

    const getServicios = () =>{
        setServicios([
            {id:'1',nombre:'Primaria'},
            {id:'2',nombre:'Secundaria'},
            {id:'0',nombre:'Niguna de las anteriores'}
        ]);
        /*
            axios
            .get(´/public/servicios´)
            .then((response) =>{
                setServicios(response.data);
            })
            .catch((error)=>{

            });
        */
    }

    const getGradosEstudio = () =>{
        axios
            .get(`/public/appgradoestudio/SEG`)
            .then((response) =>{
                setGradosEstudio(response.data);
            })
            .catch((error)=>{

            });
        
    }

    const getMediosDifusion = () =>{
        axios
            .get(`/public/medio`)
            .then(function (response) {
                setMediosDifusion(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getVinculaciones = () =>{
        axios
            .get(`/public/interes`)
            .then((response) =>{
                setVinculaciones(response.data);
            })
            .catch((error)=>{});
        new SlimSelect({
            select: '#slcVinculacion',
            placeholder: 'Selecciona tus intereses',
            showSearch:false,
            searchText: 'Sin coincidencias',
            searchPlaceholder:'Buscar'
        });
    }

    return (
        <div className="container">
            <div>
                <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Datos de Encuesta</span></h3>
            </div>

            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Cuentas con algún servicio de salud?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblServicioSalud"><i className="bi bi-heart-fill"></i></span>
                        <select
                            className={"form-select" + (servicioSaludError ? " is-invalid":"")}
                            aria-label="Servicio de salud"
                            defaultValue="_"
                            id="slcServicioSalud"
                            aria-describedby="msgErrorServicioSalud"
                            onClick={(e) => setServicioSaludError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>setServicioSaludError(false)}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {siNo.map((i) => {
                                return (
                                    <option
                                        key={"Option_SS_" + i.id}
                                        value={i.id}
                                    >
                                        {i.nombre}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorServicioSalud" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Cuentas con alguna limitación?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblLimitacion"><i className="bi bi-eyeglasses"></i></span>
                        <select
                            className={"form-select" + (limitacionError ? " is-invalid":"")}
                            aria-label="Limitación"
                            defaultValue="_"
                            id="slcLimitacion"
                            aria-describedby="msgErrorLimitacion"
                            onClick={(e) => setLimitacionError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>{setLimitacionError(false);}}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {discapacidades.map((i) => {
                                return (
                                    <option
                                        key={"Option_LM_" + i.id}
                                        value={i.id}
                                    >
                                        {i.limitacion}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorLimitacion" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Estudiaste en el INAEBA tu primaria o secundaria?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblServicio"><i className="bi bi-book-fill"></i></span>
                        <select
                            className={"form-select" + (servicioError ? " is-invalid":"")}
                            aria-label="Antecedente"
                            defaultValue="_"
                            id="slcServicio"
                            aria-describedby="msgErrorServicio"
                            onClick={(e) => setServicioError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>{setServicioError(false);}}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {servicios.map((i) => {
                                return (
                                    <option
                                        key={"Option_S_" + i.id}
                                        value={i.id}
                                    >
                                        {i.nombre}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorServicio" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Hablas Inglés?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblIdioma"><i className="bi bi-translate"></i></span>
                        <select
                            className={"form-select" + (idiomaError ? " is-invalid":"")}
                            aria-label="Idioma"
                            defaultValue="_"
                            id="slcIdioma"
                            aria-describedby="msgErrorIdioma"
                            onClick={(e) => setIdiomaError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>{setIdiomaError(false);}}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {siNo.map((i) => {
                                return (
                                    <option
                                        key={"Option_ID_" + i.id}
                                        value={i.id}
                                    >
                                        {i.nombre}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorIdioma" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Actualmente cuentas con empleo?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblEmpleo"><i className="bi bi-briefcase-fill"></i></span>
                        <select
                            className={"form-select" + (empleoError ? " is-invalid":"")}
                            aria-label="Empleo"
                            defaultValue="_"
                            id="slcEmpleo"
                            aria-describedby="msgErrorEmpleo"
                            onClick={(e) => setEmpleoError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>{setEmpleoError(false);}}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {siNo.map((i) => {
                                return (
                                    <option
                                        key={"Option_EM_" + i.id}
                                        value={i.id}
                                    >
                                        {i.nombre}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorEmpleo" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Sabes o haz practicado algún oficio?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblOficio"><i className="bi bi-brush-fill"></i></span>
                        <select
                            className={"form-select" + (oficioError ? " is-invalid":"")}
                            aria-label="Oficio"
                            defaultValue="_"
                            id="slcOficio"
                            aria-describedby="msgErrorOficio"
                            onClick={(e) => setOficioError((e.target.value === "_" || e.target.value === null))}
                            onChange={(e) =>{setOficioError(false);}}
                        >
                            <option disabled value="_">
                                Selecciona una opción
                            </option>
                            {siNo.map((i) => {
                                return (
                                    <option
                                        key={"Option_OF_" + i.id}
                                        value={i.id}
                                    >
                                        {i.nombre}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorOficio" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Último grado de estudios actual</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblGradoEstudios"><i className="bi bi-bank"></i></span>
                        <select
                            className={"form-select" + (gradoEstudioError ? " is-invalid":"")}
                            aria-label="Grado de estudios"
                            defaultValue="0"
                            id="slcGradoEstudio"
                            aria-describedby="msgErrorGradoEstudios"
                            onClick={(e) => setGradoEstudioError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) =>{setGradoEstudioError(false);}}
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {gradosEstudio.map((i) => {
                                return (
                                    <option
                                        key={"Option_GE_" + i.id_grado}
                                        value={i.id_grado}
                                    >
                                        {i.descripcion_grado}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorGradoEstudios" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Por qué medio te enteraste de este registro?</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblMedioDifusion"><i className="bi bi-megaphone-fill"></i></span>
                        <select
                            className={"form-select" + (medioDifusionError ? " is-invalid":"")}
                            aria-label="Medio Difusión"
                            defaultValue="0"
                            id="slcMedioDifusion"
                            aria-describedby="msgErrorMedioDifusion"
                            onClick={(e) => setMedioDifusionError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) =>{setMedioDifusionError(false);}}
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {mediosDifusion.map((i) => {
                                return (
                                    <option
                                        key={"Option_MD_" + i.id_medio}
                                        value={i.id_medio}
                                    >
                                        {i.medio}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorMedioDifusion" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>
             
             <Row>
                <Col xs={12}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Cuál es tu siguiente(s) meta(s)?</label>
                    <div className="input-group has-validation">
                        <select
                            className={"mb-3 " + (vinculacionError ? " is-invalid":"")}
                            id="slcVinculacion"
                            multiple
                            aria-describedby="msgErrorVinculacion"
                            onClick={(e) => setVinculacionError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) =>{setVinculacionError(false);}}
                        >
                            {vinculaciones.map((i) => {
                                return (
                                    <option
                                        key={"Option_VN_" + i.id}
                                        value={i.id}
                                    >
                                        {i.interes}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorVinculacion" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
             </Row>
        </div>
    );

});