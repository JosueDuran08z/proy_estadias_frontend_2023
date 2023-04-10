@extends('layouts.main')

@section('title', 'Contacto')

@section('meta')
<meta property="keywords" content="Contacto, Sugerencias, Buzón, Comentarios" />
<meta property="description"
    content="Sección de contacto dirigida al público para la recepción de sugerencias o comentarios que tengan sobre el Instituto." />
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Contáctanos</h4>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12">
            <div id="reactArea"></div>
        </div>
    </div>
</div>
<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/contacto.js') }}" type="text/babel"></script>
@stop