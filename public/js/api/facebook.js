
const { useState } = React;
const { Row, Button, Col, Table, Card } = ReactBootstrap;

class Inicio extends React.Component {
    render() {
        return (
            <Row>
                
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="dest-he">
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoyinaeba%2F&amp;tabs=timeline&amp;width=370&amp;height=450&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
                                    width="100%"
                                    height="450"
                                    style={{ border:"none",overflow:"hidden" }}
                                    scrolling="no"
                                    allowtransparency="true"
                                ></iframe>
                            
                        
                    </div>
                </Col>
            </Row>
        );
    }
}
function App() {
    return <Inicio />;
}
ReactDOM.render(<App />, document.getElementById("reactAreaFacebook")); 