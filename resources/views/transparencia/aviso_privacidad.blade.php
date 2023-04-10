@extends('layouts.main')

@section('title', 'Avisos de Privacidad')

@section('meta')
<meta property="keywords"
    content="Transparencia, Acceso a la Información, Aviso de privacidad, Protección, Datos Personales, Direcciones, Coordinaciones" />
<meta property="description"
    content="Concentrado de los avisos de privacidad y protección de datos personales del instituto, para las diferentes direcciones y coordinaciones." />
@endsection

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Avisos de Privacidad y Protección de Datos Personales</h4>
                </div>
            </div>
        </div>
    </div>

    <div class="row" id="padre">
        <div class="col-xs-12 com-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="list-group">
                <a class="list-group-item list-group-item-action hover:active"
                                href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DEL-INAEBA.pdf') }}"
                                target="_blank">Aviso de privacidad integral del INAEBA</a>
                <a class="list-group-item list-group-item-action" href="{{ url('/documentos/Aviso_Privacidad/VENTANILLA_IMPULSO_SIMPLIFICADO.pdf') }}"
                target="_blank">Aviso de privacidad simplificado del programa Fortalecimiento a los
                servicios educativos digitales</a>
                <a class="list-group-item list-group-item-action" href="{{ url('/documentos/Aviso_Privacidad/VENTANILLA_IMPULSO_INTEGRAL.pdf') }}"
                                target="_blank">Aviso de privacidad integral del programa Fortalecimiento a los
                                servicios educativos digitales</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiGeSePa">Dirección General y Secretaría
                                Particular</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#CoCoSoRe">Coordinación de Comunicación
                                Social y Relaciones Públicas</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiCoJu">Dirección de la Consejería
                                Jurídica</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiAd">Dirección de Administración </a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiTeInCo">Dirección de Tecnologías de la
                                Información y Conectividad</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiAc">Dirección Académica</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiPlEvEsIn">Dirección de Planeación y
                                Enlace Regional</a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiCoAlEs">Dirección de Concertación y
                                Alianzas Estratégicas </a>
                <a class="list-group-item list-group-item-action" role="button" data-bs-toggle="collapse" href="#DiCoEsCe">Dirección de Control Escolar y
                                Certificación </a>
            </div>
        </div>
        <div class="col-xs-12 com-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="collapse show" id="DiGeSePa" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección General y Secretaría Particular</h2>
                    <p>Aviso de privacidad simplificado de la Dirección General y Secretaría Particular</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-GENERAL-Y-SECRETARIA-PARTICULAR.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección General y Secretaría Particular</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-GENERAL-Y-SECRETARIA-PARTICULAR.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="CoCoSoRe" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Coordinación de Comunicación Social y Relaciones Públicas</h2>
                    <p>Aviso de privacidad simplificado de la Coordinación de Comunicación Social y Relaciones Públicas
                    </p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-COORDINACION-DE-COMUNICACION-SOCIAL-Y-RELACIONES-PUBLICAS.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Coordinación de Comunicación Social y Relaciones Públicas</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE PRIVACIDAD-INTEGRAL-DE-LA-COORDINACION-DE-COMUNICACION-SOCIAL-Y-RELACIONES-PUBLICAS.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiCoJu" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de la Consejería Jurídica</h2>
                    <p>Aviso de privacidad simplificado de la Dirección de la Consejería Jurídica</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-LA-CONSEJERIA-JURIDICA.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de la Consejería Jurídica</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-LA-CONSEJERIA-JURIDICA.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiAd" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de Administración </h2>
                    <p>Aviso de privacidad simplificado de la Dirección de Administración</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-ADMINISTRACION.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de Administración</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-ADMINISTRACION.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiTeInCo" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de Tecnologías de la Información y Conectividad</h2>
                    <p>Aviso de privacidad simplificado de la Dirección de Tecnologías de la Información y Conectividad
                    </p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-TECNOLOGIAS-DE-INFORMACION-Y-CONECTIVIDAD.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de Tecnologías de la Información y Conectividad</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-TECNOLOGIAS-DE-INFORMACION-Y-CONECTIVIDAD.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiAc" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección Académica </h2>
                    <p>Aviso de privacidad simplificado de la Dirección Académica</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-ACADEMICA.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección Académica</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-ACADEMICA.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiPlEvEsIn" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de Planeación y Enlace Regional</h2>
                    <p>Aviso de privacidad simplificado de la Dirección de Planeación, Evaluación y Estrategias
                        Institucionales</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-PLANEACION.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de Planeación, Evaluación y Estrategias
                        Institucionales</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-PLANEACION.pdfs') }}"
                            target="_blank">Consultar</a></p>
                    <!--<p>Aviso de privacidad simplificado del programa Fortalecimiento a los servicios educativos digitales</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/VENTANILLA_IMPULSO_SIMPLIFICADO.pdf') }}" target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral del programa Fortalecimiento a los servicios educativos digitales</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/VENTANILLA_IMPULSO_INTEGRAL.pdf') }}" target="_blank">Consultar</a></p>-->
                </div>
            </div>
            <div class="collapse" id="DiCoAlEs" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de Concertación y Alianzas Estratégicas </h2>
                    <p>Aviso de privacidad simplificado de la Dirección de Concertación y Alianzas Estratégicas</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-DIRECCION-DE-CONCERTACION-Y-ALIANZAS-ESTRATEGICAS.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de Concertación y Alianzas Estratégicas</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-CONCERTACION-Y-ALIANZAS-ESTRATEGICAS.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
            <div class="collapse" id="DiCoEsCe" data-bs-parent="#padre">
                <div class="card card-body">
                    <h2>Dirección de Control Escolar y Certificación</h2>
                    <p>Aviso de privacidad simplificado de la Dirección de Control Escolar y Certificación</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO-DE-LA-DIRECCION-DE-CONTROL-ESCOLAR-Y-CERTIFICACION.pdf') }}"
                            target="_blank">Consultar</a></p>
                    <p>Aviso de privacidad integral de la Dirección de Control Escolar y Certificación</p>
                    <p><a href="{{ url('/documentos/Aviso_Privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-DE-LA-DIRECCION-DE-CONTROL-ESCOLAR-Y-CERTIFICACION.pdf') }}"
                            target="_blank">Consultar</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
@stop