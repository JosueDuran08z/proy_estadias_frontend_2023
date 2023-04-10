@extends('layouts.main') @section('title', 'Bienvenido') @section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div id="carrouselPrincipal" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="0" class="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="4"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="5"></button>
                        <button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="6"></button>
                        <!--<button type="button" data-bs-target="#carrouselPrincipal" data-bs-slide-to="7"></button>-->
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="https://reactivemosgto.guanajuato.gob.mx" target="_blank">
                            <img
                                src="{{ url('img/imagen/banner_semaforo.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <!--<div class="carousel-item">
                        <a href="#" target="_blank">
                            <img
                                src="{{ url('img/imagen/jornada_octubre21.jpg') }}"
                                class="d-block w-100"
                                alt="Jornada Octubre 2021"
                            />
                        </a>
                    </div>-->
                    <div class="carousel-item">
                        <a href="https://unidos.guanajuato.gob.mx/lluvias/" target="_blank">
                            <img
                                src="{{ url('img/imagen/lluvias.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://www.guanajuato.gob.mx" target="_blank">
                            <img
                                src="{{ url('img/imagen/prg_gob_2021.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://200aniversario.guanajuato.gob.mx" target="_blank">
                            <img
                                src="{{ url('img/imagen/200consumacion.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="/programas/sc_registro?tipoPreRegistro=ffbc17ae7cdad5d436c01d15ce12bf64">
                            <img
                                src="{{ url('img/imagen/banner_servicio_social.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="https://cursosytalleres.guanajuato.gob.mx" target="_blank">
                            <img
                                src="{{ url('img/imagen/cursos_talleres.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
                        </a>
                    </div>
                    
                    <div class="carousel-item">
                        <a href="https://coronavirus.guanajuato.gob.mx" target="_blank">
                            <img
                                src="{{ url('img/imagen/banner_covid1021.jpg') }}"
                                class="d-block w-100"
                                alt="..."
                            />
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
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            @include('includes.menuSecundario.menu_destacados')
        </div>
    </div>
    <div class="row equal-cols">
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="card cardCustom mb-3">
                <div class="card-header pt-3 pb-3">
                    <h5 class="fw-bold mb-0">Trámites y Servicios</h5>
                </div>
                <div class="card-body">
                    <div class="list-group">
                        <a href="{{ url('/tramites_servicios/alfabetizacion') }}" class="list-group-item list-group-item-action" aria-current="true">
                            Alfabetización (aprender a leer y escribir)
                        </a>
                        <a href="{{ url('/tramites_servicios/primaria') }}" class="list-group-item list-group-item-action">
                            Educación Primaria</a>
                        <a href="{{ url('/tramites_servicios/secundaria') }}" class="list-group-item list-group-item-action">
                            Educación Secundaria
                            </a>
                        <a href="{{ url('/programas/certificado') }}" class="list-group-item list-group-item-action">
                            Duplicado de certificado primaria y secundaria
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="card cardCustom mb-3">
                <div class="card-header pt-3 pb-3">
                    <h5 class="fw-bold mb-0">¿Dónde Estudiar?</h5>
                </div>
                <div class="card-body">
                    <p>
                        Aquí puedes encontrar tu Centro Comunitario Digital más
                        cercano
                    </p>
                    <div id="reactArea"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="text-center">
            <div class="ratio" style="height:100px;">
                <iframe 
                    id="ab84c17a" 
                    name="ab84c17a" 
                    src="https://app.guanajuato.gob.mx/revive/www/delivery/afr.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE" 
                    frameborder="0"
                    scrolling="no" 
                    width="inherit" 
                    height="90" 
                    allow="autoplay">
                        <a href='http://app.guanajuato.gob.mx/revive/www/delivery/ck.php?n=a0dda632&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'>
                            <img src='http://app.guanajuato.gob.mx/revive/www/delivery/avw.php?zoneid=246&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a0dda632' border='0' alt='' />
                        </a>
                </iframe>
            </div>
        </div>
    </div>
    <div id="reactAreaModal"></div>
</div>
<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>
<script src="{{ url('/js/components/modalAviso.js') }}" type="text/babel"></script>
@stop
