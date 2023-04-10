<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
//echo $caja = "<input type='text' id='txtTipoFormulario' name='txtTipoFormulario'  value='sss' />";
$router->get('propuesta1', function () use ($router) {
    return view('propuesta/home1');
});

$router->get('propuesta2', function () use ($router) {
    return view('propuesta/home2');
});

$router->get('', function () use ($router) {
     return view('home');
}); 
//Route::get('', 'Controller@home');

$router->get('conoce/mision', function () use ($router) {
    return view('conocenos/mision');
});

$router->get('conoce/oficinas', function () use ($router) {
    return view('conocenos/oficinas');
});

$router->get('conoce/cczz', function () use ($router) {
    return view('conocenos/cz');
});
/*$router->get('conoce/cz', function () use ($router) {
    return view('conocenos/cz');
});*/

 /*$router->get('conoce/directorio', function () use ($router) {
     return view('conocenos/directorio');
 });*/

$router->get('conoce/codigo_ce', function () use ($router) {
    return view('conocenos/codigo_ce');
});
$router->get('conoce/codigo_inea', function () use ($router) {
    return view('conocenos/codigo_inea');
});

$router->get('conoce/politica_igualdad', function () use ($router) {
    return view('conocenos/politica_igualdad');
});

$router->get('conoce/ombudsperson', function () use ($router) {
    return view('conocenos/ombudsperson');
});
$router->get('conoce/ombudsperson_detalle', function () use ($router) {
    return view('conocenos/ombudsperson_detalle');
});

$router->get('conoce/intranet', function () use ($router) {
    return view('conocenos/intranet');
});

$router->get('ccd/index', function () use ($router) {
    return view('CCD/index');
});

$router->get('ccd/ccdm', function () use ($router) {
    return view('CCD/ccdm');
});

$router->get('ccd/mevyt', function () use ($router) {
    return view('CCD/mevyt_programa');
});

$router->get('ccd/mevyt_registro', function () use ($router) {
    return view('CCD/mevyt_registro');
});

$router->get('tramites_servicios/alfabetizacion', function () use ($router) {
    return view('tramites_servicios/alfabetizacion');
});

$router->get('tramites_servicios/primaria', function () use ($router) {
    return view('tramites_servicios/primaria');
});

$router->get('tramites_servicios/secundaria', function () use ($router) {
    return view('tramites_servicios/secundaria');
});

$router->get('tramites_servicios/certificado', function () use ($router) {
    return view('tramites_servicios/certificado');
});

$router->get('tramites_servicios/directorioTramites', function () use ($router) {
    return view('tramites_servicios/directorioTramites');
});




$router->get('noticias/noticias', function () use ($router) {
    return view('noticias/noticias');
});

$router->get('noticias/noticia/1', function () use ($router) {
    return view('noticias/uno');
});
$router->get('noticias/noticia/2', function () use ($router) {
    return view('noticias/dos');
});
$router->get('noticias/noticia/3', function () use ($router) {
    return view('noticias/tres');
});
$router->get('noticias/noticia/4', function () use ($router) {
    return view('noticias/cuatro');
});

$router->get('noticias/nota/{id}', function ($id) use ($router) {
    //echo $id;
    $caja = "<input type='hidden' id='txtNoticia' name='txtNoticia'  value='$id' />";
    echo $caja;
    return view('noticias/nota');
});







$router->get('programas/enlinea', function () use ($router) {
	return view('destacados/enlinea');
});

$router->get('programas/asesoria', function () use ($router) {
	return view('destacados/asesoria');
});

$router->get('servicios/resultados_pec', function () use ($router) {
	return view('destacados/resultados_pec');
});

$router->get('programas/sc_registro', function () use ($router) {
	return view('destacados/sc_registro');
});

$router->get('programas/certificado', function () use ($router) {
	return view('destacados/certificado');
});

$router->get('programas/egresados', function () use ($router) {
	return view('destacados/egresados');
});

$router->get('programas/enlineaRegistro', function () use ($router) {
	return view('destacados/enlineaRegistro');
});

$router->get('inaeba/servicios/ce', function () use ($router) {
	return view('programa/certificado');
});

$router->get('transparencia/compras_publicas', function () use ($router) {
    return view('transparencia/compras_publicas');
});

$router->get('transparencia/finanzas', function () use ($router) {
    return view('transparencia/finanzas');
});

$router->get('transparencia/finanzas/year2022', function () use ($router) {
    return view('transparencia/finanzas/year2022');
});

$router->get('transparencia/finanzas/year2021', function () use ($router) {
    return view('transparencia/finanzas/year2021');
});

$router->get('transparencia/finanzas/year2020', function () use ($router) {
    return view('transparencia/finanzas/year2020');
});

$router->get('transparencia/finanzas/year2019', function () use ($router) {
    return view('transparencia/finanzas/year2019');
});

$router->get('transparencia/finanzas/year2018', function () use ($router) {
    return view('transparencia/finanzas/year2018');
});

$router->get('transparencia/finanzas/year2017', function () use ($router) {
    return view('transparencia/finanzas/year2017');
});

$router->get('transparencia/finanzas/year2016', function () use ($router) {
    return view('transparencia/finanzas/year2016');
});

$router->get('transparencia/finanzas/year2015', function () use ($router) {
    return view('transparencia/finanzas/year2015');
});

/* TRANSPARENCIA FOOTER */
$router->get('transparencia/actas_comite', function () use ($router) {
    return view('transparencia/actas_comite');
});
$router->get('inaeba/avisosdeprivacidadINAEBA', function () use ($router) {
    return view('transparencia/aviso_privacidad');
});
$router->get('inaeba/aviso_privacidad_app_offline', function () use ($router) {
    return view('transparencia/app_offline_aviso_privacidad');
});
$router->get('transparencia/datos_abiertos', function () use ($router) {
    return view('transparencia/datos_abiertos');
});
$router->get('inaeba/contacto', function () use ($router) {
    return view('transparencia/contacto');
});
$router->get('coordinaciones', function () use ($router) {
    return view('conocenos/cz');
});