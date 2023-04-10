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
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Noticia</h4>
                </div>

            </div>
        </div>
    </div>
    <div id="reactArea">

    </div>
</div>
<script src="{{ url('/js/api/nota.js') }}" type="text/babel"></script>
@stop