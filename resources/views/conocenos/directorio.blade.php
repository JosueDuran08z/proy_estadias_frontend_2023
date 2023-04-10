@extends('layouts.main')

@section('title', 'Directorio')

@section('meta')
<meta property="keywords" content="Directorio, Transparencia, Información pública, Servidor públicos, Contacto" />
<meta property="description" content="Directorio de servidores públicos con información de contacto." />
@endsection

@section('content')
<div class="container tituloss">
    <div class="">
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <img src="{{ url('/img/imagen/conocenos-intranet.jpg') }}" class="d-block w-100"alt="Intranet"> 
            </div>

            <div class="col-xs-12 col-sm-4">
                @include('includes.menuSecundario.menu_conocenos')
            </div>
        </div>

        <div class="row">
            <div class="column col-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Directorio</h4>
                    </div>
                </div>
                <iframe
                    src="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_directorio_externo.php?dependencia=18"
                    width="100%" frameborder="0" height="800"> </iframe>
            </div>
        </div>
    </div>
</div>

@stop