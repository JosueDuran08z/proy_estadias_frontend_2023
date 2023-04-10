const { useState, useEffect } = React;
const { Modal, Row, Col, Button, Card, Form, Spinner, Tabs, Sonnet, Toast } = ReactBootstrap;

class Curp extends React.Component {
  formato = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3OTI1ODg4NC1hMjBkLTRkYjYtYmE3YS1jZDE0ZDQzZWYzMGEiLCJmZWNoYSI6IjIwMjAtMTAtMDEgMTU6MzU6MjMifQ.yz0zvAZzCS9cbV-x87D7T-dRdHllgDixVEyv0hjs4AE";
  url = 'http://api.inaeba.guanajuato.gob.mx/pl/catalogo_v2/';

  constructor(props) {
    super(props);
    this.state =
    {
      items: [],
      Toast: false,
      suggestions: [],
      txtCurp: '',
      txtCurpError: false,
      txtCurpError2: false,
      formValid: false,
      visualButton: true,
      visualButton2: false,
      txtNombre: '',
      txtApPat: '',
      txtApMat: '',
      txtGenero: '',
      txtNacimiento: '',
      txtEstado: '',
      txtMunicipio: '',
      txtTelefono: '',
      txtTelefonoError: false,
      txtTelefonoError2: false,
      txtCorreo: '',
      txtCorreoError: false,
      txtCorreoError2: false,
      cmbEstado: '',
      cmbEstadoError: false,
      cmbMunicipio: '',
      cmbMunicipioError: false,
      cmbLocalidad: '',
      cmbLocalidadError: false,
      txtColonia: '',
      txtColoniaError: false,
      txtCalle: '',
      txtCalleError: false,
      txtNumero: '',
      txtNumeroError: false,
      txtCP: '',
      txtCPError: false,
      txtNuevaEscuela: '',
      txtNombreEscuela:'',
      txtNuevaEscuelaError: false,
      txtEscuela: 0,
      cmbNivel: '',
      cmbNivelError: false,
      cmbActividad: '',
      cmbActividadError: false,
      actividad: [],
      txtHoras: '',
      txtHorasError: false,
      values: [],
      municipios: [],
      localidad: [],
      nombreEscuela: '',
      nombreEscuelaError: false,
      cmbCuatrimestre: '',
      cmbCuatrimestreErro: false,
      cuatri: false,
      nivelE: [{ id: 2, name: 'Secundaria' }, { id: 3, name: 'Preparatoria' }, { id: 4, name: 'Universidad' }],
      checkE: false,
      enviarInfo: false,
      esculelasR: []
    };
    this.alertbody = {
      body: '',
      variante: '',
      header: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    // this.municipio = this.municipio.bind(this);
    this.formulario = this.formulario.bind(this);
    this.checkedBox = this.checkedBox.bind(this);
    this.checkedBox = this.checkedBox.bind(this);
    this.enviarSubmit = this.enviarSubmit.bind(this);
  }

  isValidCurp(txtCurp) {
    return this.formato.test(txtCurp);
  }
  isValidEmail(txtCorreo) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(txtCorreo);
  }
  isValidTel(txtTelefono) {
    return /^[0-9]+$/.test(txtTelefono);
  }
  handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    if (value.length <= 0 && (name == 'txtCurp')) {
      this.setState({ txtCurpError: true });
      this.setState({ txtCurpError2: false });
    } else {
      this.setState({ txtCurpError: false });
      if (this.isValidCurp(value)) {
        this.setState({ txtCurpError2: false });
      } else {
        this.setState({ txtCurpError2: true });
      }
    }


    /**********Email */

  }
  formulario(e) {
    const name = e.target.name;
    const value = e.target.value;
    const contex = this;
    this.setState({ [name]: value });
    switch (name) {
      case 'txtTelefono':
        if (value.length <= 0 && name === 'txtTelefono') {
          this.setState({ txtTelefonoError: true });
        } else {
          this.setState({ txtTelefonoError: false });
          this.setState({ enviarInfo: true });
          if (this.isValidTel(value)) {
            this.setState({ txtTelefonoError2: false });
            this.setState({ enviarInfo: true });
          } else {
            this.setState({ txtTelefonoError2: true });
          }
        }
        break;
      case 'txtCorreo':
        if (value.length <= 0 && name === 'txtCorreo') {
          this.setState({ txtCorreoError: true });
          //this.setState({ txtCorreoError2: false });
        } else {
          this.setState({ txtCorreoError: false });
          this.setState({ enviarInfo: true });
          if (this.isValidEmail(value)) {
            this.setState({ txtCorreoError2: false });
            this.setState({ enviarInfo: true });
          } else {
            this.setState({ txtCorreoError2: true });
          }
        }
        break;
      case 'cmbEstado':
        if (value == 'Selecciona...' && name == 'cmbEstado') {
          this.setState({ cmbEstadoError: true });
        } else {
          this.setState({ cmbEstadoError: false });
          this.setState({ enviarInfo: true });
        }
        if (value > 0) {
          return this.municipio(value);
        }
        break;
      case 'cmbMunicipio':
        if (value == 'Selecciona Mun...' && name == 'cmbMunicipio') {
          this.setState({ cmbMunicipioError: true });
        } else {
          this.setState({ cmbMunicipioError: false });
          this.setState({ enviarInfo: true });
        }
        if (value > 0) {
          return this.localidadId({ ent: this.state.cmbEstado, mun: this.state.cmbMunicipio });
        }
        break;
      case 'cmbLocalidad':
        if (value == 'Selecciona...' && name == 'cmbLocalidad') {
          this.setState({ cmbLocalidadError: true });
        } else {
          this.setState({ cmbLocalidadError: false });
          this.setState({ enviarInfo: true });
        }
        if (value > 0) {
          this.escuelas({ mun: this.state.cmbMunicipio, loc: this.state.cmbLocalidad });
        }
        break;
      case 'txtColonia':
        if (value.length <= 0 && name === 'txtColonia') {
          this.setState({ txtColoniaError: true });
        } else {
          this.setState({ txtColoniaError: false });
        }

        break;
      case 'txtCalle':
        if (value.length <= 0 && name === 'txtCalle') {
          this.setState({ txtCalleError: true });
        } else {
          this.setState({ txtCalleError: false });
          this.setState({ enviarInfo: true });
        }

        break;
      case 'txtNumero':
        if (value.length <= 0 && name === 'txtNumero') {
          this.setState({ txtNumeroError: true });
        } else {
          this.setState({ txtNumeroError: false });
          this.setState({ enviarInfo: true });
        }

        break;
      case 'txtCP':
        if (value.length <= 0 && name === 'txtCP') {
          this.setState({ txtCPError: true });
        } else {
          this.setState({ txtCPError: false });
          this.setState({ enviarInfo: true });
        }

        break;

      case 'txtNuevaEscuela':
        if (value.length <= 0 && name === 'txtNuevaEscuela') {
          this.setState({ txtNuevaEscuelaError: true });
        } else {
          this.setState({ txtNuevaEscuelaError: false });
        }

        break;

      case 'nombreEscuela':
        if (value.length <= 0 && name === 'nombreEscuela') {
          this.setState({ nombreEscuelaError: true });

        } else {
          this.setState({ nombreEscuelaError: false });
        }

        break;


      case 'cmbNivel':
        if (value == 'Selecciona...' && name == 'cmbNivel') {
          this.setState({ cmbNivelError: true });
        } else {
          this.setState({ cmbNivelError: false });
          this.setState({ enviarInfo: true });
        }
        if (value > 2) {
          this.setState({ cuatri: true });
        }else{
          this.setState({ cuatri: false });
        }
        break;
      case 'cmbCuatrimestre':
        if (value == 'Selecciona...' && name == 'cmbCuatrimestre') {
          this.setState({ cmbCuatrimestreErro: true });
        } else {
          this.setState({ cmbCuatrimestreErro: false });
          this.setState({ enviarInfo: true });
        }
        break;

      case 'cmbActividad':
        if (value == 'Selecciona...' && name == 'cmbActividad') {
          this.setState({ cmbActividadError: true });
        } else {
          this.setState({ cmbActividadError: false });
          this.setState({ enviarInfo: true });
        }
        break;
      case 'txtHoras':
        if (value.length <= 0 && name == 'txtHoras') {
          this.setState({ txtHorasError: true });
        } else {
          this.setState({ txtHorasError: false });
          this.setState({ enviarInfo: true });
        }
        break;


    }



  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  checkedBox(e) {
    const value = e.target.value;
    const c = e.target.checked;
    if (c == true) {
      this.setState({ checkE: c });
      this.setState({ nombreEscuela: '', txtEscuela: 0 });
    } else {
      this.setState({ checkE: c });
      this.setState({ nombreEscuela: '', txtEscuela: 0 });
    }
  }

  verificarCurp(val) {
    const contex = this;
    console.log("valida curp");
    axios
      .get('/public/servicioverificacurp/' + val)
      .then(function (response) {
        console.log(response);
        if (response.data.length > 0) {
          contex.alertbody.header = "Resultados encontrados";
          contex.alertbody.body = "CURP" + ' ' + val + ' ' + 'ya esta registrado...';
          contex.alertbody.variante = "warning";
          contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid: false});
        }else{
          console.log("consultar curp");
          contex.consultarCurp(val);
        }
         
        
      })
      .catch(function (error) {
        contex.alertbody.header = "Lo sentimos algo salió mal";
        contex.alertbody.body = "No se encontraron resultados o el servicio no está disponible, inténtalo más tarde..";
        contex.alertbody.variante = "danger";
        contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid: false });
        // contex.setState({visualButton:true, visualButton2:false});
      });
  };

  consultarCurp(val) {
    const contex = this;
    contex.alertbody.header = "Lo sentimos algo salió mal";
    contex.alertbody.body = "No se encontraron resultados o el servicio no está disponible, inténtalo más tarde..";
    contex.alertbody.variante = "danger";
    axios
      .get('/public/serviciocurp/' + val)
      .then(function (response) {
        console.log(response.data);
        let arr = response.data.split(',');
        if (arr[0] >= 1) {
          contex.setState({
            txtNombre: arr[1],
            txtApPat: arr[2],
            txtApMat: arr[3],
            txtCurp: arr[4],
            txtGenero: arr[5],
            txtNacimiento: arr[6],
            txtEstado: arr[8],
            txtMunicipio: arr[10],
            formValid: true
          });
          contex.consultarEstados(arr[4]);
          contex.setState({ visualButton: true, visualButton2: false, Toast: false, formValid: true});
          console.log("Devuelve datos");
        } else {
          contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid: false });

        }
      })
      .catch(function (error) {
        contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid: false  });
      });
  };


  handleSubmit(e) {
    const { txtCurp, txtCurpError, txtCurpError2, } = this.state;
    this.setState({ txtCurpError: txtCurp ? false : true });
    if (txtCurp && !txtCurpError) {
      this.setState({ txtCurpError2: this.isValidCurp(txtCurp) ? false : true });
    }
    if (txtCurp && txtCurpError != true && txtCurpError2 != true) {
      this.verificarCurp(this.state.txtCurp);
      this.setState({ visualButton: false, visualButton2: true });
    } else {

      this.setState({ formValid: false });

    }
    e.preventDefault();
  }

  consultarEstados(val) {
    const contex = this;
    axios
      .get(contex.url + 'Estado/GetEstado/?icvepais=1&icveentfed=0', { headers: { "Authorization": contex.token } })
      .then(function (response) {
        const resul = response.data;
        contex.setState({ values: resul.estadoMLList });
        contex.actividadEs(val);
      })
      .catch(function (error) {
      });
  };

  actividadEs(val) {
    let act = [{ id: 1, name: 'Asesor' }, { id: 2, name: 'Promotor' }, { id: 3, name: 'Apoyo Administrativo' }, { id: 4, name: 'Aplicador' }, { id: 6, name: 'Promotor en Linea' },
    { id: 7, name: 'Otro Proyecto' }, { id: 8, name: 'Practicas Profecionales' }];
    this.setState({ actividad: act });
  };

  municipio(val) {
    const contex = this;
    if (val > 0) {
      axios
        .get('public/municipios/' + val)
        .then(function (response) {
          contex.setState({ municipios: response.data });

        })
        .catch(function (error) {
        });
    }
  }
  localidadId(val) {
    const contex = this;
    axios
      .get('public/localidades/' + val.ent + '/id_mun/' + val.mun)
      .then(function (response) {
        contex.setState({ localidad: response.data });

      })
      .catch(function (error) {
      });

  }
  escuelas(val) {
    const contex = this;
    axios
      .get('public/escuelas/' + val.mun + '/id_loc/' + val.loc)
      .then(function (response) {
        const result = response.data;
        if (result.length > 0) {
          const resultados = result.map(function (el) {
            return el.esc_nombre + '-' + el.esc_cct;
          });
          const resultados1 = result.map(function (el) {
            return { name: el.esc_nombre + '-' + el.esc_cct, id: el.id_esc };
          });
          contex.setState({ items: resultados });
          contex.setState({ esculelasR: resultados1 });
        }
      })
      .catch(function (error) {
        //  contex.setState({visualButton:true, visualButton2:false});
      });


  }
  nivel() {
    const cuatrimestre = [{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 3, name: 3 }, { id: 4, name: 4 }, { id: 5, name: 5 }, { id: 6, name: 6 }
      , { id: 7, name: 7 }, { id: 8, name: 8 }, { id: 9, name: 9 }, { id: 10, name: 10 }, { id: 11, name: 11 }];

    let cuatrimestreOption = cuatrimestre.map(v => (
      <option key={v.id} value={v.id}>{v.name}</option>
    ));
    return (
      <Col>
        <Form.Label>Cuatrimestre</Form.Label>
        <Form.Select name="cmbCuatrimestre" defaultValue="Selecciona..." onChange={this.handleChange} onBlur={this.formulario}>
          <option disabled>Selecciona...</option>
          {cuatrimestreOption}
        </Form.Select>
        {this.state.cmbCuatrimestreErro ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
      </Col>
    );
  }

  closeModal = () => {
    this.setState({
      Toast: false
    });
  };

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    console.log(value);
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.state.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, nombreEscuela: value }));
  }

  suggestionSelected(value) {
    this.setState(() => ({
      nombreEscuela: value,
      suggestions: []
    }));
    this.state.esculelasR.forEach(el => {
      if (el.name === value) {
        this.setState({ txtEscuela: el.id });
      }
    })
  }

  renderSuggestions() {
    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList chossen">
        <ul>
          {suggestions.map((item) => <li className="chossenLi" onClick={() => this.suggestionSelected(item)} value={item}>{item}</li>)}
        </ul>
      </div>
    );
  }

  escuelasVisible() {
    return (
      <Col><Form.Label>Nombre Instituto</Form.Label>
        <Form.Control value={this.state.nombreEscuela} onChange={this.onTextChanged} type="text" placeholder="Buscar" />
        <div className="col-md-12 justify-content-md-center ">
          {this.renderSuggestions()}
        </div>
        {this.state.nombreEscuelaError ?
          <div className="alert alert-danger mt-2">Es requerido.</div>
          : ''}
      </Col>
    );
  }

  escuelaManual() {
    return (
      <Col>
        <Form.Label>Escribe tu escuela</Form.Label>
        <Form.Control type="text" name="txtNuevaEscuela" value={this.state.txtNuevaEscuela} onChange={this.handleChange} onBlur={this.formulario} placeholder="Escribe tu escuela" />
        {this.state.txtNuevaEscuelaError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
      </Col>
    );
  }

  enviarSubmit(e) {

    const { txtTelefono, txtTelefonoError, txtTelefonoError2, txtCorreo, txtCorreoError, txtCorreoError2, cmbEstado, cmbEstadoError, cmbMunicipio, cmbMunicipioError, cmbLocalidad, cmbLocalidadError,
      txtColonia, txtColoniaError, txtCalle, txtCalleError, txtNumero, txtNumeroError, txtCP, txtCPError, cmbNivel, cmbNivelError, cmbActividad, cmbActividadError, txtHoras, txtHorasError } = this.state;
    this.setState({
      txtTelefonoError: txtTelefono ? false : true, txtCorreoError: txtCorreo ? false : true, cmbEstadoError: cmbEstado ? false : true, cmbMunicipioError: cmbMunicipio ? false : true,
      cmbLocalidadError: cmbLocalidad ? false : true, txtColoniaError: txtColonia ? false : true, txtCalleError: txtCalle ? false : true, txtNumeroError: txtNumero ? false : true, txtCPError: txtCP ? false : true,
      cmbNivelError: cmbNivel ? false : true, cmbActividadError: cmbActividad ? false : true, txtHorasError: txtHoras ? false : true
    });

    if (txtTelefono && txtTelefonoError != true && txtTelefonoError2 != true && txtCorreo && txtCorreoError != true && txtCorreoError2 != true && cmbEstadoError != true && cmbMunicipioError != true && cmbLocalidadError != true &&
      txtColoniaError != true && txtCalleError != true && txtNumeroError != true && txtCPError != true && cmbNivelError != true && cmbActividadError != true && txtHorasError != true) {
        this.guardar(this.state);
        console.log(this.state);
        this.setState({ visualButton: false, visualButton2: true });
    }
    e.preventDefault();
  }

  guardar(val) {
    const bodyFormData = new FormData();
    bodyFormData.append('txtNombre', val.txtNombre);
    bodyFormData.append('txtApPat', val.txtApPat);
    bodyFormData.append('txtApMat', val.txtApMat);
    bodyFormData.append('txtCurp', val.txtCurp);
    bodyFormData.append('txtGenero', val.txtGenero);
    bodyFormData.append('txtNacimiento', val.txtNacimiento);
    bodyFormData.append('txtEstado', val.txtEstado);
    bodyFormData.append('txtMunicipio', val.txtMunicipio);
    bodyFormData.append('txtTelefono', val.txtTelefono);
    bodyFormData.append('txtCorreo', val.txtCorreo);
    bodyFormData.append('cmbEstado', val.cmbEstado);
    bodyFormData.append('cmbMunicipio', val.cmbMunicipio);
    bodyFormData.append('cmbLocalidad', val.cmbLocalidad);
    bodyFormData.append('txtColonia', val.txtColonia);
    bodyFormData.append('txtCalle', val.txtCalle);
    bodyFormData.append('txtNumero', val.txtNumero);
    bodyFormData.append('txtCP', val.txtCP);
    bodyFormData.append('txtEscuela', val.txtEscuela);
    bodyFormData.append('nombreEscuela', val.nombreEscuela);
    bodyFormData.append('cmbNivel', val.cmbNivel);
    bodyFormData.append('cmbActividad', val.cmbActividad);
    bodyFormData.append('txtHoras', val.txtHoras);
    bodyFormData.append('cmbCuatrimestre', val.cmbCuatrimestre);
    bodyFormData.append('txtNuevaEscuela', val.txtNuevaEscuela);


    const contex = this;
    axios({
      method: "post",
      url: "http://172.28.8.81:82/public/guardardatos",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        contex.alertbody.header = "Éxito ";
        contex.alertbody.body = "Se realizo la cuenta correctamente..";
        contex.alertbody.variante = "success";
        contex.setState({ visualButton: true, visualButton2: false, Toast: true, formValid:false });
      })
      .catch(function (response) {
        contex.setState({ visualButton: true, visualButton2: false, Toast: true });
        contex.alertbody.header = "Lo sentimos algo salió mal";
        contex.alertbody.body = "No se encontraron resultados o el servicio no está disponible, inténtalo más tarde..";
        contex.alertbody.variante = "danger";
      });
  }

  alert() {
    return (
      <Alert visible={this.state.Toast}
        body={this.alertbody}
        remoteClose={this.closeModal} />
    );
  }

  render() {

    const { txtCurpError, txtCurpError2, formValid, txtCorreoError,
      txtCorreoError2, txtTelefonoError, txtTelefonoError2, cmbEstadoError, cmbMunicipioError,
      cmbLocalidadError, txtColoniaError, txtCalleError, txtNumeroError, txtCPError, cmbNivelError, cmbActividadError, cuatri, txtHorasError, checkE } = this.state;
    let optionTemplate = this.state.values.map(v => (
      <option key={"Option" + v.icveentfed} value={v.icveentfed}>{v.cdesentfed}</option>
    ));

    let optionMunicipio = this.state.municipios.map(v => (
      <option key={"Option" + v.id_mpio} value={v.id_mpio}>{v.mpio_desc}</option>
    ));

    let optionLocalidad = this.state.localidad.map(v => (
      <option key={v.id_local} value={v.id_local}>{v.local_desc}</option>
    ));

    let nivelAcademico = this.state.nivelE.map(v => (
      <option key={v.id} value={v.id}>{v.name}</option>
    ));

    let actividadOption = this.state.actividad.map(v => (
      <option key={v.id} value={v.id}>{v.name}</option>
    ));


    if (!formValid) {

      return (
        <>
          <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
            <div className="card-header headerRs bg-transparent border-0 text-center text-uppercase"><h3 className="text-primary fw-bold">INGRESAR CURP</h3></div>
            <div className="card-body">
              <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                <div className="form-group">
                  <input name="txtCurp" type="text" className="form-control" placeholder="Curp"
                    value={this.state.txtCurp} onChange={this.handleChange} onBlur={this.handleBlur} />
                  {txtCurpError ? <div className="alert alert-danger mt-2">Es requerido</div> : ''}
                  {txtCurpError2 ? <div className="alert alert-danger mt-2">Formato no valido.</div> : ''}
                </div>
                {this.state.visualButton ?
                  <p className="text-center mb-0" >
                    <input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Validar CURP" />
                  </p>
                  : ''
                }
                {this.state.visualButton2
                  ?
                  <p className="text-center mb-0" >
                    <button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      &nbsp;Cargando...
                    </button>
                  </p>
                  : ''
                }
              </form>
              <hr />
              <div className="text-center fw-normal"><a href="/" target="_blank">Atención a dudas, servicio social INAEBA serviciosocial@inaeba.edu.mx</a></div>

            </div>
          </div>
          {this.state.Toast ?
            this.alert()
            : ''
          }
        </>
      );
    } else {
      return (
        <Card>
          <Card.Header className="headerRs">{this.state.txtNombre} {this.state.txtApPat} {this.state.txtApMat}</Card.Header>
          <Card.Body>

            <Form action="/" onSubmit={(e) => this.enviarSubmit(e)} encType="multipart/form-data" autoComplete="off">
              <Row className="">
                <Col>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control placeholder="Teléfono" type="number" min="10" name="txtTelefono" value={this.state.txtTelefono} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtTelefonoError ? <div className="alert alert-danger mt-2">Es requerido</div> : ''}
                  {txtTelefonoError2 ? <div className="alert alert-danger mt-2">Solo numeros.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control placeholder="Correo electrónico" name="txtCorreo" value={this.state.txtCorreo} onBlur={this.formulario} onChange={this.handleChange} />
                  {txtCorreoError ? <div className="alert alert-danger mt-2">Es requerido</div> : ''}
                  {txtCorreoError2 ? <div className="alert alert-danger mt-2">Formato no valido.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Selecciona tu estado</Form.Label>
                  <Form.Select name="cmbEstado" defaultValue="Selecciona..." onChange={this.handleChange} onBlur={this.formulario} >
                    <option disabled>Selecciona...</option>
                    {optionTemplate}
                  </Form.Select>
                  {cmbEstadoError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Form.Label>Selecciona tu municipio</Form.Label>
                  <Form.Select name="cmbMunicipio" defaultValue="Selecciona Mun..." onChange={this.handleChange} onBlur={this.formulario}>
                    <option disabled>Selecciona Mun...</option>
                    {optionMunicipio}
                  </Form.Select>
                  {cmbMunicipioError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Selecciona tu localidad</Form.Label>
                  <Form.Select name="cmbLocalidad" defaultValue="Selecciona..." onChange={this.handleChange} onBlur={this.formulario}>
                    <option disabled>Selecciona...</option>
                    {optionLocalidad}
                  </Form.Select>
                  {cmbLocalidadError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Selecciona tu Colonia</Form.Label>
                  <Form.Control placeholder="Selecciona tu colonia" type="text" name="txtColonia" value={this.state.txtColonia} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtColoniaError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Form.Label>Calle/Dirección</Form.Label>
                  <Form.Control placeholder="Ingresa Calle " type="text" name="txtCalle" value={this.state.txtCalle} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtCalleError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Número</Form.Label>
                  <Form.Control placeholder="Ingresa Número" type="text" name="txtNumero" value={this.state.txtNumero} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtNumeroError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
                <Col>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control placeholder="Ingresa Código Postal" type="text" name="txtCP" value={this.state.txtCP} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtCPError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
              </Row>
              <Row>
                <h6 className="text-primary fw-bold text-center">NIVEL ACADÉMICO</h6>
                <hr></hr>
              </Row>
              <Row className="">
                {checkE == false ?
                  this.escuelasVisible() : ''}
                {
                  checkE ?
                    this.escuelaManual() : ''
                }
                <Form.Check name="checkE" id="check" type="checkbox" label="No esta en la lista" onChange={this.checkedBox} />

                <Col>
                  <Form.Label>Nivel Educativo</Form.Label>
                  <Form.Select name="cmbNivel" defaultValue="Selecciona..." onChange={this.handleChange} onBlur={this.formulario}>
                    <option disabled>Selecciona...</option>
                    {nivelAcademico}
                  </Form.Select>
                  {cmbNivelError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>
                {cuatri ?
                  this.nivel()
                  : ''

                }

                <Col>
                  <Form.Label>Actividad</Form.Label>
                  <Form.Select name="cmbActividad" defaultValue="Selecciona..." onChange={this.handleChange} onBlur={this.formulario}>
                    <option disabled>Selecciona...</option>
                    {actividadOption}
                  </Form.Select>
                  {cmbActividadError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>

              </Row>
              <Row>
                <Col>
                  <Form.Label>Número de horas</Form.Label>
                  <Form.Control placeholder="Número de horas" type="text" name="txtHoras" value={this.state.txtHoras} onChange={this.handleChange} onBlur={this.formulario} />
                  {txtHorasError ? <div className="alert alert-danger mt-2">Es requerido.</div> : ''}
                </Col>

              </Row>

              <Row>
                <Col></Col>
                <Col>
                  {this.state.visualButton ?
                    <Button type="submit" variant="primary" size="lg">Guardar</Button>
                    : ''
                  }
                  {this.state.visualButton2
                    ?
                    <p className="text-center mb-0" >
                      <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Cargando...
                      </button>
                    </p>
                    : ''
                  }
                </Col>
                <Col></Col>
              </Row>
            </Form>

          </Card.Body>
          {this.state.Toast ?
            this.alert()
            : ''
          }
        </Card>


      )
    }
  }
}


function App() {
  return <Curp />;
}
ReactDOM.render(<App />, document.getElementById("reactAreaForm"));