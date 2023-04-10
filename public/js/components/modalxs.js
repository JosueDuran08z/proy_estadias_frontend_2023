const { useState } = React;
const { Modal, Row, Button } = ReactBootstrap;

class ModalNuevo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleModal: true,
            urlBase: "",
        };
    }
    componentDidMount() {
        let urlBase = window.location.href;
        this.setState({
            urlBase: urlBase,
        });
        if (localStorage.getItem('avisoPrivacidad') == 'accept') {
            this.closeModal();
        }
    }
    closeModal = () => {
        this.setState({
            visibleModal: false,
        });
    };

    viewModal = () =>{
        this.setState({
            visibleModal: true,
        });
    }

    acceptAviso = () => {
        this.closeModal();
        localStorage.setItem('avisoPrivacidad', '')
        window.location.reload()

    }



    render() {
        return (
           <a className="tituloss" href="#" onClick={this.acceptAviso}>Aviso Legal</a>
        );
    }
}

function App() {
    return <ModalNuevo />;
}
ReactDOM.render(<App />, document.getElementById("reactModalxs"));
