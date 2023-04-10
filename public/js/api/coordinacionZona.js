const { useState, useEffect } = React;

class Inicio extends React.Component {
    constructor(props) {
        console.log('entre ' + props);
        super(props);
        this.state = {
            municipios: [],
            visibleModal: false,
            municipioSeleccionado: "",
            coordinacionSeleccionada: "",
            idCzPromotor:"",
            idMunicipioAtiende:"",
            direccion1:"",
            Telefono1:"",
            img:"/img/oficina_vsantiago.png",
        };
    }


    /*componentDidMount() {
        const contex = this;
        axios
            .get("/public/municipio")
            .then(function (response) {
                contex.setState({ municipios: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/

    selectMunicipio = (event) => {
        this.setState({
            municipioSeleccionado: event.target.value,
        });
        console.log('selectMunicipio');
    };

    closeModal = () => {
        this.setState({
            visibleModal: false
        });
    };

    showDetailsCZ = (idCoordinacionZona,idCZ,ladir,Tel) =>{
        this.setState({
            visibleModal: true,
            coordinacionSeleccionada : idCoordinacionZona,
            idCzPromotor: idCZ,
            direccion1:ladir,
            Telefono1:Tel,
        });
    }
    imgCoordinador=()=>{
        img : img
    }

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-3 row-lin2">
                    <span className="input-group-text mb-3">Municipio</span>
                    <select
                        className="form-select mb-3"
                        aria-label="Municipios"
                        
                        defaultValue="0"
                    >
                        <option disabled value="0">
                            Selecciona un municipio
                        </option>
                        <option value="0">
                            Todos los Municipios
                        </option>
                        {/*this.state.municipios.map((i) => {
                            return (
                                <option
                                    key={"Option" + i.id_mpio}
                                    value={i.id_mpio}
                                >
                                    {i.mpio_desc}
                                </option>
                            );
                        })*/}
                    </select>
                </div>
                <TableCZ
                    visible={this.state.visibleModal}/>

            </React.Fragment>
        );
    }
}

const TableCZ = (props) => {
    const { Button, Table, Badge } = ReactBootstrap;

    return (
        <div class="row mh">


        <p>hola</p>
      </div>
    );
};


function App(){
    return <Inicio />;
}

ReactDOM.render(<App />, document.getElementById("reactAreaCordinacion"));
