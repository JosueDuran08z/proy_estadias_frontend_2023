@extends('layouts.main')

@section('title', 'C.C.D')

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-md-12">
        <h1 class="titulo_principal_cz">OFICINAS DE ATENCIÓN</h1>
                <div id="reactArea"></div>
        </div>

    </div>
</div>
<script src="{{ url('/js/api/detalleCZNuevo.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/coordinacionZonaNuevo.js') }}" type="text/babel"></script>
@stop
