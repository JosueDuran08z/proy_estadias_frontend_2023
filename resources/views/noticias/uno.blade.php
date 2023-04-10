@extends('layouts.main')

@section('title', 'Noticias')

@section('meta')
    <meta property="keywords" content="Noticias, Logros, Egresados, Notas, Información, Educando, Beneficiario, Convenios"/>
    <meta property="description" content="La sección de noticias te permite acceder a las notas y artículos relacionados con el instituto y sus educandos."/>
@endsection

@section('content')
<style>
    .fotonot {
    width: 260px !important;
    float: left !important;
    margin-bottom: 10px !important;
    margin-right: 20px !important;
}
</style>
<link rel="stylesheet" href="{{ url('/css/datePickerNoticia.css') }}">
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            <div class="card cardCustom">
                <div class="card-header"><h4 class="encabezadoSeccion">Noticias</h4></div>
            </div>      
        </div>             
    </div>
    <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-12">
            <div>
            <h1 class="text-center">Aprovecha y certifica tu primaria o secundaria con INAEBA</h1>
                <div class="fotonot">
                    <img class="liFoto rounded"  src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media22-03-2022094901.jpg" width="262" alt="alt" title="foto" />
                </div>
                <div class="noticia text-justify text-raw">
                    ●	Podrás hacerlo en la Tercera Jornada Nacional de Aplicación de Exámenes y Acreditación 2022 que se celebrará del 23 al 27 de marzo en los 46 municipios de Guanajuato. 

                    El Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) invita a las personas de 15 años en adelante que requieran obtener su certificado oficial de primaria y/o secundaria, a participar en la Tercera Jornada Nacional de Aplicación de Exámenes y Acreditación 2022.

                    Este documento se adquiere al aprobar el nivel educativo que se aplique, y puede ser a través de diferentes modalidades; una de ellas es el Reconocimiento de Saberes que consiste en la aplicación de un solo examen, con la ventaja de que se revisa y da a conocer el resultado de forma inmediata. 

                    Esta actividad que, se desarrolla de manera conjunta con el Instituto Nacional para la Educación de los Adultos (INEA), se llevará a cabo del 23 al 27 de marzo en todo el territorio estatal.

                    Los requisitos que las o los interesados deben presentar son los siguientes: 
                    Para primaria:
                    1.	Copia de la CURP.
                    2.	Copia de las boletas de calificaciones de años cursados, si es que se cuenta con ellas.

                    Para secundaria: 
                    1.	Copia de la CURP.
                    2.	Copia de boletas de calificaciones, en caso de contar con ellas.
                    3.	Copia del certificado oficial de primaria.

                    En la Jornada Nacional de Aplicación de Exámenes y Acreditación 2022 también se atiende a las niñas, niños y adolescentes que actualmente estudian su primaria en el programa Crece 10-14 de INAEBA. 

                    Las y los menores que acrediten su examen, tendrán la oportunidad de incorporarse al sistema escolarizado para estudiar posteriormente la secundaria. 

                    Para participar en la Jornada, las y los interesados deben inscribirse en las oficinas de la coordinación de zona de INAEBA más cercana a su domicilio o bien, entrar a la página inaeba.guanajuato.gob.mx y seleccionar la opción de INAEBA en tu casa donde, por medio de un chat bot se brinda la asesoría para realizar su registro. 


                    También está la opción de registrarse vía telefónica, marcando los siguientes números: 800 746 23 22; y desde León, al 477 148 12 60.
                </div>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="dest-he">
                <div class="lt-head">NOTICIAS</div>
                <table class="table table-borderless">
                    <tbody>
                        <tr height="130"><td width="51%"><img src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media22-03-2022094901.jpg" width="173" alt="foto2" title="foto2" class="fotoland"></td><td width="49%"><a class="linkNoticias" href="https://inaeba.guanajuato.gob.mx/noticias/noticia/1">Aprovecha y certifica tu primaria o secundaria con INAEBA</a></td></tr>
                        <tr height="130"><td width="51%"><img src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media22-03-2022094113.jpg" width="173" alt="foto1" title="foto1" class="fotoland"></td><td width="49%" class="align-middle"><a class="linkNoticias" href="https://inaeba.guanajuato.gob.mx/noticias/noticia/2">REALIZA TU SERVICIO SOCIAL DE PREPARATORIA  Y UNIVERSIDAD CON INAEBA.</a></td></tr>
                        <tr height="130"><td width="51%"><img src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media11-03-2022092509.JPG" width="173" alt="Foto" title="Foto" class="fotoland"></td><td width="49%" class="align-middle"><a class="linkNoticias" href="https://inaeba.guanajuato.gob.mx/noticias/noticia/3">RECIBE SU CERTIFICADO OFICIAL DE SECUNDARIA   AL CONCLUIR ESTUDIOS EN INAEBA</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>



          
    </div>
</div>
<!--<script src="{{ url('/js/api/noticia.js') }}" type="text/babel"></script>-->
@stop