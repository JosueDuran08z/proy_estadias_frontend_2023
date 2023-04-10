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
                <h1 class="text-center">DOLORENSES CONCLUYEN SU EDUCACIÓN BÁSICA</h1>
                <div class="fotonot">
                    <img class="liFoto rounded"  src="https://inaeba.guanajuato.gob.mx/img/noticias/4.jpeg" width="262" alt="alt" title="foto" />
                </div>
                <div class="noticia text-justify text-raw">
                •	Cada vez más guanajuatenses aprovechan las alternativas que ofrece el INAEBA para obtener su certificado de primaria y/o secundaria. 

Dolores Hidalgo, Guanajuato, a 25 de marzo de 2022.- Habitantes de este municipio, recibieron certificados de primaria y/o secundaria, luego de concluir su preparación educativa en el Instituto de Alfabetización y Educación Básica para Adultos (INAEBA), esto en el marco de la Tercera Jornada Nacional de Aplicación de Exámenes y Acreditación 2022.

Las y los beneficiarios, cuyas edades van de los 15 a los 60 años, vivían en rezago educativo en el municipio de Dolores Hidalgo, pero aprovecharon las modalidades educativas: Comunidades de aprendizaje (COA), el Modelo Educación para la Vida y el Trabajo también conocido como MEVyT y el Examen Único de Reconocimiento de Saberes de INAEBA y ahora tendrán la posibilidad de continuar con los siguientes niveles académicos e incluso, conseguir un mejor empleo. 

Durante su mensaje, el director general de INAEBA, Eusebio Vega Pérez, dijo que el esfuerzo de las y los egresados, sirven de ejemplo para que sus familiares, amigos y conocidos que no hayan concluido su educación básica terminen ya que, tras vivir la experiencia de estudiar con la dependencia, ahora pueden ser promotoras y promotores y llevar este espíritu de superación a cualquier rincón del estado.

“Tenemos que reconocer el gran ejemplo que nos dan ustedes hoy, de perseverancia, de superación, por su esfuerzo; sabemos que tienen otras actividades, atender a la familia, a los hijos, a los nietos, el trabajo y por eso es que su logro es más meritorio porque ustedes además de que tienen que atender una serie de actividades, se dieron una segunda oportunidad para terminar la primaria y la secundaria, y eso para nosotros es muy valioso. Ustedes hoy se convierten en ejemplos a seguir”, dijo.

Por su parte, Estephania Ramírez Guerrero de 15 años, agradeció al personal de INAEBA por los servicios prestados y en representación de las y los egresados, dijo “agradezco de todo corazón su presencia, por haberlos conocido, y por supuesto, los felicitó por la gran labor que realizaron, por ayudar a todas las personas que necesiten concluir sus estudios”

Al concluir la entrega certificados en la Presidencia Municipal de Dolores Hidalgo, el director general de INAEBA, sostuvo una reunión de trabajo con el alcalde, Adrián Hernández Alejandri, para definir estrategias encaminadas a mantener esa alianza que permita a más dolorenses obtener su certificado de primaria o secundaria. 

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