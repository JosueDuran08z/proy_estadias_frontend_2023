@extends('layouts.main')

@section('title', 'Cordinaciones de zona')

@section('meta')
<meta property="keywords" content="Coordinaciones, Oficinas, Mapa, Domicilio, Contacto, Zonas" />
<meta property="description"
    content="Oficinas institucionales en las que INAEBA ofrece sus servicios de alfabetización, primaria y secundaria para las personas en rezago educativo" />
@endsection

@section('content')
<div class="container tituloss">

        <div class="row">

            <h1 class="titulo_principal_cz">OFICINAS DE ATENCIÓN</h1>

        </div>

        <div class="row"><div class="col-lg-3 text-center"><a href=""> </a><a href="">...<img src="img/oficina_sfelipe.png" alt="" class="zoom"></a></div></div>


        <!-- A partir de aquí trabajaré los estilos para la informnación del modal -->
      <div style="width: 70%;" >
      <table class="tables">
      <thead>
        <tr>
          <th colspan="2"><p class="cargo">Coordinador de los municipios de Yuriria, Moroleón y Uriangato</p></th>
        </tr>

      </thead>
      <tbody>

        <tr>
        <td class="photo" style=""><img src="/img/coordinadores/91.png"></td>
        <td width="78%">
            <p class="name_ccd"> Juan Miguel Guzmán Vieyra</p>
            <dl>
              <dd class="formato_texto alto_espacio"><i class="fa fa-home" aria-hidden="true"></i> Miguel Hidalgo No. 212 Colonia Centro C.P. 37280</dd>
              <dd class="formato_texto alto_espacio"><i class="fa fa-phone" aria-hidden="true"></i> (445) 168 50 05</dd>
              <dd class="formato_texto alto_espacio"><i class="fa fa-clock-o" aria-hidden="true"></i> Lunes a Viernes de 8:30 a 15:30 hrs.</dd>
            </dl>
        </td>
      </tr>

      <tr>
        <th colspan="2" class="cargo " style="text-align:center; padding: 5px">¿Cómo llegar?</th>
      </tr>
      <tr>
        <!--<td style="background: green"></td>-->
        <td colspan="2" style=" padding-bottom: 15px; text-align:center;"><img src="/img/mapa_propuesta.JPG"></td>

      </tr>
    </tbody>
    </table>
  </div>



</div>
<!--<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/coordinacionZona.js') }}" type="text/babel"></script>-->
@stop
