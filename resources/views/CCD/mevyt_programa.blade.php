@extends('layouts.main')

@section('title', 'C.C.D')

@section('content')
<div class="">
    <div class="container tituloss">
        <div class="row">
            <div class="col-xs-12 col-sm-8 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">MEVyT en Línea</h4>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12" style="text-align:justify;">
                    <p>
                        El MEVyT en Línea es la modalidad electrónica del MEVyT que te permite estudiar
                        los módulos necesarios para concluir, de manera gratuita, tu primaria o secundaria.
                        Su principal característica es la facilidad de estudiar desde un
                        <a href="{{ url('/ccd/index') }}">Centro Comunitario Digital</a> , tu casa, trabajo, o cualquier
                        lugar que cuente con una computadora y conexión a Internet; para estudiar tu primaria o
                        secundaria
                        en esta modalidad, deberás seguir los siguientes pasos:
                    </p>
                    <ol>
                        <li>
                            Registrarte en el<a
                                href="{{ url('/ccd/mevyt_registro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96') }}">
                                pre registro en línea</a>
                            para que un promotor de INAEBA acuda a inscribirte, o bien, acude a la
                            <a href="{{ url('/conoce/cczz') }}">Coordinación de Zona</a> o <a
                                href="{{ url('/ccd/index') }}">
                                Centro Comunitario Digital</a> más cercano a tu domicilio para realizar el trámite
                            correspondiente.
                        </li>
                        <li>
                            Una vez que te encuentres inscrito en SASA, con tu RFE deberás registrarse en:
                            <a href="http://mevytenlinea.inea.gob.mx/implantacion2a/login/signup.php?id_rol=5&amp;saltar=1"
                                target="_blank">
                                http://mevytenlinea.inea.gob.mx/implantacion2a/login/signup.php?id_rol=5&amp;saltar=1
                            </a>
                        </li>
                        <li>
                            Seguir los pasos que se mencionan para tu registro en el siguiente link:
                            <a href="http://mevytenlinea.inea.gob.mx/inicio/registro.html#"
                                target="_blank">http://mevytenlinea.inea.gob.mx/inicio/registro.html#</a>
                        </li>
                        <li>
                            Una vez que te encuentres registrado en la plataforma, para comenzar a estudiar, deberás
                            seguir
                            los pasos que se mencionan en:
                            <a href="http://mevytenlinea.inea.gob.mx/inicio/estudio.html"
                                target="_blank">http://mevytenlinea.inea.gob.mx/inicio/estudio.html</a>
                        </li>
                        <li>
                            Una vez concluido el curso (80% de actividades realizadas), en tu Centro Comunitario Digital
                            te
                            apoyarán para solicitar y presentar el examen final del curso, mismo que puedes presentar de
                            manera impresa, o en línea.
                            Como requisito indispensable, te será solicitada una identificación oficial, así como una
                            Hoja
                            de avance foliada, misma que te será proporcionada en tu Centro Comunitario Digital, o bien,
                            en
                            la Coordinación de Zona que te corresponda.
                        </li>
                    </ol>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="dest-he">
                    <div class="lt-head">Programas</div>
                    <div class="row-lin">
                        <div class="ico1"></div><a href="{{ url('/ccd/mevyt') }}"><label>MEVyT en Línea</label></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ">



        </div>
    </div>
</div>
@stop