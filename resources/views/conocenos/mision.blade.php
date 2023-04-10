@extends('layouts.main')

@section('title', 'Mision|Visión|Valores')

@section('meta')
<meta property="keywords" content="Misión, Visión, Valores, Objetivo, INAEBA, conocenos, historia," />
<meta property="description"
    content="Institución pública del gobierno del estado  de Guanajuato, que ofrece servicios educativos de alfabetización, primaria y secundaria, con calidad e inclusión, para jóvenes y adultos en rezago educativo" />
@endsection

@section('content')
<br />
<div class="container tituloss">
    <div class="">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <h3 class="lt-head">Nuestra Historia, Misión, Visión y Valores</h3>
                <img src="{{ url('/img/imagen/conocenos-historia.jpg') }}" class="d-block w-100" alt="Consulta pública">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="dest-he">
                    @include('includes.menuSecundario.menu_conocenos')
                </div>

            </div>
        </div>
    </div>
    <div class="row margin15">
        <div class="youresp col-xs-12 col-sm-8">
            <h3><strong>Misión</strong></h3>
            <p class="text-justify">
                Ser una institución pública del gobierno del estado de Guanajuato, socialmente reconocida
                que ofrece servicios educativos de alfabetización, primaria y secundaria, con calidad e inclusión,
                para jóvenes y adultos en rezago educativo, contribuyendo así a mejorar las condiciones de vida
                de los habitantes de la entidad.
            </p>
            <h3><strong>Visión</strong></h3>
            <p class="text-justify">
                Ser la mejor institución educativa del país para jóvenes y adultos, que se distinga por contribuir
                a la disminución del analfabetismo y el rezago educativo, alcanzando los índices internacionales,
                a través de la participación de diversos sectores de la sociedad, mediante la implementación de
                estrategias innovadoras con personal capacitado y comprometido, teniendo el reconocimiento de
                instancias internacionales.
            </p>
            <h3 class="text-justify"><strong>Valores</strong></h3>
            <div class="text-justify">
                <ul>
                    <li>Honestidad | Actuando en apego a principios éticos y morales.</li>
                    <li>Lealtad | A la esencia de la Institución&nbsp; y a los servicios que presta.</li>
                    <li>Servicio | Otorgar un trato digno, cálido y oportuno a todas las personas que interactúan con la
                        Institución.</li>
                    <li>Calidad | Realizar correcta y oportunamente nuestras funciones en los servicios que
                        proporcionamos.</li>
                    <li>Inclusión | Atendiendo a todos los segmentos de la población que requieran los servicios que
                        ofrecemos.</li>
                    <li>Compromiso | Desarrollar acciones encaminadas al logro de nuestra misión y visión. </li>
                </ul>
                <br><br>
                <h3 class="text-justify"><strong>Política de calidad</strong></h3>
                <p class="text-justify">
                    <strong>
                        El Instituto de Alfabetización y Educación Básica para Adultos establece el compromiso de
                        implementar un Sistema de Gestión de la Calidad, que permita a través de la mejora continua
                        de sus procesos, de su personal competente y sensible y del cumplimiento de las especificaciones
                        y requerimientos de la alfabetización y educación básica para jóvenes y adultos, disminuir el
                        rezago educativo en el Estado de Guanajuato, alcanzando con ello, la satisfacción de nuestros
                        beneficiarios/as y partes interesadas.
                    </strong>
                </p>
                <br>
                <h3 class="text-justify"><strong>Objetivos de calidad</strong></h3>
                <ul>
                    <li>1. Reducir del 35% al 25% el rezago educativo en el Estado de Guanajuato al 2024.</li>
                    <li>2. Alcanzar un 80% en la satisfacción de nuestros/as beneficiarios/as.</li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-4">
            </div>
        </div>
    </div>
</div>
@stop