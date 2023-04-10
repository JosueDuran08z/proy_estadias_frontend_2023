const { useEffect } = React;
const Alert = (props) => {
    const { Alert } = ReactBootstrap;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (props.visible); 
    }, [props.visible]);

    const onClose = () => {
        setVisible(false);
        props.remoteClose();
    };
    return (
     <>   
      <Alert variant={props.body.variante} show={props.visible}  onClose={() => onClose(false)} dismissible>
        <Alert.Heading className="text-center">{props.body.header}
            <hr></hr>
        </Alert.Heading>
        <p className="text-justify">
            {props.body.body}
        </p>
      </Alert>
        </>
    );
}
