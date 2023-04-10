@extends('layouts.main') @section('title', 'Bienvenido') @section('content')
<div class="container">
    <div class="row">


        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">

        <div id="reactBanner"> 
 
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
<script src="{{ url('/js/api/banner.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>

<script src="{{ url('/js/components/modalAviso.js') }}" type="text/babel"></script>
@stop
