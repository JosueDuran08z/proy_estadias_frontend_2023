const { useState, useEffect, useRef, forwardRef, useImperativeHandle } = React;
const { Row, Col, Button, Form, Alert } = ReactBootstrap;

class Egresados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            txtNombre: "",
            txtTelefono: "",
            txtCorreo: "",
            txtComentarios: "",
        };

        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeTelefono = this.handleChangeTelefono.bind(this);
        this.handleChangeCorreo = this.handleChangeCorreo.bind(this);
        this.handleChangeComentarios = this.handleChangeComentarios.bind(this);
        this.handleCambiarUrl = this.handleCambiarUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNombre(event) {
        this.setState({
            txtNombre: event.target.value,
        });
    }

    handleChangeTelefono(event) {
        this.setState({
            txtTelefono: event.target.value,
        });
    }

    handleChangeCorreo(event) {
        this.setState({
            txtCorreo: event.target.value,
        });
    }

    handleChangeComentarios(event) {
        this.setState({
            txtComentarios: event.target.value,
        });
    }

    handleCambiarUrl() {
        location.assign(
            `/programas/egresados?tipoPreRegistro=f84552838654fabe5f015062ef39c214`
        );
    }

    handleSubmit(event) {
        fetch('https://inaeba.guanajuato.gob.mx/rest/v1/public/guardarCasosExito', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                txtNombre: this.state.txtNombre,
                txtTelefono: this.state.txtTelefono,
                txtCorreo: this.state.txtCorreo,
                txtComentarios: this.state.txtComentarios,
            }),
        }).then(
            alert("Datos Guardados Correctamente"),
            this.handleCambiarUrl(),
            event.preventDefault()
        );
    }

    render() {
        return (
            <div className="tituloss">
                <h3 className="lt-head text-center">INGRESA TUS DATOS</h3>
                <br />

                <Form
                    className="needs-validation"
                    novalidate
                    id="frmFormulario"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                {" "}
                                <Form.Group controlId="formBasicNombre">
                                    <div>
                                        <label className="form-label">
                                            <i className="bi bi-asterisk text-danger"></i>{" "}
                                            Nombre Completo
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="lblNombre"
                                            >
                                                <i className="bi bi-person-fill"></i>
                                            </span>

                                            <Form.Control
                                                id="txtNombre"
                                                name="txtNombre"
                                                type="text"
                                                placeholder="Nombre"
                                                onChange={
                                                    this.handleChangeNombre
                                                }
                                                required
                                            />
                                            <div class="valid-tooltip">
                                                Nombre Correcto
                                            </div>
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                {" "}
                                <Form.Group controlId="formBasicTelefono">
                                    <div>
                                        <label className="form-label">
                                            <i className="bi bi-asterisk text-danger"></i>{" "}
                                            Teléfono{" "}
                                            <strong>(a 10 dígitos.)</strong>
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="lblNombre"
                                            >
                                                <i className="bi bi-telephone-plus-fill"></i>
                                            </span>

                                            <Form.Control
                                                id="txtTelefono"
                                                name="txtTelefono"
                                                type="tel"
                                                placeholder="Telefono"
                                                onChange={
                                                    this.handleChangeTelefono
                                                }
                                                className="form-control"
                                                pattern="[0-9]{10}"
                                                required
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                {" "}
                                <Form.Group controlId="formBasicCorreo">
                                    <div>
                                        <label className="form-label">
                                            <i className="bi bi-asterisk text-danger"></i>{" "}
                                            Correo Eléctronico
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="lblNombre"
                                            >
                                                <i className="bi bi-envelope-fill"></i>
                                            </span>

                                            <Form.Control
                                                id="txtCorreo"
                                                name="txtCorreo"
                                                type="email"
                                                placeholder="Correo"
                                                onChange={
                                                    this.handleChangeCorreo
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>

                            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                {" "}
                                <Form.Group controlId="formBasicComentarios">
                                    <div>
                                        <label className="form-label">
                                            <i className="bi bi-asterisk text-danger"></i>{" "}
                                            Comentarios
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="lblNombre"
                                            >
                                                <i className="bi bi-pencil-fill"></i>
                                            </span>

                                            <Form.Control
                                                id="txtComentarios"
                                                name="txtComentarios"
                                                type="text"
                                                placeholder="Comentarios"
                                                onChange={
                                                    this.handleChangeComentarios
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <button
                                onClick={this.handleSubmit}
                                className="btn btn-success"
                            >
                                Continuar{" "}
                                <i className="bi bi-arrow-right-circle"></i>
                            </button>
                        </div>
                    </div>
                </Form>

                <div id="divSms"> </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Egresados />,
    document.getElementById("reactAreaFormEgresados")
);
