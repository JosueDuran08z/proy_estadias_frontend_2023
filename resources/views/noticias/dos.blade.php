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
                <h1 class="text-center">REALIZA TU SERVICIO SOCIAL DE PREPARATORIA  Y UNIVERSIDAD CON INAEBA.</h1>
                <div class="fotonot">
                    <img class="liFoto rounded"  src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media22-03-2022094113.jpg" width="262" alt="alt" title="foto" />
                </div>
                <div class="noticia text-justify text-raw">
                    De esta forma las y los jóvenes, pueden cumplir con este requerimiento escolar al dedicar parte de su tiempo libre a enseñar a otros y de esta forma ayudar en la atención del analfabetismo y rezago educativo.

                    Viernes 18 de marzo de 2022.- El Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) convoca a las y los estudiantes de preparatoria y universidad a realizar su servicio social, al colaborar con distintas actividades encaminadas a la disminución del analfabetismo y el rezago educativo en los 46 municipios del estado.

                    De esta manera, Guanajuato se suma al Movimiento Nacional por la Alfabetización y la Educación (MONAE), encabezado por la Secretaría de Educación Pública (SEP), y que a través del Instituto Nacional para la Educación de los Adultos (INEA) y las instancias estatales encargadas de atender el tema, invita a jóvenes con escolaridad media superior y superior a que, de manera voluntaria, atiendan a quienes durante la contingencia sanitaria abandonaron la escuela, a quienes nunca formaron parte del sistema escolarizado o bien, que se salieron de él sin concluir su primaria y secundaria.

                    En una visita realizada por Eusebio Vega Pérez, director general de INAEBA, a alumnas y alumnos del Instituto Tecnológico de Purísima, extensión Manuel Doblado, dijo que se pueden invitar a familiares, amigos, comerciantes, taxistas, gente de las comunidades y de los alrededores de su plantel educativo, para que aprendan a leer y a escribir, y/o que se preparen hasta obtener su certificado oficial de educación básica.

                    “En INAEBA estamos con las puertas abiertas para recibirlas y recibirlos con mucho gusto. Lo primero es hacer una labor de promoción y de incorporación de aquellas personas que quieran continuar sus estudios; y segundo, también ustedes nos podrían ayudar con acciones educativas, para lo que se les brindaría capacitación, material y acompañamiento permanente, por medio de las y los coordinadores de zona adscritos a la dependencia”, dijo.

                    Al respecto, el estudiante de cuarto semestre de Ingeniería Industrial, Alexis Aviña, dijo “ciertamente sí me preocupa (el rezago educativo) porque varios de mis conocidos, amigos, ni siquiera terminaron la preparatoria, la secundaria (…) si somos realistas, la verdad es que no les espera un buen futuro laboral, a diferencia de si estudiaran y se preparan más”.

                    Si estás interesado en ser parte de esta red de colaboradores, puedes acudir a la dirección general de tu plantel educativo o bien, ingresar a la página: inaeba.guanajuato.gob.mx, enviar un correo electrónico a serviciosocial@inaeba.edu.mx o también, comunicarte a los teléfonos 477 148 12 60, extensión 5241.
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