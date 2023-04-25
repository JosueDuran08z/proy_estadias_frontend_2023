const { useState, useEffect } = React;
const { Carousel } = ReactBootstrap;

const Banners = () => {
    const URL_API_TOKEN = "https://dhernandeza.inaeba.edu.mx/security/login?usuario=root@inaeba.edu.mx&password=root@ine1024";
    const URL_API_BANNERS = "https://dhernandeza.inaeba.edu.mx/public/getBannerActivo";
    const URL_API_STORAGE = "https://storage.inaeba.edu.mx/public/getFile/";
    const [banners, setBanners] = useState();
    const [token, setToken] = useState();
    const [cargando, setCargando] = useState(true);

    const getToken = () => {
        axios.post(URL_API_TOKEN).then(({ data : { access_token } }) => setToken(access_token))
            .catch(error => console.log(error));
    }

    const getBanners = () => {
        axios.get(URL_API_BANNERS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setCargando(false);
            setBanners(data)
        })
        .catch(error => {
            setCargando(false);
            console.log(error);
        });
    }

    useEffect(() => getToken(), []);

    useEffect(() => token && getBanners(), [token]);

    return (
        <React.Fragment>
            {
                cargando ?
                <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem", color: "#000ea7"}}>
                    <span className="visually-hidden">Loading...</span>
                </div> :
                <Carousel>
                    {
                        banners && banners.map((banner) =>
                            <Carousel.Item key={banner.id} interval={3500}>
                                <a target='_blank' href={banner.url}>
                                    <img
                                        className="d-block responsive"
                                        src={`${URL_API_STORAGE}${banner.nombre_archivo}`}
                                        alt={banner.descripcion}
                                    />
                                </a>
                            </Carousel.Item>)
                    }
                </Carousel>
            }
        </React.Fragment>
    );
}

ReactDOM.render(<Banners/>, document.getElementById("reactBanner"));
