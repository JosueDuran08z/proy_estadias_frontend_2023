@extends('layouts.main')

@section('title', 'Registro MEVyT')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="card-header"><h4 class="encabezadoSeccion">Pre registro en línea</h4></div>
            </div>
        </div>             
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div id="reactAreaForm"></div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div class="dest-he">
                <div class="lt-head">Programas</div>
                <div class="row-lin">
                    <div class="ico1"></div>
                    <a href="{{ url('/ccd/mevyt') }}">
                        <label>MEVyT en Línea</label>
                    </a>
                </div>
            </div>
                
        </div>
    </div>
</div>
<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/datosDomiciliarios.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/form_preRegistro.js') }}" type="text/babel"></script>
@stop