@extends('layouts.main')

@section('title','Secundaria')

@section('meta')
<meta property="keywords" content="Secundaria, Educación, Nivel Avanzado, Estudiar, Duración, Costos, Requisitos" />
<meta property="description"
    content="Brinda atención a jóvenes y adultos que desean acceder a un nivel superior de bachillerato. Para certificar la secundaria, las personas deben acreditar 12 módulos." />
@endsection

@section('content')
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Secundaria</h4>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <img src="{{ url('/img/imagen/serviciosytramites-secundaria.jpg') }}"  class="d-block w-100" alt="Alfabetización">
                </div>
            </div>
            <div class="column col-xs-12 col-sm-4 li-cardk">
                @include('includes.menuSecundario.menu_servicios')
            </div>
        </div>

        <div class="row">



        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <h4 class="tituloss">Secundaria (Nivel Avanzado)</h4>

                <div class="row">
                    <p class="text-justify tituloss">
                        En el nivel avanzado se brinda atención a jóvenes y adultos que desean acceder a un
                        nivel superior de bachillerato. Para certificar la secundaria, las personas deben
                        acreditar 12 módulos:
                    </p>

                    <p class="text-justify tituloss">
                        8 módulos básicos del nivel avanzado + 4 módulos diversificados que las personas
                        elijan.
                    </p>
                </div>
            </div>
        </div>

        <div class="row equal-cols">
            <div class="column col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-donde-estudiar.png') }}" height="32">
                        <span class="encabezadoSubseccion">¿Dónde Estudiar?</span>
                    </div>
                    <div class="card-body">
                        <p class="text-justify">
                            <a class="link-tramite-p" href="{{ url('/ccd/index') }}">
                                Aquí puedes encontrar el Centro Comunitario Digital más cercano a tu domicilio.
                            </a>
                        </p>

                        <div id="reactArea" class="row-lin2"></div>
                    </div>
                </div>
            </div>

            <div class="column col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-duracion.png') }}" height="30">
                        <span class="encabezadoSubseccion">Duración</span>
                    </div>
                    <div class="card-body">
                        <p class="text-justify tituloss">
                            El tiempo para terminar la secundaria depende mucho del estudiante, la dedicación,
                            la constancia que le ponga a estudiar, asistir a clases, cumplir con sus trabajos
                            de los módulos.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row equal-cols">
            <div class="column col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-sin-costo.png') }}" height="30">
                        <span class="encabezadoSubseccion">Sin costo</span>
                    </div>
                    <div class="card-body">
                        <p class="text-justify tituloss">
                            Los servicios que ofrecemos y materiales no tienen ningún costo.
                        </p>
                    </div>
                </div>
            </div>

            <div class="column col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-requisitos.png') }}" height="30">
                        <span class="encabezadoSubseccion">Requisitos</span>
                    </div>
                    <div class="card-body tituloss">
                        <ol>
                            <li>15 años cumplidos o más</li>
                            <li><a href="{{ url('/documentos/formato.pdf') }}" target="_blank">Formato de Registro de Inscripción de la Persona Educanda</a> con todos los campos debidamente llenados y los espacios destinados
                                a las firmas deben de asentar nombre y firma donde así lo requieran. Cuando las personas
                                no saben firmar, deberán asentar su huella digital.</li>
                            <li><a href="https://www.gob.mx/curp/" target="_blank">Clave Única de Registro de Población
                                    (CURP)</a></li>
                            <li>Fotografía física o digital, reciente, tamaño infantil, de frente con el rostro
                                descubierto, en blanco y negro o color y fondo claro. </li>
                            <!--<li>Las personas con antecedentes escolares en el Sistema Educativo Nacional deberán presentar la boleta del último grado acreditado, este documento deberá estar debidamente llenado y con el sello oficial del "SISTEMA EDUCATIVO NACIONAL" o una <a href="http://calificaciones.seg.guanajuato.gob.mx/index.aspx" target="_blank">búsqueda en la base de datos</a> comprueban los antecedentes.</li>-->
                            <li>Presentar Certificado de Primaria Original y Copia</li>

                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>
@stop