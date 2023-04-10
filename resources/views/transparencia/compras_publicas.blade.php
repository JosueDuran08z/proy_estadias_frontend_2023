@extends('layouts.main')

@section('title', 'Compras publicas')

@section('meta')
    <meta property="keywords" content="Transparencia, Acceso a la Información, Compras, Públicas, Lineamientos, Programa, Adquisiciones, Arrendamientos"/>
    <meta property="description" content="Concentrado de los avisos de privacidad y protección de datos personales del instituto, para las diferentes direcciones y coordinaciones."/>
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="youresp col-xs-12 col-sm-8">
            <h3 align="justify" style="text-align: center;"><strong>Programa Anual de Compras</strong></h3>
            <div style="height:10px; border-bottom:1px solid #e6e6e6;">&nbsp;</div>
            <br>
            <div class="text-contenido" style="padding: 12px;">
                <p style="text-align: justify; ">
                    En términos de lo dispuesto en el artículo 4 de los Lineamientos para la Operación del Programa Anual de Adquisiciones, Arrendamientos y Servicios de las Dependencias y Entidades, se emite el Programa Anual de Compras para el año 2021 y 2022.
                </p>
            </div>

            <div style=" border:1px solid #e6e6e6; padding:10px;">
                <div style=" display: inline-block; vertical-align:middle; width:85%;">Programa Anual de Compras 2021 V.1</div>
                <div style=" display: inline-block; vertical-align:middle"><a href="http://www.inaeba.guanajuato.gob.mx/inaeba/compras_publicas/INAEBA_POAC_2021.pdf" target="_blank"><img src="{{ url('/img/pdf.png') }}"></a></div>
            </div>
            <div style=" border:1px solid #e6e6e6; padding:10px;">
                <div style=" display: inline-block; vertical-align:middle; width:85%;">Programa Anual de Compras 2021 V.2</div>
                <div style=" display: inline-block; vertical-align:middle"><a href="http://www.inaeba.guanajuato.gob.mx/inaeba/compras_publicas/INAEBA_POAC_2021_v2.pdf" target="_blank"><img src="{{ url('/img/pdf.png') }}"></a></div>
            </div>
            <div style=" border:1px solid #e6e6e6; padding:10px;">
                <div style=" display: inline-block; vertical-align:middle; width:85%;">Programa Anual de Compras 2022 V.1</div>
                <div style=" display: inline-block; vertical-align:middle"><a href="http://www.inaeba.guanajuato.gob.mx/inaeba/compras_publicas/INAEBA_POAC_2022_V1.pdf" target="_blank"><img src="{{ url('/img/pdf.png') }}"></a></div>
            </div>
            <div style=" border:1px solid #e6e6e6; padding:10px;">
                <div style=" display: inline-block; vertical-align:middle; width:85%;">Programa Anual de Compras 2022 V.2</div>
                <div style=" display: inline-block; vertical-align:middle"><a href="{{ url('/documentos/INAEBA_POAC_2022_V2.pdf')}}" target="_blank"><img src="{{ url('/img/pdf.png') }}"></a></div>
            </div>
            <div style=" border:1px solid #e6e6e6; padding:10px;">
                <div style=" display: inline-block; vertical-align:middle; width:85%;">Programa Anual de Compras 2023</div>
                <div style=" display: inline-block; vertical-align:middle"><a href="{{ url('/documentos/INAEBA_POAC_2023.pdf') }}"  target="_blank"><img src="{{ url('/img/pdf.png') }}"></a></div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4">
            @include('includes.menuSecundario.menu_transparencia')
        </div>
    </div>
</div> 
@stop