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
            <h1 class="text-center">RECIBE SU CERTIFICADO OFICIAL DE SECUNDARIA AL CONCLUIR ESTUDIOS EN INAEBA</h1>
                <div class="fotonot">
                    <img class="liFoto rounded"  src="https://inaeba.guanajuato.gob.mx/n/archivos/media/media11-03-2022092509.JPG" width="262" alt="alt" title="foto" />
                </div>
                <div class="noticia text-justify text-raw">
                Alfonso combina su trabajo en la Dirección General de Obras Públicas con el estudio, y obtiene su certificado oficial de secundaria para dar continuidad con la preparatoria.

 

Viernes 11 de marzo de 2022.- Alfonso de la Cruz Hernández, empleado del área de mantenimiento de calles y avenidas de la Dirección General de Obra Pública de Salamanca, concluyó su secundaria al participar en el programa “El Buen Juez por su Casa Empieza” que, trabaja el Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) en coordinación con la Presidencia Municipal.

 

Así como él, varios ciudadanos de 15 años y más recibieron su certificado oficial de estudios en distintos eventos realizados en Salamanca, Silao y Romita, donde se contó con la presencia del director general de INAEBA, Eusebio Vega Pérez; así como los presidentes municipales, Julio César Ernesto Prieto Gallardo, Carlos García Villaseñor y Oswaldo Ponce Granados, respectivamente.

 

Gracias a la tecnología, Alfonso estudió en línea apoyado de una tablet y aseguró que para él fue más sencillo.

 

“Aprende uno a moverlas, es más fácil que con el cuaderno; ya nada más le pone uno el dedito y van pasando las preguntas, las respuestas y se nos hace un poquito más fácil”, dijo.  

 

Al darse cuenta de los beneficios que obtuvo al concluir su educación básica, se siente comprometido a invitar a otros a aprovechar los servicios de la dependencia estatal, “yo he platicado con varios compañeros para que se acerquen al INAEBA, porque es una opción muy buena, además de que es gratis”.

 

Con el certificado en sus manos, considera que también sirve de ejemplo para su hijo, “para que también él le eche ganas, para que vea que yo también me estoy superando constantemente y que así como yo, también le siga con su preparatoria”.

 

Al concluir las ceremonias de entrega de certificados, Vega Pérez sostuvo reuniones de trabajo con los alcaldes de Salamanca y Romita, con quienes acordó seguir trabajando de manera transversal para ofrecer los servicios de alfabetización, primaria y secundaria a quienes más lo necesiten.
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