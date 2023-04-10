@extends('layouts.main')

@section('title', 'INAEBA en tu Casa')

@section('meta')
<meta property="keywords"
    content="INAEBA, Desde casa, Casa, Hogar, Estudio, Contacto, Horarios, Atención, Coordinación, Teléfono, Número, Marcar, Extranjero, Asesor, Inscripción, Primaria, Secundaria, Sin fronteras" />
<meta property="description"
    content="Inicia tu proceso de registro y termina tus estudios con INAEBA, puede iniciar desde Alfabetización y hasta nivel Secundaria" />
@endsection

@section('content')
<div class="prime-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 li-cardk">
                <div class="card cardCustom">
                    <div class="lt-head">
                        <h4 class="encabezadoSeccion">INAEBA en tu casa</h4>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="column col-xs-12 li-cardk">
                <!--<div class="swiper-container swiper-container-h">-->
                <br>
                <div class="row">
                    <div class="col-md-4">
                        <center>
                            <div class="card" id="call" onclick="prueba();" style="cursor: pointer;">
                                <div class="card__image-holder">
                                    <img class="card__image imgFig" src="{{ url('/img/imagen/call.png') }}"
                                        alt="callcenter">
                                </div>
                            </div>
                        </center>
                    </div>


                    <div class="col-md-4">
                        <center>
                            <div class="card pointer" id="form">
                                <div class="card__image-holder">
                                    <a
                                        href="{{ url('/programas/enlineaRegistro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96&tipoForm=0') }}"><img
                                            class="card__image imgFig" src="{{ url('/img/imagen/form.png') }}"
                                            alt="formulario"></a>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div class="col-md-4">
                        <center>
                            <div class="card pointer" id="form">
                                <div class="card__image-holder">
                                    <a
                                        href="{{ url('/programas/enlineaRegistro?tipoPreRegistro=a370bd77203d4b13df42d0b76b201b96') }}"><img
                                            class="card__image imgFig" src="{{ url('/img/imagen/frontera.jpg') }}"
                                            alt="formulario"></a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <hr>

                <br><br>
                <div class="">
                    <div class="row tituloss">
                        <div class="col-xs-12" id="tblTelefonos" style="display:none">
                            <input type="text" id="txtOcultar" style="display:none">
                            <table class="table table-bordered table-responsive table-hover tablesaw tablesaw-stack" data-tablesaw-mode="stack">
                                <thead class="lt-head">
                                    <tr>
                                        <th> # </th>
                                        <th>Coordinación</th>
                                        <th>Teléfono</th>
                                        <th>Horario de Atención</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td colspan="2">Si nos llamas desde Estados Unidos, comunicate al: 800-746-23-22
                                        </td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>ACAMBARO</td>
                                        <td>4171551013</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></i></td>
                                        <td>DOLORES HIDALGO</td>
                                        <td>4181820769</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SAN JOSE ITURBIDE</td>
                                        <td>4191980605</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SAN LUIS DE LA PAZ</td>
                                        <td>4686882632</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SAN MIGUEL DE ALLENDE</td>
                                        <td>4151540599</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>YURIRIA</td>
                                        <td>4451685005</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>PENJAMO</td>
                                        <td>4696920210</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>VALLE DE SANTIAGO</td>
                                        <td>4566498158</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SALAMANCA</td>
                                        <td>4646417113</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>ABASOLO</td>
                                        <td>4296903179</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SAN FELIPE</td>
                                        <td>4286850124</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <!--<i class="fa fa-whatsapp" aria-hidden="true"></i>-->
                                        </td>
                                        <td>SILAO</td>
                                        <td>4727221538</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>PURISIMA</td>
                                        <td>4767060495</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>IRAPUATO</td>
                                        <td>462 6074548 ext. 5650/5651</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>LEON CENTRO</td>
                                        <td>4777131604</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>SALVATIERRA</td>
                                        <td>4666631135 </td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>LEON SUR</td>
                                        <td>4777724500</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-telephone-fill"></i></td>
                                        <td>LEON NORTE</td>
                                        <td>4777760845</td>
                                        <td>
                                            <i class="fa fa-time" aria-hidden="true"></i>Lunes a Viernes de: 8:30 am -
                                            3:30 pm

                                        </td>
                                    </tr>
                                    <!--<tr>
            <td><i class="fa fa-phone" aria-hidden="true"></i></td>
            <td>Adriana Angelica L&oacute;pez Ornelas</td>
            <td>4774077045</td>
          </tr>
          <tr>
            <td><i class="fa fa-phone" aria-hidden="true"></i></td>
            <td>Blanca Estela Ojeda Rios</td>
            <td>4773969715</td>
          </tr>
          <tr>
            <td><i class="fa fa-phone" aria-hidden="true"></i></td>
            <td>Lizbeth Carolina Ruiz Rivera  </td>
            <td>4731630553</td>
          </tr>
          <tr>
            <td><i class="fa fa-phone" aria-hidden="true"></i></td>
            <td>Mar&iacute;a Isabel Olivares Servin</td>
            <td>4622075249</td>
          </tr>
          <tr>
            <td><i class="fa fa-phone" aria-hidden="true"></i></td>
            <td>Valeria Castillo Falc&oacute;n </td>
            <td>4772491137</td>
          </tr>-->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--</div>-->
            </div>
        </div>

    </div>
</div>
<script>
    function prueba(){
        
        var caja = document.getElementById('txtOcultar').value;
        if (caja == '') {
            document.getElementById('txtOcultar').value=1;
            //MUESTRA TABLA
            document.getElementById("tblTelefonos").style.display = "block";
        }else{
            //OCULTA TABLA
            document.getElementById('txtOcultar').value='';
            document.getElementById("tblTelefonos").style.display = "none";
        }
    }
</script>
@stop