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
            <div id="reactBanner" class="h-100 d-flex justify-content-center align-items-center">
                <div class="spinner-border" role="status" style="width: 3rem; height: 3rem; color: #000ea7">
                    <span class="visually-hidden">Loading...</span>
                </div>
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
                        <img src="{{ url('img/home/sin_fronteras.jpg') }}" class="d-block responsive rounded" alt="..."/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div  class="row" >
        <div class="col-md-8">
        <img class="card__image imgFig img-fluid" src="{{ url('/img/pvs.png') }}"alt="callcenter">
        <br></br>
        <h6 class="center-text"><center><b><a href="{{ url('/documentos/pvs.pdf') }}" target="_blank">Publicación de resultados de la etapa V PVBS<img class="img-fluid" src="{{ url('/img/download_lite.png') }}"alt="descargar"> </a></b></center></h6>
        <!--<h6 class="center-text"><center><b><a href="{{ url('/documentos/convocatoria_pvbs.pdf') }}" target="_blank">2da Convocatoria para las  PVBS  <img class="img-fluid" src="{{ url('/img/download_lite.png') }}"alt="descargar"> </a></b></center></h6>
        <h6 class="center-text"><center><b><a href="{{ url('/documentos/bases_pvbs.pdf') }}" target="_blank">Descarga aquí las bases de la Segunda Convocatoria para las PVBS  <img class="img-fluid" src="{{ url('/img/download_lite.png') }}"alt="descargar"> </a></b></center></h6>
        <button id="play-button">Reproducir video</button>
            <video id="my-video" controls style ="width:100%;">
            <source src="./media/index.mp4" type="video/mp4">
            </video>
            <script>
                const playButton = document.getElementById('play-button');
                const myVideo = document.getElementById('my-video');

                playButton.addEventListener('click', () => {
                myVideo.play();
                });

                </script>-->
        </div>
        <div class="col-md-4">
            <div id="reactAreaFacebook"></div>
        </div>
    </div>

    <div class="row">
        <div class="text-center">
            <div class="d-none d-xl-block " style="height:100px;">
                <!-- Revive Adserver Etiqueta iFrame - Generated with Revive Adserver v5.0.2 -->
                <iframe id='ab84c17a' name='ab84c17a' class="img-fluid" src='https://app.guanajuato.gob.mx/revive/www/delivery/afr.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='100%' height='90' allow='autoplay'><a href='http://app.guanajuato.gob.mx/revive/www/delivery/ck.php?n=a0dda632&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://app.guanajuato.gob.mx/revive/www/delivery/avw.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a0dda632' border='0' alt='' /></a></iframe>
            </div>
            <div class="d-xl-none">
                <iframe id="ae2efcb6" name="ae2efcb6" src="https://app.guanajuato.gob.mx/revive/www/delivery/afr.php?zoneid=247&amp;cb=INSERT_RANDOM_NUMBER_HERE" frameborder="0" scrolling="no" width="400" height="250" allow="autoplay"><a href='https://app.guanajuato.gob.mx/revive/www/delivery/ck.php?n=a883fb13&amp;cb=INSERT_RANDOM_NUMBER_HERE' title="Adserver" target='_blank'><img src='https://app.guanajuato.gob.mx/revive/www/delivery/avw.php?zoneid=247&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a883fb13' border='0' alt='' /></a></iframe>
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
