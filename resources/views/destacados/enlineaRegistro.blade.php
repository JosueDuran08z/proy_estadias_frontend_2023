@extends('layouts.main')

@section('title', 'INAEBA en tu casa')

@section('meta')
    <meta property="keywords" content="INAEBA, Desde casa, Casa, Hogar, Estudio, Contacto, Horarios, Atención, Coordinación, Teléfono, Número, Marcar, Extranjero, Asesor, Inscripción, Primaria, Secundaria, Sin fronteras"/>
    <meta property="description" content="Inicia tu proceso de registro y termina tus estudios con INAEBA, puede iniciar desde Alfabetización y hasta nivel Secundaria"/>
@endsection

@section('content')
<div class="container">
  

  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xs-8">
      <div id="reactAreaForm"></div>
      <!--<hr>
            <div class="alert alert-primary" role="alert">
                <h3>INFORMACIÓN</h3> <p>Por periodo vacacional nuestros operadores no estarán disponibles, aun así, el pre registro estará activo, una vez terminado el periodo vacacional, las solicitudes serán atendidas conforme a la recepción.</p>
            </div>-->
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
      @include('includes.menuSecundario.menu_destacados')
    </div>
  </div>
</div>
<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/datosDomiciliarios.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/form_preRegistro.js') }}" type="text/babel"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@stop