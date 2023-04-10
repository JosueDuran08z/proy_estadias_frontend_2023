@extends('layouts.main')

@section('title', 'Servicio Social')

@section('meta')
<meta property="keywords" content="INAEBA, Servicio Social, Prácticas, Estadías, Servicio, Solicitud, " />
<meta property="description" content="Si presentaste tu exámen único (PEC), consulta aquí tus resultados." />
@endsection

@section('content')

<div class="">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Servicio Social</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <img src="{{ url('/img/imagen/banner_servicio_social.svg') }}" class="d-block w-100">
            </div>
            <div class="column col-xs-12 col-sm-4 li-cardk">
                @include('includes.menuSecundario.menu_destacados')
            </div>
        </div>


        <div class="row divCurp" id="divCurp">
            <div class="actionable" id="actionable-sign-up">
                <div class="actionable-front component-shadow">
                    <br>
                    <div id="reactAreaForm"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/datosDomiciliarios.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/servicioSocial.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/form_preRegistro.js') }}" type="text/babel"></script>

<!--
<script src="/js/api/alert.js" type="text/babel"></script>
<script src="/js/api/curp.js" type="text/babel"></script>
-->
@stop