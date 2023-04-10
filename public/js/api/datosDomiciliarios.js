const { useState, useEffect, useRef, forwardRef, useImperativeHandle } = React;
const DatosDomiciliarios = forwardRef((props, ref) =>{

    const { Row, Col, Badge } = ReactBootstrap;
    const [ paises, setPaises ] = useState([]);
    const [ estados, setEstados ] = useState([]);
    const [ municipios, setMunicipios ] = useState([]);
    const [ localidades, setLocalidades ] = useState([]);
    const [ asentamientos, setAsentamientos ] = useState([]);
    const [ estadosUSA, setEstadosUSA ] = useState([]);
    const [ condadosUSA, setCondadosUSA ] = useState([]);
    const [ ciudadesUSA, setCiudadesUSA ] = useState([]);
    const [ vialidades, setVialidades ] = useState([]);
    const [ migrante, setMigrante ] = useState(false);
    const [ id_Estado, setIdEstado ] = useState("");
    const [ id_Municipio, setIdMunicipio ] = useState("");
    const [ id_pais, setIdPais ] = useState(1);
    const [ paisError, setPaisError ] = useState(false);
    const [ estadoError, setEstadoError ] = useState(false);
    const [ municipioError, setMunicipioError ] = useState(false);
    const [ localidadError, setLocalidadError ] = useState(false);
    const [ tipoAsentamientoError, setTipoAsentamientoError ] = useState(false);
    const [ nombreAsentamientoError, setNombreAsentamientoError ] = useState(false);
    const [ tipoVialidadError, setTipoVialidadError ] = useState(false);
    const [ nombreVialidadError, setNombreVialidadError ] = useState(false);
    const [ tipoVialidad1Error, setTipoVialidad1Error ] = useState(false);
    const [ nombreVialidad1Error, setNombreVialidad1Error ] = useState(false);
    const [ tipoVialidad2Error, setTipoVialidad2Error ] = useState(false);
    const [ nombreVialidad2Error, setNombreVialidad2Error ] = useState(false);
    const [ noExteriorError, setNoExteriorError ] = useState(false);
    const [ codigoPostalError, setCodigoPostalError ] = useState(false);
    const [ estadoEUAError, setEstadoEUAError ] = useState();
    const [ condadoEUAError, setCondadoEUAError ] = useState();
    const [ ciudadEUAError, setCiudadEUAError ] = useState();
    const [ estadoDeshabilitado, setEstadoDeshabilitado ] = useState(true);
    const [ estadoDefault, setEstadoDefault ] = useState("11");


    const [cmbModalidad, setCmbModalidad] = useState(5);

    useImperativeHandle(ref, () => ({
        setErrores() {
            setPaisError(($("#slcPais").val() === "0" || $("#slcPais").val() === null));
            setEstadoError(($("#slcEstado").val() === "0" || $("#slcEstado").val() === null));
            setMunicipioError(($("#slcMunicipio").val() === "0" || $("#slcMunicipio").val() === null));
            setLocalidadError(($("#slcLocalidad").val() === "0" || $("#slcLocalidad").val() === null));
            setTipoAsentamientoError(($("#slcAsentHum").val() === "0" || $("#slcAsentHum").val() === null));
            setNombreAsentamientoError(($("#txtAsentHum").val() === "" || $("#txtAsentHum").val() === null));
            setTipoVialidadError(($("#slcVialidad").val() === "0" || $("#slcVialidad").val() === null));
            setNombreVialidadError(($("#txtVialidad").val() === "" || $("#txtVialidad").val() === null));
            setTipoVialidad1Error(($("#slcVialidad1").val() === "0" || $("#slcVialidad1").val() === null));
            setNombreVialidad1Error(($("#txtVialidad1").val() === "" || $("#txtVialidad1").val() === null));
            setTipoVialidad2Error(($("#slcVialidad2").val() === "0" || $("#slcVialidad2").val() === null));
            setNombreVialidad2Error(($("#txtVialidad2").val() === "" || $("#txtVialidad2").val() === null));
            setNoExteriorError(($("#txtNumExt").val() === "" || $("#txtNumExt").val() === null));
            setCodigoPostalError(($("#txtCodigoPostal").val() === "" || $("#txtCodigoPostal").val() === null));
            setEstadoEUAError(($("#slcEstadoUSA").val() === "0" || $("#slcEstadoUSA").val() === null));
            setCondadoEUAError(($("#slcCondadoUSA").val() === "0" || $("#slcCondadoUSA").val() === null));
            setCiudadEUAError(($("#slcCiudadUSA").val() === "0" || $("#slcCiudadUSA").val() === null));
            
            if(paisError || estadoError || municipioError || localidadError || tipoAsentamientoError ||
                nombreAsentamientoError || tipoVialidadError || nombreVialidadError || tipoVialidad1Error ||
                nombreVialidad1Error ||tipoVialidad2Error ||
                nombreVialidad2Error || noExteriorError ||
                codigoPostalError || estadoEUAError || condadoEUAError || ciudadEUAError
            ){ props.setErrorDatosDomicilio(true);
            } else { props.setErrorDatosDomicilio(false); }
        }
    }));

    useEffect(() => {
        getPaises();
        getEstados();
        getAsentamientos();
        getVialidades();
        if(props.domicilioAlmacenado){
            cargarDomicilioAlmacenado();
        }else{
            // Se establece por default el estado de guanajuato
            getMunicipios("11",false);
        }
    },[props.nombrePreRegistro]);

    const cargarDomicilioAlmacenado = () =>{
        let dom = props.domicilioAlmacenado[0];
        setEstadoDeshabilitado(false);
        $("#slcEstado").val(dom.id_edo);
        getMunicipios(dom.id_edo,true);
        getLocalidades(dom.id_mpio,true);
        $("#slcAsentHum").val(dom.id_tAsenHum);
        $("#txtAsentHum").val(dom.nombreAsent);
        $("#slcVialidad").val(dom.id_tVial);
        $("#txtVialidad").val(dom.nombreVialidad);
        $("#txtNumExt").val(dom.noExt);
        $("#txtNumInt").val(dom.noInterior);
        $("#txtCodigoPostal").val(dom.cp);
        $("#slcVialidad1").val(dom.id_tVial1);
        $("#txtVialidad1").val(dom.nombreVialiadad1);
        $("#slcVialidad2").val(dom.id_tVial2);
        $("#txtVialidad2").val(dom.nombreVialiadad2);
    }

    const getAsentamientos = () => {
        axios
            .get(`/public/asentamiento`)
            .then(function (response) {
                setAsentamientos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getVialidades = () => {
        axios
            .get(`/public/vialidad`)
            .then(function (response) {
                setVialidades(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });      
    };

    const getPaises = () => {
        setPaises([{id:1,nombre:"México"},{id:2,nombre:"Estados Unidos"}]);
    };

    const getEstados = () => {
        axios
            .get("/public/estados")
            .then(function (response) {
                setEstados(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setMunicipios([]);
        setLocalidades([]);
    };

    const getMunicipios = (value,almacenado) =>{
        setEstadoDefault(value);
        setIdEstado(value);
        setEstadoError(false);
        axios
            .get(`/public/municipios/${value}`)
            .then(function (response) {
                setMunicipios(response.data);
                if(almacenado){
                    $("#slcMunicipio").val(props.domicilioAlmacenado[0].id_mpio);
                }else{
                    $("#slcLocalidad").val("0");
                    $("#slcMunicipio").val("0");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        setLocalidades([]);
    }

    const getLocalidades = (value,almacenado) => {
        setIdMunicipio(value);
        setMunicipioError(false);
        axios
            .get(`/public/localidades/${almacenado ? props.domicilioAlmacenado[0].id_edo : id_Estado}/id_mun/${value}`)
            .then(function (response) {
                setLocalidades(response.data);
                if(almacenado){
                    $("#slcLocalidad").val(props.domicilioAlmacenado[0].id_local);
                }else{
                    $("#slcLocalidad").val(0);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const esMigrante = (event) =>{
        setIdPais(event.target.value);
        if(event.target.value == 1){
            setMigrante(false);
            setEstadoEUAError(false);
            setCondadoEUAError(false);
            setCiudadEUAError(false);
            setEstadoDeshabilitado(true);
            setEstadoDefault("11");
            getMunicipios("11",false);
            setCmbModalidad(1);
        }else{ // Vive en EUA
            setMigrante(true);
            getEstadosUSA();
            setCmbModalidad(1);
            setEstadoDeshabilitado(false);
            setEstadoDefault("0");
            $("#slcMunicipio").val(0);
            $("#slcLocalidad").val(0);
            setMunicipios([]);
            setLocalidades([]);
        }
    }

    const getEstadosUSA = () => {
        axios
            .get(`public/estadosUS`)
            .then(function (response) {
                setEstadosUSA(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setCondadosUSA([]);
        setCiudadesUSA([]);
    };

    const getCondados = (event) => {
        axios
            .get(`/public/condadosUS/${event.target.value}`)
            .then(function (response) {
                setCondadosUSA(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setCiudadesUSA([]);
    };

    const getCiudades = (event) => {
        axios
            .get(`/public/ciudadUS/${event.target.value}`)
            .then(function (response) {
                setCiudadesUSA(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const changeValue = (e) => {
        //slcPais
        let pais = document.getElementById('slcPais').value;

        if (pais == 2) {
            document.getElementById('OcultarModalidad').style.display="none";
            document.getElementById('slcModalidad').value=1;
            let valor = document.getElementById('slcModalidad').value;
        }else{
            document.getElementById('OcultarModalidad').style.display="block";
        }
        
        
    }

    return(
        <React.Fragment>
            <div>
                <h3><span className="badge bg-light text-dark" style={{"width":"100%"}}>Datos Domiciliarios</span></h3>
            </div>

            <Row className={props.tipoPreRegistro !== "a370bd77203d4b13df42d0b76b201b96" ? "visually-hidden":""}>
                <Col xs={12}>
                <label className="form-label"><i className="bi bi-asterisk text-danger"></i> ¿Radica en México o en Estados Unidos?</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="lblPais"><i className="bi bi-map-fill"></i></span>
                    <select
                        className={"form-select" + (paisError ? " is-invalid":"")}
                        aria-label="País"
                        defaultValue="1"
                        id="slcPais"
                        aria-describedby="msgErrorPais"
                        onClick={(e) => setPaisError((e.target.value === "0" || e.target.value === null))}
                        onChange={(e) =>{
                            esMigrante(e); setPaisError(false);
                            changeValue();
                        }
                        }
                    >
                        <option disabled value="0">
                            Selecciona una opción
                        </option>
                        {paises.map((i) => {
                            return (
                                <option
                                    key={"Option" + i.id}
                                    value={i.id}
                                >
                                    {i.nombre}
                                </option>
                            );
                        })}
                    </select>
                    <div id="msgErrorPais" className="invalid-feedback">El campo es obligatorio.</div>
                </div>
                </Col>
            </Row>

            {migrante ? 
                (<React.Fragment>
                    <Row>
                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Estado Americano</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblEdoUSA"><i className="bi bi-geo-alt-fill"></i></span>
                            <select
                                className={"form-select" + (estadoEUAError ? " is-invalid" : "")}
                                aria-label="Estado USA"
                                defaultValue="0"
                                id="slcEstadoUSA"
                                aria-describedby="msgErrorEstadoEUA"
                                onClick={(e) => setEstadoEUAError((e.target.value === "0" || e.target.value === null))}
                                onChange={(e) => {getCondados(e); setEstadoEUAError(false);}}
                                required={id_pais != null && id_pais == 2}
                            >
                                <option disabled value="0">
                                    Selecciona una opción
                                </option>
                                {estadosUSA.map((i) => {
                                    if(i.st_name_state){
                                        return (
                                            <option
                                                key={"Option" + i.st_id_state}
                                                value={i.st_id_state}
                                            >
                                                {i.st_name_state}
                                            </option>
                                        );
                                    }
                                })}
                            </select>
                            <div id="msgErrorEstadoEUA" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </Row>

                    <Row>
                        <Col xs={12} sm={6}>
                            <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Condado</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblCondadoUSA"><i className="bi bi-geo-alt-fill"></i></span>
                                <select
                                    className={"form-select" + (condadoEUAError ? " is-invalid" : "")}
                                    aria-label="Condado USA"
                                    defaultValue="0"
                                    id="slcCondadoUSA"
                                    aria-describedby="msgErrorCondadoEUA"
                                    onClick={(e) => setCondadoEUAError((e.target.value === "0" || e.target.value === null))}
                                    onChange={(e) => {getCiudades(e); setCondadoEUAError(false);}}
                                    required={id_pais != null && id_pais == 2}
                                >
                                    <option disabled value="0">
                                        Selecciona una opción
                                    </option>
                                    {condadosUSA.map((i) => {
                                        return (
                                            <option
                                                key={"Option" + i.co_id_county}
                                                value={i.co_id_county}
                                            >
                                                {i.co_name_county}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div id="msgErrorCondadoEUA" className="invalid-feedback">El campo es obligatorio.</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Ciudad</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="lblCiudadUSA"><i className="bi bi-geo-alt-fill"></i></span>
                                <select
                                    className={"form-select" + (ciudadEUAError ? " is-invalid": "")}
                                    aria-label="Ciudad USA"
                                    defaultValue="0"
                                    id="slcCiudadUSA"
                                    aria-describedby="msgErrorCiudadEUA"
                                    onClick={(e) =>  setCiudadEUAError((e.target.value === "0" || e.target.value === null))}
                                    onChange={(e) => {setCiudadEUAError(false);}}
                                    required={id_pais != null && id_pais == 2}
                                >
                                    <option disabled value="0">
                                        Selecciona una opción
                                    </option>
                                    {ciudadesUSA.map((i) => {
                                        return (
                                            <option
                                                key={"Option" + i.ci_id_city_long}
                                                value={i.ci_id_city_long}
                                            >
                                                {i.ci_city_name}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div id="msgErrorCiudadEUA" className="invalid-feedback">El campo es obligatorio.</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Badge bg="secondary">
                            <h6 className="mb-0 text-wrap">
                                A continuación ingrese un domicilio en México donde podamos hacer entrega de documentación.
                            </h6>
                        </Badge>
                    </Row>
                </React.Fragment>
                )
                :
                ('')}

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Entidad Federativa</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblEdo"><i className="bi bi-geo-alt-fill"></i></span>
                        <select
                            className={"form-select" + (estadoError ? " is-invalid" : "")}
                            aria-label="Estado"
                            value={props.tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64" ? "11" : estadoDefault}
                            disabled={estadoDeshabilitado}
                            id="slcEstado"
                            aria-describedby="msgErrorEstado"
                            onClick={(e) => setEstadoError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) => getMunicipios(e.target.value,false)}
                            required
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {estados.map((i) => {
                                return (
                                    <option
                                        key={"Option" + i.id_edo}
                                        value={i.id_edo}
                                    >
                                        {i.edo_desc}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorEstado" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Municipio</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblMpio"><i className="bi bi-geo-alt-fill"></i></span>
                        <select
                            className={"form-select" + (municipioError ? " is-invalid" : "" )}
                            aria-label="Municipio"
                            defaultValue="0"
                            id="slcMunicipio"
                            aria-describedby="msgErrorMunicipio"
                            onClick={(e) => setMunicipioError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e)=>getLocalidades(e.target.value,false)}
                            required
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {municipios.map((i) => {
                                return (
                                    <option
                                        key={"Option" + i.id_mpio}
                                        value={i.id_mpio}
                                    >
                                        {i.mpio_desc}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorMunicipio" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Localidad</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblLoc"><i className="bi bi-geo-alt-fill"></i></span>
                        <select
                            className={"form-select" + (localidadError ? " is-invalid" : "" )}
                            aria-label="Localidad"
                            defaultValue="0"
                            id="slcLocalidad"
                            aria-describedby="msgErrorLocalidad"
                            onClick={(e) => setLocalidadError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) => {setLocalidadError(false);props.setLocalidad(id_Municipio,e.target.value)}}
                            required
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {localidades.map((i) => {
                                return (
                                    <option
                                        key={"Option" + i.id_local}
                                        value={i.id_local}
                                    >
                                        {i.local_desc}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorLocalidad" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Tipo de asentamiento humano</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblAsentHum"><i className="bi bi-geo-alt-fill"></i></span>
                        <select
                            className={"form-select" + (tipoAsentamientoError ? " is-invalid" : "" )}
                            aria-label="Tipo Asentamiento Humano"
                            defaultValue="0"
                            id="slcAsentHum"
                            aria-describedby="msgErrorTipoAsentamiento"
                            onClick={(e) => setTipoAsentamientoError((e.target.value === "0" || e.target.value === null))}
                            onChange={(e) => {setTipoAsentamientoError(false);}}
                            required
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {asentamientos.map((i) => {
                                return (
                                    <option
                                        key={"Option" + i.itipoasehum}
                                        value={i.itipoasehum}
                                    >
                                        {i.cdesasentamiento}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorTipoAsentamiento" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <div>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre del asentamiento humano</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblAsentHumano"><i className="bi bi-geo-alt-fill"></i></span>
                        <input className={"form-control" + (nombreAsentamientoError ? " is-invalid" : "" )} onBlur={(e) => setNombreAsentamientoError((e.target.value === "" || e.target.value === null))} id="txtAsentHum" type="text" placeholder="Nombre del asentamiento humano" aria-label="Nombre del asentamiento humano" onChange={(e) => {setNombreAsentamientoError(false);}} aria-describedby="msgErrorNombreAsentamiento"/>
                        <div id="msgErrorNombreAsentamiento" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </div>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Tipo de vialidad</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="lblVialidad"><i className="bi bi-geo-alt-fill"></i></span>
                        <select
                            className={"form-select" + (tipoVialidadError ? " is-invalid" : "" )}
                            aria-label="Tipo de vialidad"
                            defaultValue="0"
                            id="slcVialidad"
                            aria-describedby="msgErrorTipoVialidad"
                            onClick={(e) => setTipoVialidadError((e.target.value === "0" || e.target.value === null ))}
                            onChange={(e) => {setTipoVialidadError(false);}}
                        >
                            <option disabled value="0">
                                Selecciona una opción
                            </option>
                            {vialidades.map((i) => {
                                return (
                                    <option
                                        key={"Option" + i.itipovial}
                                        value={i.itipovial}
                                    >
                                        {i.cdesvialidad}
                                    </option>
                                );
                            })}
                        </select>
                        <div id="msgErrorTipoVialidad" className="invalid-feedback">El campo es obligatorio.</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <div>
                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre de la vialidad</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblVialidad"><i className="bi bi-geo-alt-fill"></i></span>
                            <input className={"form-control" + (nombreVialidadError ? " is-invalid" : "")} onBlur={(e) => setNombreVialidadError((e.target.value === "" || e.target.value === null))} id="txtVialidad" type="text" placeholder="Nombre de la vialidad" aria-label="Nombre de la vialidad" onChange={(e) => {setNombreVialidadError(false);}} aria-describedby="msgErrorNombreVialidad"/>
                            <div id="msgErrorNombreVialidad" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div>
                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> No. Exterior</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblNumExt"><i className="bi bi-hash"></i></span>
                            <input className={"form-control" + (noExteriorError ? " is-invalid" : "")} onBlur={(e) => setNoExteriorError((e.target.value === "" || e.target.value === null))} id="txtNumExt" type="text" placeholder="No. Exterior" aria-label="No. Exterior" onChange={(e) => {setNoExteriorError(false);}} aria-describedby="msgErrorNoExterior"/>
                            <div id="msgErrorNoExterior" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                    <div>
                        <label className="form-label">No. Interior</label>
                        <div className="input-group">
                            <span className="input-group-text" id="lblNumInt"><i className="bi bi-hash"></i></span>
                            <input className="form-control" id="txtNumInt" type="text" placeholder="No. Interior" aria-label="No. Interior"/>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div>
                        <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Código Postal</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="lblCodigoPostal"><i className="bi bi-geo-alt-fill"></i></span>
                            <input className={"form-control" + (codigoPostalError ? " is-invalid" : "")} onBlur={(e) => setCodigoPostalError((e.target.value === "" || e.target.value === null))} id="txtCodigoPostal" type="number" placeholder="Código Postal" aria-label="Código Postal" onChange={(e) => {setCodigoPostalError(false);}} aria-describedby="msgErrorCodigoPostal"/>
                            <div id="msgErrorCodigoPostal" className="invalid-feedback">El campo es obligatorio.</div>
                        </div>
                    </div>
                </Col>
            </Row>
            
            {props.tipoPreRegistro === "ffbc17ae7cdad5d436c01d15ce12bf64" || props.tipoPreRegistro === "f84552838654fabe5f015062ef39c214" || props.tipoPreRegistro =='a370bd77203d4b13df42d0b76b201b96' ?
                ('')
                :
                (
                    <React.Fragment>
                        <Row>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Entre calle</h6>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div>
                                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Tipo de vialidad</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="lblVialidad1"><i className="bi bi-geo-alt-fill"></i></span>
                                                        <select
                                                            className={"form-select" + (tipoVialidad1Error ? " is-invalid" : "" )}
                                                            aria-label="Tipo de vialidad"
                                                            defaultValue="0"
                                                            id="slcVialidad1"
                                                            aria-describedby="msgErrorTipoVialidad1"
                                                            onClick={(e) => setTipoVialidad1Error((e.target.value === "0" || e.target.value === null ))}
                                                            onChange={(e) => {setTipoVialidad1Error(false);}}
                                                        >
                                                            <option disabled value="0">
                                                                Selecciona una opción
                                                            </option>
                                                            {vialidades.map((i) => {
                                                                return (
                                                                    <option
                                                                        key={"Option" + i.itipovial}
                                                                        value={i.itipovial}
                                                                    >
                                                                        {i.cdesvialidad}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                        <div id="msgErrorTipoVialidad1" className="invalid-feedback">El campo es obligatorio.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div>
                                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre de la vialidad</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="lblVialidad1"><i className="bi bi-geo-alt-fill"></i></span>
                                                        <input className={"form-control" + (nombreVialidad1Error ? " is-invalid" : "")} onBlur={(e) => setNombreVialidad1Error((e.target.value === "" || e.target.value === null))} id="txtVialidad1" type="text" placeholder="Nombre de la vialidad" aria-label="Nombre de la vialidad" onChange={(e) => {setNombreVialidad1Error(false);}} aria-describedby="msgErrorNombreVialidad1"/>
                                                        <div id="msgErrorNombreVialidad1" className="invalid-feedback">El campo es obligatorio.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">Y calle ..</h6>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div>
                                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Tipo de vialidad</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="lblVialidad2"><i className="bi bi-geo-alt-fill"></i></span>
                                                        <select
                                                            className={"form-select" + (tipoVialidad2Error ? " is-invalid" : "" )}
                                                            aria-label="Tipo de vialidad"
                                                            defaultValue="0"
                                                            id="slcVialidad2"
                                                            aria-describedby="msgErrorTipoVialidad2"
                                                            onClick={(e) => setTipoVialidad2Error((e.target.value === "0" || e.target.value === null ))}
                                                            onChange={(e) => {setTipoVialidad2Error(false);}}
                                                        >
                                                            <option disabled value="0">
                                                                Selecciona una opción
                                                            </option>
                                                            {vialidades.map((i) => {
                                                                return (
                                                                    <option
                                                                        key={"Option" + i.itipovial}
                                                                        value={i.itipovial}
                                                                    >
                                                                        {i.cdesvialidad}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                        <div id="msgErrorTipoVialidad2" className="invalid-feedback">El campo es obligatorio.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div>
                                                    <label className="form-label"><i className="bi bi-asterisk text-danger"></i> Nombre de la vialidad</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="lblVialidad2"><i className="bi bi-geo-alt-fill"></i></span>
                                                        <input className={"form-control" + (nombreVialidad2Error ? " is-invalid" : "")} onBlur={(e) => setNombreVialidad2Error((e.target.value === "" || e.target.value === null))} id="txtVialidad2" type="text" placeholder="Nombre de la vialidad" aria-label="Nombre de la vialidad" onChange={(e) => {setNombreVialidad2Error(false);}} aria-describedby="msgErrorNombreVialidad2"/>
                                                        <div id="msgErrorNombreVialidad2" className="invalid-feedback">El campo es obligatorio.</div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
});