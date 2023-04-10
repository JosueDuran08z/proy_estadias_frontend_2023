@extends('layouts.main')

@section('title', 'Intranet')

@section('meta')
  <meta property="keywords" content="Intranet, Accesos, Sistemas, INAEBA, Enlaces, Consultas, Sitios" />
  <meta property="description" content="Directorio de sistemas internos del Instituto de Alfabetización y Educación Básica para Adultos" />
@endsection

@section('content')
<div class="">
  <div class="container">
    <div class="row margin15 slider-destacados">
      <div class="col-xs-12 col-sm-8">
        <!--<img src="{{ url('/img/imagen/conocenos-intranet.jpg') }}" class="d-block w-100" alt="Intranet">-->
        <div class="card cardCustom">
            <div class="lt-head">
                <h4 class="encabezadoSeccion">Intranet</h4>
            </div>
        </div>
        <div class="youresp">
        <ul class="itemsina">
          <li><a href="http://200.77.230.29:8084/BitacoraAsesor/" target="_blank"><strong>Asesores - SAAE</strong></a></li>
          <li><a href="http://sibiplac.inea.gob.mx/Sibiplac/login.aspx?AspxAutoDetectCookieSupport=1" target="_blank"><strong>Bitácora Electrónica de Plazas Comunitarias</strong></a></li>
          <li><a href="http://guanajuato.inea.gob.mx/aplicaciones/cidap/index.php" target="_blank"><strong>Consejo Interno de Administración y Planeación (CIDAP)</strong></a>                 </li>
          
          <li><a href="http://www.inea.gob.mx/servicios_en_linea/Consulta_avance_academico.html" target="_blank"><strong>Consulta  tu avance académico</strong></a></li>
          <li><a href="https://consultas.curp.gob.mx/CurpSP/" target="_blank"><strong>Consulta tu CURP</strong></a></li>
          
          <li><strong><a href="http://sael.inea.gob.mx/Login.aspx?ReturnUrl=/&amp;AspxAutoDetectCookieSupport=1" target="_blank">Exámenes en línea (SAEL)</a></strong></li>
          <li><a href="http://200.77.230.29/Consulados/avances/ingreso.html" target="_blank"><strong>Impresión de Hojas de Avance</strong></a></li>
          <li><a href="http://www.prepaenlinea.sep.gob.mx/" target="_blank"><strong>Prepa en línea SEP</strong></a></li>
          <li><a href="http://www.formacion.inea.gob.mx/SAF/" target="_blank"><strong>Registro Automatizado de Formación (RAF)</strong></a></li>
          <li><strong><a href="http://168.255.120.62/businessobjects/Enterprise115/infoView/logon.aspx?action=logoff" target="_blank">Reportes Externos</a></strong></li>
          <li><a href="http://saeses.conevyt.org.mx/WEBSAESES/" target="_blank"><strong>SAESES</strong></a></li>
          <li><a href="http://www.inaeba.guanajuato.gob.mx/sau/" target="_blank"><strong>Sistema de Acceso Único (SAU)</strong></a></li>
          <li><a href="http://gto.sasa.inea.gob.mx/INEAGUI/guiLogin.aspx" target="_blank"><strong>Sistema Automatizado de Seguimiento y Acreditación (SASA)</strong></a></li>
          <li><strong><a href="http://guanajuato.inea.gob.mx/consultaol/" target="_blank">Sistema de Consulta de Certificados Emitidos (ConsultaOL)</a></strong></li>
          <li><a href="http://guanajuato.inea.gob.mx/scime/" target="_blank"><strong>Sistema de Control e Inventario de Material Educativo (SCIME)</strong></a></li>
          <li><a href="http://sieg2.seg.guanajuato.gob.mx/login.jsp" target="_blank"><strong>Sistema Integral de Información Educativa de Guanajuato (SIIEg)</strong></a></li>
          <!--<li><a href="avanceacad/index.php" target="_blank"><strong>Consulta tu avance acad&eacute;mico</strong></a></li>
          <li><a href="avanceacad/logroTD.php"><strong>Logros del T&eacute;cnico Docente</strong></a></li>
          <li><a href="avanceacad/logroAS.php"><strong>Logros del asesor</strong></a></li>-->
        </ul>
      </div>
      </div>
      
      <div class="col-xs-12 col-sm-4">
        @include('includes.menuSecundario.menu_conocenos')
      </div>
    </div>
    <div class="row">
             
    </div>
  </div>
</div>
@stop