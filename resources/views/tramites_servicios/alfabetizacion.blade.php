@extends('layouts.main')

@section('title','Alfabetización')

@section('meta')
<meta property="keywords" content="Alfabetización, Educación, Nivel Inicial, Estudiar, Duración, Costos, Requisitos" />
<meta property="description"
    content="Útil para las personas que necesitan aprender a  leer y escribir, así como conocer elementalmente los números y operaciones matemáticas." />
@endsection

@section('content')
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Alfabetización</h4>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <img src="{{ url('/img/imagen/serviciosytramites-alfabetizacion.jpg') }}" class="d-block w-100" alt="Alfabetización">
                </div>

            </div>

            <div class="col-xs-12 col-sm-4 li-cardk">
                @include('includes.menuSecundario.menu_servicios')
            </div>
        </div>

        <div class="row">




        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-lg-8 col-xl-8">
                <br>
                <h4 class="tituloss">Alfabetización (Nivel inicial)</h4>
                <p class="text-justify">
                    <br>
                    Para la Alfabetización o nivel inicial, los asesores de INAEBA utilizan el Método de
                    <em>La Palabra Generadora</em> del autor Paulo Freire; útil para las personas que necesitan
                    aprender a leer y escribir, así como conocer elementalmente los números y operaciones
                    matemáticas. Para concluir este nivel es necesario cursar 3 módulos básicos.
                </p>
            </div>
        </div>

        <div class="row equal-cols">
            <div class="col-xs-12 col-sm-6 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <img class="tramites-icon1"
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-donde-estudiar.png') }}" height="32">
                        <span>¿Dónde Estudiar?</span>
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
                            src="{{ url('../img/imagen/iconos/servicios-y-tramites-duracion.png') }}" height="30">
                        <span class="encabezadoSubseccion">Duración</span>
                    </div>
                    <div class="card-body">
                        <p class="text-justify">
                            El tiempo para alfabetizarse depende mucho del estudiante, la dedicación, la constancia
                            que le ponga a estudiar, asistir a clases.
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
                            src="{{ url('/img/imagen/iconos/servicios-y-tramites-requisitos.png') }}" height="28">
                        <span class="encabezadoSubseccion">Requisitos</span>
                    </div>
                    <div class="card-body">
                        <ol class='text-justify'>
                            <li>15 años cumplidos o más</li>
                            <li>
                                <a href="{{ url('/documentos/formato.pdf') }}" target="_blank"> Formato de Registro de Inscripción de la Persona Educanda</a>
                                con todos los campos debidamente llenados y los espacios destinados a las firmas
                                deben de asentar nombre y firma donde así lo requieran. Cuando las personas no saben
                                firmar, deberán asentar su huella digital.
                            </li>
                            <li>
                                <a href="https://www.gob.mx/curp/" target="_blank">
                                    Clave Única de Registro de Población (CURP).
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-40570660-1"></script>
<script>
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-40570660-1');
</script>

<script src="{{ url('/js/api/detalleCZ.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/inicio.js') }}" type="text/babel"></script>
@stop