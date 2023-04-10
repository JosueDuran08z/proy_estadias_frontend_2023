<script type="text/javascript">
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6037cf751c1c2a130d626fa5/1evd04ok1';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
</script>
@extends('layouts.main') @section('title', 'Bienvenido') @section('content')

<div class="container tituloss">
    <!-- GTranslate: https://gtranslate.io/ -->
    <div id="google_translate_element2"></div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
            <!--<div id="reactBanner"></div>-->
            <div id="carrouselPrincipal" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="0" class="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="4"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="5"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="6"></button>
                    
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="https://contigosi.guanajuato.gob.mx/" target="_blank">
                            <img src="{{ url('img/banner/204847_web_contigosi.png') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://contigosi.guanajuato.gob.mx/" target="_blank">
                            <img src="{{ url('img/banner/contigo_si_tarjeta.jpg') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://200aniversario.guanajuato.gob.mx" target="_blank">
                            <img src="{{ url('img/banner/banner2.png') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img src="{{ url('img/banner/banner3.png') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="/programas/sc_registro?tipoPreRegistro=ffbc17ae7cdad5d436c01d15ce12bf64">
                            <img src="{{ url('img/banner/ss.png') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
					<div class="carousel-item">
                        <a href="#">
                            <img src="{{ url('img/banner/203624_egresados_(1).svg') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img src="{{ url('img/banner/servicio_educativo.png') }}" class="d-block responsive" alt="..."/>
                        </a>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carrouselPrincipal" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carrouselPrincipal" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-xxl-block" >
            @include('includes.menuSecundario.menu_destacados')
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-xl-block d-xxl-none" style="width:31%;">
            @include('includes.menuSecundario.menu_destacados')
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block d-xl-none" style="width:30.5%;">
            @include('includes.menuSecundario.menu_destacados')
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-md-block d-lg-none">
            @include('includes.menuSecundario.menu_destacados')
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-sm-block d-md-none">
            @include('includes.menuSecundario.menu_destacados')
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-block d-sm-none">
            @include('includes.menuSecundario.menu_destacados')
        </div>

    </div>
    <a href="{{url('propuesta2')}}">Prouesta 2</a>
    <div class="row">
        <div class="column col-xs-12 col-md-12 col-lg-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion"><center>En Línea o presencial, ¡INAEBA tiene un lugar para ti! </center></h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row inline-block" id="seccion2">
        <div class="col-md-3">
            <div class="card" style=" width:98%;">
                <div class="card-body">
                    <a href="{{url('/programas/enlineaRegistro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96&tipoForm=1')}}">
                        <img src="{{ url('img/home/primaria_linea.jpg') }}" class="d-block responsive rounded" alt="..."/>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card" style=" width:98%;">
                <div class="card-body">
                    <a href="{{url('/programas/enlineaRegistro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96&tipoForm=2')}}">
                        <img src="{{ url('img/home/secundaria_linea.jpg') }}" class="d-block responsive rounded" alt="..."/>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card" style=" width:98%;">
                <div class="card-body">
                    <a href="{{url('/conoce/cczz')}}">
                        <img src="{{ url('img/home/presencial.png') }}" class="d-block responsive rounded" alt="..."/>
                    </a>
                </div>
            </div>


        </div>
        <div class="col-md-3">
            <div class="card" style=" width:98%;">
                <div class="card-body">
                    <a href="{{url('/programas/enlineaRegistro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96&tipoForm=3')}}">
                        <img src="{{ url('img/home/sin_fronteras.jpg') }}" class="d-block responsive" alt="..."/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div  class="row">
        <div class="col-md-8">
            <video width="100%" height="100%" controls>
                <source src="/img/home/inaeba.mp4" type="video/mp4">
                    Video inaeba
            </video> 
        </div>
        <div class="col-md-4">
            <img src="{{ url('img/home/facebook.jpg') }}" class="d-block responsive" alt="..."/>
            <img src="{{ url('img/home/facebook.jpg') }}" class="d-block responsive" alt="..."/>
        </div>
    </div>
    
    <div class="row">
        <div class="text-center">
            <div class="d-none d-xl-block " style="height:100px;">
                <!-- Revive Adserver Etiqueta iFrame - Generated with Revive Adserver v5.0.2 -->
                <iframe id='ab84c17a' name='ab84c17a' class="img-fluid"
                    src='https://app.guanajuato.gob.mx/revive/www/delivery/afr.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE'
                    frameborder='0' scrolling='no' width='100%' height='90' allow='autoplay'><a
                        href='http://app.guanajuato.gob.mx/revive/www/delivery/ck.php?n=a0dda632&amp;cb=INSERT_RANDOM_NUMBER_HERE'
                        target='_blank'><img
                            src='http://app.guanajuato.gob.mx/revive/www/delivery/avw.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a0dda632'
                            border='0' alt='' /></a></iframe>

            </div>
            <div class="d-xl-none">
                <iframe id="ae2efcb6" name="ae2efcb6"
                    src="https://app.guanajuato.gob.mx/revive/www/delivery/afr.php?zoneid=247&amp;cb=INSERT_RANDOM_NUMBER_HERE"
                    frameborder="0" scrolling="no" width="400" height="250" allow="autoplay"><a
                        href='https://app.guanajuato.gob.mx/revive/www/delivery/ck.php?n=a883fb13&amp;cb=INSERT_RANDOM_NUMBER_HERE'
                        title="Adserver" target='_blank'><img
                            src='https://app.guanajuato.gob.mx/revive/www/delivery/avw.php?zoneid=247&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a883fb13'
                            border='0' alt='' /></a></iframe>
            </div>
        </div>
    </div>
     

</div>


<script src="{{ url('/js/api/banner.js') }}" type="text/babel"></script>

<script src="{{ url('/js/api/facebook.js') }}" type="text/babel"></script>


<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modalxs.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modalsm.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modallg.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modalmd.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modalxl.js') }}" type="text/babel"></script>
<script src="{{ url('../../../js/components/modalNuevo.js') }}" type="text/babel"></script>
<script src="{{ url('/js/components/modalAviso.js') }}" type="text/babel"></script>
<script>
    function directorio(){
        
        var caja = document.getElementById('txtCaja').value;
        alert('ok');
        if (caja == '') {
            document.getElementById('txtCaja').value=1;
            //MUESTRA TABLA
            document.getElementById("seccion2").style.display = "block";
            document.getElementById("seccion1").style.display = "none";
        }else{
            //OCULTA TABLA
            document.getElementById('txtCaja').value='';
            document.getElementById("seccion1").style.display = "block";
            document.getElementById("seccion2").style.display = "none";
        }
    }
</script>
@stop