@extends('layouts.main')

@section('title', 'Noticias')

@section('meta')
<meta property="keywords"
    content="Noticias, Logros, Egresados, Notas, Información, Educando, Beneficiario, Convenios" />
<meta property="description"
    content="La sección de noticias te permite acceder a las notas y artículos relacionados con el instituto y sus educandos." />
@endsection

@section('content')
<link rel="stylesheet" href="{{ url('/css/datePickerNoticia.css') }}">
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Noticias</h4>
                </div>
            </div>
        </div>
    </div>
    <div id="reactArea"></div>
    <div>
        <div class="row">
        <div class="div-titulo-noticias">ÚLTIMAS NOTICIAS</div>
        <div class="row" id="res"></div>
        <div class="div-noticias"><a class="link-noticias" href="https://boletines.guanajuato.gob.mx/notas/?id=35" target="_blank" rel="noopener">VER TODAS LAS NOTICIAS</a></div>
    </div>
</div>
<script src="{{ url('/js/api/noticias.js') }}" type="text/babel"></script>
<script src="{{ url('/js/boletin.js') }}" type="text/babel"></script>
@stop