@extends('layouts.main')

@section('title','Duplicado de certificado')
@section('meta')
<meta property="keywords"
    content="Certificado, Certificación, Duplicado, Trámites, Servicios, Estudios, Constancia, Diploma" />
<meta property="description"
    content=" Si  perdiste tu certificado y necesitas una reposición, no te preocupes podemos  ayudarte." />
@endsection

@section('content')
<div class="">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">Duplicado de Certificado</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <div id="carouselCertificado" class="carousel carousel-dark slide" data-bs-touch="true"
                    data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselCertificado" data-bs-slide-to="0" class="active"
                            aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselCertificado" data-bs-slide-to="1"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="{{ url('/img/imagen/serviciosytramites-duplicado-de-certificado.jpg') }}"
                                class="d-block w-100" alt="Alfabetización">
                        </div>
                        <div class="carousel-item">
                            <img src="{{ url('/img/imagen/serviciosytramites-duplicado-de-certificado.jpg') }}"
                                class="d-block w-100" alt="Alfabetización">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCertificado"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselCertificado"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <!--<p>En el caso de los certificados que fueron emitidos en el año 2018 o posterior, y que ya fue comprobado en los sistemas institucionales, podrán imprimirlo con tu CURP desde el siguiente link:
                <a href="http://certificacion.inea.gob.mx/DescCertificado.aspx" target="_blank">http://certificacion.inea.gob.mx/DescCertificado.aspx</a>
                
                En caso de que el certificado haya sido emitido en el año 2018 o posterior, y no firmaste el acuse de recibido, deberá acudir a la coordinación de zona más cercana para la impresión del certificado digital y su respectivo acuse.</p>-->
            </div>
            <div class="column col-xs-12 col-sm-4 li-cardk">
                @include('includes.menuSecundario.menu_servicios')
            </div>
        </div>

        <div class="row">
            <div class="column col-xs-12 col-sm-8 card cardCustom">
                <!--<div class="lst-head">CONSULTA EL ESTATUS DE TU CERTIFICADO</div>-->
                <div class="card-body">
                    <ul style="margin-left: -20px;">
                        <h5> Si perdiste tu certificado y necesitas una reposición, no te preocupes podemos ayudarte,
                            visita la Coordinación de Zona más cercana a tu domicilio, solo sigue los siguientes pasos:
                        </h5>
                        <p>Para realizar un trámite de duplicado de certificado emitido anterior al año 2018: </p>
                        <ol>
                            <li>Reúne todos los requisitos:</li>
                            <ol>
                                <li><b>Clave Única de Registro de Población CURP, Original: NO, Copias 1 simple(s)</b>
                                </li>
                                <li><b>Acta de Nacimiento, Original: NO, Copias: 1 simple(s) (opcional y para corrección
                                        de datos obligatoria)</b></li>
                                <li><b>Certificado, Original: NO, Copias: 1 simple(s) (De primaria por ambos lados, en
                                        caso de solicitar duplicado del certificado de secundaria)</b></li>
                                <li><b>Identificación Oficial vigente con fotografía, Original: NO, Copias: 1
                                        simple(s)</b></li>
                                <li><b>Fotografía tamaño infantil, Original: SI, Copias 0 (1 en terminado mate o semi
                                        mate, de frente, fondo claro, ropa clara y rostro descubierto, puede ser digital
                                        con las mismas características)</b></li>
                            </ol>
                            <li>Acude a la Coordinación de Zona del INAEBA de tu municipio para llevar los documentos y
                                llenar el formato de solicitud. <a href="/conoce/cczz">Consulta tu Coordinación</a></li>
                            <li>Espera el tiempo que te indiquen</li>
                            <li>Después de ese tiempo llama a la Coordinación de Zona para saber si el duplicado está
                                listo.</li>
                            <li>Ve por tu duplicado.</li>
                        </ol>
                        <hr>
                        <div id="divResultado"></div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="ok">.</div>
</div>
@stop