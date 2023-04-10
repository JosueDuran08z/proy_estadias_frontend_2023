@extends('layouts.main')

@section('title', 'Código de Conducta Ética')

@section('meta')
<meta property="keywords" content="Código, Conducta, Ética, INAEBA, Guía, Actos, Servidor público, Guanajuato" />
<meta property="description"
    content="Guía detallada de los estándares esperados en los actos cotidianos de la persona servidora pública del Instituto de Alfabetización y Educación Básica para Adultos del Estado de Guanajuato" />
@endsection

@section('content')
<div class="container tituloss">
    <div class="">
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <h2 class="lt-head">Código de Conducta Ética del INAEBA</h2>
                <p class="text-contenido text-justify">
                    El "Código de Conducta Ética del INAEBA, Compromiso por un trabajo con integridad
                    y trasparencia"; es una guía detallada de los estándares esperados en los actos
                    cotidianos de la persona servidora pública del Instituto de Alfabetización y Educación
                    Básica para Adultos del Estado de Guanajuato; los cuales se basan en los valores
                    Institucionales y personales, que ayudan a vivir nuestra cultura y reflejan ante la
                    sociedad como realizamos nuestro quehacer diario. Con base en lo anterior, dicho Código
                    abarca cuestiones éticas, de anticorrupción, laborales y legales que rigen el actuar de
                    quienes brindamos un servicio al público en el Instituto.
                </p>
                <p><a href="{{ url('/documentos/codigo-conducta-inaeba.pdf') }}" target="_blank">Leer más >></a></p>
                <p><a href="{{ url('/documentos/acuerdo_administrativo_ce.pdf') }}" target="_blank">Acuerdo
                        administrativo >></a></p>
            </div>
            <div class="col-xs-12 col-sm-4">
                @include('includes.menuSecundario.menu_conocenos')
            </div>
        </div>
    </div>
</div>
@stop