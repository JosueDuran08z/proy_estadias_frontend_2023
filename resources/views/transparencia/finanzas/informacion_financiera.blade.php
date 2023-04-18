@extends('layouts.main')

@section('title', 'Información financiera')

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk text-center">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Información Financiera -Armonización Contable LGCG y LDF Ejercicios
                        Fiscales</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <!-- Aqui comienza cuerpo de finanzas-->
            <div class="wrapper-c1">
                <!-- Contenido -->
                <div class="wrapper conten">
                    <article class="formato-contenidos text-justify">
                        <h1 class="tit-menu text-center lt-head">Ejercicios Fiscales</h1>
                        <div id="reactArea"></div>
                        <div id="informacionFinanciera">
                            <div class="d-flex justify-content-center mt-5">
                                <div class="spinner-border" role="status" style="width: 3rem; height: 3rem; color: #000ea7">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="wrapper grid3">
                            <div class="card text-center">
                                <div class="lt-head">
                                    Fecha de la última actualización de la Información:
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">27-01-2022</li>
                                </ul>
                            </div>
                        </div>
                        <br>
                        <div class="wrapper grid3">
                            <div class="card text-center">
                                <div class="lt-head">
                                    Enlaces
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <a href="http://www.conac.gob.mx/" target="blank"> <i
                                                class="bi bi-box-arrow-up-right text-dark" style="font-size: 1.5rem;"
                                                title="Liga"></i> Consejo Nacional de Armonización Contable</a>
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <a href="https://caceg.guanajuato.gob.mx/" target="blank"> <i
                                                class="bi bi-box-arrow-up-right text-dark" style="font-size: 1.5rem;"
                                                title="Liga"></i> Consejo de Armonización Contable del Estado de
                                            Guanajuato</a>
                                    </div>
                                    <!--<div class="col-xs-12 col-sm-12 col-md-4">
										<a href="http://sed.guanajuato.gob.mx/CuentaPublica/public/load/2017/A" target="blank"> <i class="bi bi-box-arrow-up-right text-dark" style="font-size: 1.5rem;" title="Liga"></i> Cuenta Pública 2017</a>
									</div>-->
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="wrapper grid3">
                            <div class="card text-center">
                                <div class="lt-head">
                                    Responsables de la publicación de la Información
                                </div>
                                <div class="row text-center">
                                    <div class="col-xs-12 col-sm-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title"><i class="bi bi-person-fill"></i></h5>
                                                <h5 class="card-subtitle">C.P. Juan Ponce Calderón</h5>
                                                <p class="card-text">
                                                    Director de Administración<br>
                                                    Tel. 477 148 12 60 Ext. 5216
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title"><i class="bi bi-person-fill"></i></h5>
                                                <h5 class="card-subtitle">C.P. Margarita Ivonne Franco Balandrán</h5>
                                                <p class="card-text">
                                                    Jefa de Contabilidad Gubernamental<br>
                                                    Tel. 477 148 12 60 Ext. 5217
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title"><i class="bi bi-person-fill"></i></h5>
                                                <h5 class="card-subtitle">C.P. Luis Ernesto Sánchez Rodriguez</h5>
                                                <p class="card-text">
                                                    Encargado de la Coordinación de Recursos Financieros<br>
                                                    Tel. 477 148 12 60 Ext. 5217
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <br>

</div>
<script src="{{ url('/js/components/menu_finanzas.js') }}" type="text/babel"></script>
<script src="{{ url('/js/api/informacionFinanciera.js') }}" type="text/babel"></script>
@stop
