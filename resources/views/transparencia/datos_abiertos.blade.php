@extends('layouts.main')

@section('title', 'Datos abiertos')

@section('meta')
    <meta property="keywords" content="Actas, Comité, Transparencia, INAEBA, Contabilidad" />
    <meta property="description" content="Sección dedicada al público para acceder a consulta y descarga de documetación correspondiente a la Evaluación Interna de las Reglas de Operación del Programa" />
@endsection

@section('content')
<div class="container">
    <h2 class="lt-head">Datos Abiertos</h2><br></br>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button lt-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Evaluación Interna de las Reglas de Operación del Programa Presupuestario E024 Educación para Adultos
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse hidden" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <table class="table table-striped table-hover table-bordered">
                    <thead class="bg-dark-inaeba">
                        <tr>
                            <th>Documento</th>
                            <th class="text-center">Descarga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 80%;"> Modelo de Evaluación Institucional (MEI) enero - diciembre 2018</td>
                            <td style="width: 20%;" class="text-center"><a href="{{ url('/documentos/datos_abiertos/mei_enero_diciembre_2018.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a></td>
                        </tr>
                        <tr>
                            <td style="width: 80%;">Modelo de Evaluación Institucional (MEI) ampliado 2018 </td>
                            <td style="width: 20%;" class="text-center"><a href="{{ url('/documentos/datos_abiertos/mei_ampliado_2018.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a></td>
                        </tr>
                        <tr>
                            <td style="width: 80%;">Modelo de Evaluación Institucional (MEI) enero-noviembre 2019</td>
                            <td style="width: 20%;" class="text-center"><a href="{{ url('/documentos/datos_abiertos/mei_enero_noviembre_2019.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a></td>
                        </tr>
                        <tr>
                            <td style="width: 80%;"> Modelo de Evaluación Institucional (MEI) enero-diciembre 2019</td>
                            <td style="width: 20%;" class="text-center"><a href="{{ url('/documentos/datos_abiertos/mei_enero_diciembre_2019.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a></td>
                        </tr>
                        <tr>
                            <td style="width: 80%;">Modelo de Evaluación Institucional (MEI) octubre<b>-</b>diciembre 2017</td>
                            <td style="width: 20%;" class="text-center"><a href="{{ url('/documentos/datos_abiertos/MEI-4t-2017.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a></td>
                        </tr>
                            <!--<tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>marzo 2018</td>
                                <td style="width: 20%;" class="text-center">
                                        <a href="/documentos/datos_abiertos/MEI-Ene-Marzo-2018.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>


                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>junio 2018</td>
                                <td style="width: 20%;" class="text-center">
                                        <a href="/documentos/datos_abiertos/MEI-Ene-Junio-2018.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>marzo 2019</td>
                                <td style="width: 20%;" class="text-center">
                                        <a href="/documentos/datos_abiertos/enero-marzo_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>junio 2019</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="/documentos/datos_abiertos/MIE_EneroJunio_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>julio 2019</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="/documentos/datos_abiertos/MIE_EneroJulio_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>agosto 2019</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="/documentos/datos_abiertos/MIE_EneroAgosto_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>septiembre 2019</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="/documentos/datos_abiertos/MIE_EneroSeptiembre_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Modelo de Evaluaci&oacute;n Institucional (MEI) enero<b>-</b>octubre 2019</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="/documentos/datos_abiertos/MIE_Enerooctubre_2019.pdf" target="_blank"><img src="images/pdf.png" /></a>
                                </td>
                            </tr>-->
                        <tr>
                            <td style="width: 80%;">Porcentaje de Cobertura en Rezago Educativo por Nivel o Etapa</td>
                            <td style="width: 20%;" class="text-center">
                                <a href="{{ url('/documentos/datos_abiertos/porcentajeCobertura.xls') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-excel-fill text-success"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button lt-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Reglas de Operación 2023
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse hidden" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <table class="table table-striped table-hover table-bordered">
                    <thead class="bg-dark-inaeba">
                        <tr>
                            <th>Documento</th>
                            <th class="text-center">Descarga</th>
                        </tr>
                    </thead>
                    <tbody>                
                        <tr>
                            <td style="width: 80%;">REGLAS DE OPERACIÓN DEL PROGRAMA EDUCACIÓN PARA ADULTOS (INEA) PARA EL EJERCICIO FISCAL 2023</td>
                            <td style="width: 20%;" class="text-center">
                                <a href="{{ url('/documentos/datos_abiertos/datos_abiertos_1.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 80%;">REGLAS DE OPERACIÓN DEL PROGRAMA E024.C02. QC3616 FORTALECIMIENTO DE LOS SERVICIOS EDUCATIVOS DIGITALES PARA EL EJERCICIO FISCAL DE 2023</td>
                            <td style="width: 20%;" class="text-center">
                                <a href="{{ url('/documentos/datos_abiertos/datos_abiertos_2.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 80%;">REGLAS DE OPERACIÓN DEL PROGRAMA E024.C03.QC1641 TODOS 10 PARA EL EJERCICIO FISCAL DE 2023</td>
                            <td style="width: 20%;" class="text-center">
                                <a href="{{ url('/documentos/datos_abiertos/datos_abiertos_3.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button lt-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Matrices de indicadores de resultados
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse hidden" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-striped table-hover table-bordered">
                        <thead class="bg-dark-inaeba">
                            <tr>
                                <th>Documento</th>
                                <th class="text-center">Descarga</th>
                            </tr>
                        </thead>
                        <tbody>                
                            <tr>
                                <td style="width: 80%;">E024 "Alianza a favor de los adultos"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/matriz_indicadores_resultados.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Q1892 "Aprendo Hoy"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q1892_MIR_MunicipiosPrioritarios.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Q1641 "Todos 10"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q1641_MIR_GruposVulnerables.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Q2285 "Mi Clase Móvil"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q2285_MIR_10-14.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">MIR FAETA 2021</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/faeta2021.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">MIR FAETA 2020</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/faeta2020.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button lt-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Evaluaciones
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse hidden" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <b>Analfabetas en Edad Económicamente Activa</b> 
                    <table class="table table-striped table-hover table-bordered">
                        <thead class="bg-dark-inaeba">
                            <tr>
                                <th>Documento</th>
                                <th class="text-center">Descarga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 80%;">Ficha de difusión</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Ficha-de-difusion-Analfabetas-EEA.xlsx') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-excel-fill text-success"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Resumen ejecutivo</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/RESUMEN-EJECUTIVO-Analfabetas-EEA.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Seguimiento a recomendación.</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/analfabetas.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <b>Atención a Municipios Prioritarios Impactados por Rezago Educativo</b>
                    <table class="table table-striped table-hover table-bordered">
                        <thead class="bg-dark-inaeba">
                            <tr>
                                <th>Documento</th>
                                <th class="text-center">Descarga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 80%;">Ficha de difusión</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/ANEXOS-Mpios-prioritarios.xlsx') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-excel-fill text-success"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Resumen ejecutivo</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/RESUMEN-EJECUTIVO-Mpios-prioritarios.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                        <b>Unidades Móviles</b>
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="bg-dark-inaeba">
                                <tr>
                                    <th>Documento</th>
                                    <th class="text-center">Descarga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 80%;">Ficha de difusión</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/Ficha-de-difusion-UMov.xlsx') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-excel-fill text-success"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Resumen ejecutivo</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/RESUMEN-EJECUTIVO-UMov.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Seguimiento a recomendación</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/unidades.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <br>
                        <b>Servicios Educativos para Grupos Vulnerables</b>
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="bg-dark-inaeba">
                                <tr>
                                    <th>Documento</th>
                                    <th class="text-center">Descarga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 80%;">Ficha de difusión</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/Ficha-de-Difusion-GrVulner.xlsx') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-excel-fill text-success"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Resumen ejecutivo</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/RESUMEN-EJECUTIVO-GrVulner.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <br>
                        <b>Evaluación de Resultados del Rezago Educativo (fresco) en Educación Básica en el Estado de Guanajuato</b>
                        <table class="table table-striped table-hover table-bordered">
                        <thead class="bg-dark-inaeba">
                            <tr>
                                <th>Documento</th>
                                <th class="text-center">Descarga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 80%;">Resumen del Informe Final</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Resumen_Informe_VF_c.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button lt-head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Diagnósticos de Proyectos Q
                </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse hidden" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-striped table-hover table-bordered">
                        <thead class="bg-dark-inaeba">
                            <tr>
                                <th>Documento</th>
                                <th class="text-center">Descarga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 80%;">Q1892 Diagnóstico del proyecto "Aprendo Hoy"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q1892_Diagnostico_MunicipiosPrioritarios.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 80%;">Q1641 Diagnóstico del proyecto "Todos 10" </td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q1641_Diagnostico_GruposVulnerables.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                            <tr> 
                                <td style="width: 80%;">Q2285 Diagnóstico del proyecto "Mi Clase Móvil"</td>
                                <td style="width: 20%;" class="text-center">
                                    <a href="{{ url('/documentos/datos_abiertos/Q2285_Diagnostico_10-14.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        <b>Atención a municipios prioritarios(Q1892)</b>
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="bg-dark-inaeba">
                                <tr>
                                    <th>Documento</th>
                                    <th class="text-center">Descarga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 80%;">Documento de Opinión</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/b_opinion.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Informe de Mejoras</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/b_mejoras.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Plan de Acción</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/b_accion.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Reporte de Avance</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/b_avance.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <b>Servicios educativos para grupos vulnerables (Q1641)</b>
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="bg-dark-inaeba">
                                <tr>
                                    <th>Documento</th>
                                    <th class="text-center">Descarga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="width: 80%;">Documento de Opinión</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/a_opinion.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Informe de Mejoras</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/a_mejoras.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Plan de Acción</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/a_accion.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 80%;">Reporte de Avance</td>
                                    <td style="width: 20%;" class="text-center">
                                        <a href="{{ url('/documentos/datos_abiertos/a_avance.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <br>
                </div>
            </div>
        </div>
        
    </div>



   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   <br>




    <div class="row" style="display:none">
        <h2 class="lt-head">EGRESOS</h2>

        <div class="container">
            <div class="mx-auto">
                <table class="table table-striped table-hover table-bordered">
                    <thead class="bg-dark-inaeba">
                        <tr>
                            <th>Documento</th>
                            <th class="text-center">Descarga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 80%;"> Egresos</td>
                            <td style="width: 20%;" class="text-center">
                                <a href="{{ url('/documentos/datos_abiertos/egresos.pdf') }}" target="_blank"><i style="font-size:1.25rem;" class="bi bi-file-earmark-pdf-fill text-danger"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@stop