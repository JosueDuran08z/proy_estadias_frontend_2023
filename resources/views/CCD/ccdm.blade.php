@extends('layouts.main')

@section('title', 'C.C.D.M')

@section('content')
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Centros Comunitarios Digitales Móviles</h4>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 li-cardk">
                    <div id="carouselCCDM" class="carousel carousel-dark slide" data-bs-touch="true"
                        data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselCCDM" data-bs-slide-to="0" class="active"
                                aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselCCDM" data-bs-slide-to="1"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ url('/img/imagen/CCDMovil-1-1.jpg') }}" class="d-block w-100"
                                    alt="Intranet">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ url('/img/imagen/CCDMovil-2-2.jpg') }}" class="d-block w-100"
                                    alt="Intranet">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselCCDM"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselCCDM"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column col-xs-12 col-sm-4 li-cardk">
                <div class="dest-he">
                    <div class="lt-head">CENTROS COMUNITARIOS DIGITALES</div>
                    <div class="row-lin">
                        <div class="ico1"></div>
                        <a href="{{ url('/ccd/index') }}">
                            <label>Centros Comunitarios Digitales </label>
                        </a>
                    </div>
                    <div class="row-lin">
                        <div class="ico1"></div>
                        <a href="{{ url('/ccd/mevyt') }}">
                            <label>MEVyT en Línea</label>
                        </a>
                    </div>

                    <!--<ul class="media-list">
                	  <li><a href="oficinas.php">Oficinas</a></li>
                	  <li><a href="cczz.cfm">Coordinaciones de Zona</a></li>
                	  <li><a href="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_directorio.php" target="_blank">Directorio</a></li>
                	  <li><a href="intranet.php">Intranet</a></li>
       	            </ul>-->
                </div>
            </div>
        </div>

        <div class="row">



        </div>
        <div class="row">
            <div class="col-8">
                <p style="text-align:justify;">
                    Tienen el objetivo de brindar servicios educativos de alfabetización,
                    primaria y secundaria con tecnología en las zonas rurales.
                    &nbsp;En ellos se puede tener acceso a equipos de cómputo con internet,
                    en donde los usuarios tienen la oportunidad de concluir sus estudios a
                    través del Modelo Educación para la Vida y el Trabajo (MEVyT en línea).
                </p>

                <p>
                    Cada uno tendrá 17 computadoras con internet, impresora, TV interactiva y
                    aire acondicionado.
                </p>
            </div>
        </div>
        <!--<div class="column col-xs-12 col-sm-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoyinaeba%2F&tabs=timeline&width=320&height=450&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="320" height="450" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
              </div>
            </div>-->
    </div>
</div>
@stop