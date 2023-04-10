@extends('layouts.main')

@section('title', 'C.C.D')

@section('content')
<div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-12 li-cardk">
                    <!--<div class="lt-head">
                        <h4 class="encabezadoSeccion">Centros de Asesoría</h4>
                    </div>-->
                    <h2 class="formato_titulo_principal">
                      Centros de Asesoría
                    </h2>
                <!--<div class="col-xs-12 col-sm-12">
                    <div id="carouselCCD" class="carousel carousel-dark slide" data-bs-touch="true"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ url('/img/imagen/CCD-1-1.jpg') }}" class="d-block w-100" alt="Intranet">
                            </div>
                        </div>
                    </div>
                </div>-->

            </div>
            <!--<div class="column col-xs-12 col-sm-4">
                <div class="dest-he">
                    <div class="lt-head">CENTROS COMUNITARIOS DIGITALES</div>
                    <div class="row-lin">
                        <div class="ico1"></div>
                        <a href="{{ url('/ccd/ccdm') }}">
                            <label>Centros Comunitarios Digitales Móviles</label>
                        </a>
                    </div>
                    <div class="row-lin">
                        <div class="ico1"></div>
                        <a href="{{ url('/ccd/mevyt') }}">
                            <label>MEVyT en Línea</label>
                        </a>
                    </div>

                    <ul class="media-list">
            <li><a href="oficinas.php">Oficinas</a></li>
            <li><a href="cczz.cfm">Coordinaciones de Zona</a></li>
            <li><a href="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_directorio.php" target="_blank">Directorio</a></li>
            <li><a href="intranet.php">Intranet</a></li>
          </ul>
                </div>
            </div>-->
        </div>


        <!--<div class='row'>
            <!!<div class='col-8'>
                <div class="row">
                    <p style="text-align:justify;">
                        Son espacios dignos, abiertos a la comunidad que se encuentra en rezago educativo.
                        En ellos, se puede tener acceso a equipos de cómputo con internet, en donde los usuarios
                        tienen la oportunidad de concluir sus estudios de primaria y secundaria a través del Modelo
                        Educación para la Vida y el Trabajo (MEVyT en línea).
                    </p>

                    <p>INAEBA cuenta actualmente con 117 CCD, de los cuales, 2 son unidades móviles.</p>
                    <p class="text-justify">
                        <a id="plazas"></a>
                    </p>
                    <form name="CFForm_1" id="CFForm_1" action="#" method="post">
                        <input name="buscacassa" id="buscacassa" type="hidden" value="1">
                        <input name="ctof_ID" id="ctof_ID" type="hidden" value="2">

                        <input style="display:none;" name="Submit" id="Submit" type="image" value="Buscar"
                            src="/img/ligas_interes/001_37.png">

                        <div class="row">
                            <div class="input-group mb-3">
                                <span class="input-group-text mb-3" style="width:15%;">Municipio</span>
                                <div id="reactArea" style="width:85%;"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>-->
        <div class="row">
            <div class="col-md-6">
              <div class="cont_definicion">
                <p class="formato_texto">
              Los <span class='texto_resaltado'>Centros Comunitarios Digitales</span> (CCD) son espacios donde <span class="texto_resaltado2">se impulsa el uso de las Tecnologías de Información y Comunicación</span> (TIC) y se brinda asesoría educativa a la población joven y adulta, para que concluyan su primaria o su secundaria en la <span class="texto_resaltado">modalidad de atención que prefieran</span>. Los espacios cuentan con:</p>

                <p class="formato_texto">
                 <img src="/img/cuadro.png"> Un <span class="texto_resaltado2">aula</span> donde se imparten <span class="texto_realtado2">asesorías</span> de alfabetización, primaria o secundaria en <span class="texto_resaltado3">modalidad presencial</span> con el acompañamiento de un <span class="texto_resaltado3">asesor</span>. </p>

              <p class="formato_texto">
              <img src="/img/cuadro.png"> Una <span class="texto_resaltado2">sala de cómputo</span> con acceso a <span class="texto_resaltado3">internet</span> para cursar la primaria o secundaria <span class="texto_resaltado3">en línea</span> y promover el <span class="texto_resaltado2">desarrollo de habilidades </span>esenciales en el <span class="texto_resaltado2">uso de las TIC</span>.
                </p>

              </div> <br/>
              <h2 class="vineta_titulo">Localiza el Centro de Asesoría más cercano a tu domicilio</h2>
              <br/>
                <div class="input-group mb-3"> <!-- div del combo-->
                    <!--<span class="input-group-text mb-3" style="width:15%;">Municipio</span>-->
                    <div class="name_combo" >Municipio </div>
                    <div id="reactArea" style="width:85%;"></div>
                </div>
            </div>

            <div class="col-md-6"> <!-- div del imagen-->
                <img src="{{ url('/img/cad.jpg') }}" class="d-block w-100 shadow" alt="Intranet" style=" border-top-right-radius: 12px !important; border-bottom-left-radius: 15px !important;">
            </div>

        </div>
</div>
<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>
@stop
