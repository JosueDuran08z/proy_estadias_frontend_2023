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
                        <h2>Información Anual</h2>
                        <h4>Transparencia y Difusión de la Información Financiera LGCG</h4>

                        <div class="wrapper grid3">
                            <p class="tittle-tra tabtit2">Ingreso</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Iniciativa de Ingresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/1-Ingresos/1.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Información Adicional a la Iniciativa de Ingresos
                                            </td>
                                            <td style="width: 20%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Dictámenes Acuerdo y Actas </td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/1-Ingresos/1.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Ley de Ingresos </td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/1-Ingresos/1.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Calendario de Ingresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/1-Ingresos/1.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/1-Ingresos/1.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Egreso</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Proyecto de presupuesto de egresos</td>
                                            <td style="width: 20%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Información Adicional al proyecto de presupuesto de
                                                egresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Dictámenes Acuerdo y Actas </td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Presupuesto de Egresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Calendario de Egreso</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>


                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Presupuesto Ciudadano</td>
                                            <td style="width: 20%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>


                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/2-Egreso/2.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Presupuesto Basado en Resultados</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">PBR</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/A-3-Presupuesto-Basado-Resultados/3.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Información Disciplina Financiera</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Proyecciones de Ingresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/A-4-Informacion-Disciplina-Financiera/A.4.1.xlsx') }}" target="_blank">
                                                    <i class="bi bi-file-earmark-excel-fill documento text-success" title="Archivo Excel"></i>
                                                </a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/A-4-Informacion-Disciplina-Financiera/A.4.1.pdf') }}" target="_blank">
                                                    <i class="bi bi-file-earmark-pdf-fill documento text-danger" title="Archivo PDF"></i>
                                                </a>
                                                        <!--<img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                        <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Proyecciones de Egresos</td>
                                            <td style="width: 20%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/A-4-Informacion-Disciplina-Financiera/A.4.2.xlsx') }}" target="_blank">
                                                    <i class="bi bi-file-earmark-excel-fill documento text-success" title="Archivo Excel"></i>
                                                </a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/A-4-Informacion-Disciplina-Financiera/A.4.2.pdf') }}" target="_blank">
                                                    <i class="bi bi-file-earmark-pdf-fill documento text-danger" title="Archivo PDF"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Resultados de Ingresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <!--<a href="{{ url('/documentos/finanzas/2021/4to-trimestre-2021/4-Informacion-Disciplina-Financiera/4.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/4to-trimestre-2021/4-Informacion-Disciplina-Financiera/4.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>-->
                                                        <img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                        <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Resultados de Egresos</td>
                                            <td style="width: 20%;" class="text-center">
                                                <!--<a href="{{ url('/documentos/finanzas/2021/4to-trimestre-2021/4-Informacion-Disciplina-Financiera/4.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/4to-trimestre-2021/4-Informacion-Disciplina-Financiera/4.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>-->
                                                        <img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                        <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 80%;">Informe de Estudios Actuariales</td>
                                            <td style="width: 20%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h2>Información Trimestral</h2>
                        <div class="wrapper grid3">
                            <p class="tittle-tra tabtit2">Información contable</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Trim.</th>
                                            <th>2do. Trim.</th>
                                            <th>3er. Trim.</th>
                                            <th>4to. Trim.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Estado de actividades/Resultados</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                                        <!--<img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                        <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>-->
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i>
                                                </a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado de situación financiera</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado de variación en la hacienda pública</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado de cambios en la situación financiera</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado de flujos de efectivo</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico del activo</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico de la deuda y otros pasivos</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.7.pdf') }}"
                                                        target="_blank"><i
                                                            class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                            title="Archivo PDF"></i></a>
                                                    <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.7.xlsx') }}"
                                                        target="_blank"><i
                                                            class="bi bi-file-earmark-excel-fill documento text-success"
                                                            title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Informes sobre pasivos contingentes</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="5">
                                                <center><b>Notas a los estados financieros:</b></center>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Desglose y Memoria</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.9.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.9.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.9.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Gestión Administrativa</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.9.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-1-Informacion-Contable/B.1.9.2.docx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.docx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.docx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-1-Informacion-Contable/B.1.9.2.docx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Información presupuestaria</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Trim.</th>
                                            <th>2do. Trim.</th>
                                            <th>3er. Trim.</th>
                                            <th>4to. Trim.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico de ingresos CE</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>


                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico de ingresos CFF</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico de ingresos Concepto</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico del ejercicio del presupuesto de
                                                egresos (Administrativa)</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico del ejercicio del presupuesto de
                                                egresos (Económica) </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico del ejercicio del presupuesto de
                                                egresos (COG)</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado analítico del ejercicio del presupuesto de
                                                egresos (Funcional) </td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>

                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Endeudamiento neto</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Intereses de la deuda</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>

                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Un flujo de fondos</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-2-Informacon-Presupuestal/B.2.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Información programática</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Trim.</th>
                                            <th>2do. Trim.</th>
                                            <th>3er. Trim.</th>
                                            <th>4to. Trim.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Gasto por categoría programática</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Programas y proyectos de inversión</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Indicadores de resultados</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-3-Informacion-Programatica/B.3.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-3-Informacion-Programatica/B.3.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br>

                            <p class="tittle-tra tabtit2">Inventario de bienes</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Semestre</th>
                                            <th>2do. Semestre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Relación de Bienes Muebles</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-4-Inventario-Bienes/B.4.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-4-Inventario-Bienes/B.4.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-4-Inventario-Bienes/B.4.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-4-Inventario-Bienes/B.4.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Relación de Bienes Inmuebles</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-4-Inventario-Bienes/B.4.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-4-Inventario-Bienes/B.4.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-4-Inventario-Bienes/B.4.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-4-Inventario-Bienes/B.4.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Ejercicio presupuestario</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Trim.</th>
                                            <th>2do. Trim.</th>
                                            <th>3er. Trim.</th>
                                            <th>4to. Trim.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Ayudas y Subsidios</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Programas con recursos Federales por orden de
                                                Gobierno</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Cuentas Bancarias Productivas Federales</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Aportación Federal para la Salud</td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Aportación a la Infraestructura Social (FAIS)</td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Aportación Fortalecimiento Municipios (FORTAMUN)
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Aportación Federal para Seguridad Pública</td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Aportación para la Educación </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2021/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Obligaciones con Fondos Federales</td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Ejercicio y Destino de Gasto Federalizado</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-5-Ejercicio-Presupuestario/B.5.10.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                                        <!--<img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                    <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>-->
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Evaluación de Recursos Federales</td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <i class="bi bi-slash-circle-fill documento text-danger"
                                                    title="No aplica"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Información Disciplina Financiera</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th>1er. Trim.</th>
                                            <th>2do. Trim.</th>
                                            <th>3er. Trim.</th>
                                            <th>4to. Trim.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 60%;">Estado de Situación financiera</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <!--<img src="{{ url('img/finanzas/no-pdf.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>
                                                <img src="{{ url('img/finanzas/no-excel.png') }}" style="width: 18px;" class="center-textd-block responsive" alt="..."/>-->
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i>
                                                    </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Informe Analítico de la Deuda Pública y otros
                                                Pasivos</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.2.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Informe Analítico de Obligaciones Diferentes de
                                                Financiamientos</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.3.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Balance Presupuestario</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.4.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado Analítico de Ingresos</td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                            <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.5.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado Analítico del Presupuesto de Egresos (Objeto)
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.6.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado Analítico del Presupuesto de Egresos
                                                (Administrativa)</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.7.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado Analítico del Presupuesto de Egresos
                                                (Funcional)</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.8.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 60%;">Estado Analítico del Presupuesto de Egresos
                                                (Categoría)</td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/1er-trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/2do-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/3er-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                            <td style="width: 10%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/B-6-Informacion-Disciplina-Financiera/B.6.9.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h2>Cuenta Pública</h2>
                        <div class="wrapper grid3">
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Nombre</th>
                                            <th class="text-center">Ir a</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Cuenta Pública</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="http://sed.guanajuato.gob.mx/CuentaPublica/public/main"
                                                    target="_blank"><i
                                                        class="documento bi bi-box-arrow-up-right text-dark"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="tittle-tra tabtit2">Información Disciplina Financiera</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Guía de cumplimiento</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/12-Informacion-Diciplina-Financiera-Anual/C.2.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                                <a href="{{ url('/documentos/finanzas/2022/4to-Trimestre-2022/12-Informacion-Diciplina-Financiera-Anual/C.2.1.xlsx') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-excel-fill documento text-success"
                                                        title="Archivo Excel"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="tittle-tra tabtit2">Manual de Contabilidad</p>
                            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mx-auto">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead class="lt-head-fin">
                                        <tr>
                                            <th>Documento</th>
                                            <th class="text-center">Descarga</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="width: 80%;">Manual de Contabilidad del INAEBA</td>
                                            <td style="width: 20%;" class="text-center">
                                                <a href="{{ url('/documentos/finanzas/2021/4to-trimestre-2021/13-Manual-Contabilidad/13.1.pdf') }}"
                                                    target="_blank"><i
                                                        class="bi bi-file-earmark-pdf-fill documento text-danger"
                                                        title="Archivo PDF"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="wrapper grid3">
                            <div class="card text-center">
                                <div class="lt-head-fin">
                                    Fecha de la última actualización de la Información:
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">27-01-2023</li>
                                </ul>
                            </div>
                        </div>
                        <br>
                        <div class="wrapper grid3">
                            <div class="card text-center">
                                <div class="lt-head-fin">
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
                                <div class="lt-head-fin">
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
                                                <h5 class="card-subtitle">C.P. Luis Ernesto Sánchez Rodríguez</h5>
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
@stop
