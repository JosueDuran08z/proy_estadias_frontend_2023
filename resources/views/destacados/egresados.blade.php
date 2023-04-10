@extends('layouts.main')

@section('title', 'Seguimiento a Egresados')

@section('meta')
<meta property="keywords"
    content="Egresados, Seguimiento, Educandos, Beneficiarios, Continuidad, Nivel, Solicitud, Continuar, Estudios" />
<meta property="description"
    content="Has cursado algún nivel educativo en INAEBA y deseas continuar con el siguiente nivel, presenta tu solicitud." />
@endsection

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Seguimiento a Egresados</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 li-cardk">

            <div class="accordion" id="accordionExample">
                <div class="accordion-item rounded-pill">
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h6><i class="bi bi-pin-fill fw-bold display-6"></i> El INAEBA te apoya a continuar con tu
                                siguiente meta vincul&aacute;ndote con nuestros aliados, ¡reg&iacute;strate para
                                apoyarte!. <b>Objetivo del Programa: Desarrollar acciones de vinculación.</b></h6>
                        </div>
                    </div>
                </div>
            </div>
            <br>

            <img src="{{ url('img/banner_egresados.svg') }}" class="d-block w-100" alt="..." />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 li-cardk">
            @include('includes.menuSecundario.menu_destacados')
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 li-cardk">
            <div id="reactAreaForm"></div>
        </div>
        <!--<hr>
        <div class="alert alert-primary" role="alert">
            <h3>INFORMACIÓN</h3> <p>Por periodo vacacional nuestros operadores no estarán disponibles, aun así, el pre registro estará activo, una vez terminado el periodo vacacional, las solicitudes serán atendidas conforme a la recepción.</p>
        </div>-->
    </div>
    <hr>
    <div class="row">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body alert-primary">
                        <label class="fw-bold"><i class="bi bi-bookmark-check-fill"></i> CONOCE LAS HISTORIAS DE
                            &Eacute;XITO DE NUESTROS EGRESADOS</label>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row" id="casoExito" style="display:block">
        <div class="col-md-4" id="card-1" style="display:none"><img src="{{ url('img/noticia1.jpg') }}"
                class="d-block w-100 text-center" id="img1" alt="Prepa_abierta"></div>
        <div class="col-md-4" id="card-2" style="display:none"><img src="{{ url('img/noticia2.jpg') }}"
                class="d-block w-100 text-center" id="img2" alt="Prepa_abierta"></div>
        <div class="col-md-4" id="card-3" style="display:none"><img src="{{ url('img/noticia3.jpg') }}"
                class="d-block w-100 text-center" id="img3" alt="Prepa_abierta"></div>
        <div class="col-md-4" id="card-4" style="display:none"><img src="{{ url('img/noticia4.jpg') }}"
                class="d-block w-100 text-center" id="img4" alt="Prepa_abierta"></div>
        <div class="col-md-4" id="card-5" style="display:none"><img src="{{ url('img/noticia5.jpg') }}"
                class="d-block w-100 text-center" id="img5" alt="Prepa_abierta"></div>
        <div class="col-md-4" id="card-6" style="display:none"><img src="{{ url('img/noticia6.jpg') }}"
                class="d-block w-100 text-center" id="img6" alt="Prepa_abierta"></div>
        <div class="col-md-6">
            <div class="text-justify" id="textoCasosExito"></div>
        </div>
    </div>
    <div class="row" id="casosExito1">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia1_thumbnail.jpg') }}" class="img-thumbnail text-center"
                            alt="uveg" /></center>
                    <p class="card-text">Certificado de secundaria le ayuda a mejorar en su trabajo....</p>
                    <button type="button" class="btn btn-link" onclick="noticia(1)">Leer...</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia2_thumbnail.jpg') }}" class="img-thumbnail text-center"
                            alt="uveg" /></center>
                    <p class="card-text">Deja las drogas y le da un impulso a su vida por medio de la educaci&oacute;n.
                    </p>
                    <button type="button" class="btn btn-link" onclick="noticia(2)">Leer...</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia3.jpg') }}" class="img-thumbnail text-center" alt="uveg" />
                    </center>
                    <p class="card-text">Búsca convertirse en veterinaria con ayuda de INAEBA.</p>
                    <button type="button" class="btn btn-link" onclick="noticia(3)">Leer...</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="casosExito2">
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia4_thumbnail.jpg') }}" class="img-thumbnail text-center"
                            alt="uveg" /></center>
                    <p class="card-text">Pasa más tiempo con sus hijos y ahora tiene un mejor empleo.</p>
                    <button type="button" class="btn btn-link" onclick="noticia(4)">Leer...</button>
                </div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title  text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia5_thumbnail.jpg') }}" class="img-thumbnail text-center"
                            alt="uveg" /></center>
                    <p class="card-text">Se convierte en ejemplo de superación para sus hijos.</p>
                    <button type="button" class="btn btn-link" onclick="noticia(5)">Leer...</button>
                </div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">Caso de &eacute;xito</h5>
                    <center><img src="{{ url('img/noticia6_thumbnail.jpg') }}" class="img-thumbnail text-center"
                            alt="uveg" /></center>
                    <p class="card-text">Alcanza el empleo de sus sueños con el INAEBA.</p>
                    <button type="button" class="btn btn-link" onclick="noticia(6)">Leer...</button>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="accordion-body alert-primary"><label class="fw-bold"><i class="bi bi-people-fill"></i> CONOCE A
                NUESTROS ALIADOS</label></div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">SEDES</h5>
                    <a href="#">
                        <center><img src="{{ url('img/sedes.png') }}" class="d-block w-50 text-center" alt="sedes" />
                        </center>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">PREPA ABIERTA</h5>
                    <a href="#">
                        <center><img src="{{ url('img/prepa.png') }}" class="d-block w-50 text-center"
                                alt="Prepa_abierta" /></center>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">UVEG</h5>
                    <a href="#">
                        <center><img src="{{ url('img/uveg.png') }}" class="d-block w-50 text-center" alt="uveg" />
                        </center>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="accordion-body alert-primary"><label class="fw-bold"><i class="bi bi-people-fill"></i> EGRESADO
                EXITOSO TE BUSCAMOS</label></div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 li-cardk">
            <center><img src="{{ url('img/imagen/caso_exito.jpg') }}" class="d-block text-center" alt="sedes" />
            </center>
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 li-cardk">

            <div id="reactAreaFormEgresados"></div>
        </div>
    </div>
</div>
<!--container -->

<script src="{{ url('/js/api/alert.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/datosDomiciliarios.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/seguimientoEgresados.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/form_preRegistro.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/casosExito.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/form_egresados.js') }}" type="text/babel"></script>
@stop