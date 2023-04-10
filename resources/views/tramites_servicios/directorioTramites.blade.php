@extends('layouts.main')

@section('title','Directorio de Trámites')

@section('meta')
<meta property="keywords" content="Directorio, Trámites, Educación,, Contacto, Servicios" />
<meta property="description"
    content="Útil para las personas que necesitan aprender a  leer y escribir, así como conocer elementalmente los números y operaciones matemáticas." />
@endsection

@section('content')
<div class="">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Trámites y Servicios</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div>
                <iframe id="iframe" src="https://tramitesyservicios.guanajuato.gob.mx/#/inicio/32" frameborder="0"
                    width="100%" style="min-height: 800px; max-height: 1500px;"></iframe>
            </div>
        </div>
    </div>
</div>
@stop