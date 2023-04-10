@extends('layouts.main')

@section('title', 'Política de igualdad')

@section('meta')
<meta property="keywords" content="Política, Igualdad Laboral, Acuerdo, No discriminación" />
<meta property="description"
    content="Establecer el compromiso de cada persona integrante del Instituto y se promueva una cultura de igualdad laboral y no discriminación, garantizando la igualdad de oportunidades para el personal" />
@endsection

@section('content')
<br />
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="youresp col-xs-12 col-sm-8">
                <h3 class="lt-head" style="font-size: large;" >Acuerdo Administrativo de la Política de Igualdad Laboral y No Discriminación del
                    INAEBA</h3>
                <p class="text-contenido text-justify">
                    Se adopta en su totalidad la Política de Igualdad Laboral y No Discriminación del Estado de
                    Guanajuato para la aplicación al interior del INAEBA, con la finalidad establecer el compromiso
                    de cada persona integrante del Instituto y se promueva una cultura de igualdad laboral y no
                    discriminación, garantizando la igualdad de oportunidades para el personal; quedando estrictamente
                    prohibido cualquier tipo de discriminación, maltrato, violencia o rechazo, por causas de apariencia
                    física, cultura, discapacidad, sexo, idioma, género, edad, condición social o económica, religión,
                    estado civil, embarazo, origen étnico, opiniones, preferencias sexuales o situación migratoria.
                </p>
                <p>
                    <a href="{{ url('/documentos/POLITICA-DE-IGUALDAD-LABORAL-Y-NO-DISCRIMINACION-DEL-INAEBA-2022.pdf') }}"
                        target="_blank">Leer más del acuerdo &gt;&gt;</a>
                    <br>
                    <a href="{{ url('/documentos/lineamientos.pdf') }}" target="_blank">Lineamientos para la operación
                        de la Comisión de Igualdad Laboral y No discriminación &gt;&gt;</a>
                </p>
            </div>
            <div class="col-xs-12 col-sm-4">
                @include('includes.menuSecundario.menu_conocenos')
            </div>
        </div>
    </div>
</div>
@stop