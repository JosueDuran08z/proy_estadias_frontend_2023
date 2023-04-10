@extends('layouts.main')

@section('title', 'Resultados Exámen Único')

@section('meta')
<meta property="keywords" content="INAEBA, PEC, Exámen, Único, Resultados, Estatus, Buscador, Consulta" />
<meta property="description" content="Si presentaste tu exámen único (PEC), consulta aquí tus resultados." />
@endsection


@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Resultados Exámen Único</h4>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="column col-xs-12 col-sm-8 li-cardk">
            <div id="reactArea">
            </div>
        </div>


        <div class="column col-xs-12 col-sm-4">
            @include('includes.menuSecundario.menu_servicios')
        </div>
    </div>
</div>
<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/resultadosPEC.js') }}" type="text/babel"></script>
@stop