@extends('layouts.main')

@section('title','Descarga certificado')

@section('meta')
<meta property="keywords"
    content="Certificado, Certificación, Duplicado, Trámites, Servicios, Estudios, Constancia, Diploma" />
<meta property="description"
    content=" Si  perdiste tu certificado y necesitas una reposición, no te preocupes podemos ayudarte." />
@endsection

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-8 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Descarga de Certificado Electrónico</h4>
                </div>
            </div>
            <div class="textoCertificado margin15 tituloss">
                Sí concluiste tu primaria o secundaria en INAEBA y recibiste una notificación a
                través de mensaje de texto o correo electrónico, que ya está disponible tu
                certificado, podrás descargarlo ingresando tu CURP y el nivel educativo que concluiste.
            </div>

        </div>
        <div class="col-xs-12 col-sm-4">
            @include('includes.menuSecundario.menu_servicios')
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-8">

            <div class="container" id="reactArea"></div>
            <!--
            <div>
                <iframe 
                    src="http://inaeba.guanajuato.gob.mx/inaeba/servicios/ce_frame.php"
                    width="100%"
                    height="auto"
                    scrolling="no"
                ></iframe>
            </div>
            -->
        </div>


    </div>
</div>

<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/datosDomiciliarios.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/descargaCertificado.js') }}" type="text/babel"></script>
<!---->
@stop