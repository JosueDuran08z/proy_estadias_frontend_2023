@extends('layouts.main')

@section('title', 'Actas de Comité de Transparencia')

@section('meta')
    <meta property="keywords" content="Transparencia, Actas, Comité, Sesiones, Ordinarias, Acceso a la Información"/>
    <meta property="description" content="Listado de actas de sesión del comité de transparencia."/>
@endsection

@section('content')
<div class="prime-area">
    <div class="container-fluid">
        <h1>Actas de Comité de Transparencia</h1>

        <article>
            <ul class="list-inline">
                <li><a class="link-tramite-p" href="{{ url('/documentos/Actas_Comite/RCT_1464_2017.pdf') }}" target="_blank">Fracc. 2 Acta de Sesión de Comité número RCT_1464_2017</a></li>
                <li><a class="link-tramite-p" href="{{ url('/documentos/Actas_Comite/RCT_1465_2017.pdf') }}" target="_blank">Fracc. 11 Acta de Sesión de Comité número RCT_1465_2017</a></li>
                <li><a class="link-tramite-p" href="{{ url('/documentos/Actas_Comite/RCT_1466_2017.pdf') }}" target="_blank">Fracc. 23 Acta de Sesión de Comité número RCT_1466_2017</a></li>
                <li><a class="link-tramite-p" href="{{ url('/documentos/Actas_Comite/RCT_1467_2017.pdf') }}" target="_blank">Fracc. 28 Acta de Sesión de Comité número RCT_1467_2017</a></li>
                <li><a class="link-tramite-p" href="{{ url('/documentos/Actas_Comite/RCT_1468_2017.pdf') }}" target="_blank">Fracc. 33 Acta de Sesión de Comité número RCT_1468_2017</a></li>
            </ul>
        </article>
    </div>
</div>
@stop