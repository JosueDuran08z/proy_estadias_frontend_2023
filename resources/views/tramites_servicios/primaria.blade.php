@extends('layouts.main')

@section('title','Primaria')

@section('meta')
<meta property="keywords" content="Primaria, Educación, Nivel Intermedio, Estudiar, Duración, Costos, Requisitos" />
<meta property="description"
    content="Orientado a los educandos que desean continuar con su educación primaria. Los interesados deben acreditar 12 módulos para obtener su certificado." />
@endsection

@section('content')
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Primaria</h4>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div id="carouselPrimaria" class="carousel carousel-dark slide" data-bs-touch="true"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ url('/img/imagen/serviciosytramites-primaria.jpg') }}"
                                    class="d-block w-100" alt="Alfabetización">
                            </div>
                        </div>
                    </div>
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
                <h4 class="tituloss">Primaria (Nivel Intermedio)</h4>
                <div class="row">
                    <p class="text-justify">
                        El nivel intermedio está orientado a los educandos que desean continuar con su
                        educación primaria. Los interesados deben acreditar 12 módulos para obtener
                        su certificado.
                    </p>

                    <p class="text-justify">
                        10 módulos básicos (3 son del nivel inicial y 7 del nivel intermedio) +
                        2 módulos diversificados que las personas elijan.
                    </p>
                </div>
            </div>
        </div>

        <div class="row equal-cols">
            <div class="column col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-donde-estudiar.png') }}" height="33">
                        <span class="encabezadoSubseccion">¿Dónde Estudiar?</span>
                    </div>
                    <div class="card-body">
                        <p class="text-justify">
                            <a class="link-tramite-p" href="{{ url('/ccd/index') }}">
                                Aquí puedes encontrar el Centro Comunitario Digital más cercano a tu domicilio.
                            </a>
                        </p>

                        <form action="#" method="post" name="filtro" class="row-lin2">
                            <input type="hidden" name="buscacassa" value="1">
                            <div id="reactArea"></div>
                        </form>
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
                        <p class="text-justify">
                            El tiempo para terminar la primaria depende mucho del estudiante, la dedicación,
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
                        <p class="text-justify">
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
                    <div class="card-body">
                        <ol>
                            <li>15 años cumplidos o más</li>
                            <li><a href="{{ url('/documentos/formato.pdf') }}" target="_blank">Formato de Registro de Inscripción de la Persona Educanda</a> con todos los campos debidamente llenados y los espacios destinados
                                a las firmas deben de asentar nombre y firma donde así lo requieran. Cuando las personas
                                no saben firmar, deberán asentar su huella digital.</li>
                            <li><a href="https://www.gob.mx/curp/" target="_blank">Clave Única de Registro de Población
                                    (CURP)</a></li>
                            <li>Fotografía física o digital, reciente, tamaño infantil, de frente con el rostro
                                descubierto, en blanco y negro o color y fondo claro. </li>
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