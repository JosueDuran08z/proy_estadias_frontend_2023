@extends('layouts.main')

@section('title', 'Normatividad INEA')

@section('meta')
<meta property="keywords" content="Código, Conducta, Ética, INAEBA, Guía, Actos, Servidor público, Guanajuato" />
<meta property="description"
    content="Guía detallada de los estándares esperados en los actos cotidianos de la persona servidora pública del Instituto de Alfabetización y Educación Básica para Adultos del Estado de Guanajuato" />
@endsection

@section('content')
<div class="container tituloss">
    <div class="">
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <h2 class="lt-head">Normatividad INEA</h2>
                <p><a href="{{ url('/documentos/1_inea_criterios_de_evaluacion.pdf') }}" target="_blank">Criterios de
                        evaluación para notas buenas INEA >></a></p>
                <p><a href="{{ url('/documentos/2_inea_reglamento_de_productividad.pdf') }}" target="_blank">Reglamento
                        de productividad INEA >></a></p>
                <p><a href="{{ url('/documentos/3_inea_reglamento_de_becas.pdf') }}" target="_blank">Reglamento de becas
                        INEA >></a></p>
            </div>
            <div class="col-xs-12 col-sm-4">
                @include('includes.menuSecundario.menu_conocenos')
            </div>
        </div>
    </div>
</div>
@stop