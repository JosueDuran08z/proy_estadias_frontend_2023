$(document).ready(function(){
    if (readCookie('abrirAccesible') !=null || readCookie('comandos') !=null || readCookie('voz') !=null) {
        setTimeout(function() {
            if (readCookie('comandos') != null) {
                ejecutaComandos();
                $( ".mic" ).addClass( "accesibilidad-activa" );
            }
            if (readCookie('voz') != null) {
                $( ".reading" ).addClass( "accesibilidad-activa" );
                ejecutaVoz();
            }
            if (readCookie("abrirAccesible") != null){
                switch(readCookie("abrirAccesible")){
                    case "1":
                        $("#barra-lg").show('fade-in-down');
                        break;
                    case "2":
                        $("#barra-xs").show('fade-in-down');
                        break;
                }
            }
        }, 1000);
    }

    /* -------- MANIPULACIÓN DE COOKIES --------*/
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }

    /* -------- VISIBILIDAD DEL MÓDULO --------*/
    $(".barraAccesibilidad").hide();

    $(".accesibilidadOpen").on("click",function(){
        $("#barra-lg").show('fade-in-down');
        createCookie('abrirAccesible', '1', 1);
    });

    $(".accesibilidadOpen2").on("click",function(){
        $("#barra-xs").show('fade-in-down');
        createCookie('abrirAccesible', '2', 1);
    });

    $(".close-accesibilidad").on("click",function(){
        $("#barra-lg").hide('fade-out-up');
        $("#barra-xs").hide('fade-out-up');
        eraseCookie('abrirAccesible');
    });

    /* -------- MANIPULACIÓN DE TEXTO -------- */

    $(".textPlus").on('click', function(){
        var fontSize = $('html').css('font-size');
        var newFontSize = parseInt(fontSize)+1;
        $('html').css('font-size', newFontSize+'px');
    });

    $(".textMinus").on('click', function(){
        var fontSize = $('html').css('font-size');
        if (parseInt(fontSize) == 16) {
            fontSize = parseInt(fontSize)+1;
          }
        var newFontSize = parseInt(fontSize)-1;
        $('html').css('font-size', newFontSize+'px');
    });
    
    /* -------- MANIPULACIÓN DE CONTENIDO -------- */
    var aumentadoCont = 0;
    $(".zoomIn").on("click",function(){
        if (aumentadoCont == 0) {
            $("body").removeClass("aumentado2 aumentado3");
            $("body").addClass("aumentado");
            $(".sticky-container").css({"top":"150px"});
            aumentadoCont++;
        } else if (aumentadoCont == 1) {
            $("body").removeClass("aumentado aumentado3");
            $("body").addClass("aumentado2");
            $(".sticky-container").css({"top":"100px"});
            aumentadoCont++;
        } else if (aumentadoCont == 2) {
            $("body").removeClass("aumentado aumentado2");
            $("body").addClass("aumentado3");
        }
    });

    $(".zoomOut").on("click", function(){
        if(aumentadoCont == 2){
            $("body").removeClass("aumentado aumentado2 aumentado3");
            $("body").addClass("aumentado2");
            $(".sticky-container").css({"top":"100px"});
            aumentadoCont--;
        }else if(aumentadoCont == 1){
            $("body").removeClass("aumentado aumentado2 aumentado3");
            $("body").addClass("aumentado");
            $(".sticky-container").css({"top":"150px"});
            aumentadoCont--;
        }else if(aumentadoCont == 0){
            $("body").removeClass("aumentado aumentado2 aumentado3");
            $(".sticky-container").css({"top":"200px"});
        }
    });

    /* -------- LECTURA DE CONTENIDO -------- */
    function ejecutaVoz(){
        $("a,label,h1,h2,h5,h4,p,span").mouseenter(function() {
            var text = $(this).text();
            if (readCookie('voz') != null) {
                responsiveVoice.speak(text,"Spanish Latin American Female");
            }
        }); 
    }

    $('.reading').click(function () {
        var es_chrome = bowser.name.toLowerCase().includes("chrome");
        if(!es_chrome){
            alert("El navegador "+bowser.name+", no soporta la lectura de contenido, para hacer uso de esta funcion debes utilizar Chrome");
        }else{
            if (readCookie('voz') === null){
                createCookie('voz', '1', 1);
                $( ".reading" ).addClass( "accesibilidad-activa" );
                ejecutaVoz();
            }else{
                eraseCookie('voz');
                $(".reading").removeClass("accesibilidad-activa");
            }
        }        
    });
    

    /* -------- RECONOCIMIENTO DE VOZ -------- */
    $('.mic').click(function () {
        if (readCookie('comandos') === null){
            createCookie('comandos', '1', 1);
            ejecutaComandos();
            $( ".mic" ).addClass( "accesibilidad-activa" );
        }else{
            eraseCookie('comandos');
            detenerComandos();
            $( ".mic" ).removeClass( "accesibilidad-activa" );
        }
    });

    /* -------- COMANDOS ESPECIALES DE VOZ --------*/
    function ejecutaComandos(){
        var altodoc = $(document).height();
        var bajar =0;
        if (annyang) {
            // Definiendo comandos. Primero el texto que esperamos y después la función que debería ejecutar
            var commands = {
                // Se puede agregar mas comandos y cambiar las url de las redes sociales
                'inicio': function() {
                    window.location.href="/"
                },
                'mision': function() {
<<<<<<< HEAD
                    window.location.href="conoce/mision"
                },
                'vision': function() {
                    window.location.href="conoce/mision"
                },
                'valores': function() {
                    window.location.href="conoce/mision"
                },
                'oficinas': function() {
                    window.location.href="conoce/oficinas"    
                },
                'coordinaciones de zona': function() {
                    window.location.href="conoce/cczz"
                },
                'directorio': function() {
                    window.location.href="conoce/directorio"
                },
                'codigo conducta etica': function() {
                    window.location.href="conoce/codigo_ce"
                },
                'politica de igualdad laboral y no discriminacion': function() {
                    window.location.href="conoce/politica_igualdad"
=======
                    window.location.href="/conoce/mision"
                },
                'vision': function() {
                    window.location.href="/conoce/mision"
                },
                'valores': function() {
                    window.location.href="/conoce/mision"
                },
                'oficinas': function() {
                    window.location.href="/conoce/oficinas"    
                },
                'coordinaciones de zona': function() {
                    window.location.href="/conoce/cczz"
                },
                'directorio': function() {
                    window.location.href="/conoce/directorio"
                },
                'codigo conducta ética': function() {
                    window.location.href="/conoce/codigo_ce"
                },
                'politica de igualdad laboral y no discriminacion': function() {
                    window.location.href="/conoce/politica_igualdad"
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                },
                'conevyt': function() {
                    window.location.href="https://www.conevyt.org.mx/"
                },
                'politica de prevencion de factores de riesgo psicosocial': function() {
                    window.location.href="https://inaeba.guanajuato.gob.mx/documentos/politica_riesgo_psicosocial_v2.pdf"
                },
                'ombudsperson': function() {
<<<<<<< HEAD
                    window.location.href="conoce/ombudsperson"
                },
                'directorio': function() {
                    window.location.href="conoce/directorio"
                },
                'alfabetizacion': function() {
                    window.location.href="tramites_servicios/alfabetizacion"
                },
                'primaria': function() {
                    window.location.href="tramites_servicios/primaria"
                },
                'eventos': function() {
                    window.location.href="https://agendacultural.guanajuato.gob.mx/"
                },
                'noticias': function() {
                    window.location.href="https://noticias.guanajuato.gob.mx/"
                },
=======
                    window.location.href="/conoce/ombudsperson"
                },
                'directorio': function() {
                    window.location.href="/conoce/directorio"
                },
                'alfabetizacion': function() {
                    window.location.href="/tramites_servicios/alfabetizacion"
                },
                'primaria': function() {
                    window.location.href="/tramites_servicios/primaria"
                },
                'secundaria': function() {
                    window.location.href="/tramites_servicios/secundaria"
                },
                'duplicado de certificado': function() {
                    window.location.href="/inaeba/servicios/ce.php"
                },
                'directorio de tramites y servicios': function() {
                    window.location.href="/tramites_servicios/directorioTramites"
                },
                'noticias': function() {
                    window.location.href="/noticias/noticias"
                },
                'ccd': function() {
                    window.location.href="/ccd/index"
                },
                'compras publicas': function() {
                    window.location.href="/transparencia/compras_publicas"
                },
                'informacion financiera': function() {
                    window.location.href="/transparencia/finanzas/year2021?anio=2021"
                },
                'obligaciones de transparencia': function() {
                    window.location.href="https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_pordependencia.php?dependencia=18"
                },
                'inaeba en tu casa': function() {
                    window.location.href="/programas/enlinea"
                },
                'asesoria en linea': function() {
                    window.location.href="/programas/asesoria"
                },
                'si presentas examen unico, consulta aqui tus resultados': function() {
                    window.location.href="/servicios/resultados_pec"
                },
                'duplicado de certificado': function() {
                    window.location.href="http://www.inaeba.guanajuato.gob.mx/inaeba/servicios/ce.php"
                },
                'servicio social': function() {
                    window.location.href="/programas/sc_registro?tipoPreRegistro=ffbc17ae7cdad5d436c01d15ce12bf64"
                },
                'egresados inaeba': function() {
                    window.location.href="/programas/egresados?tipoPreRegistro=f84552838654fabe5f015062ef39c214"
                },
                'contactanos': function() {
                    window.location.href="/inaeba/contacto"
                },
                'eventos': function() {
                    window.location.href="https://agendacultural.guanajuato.gob.mx/"
                },
                
>>>>>>> 6d6ec5525cfac35d94ebf59c85ad7d8b9a4366cf
                'facebook': function() {
                    window.location.href="https://www.facebook.com/soyinaeba/?ref=br_rs"
                },
                'twitter': function() {
                    window.location.href="https://twitter.com/soyinaeba?lang=es"
                },
                'instagram': function() {
                    window.location.href="https://www.instagram.com/gobiernogto/"
                },
                'youtube': function() {
                    window.location.href="https://www.youtube.com/user/soyinaeba"
                },
                'Whatsapp': function() {
                    window.location.href="https://api.whatsapp.com/send?phone=524772745825&text=Bienvenido a Gobierno del Estado de Guanajuato en que te podemos apoyar, envÃ­a este texto con tu pregunta:"
                },
                'inicio de pagina': function(){
                    //window.scrollTo(0, 0);
                    $("html, body").animate({ scrollTop: 0 }, 100);
                },
                'fin de pagina': function(){
                    $("html, body").animate({ scrollTop: $(document).height() }, 100);
                },
                'baja': function(){
                    if(altodoc > bajar){
                    bajar = $(window).scrollTop();
                    bajar = bajar+300;
                    }
                    $("html, body").animate({ scrollTop: bajar }, 100);
                },
                'sube': function(){
                    if(0 < bajar){
                    bajar = $(window).scrollTop();
                    bajar = bajar-300;
                    }
                    $("html, body").animate({ scrollTop: bajar }, 100);
                }
            };

            // Incluimos los comandos al annyang y configuramos el idioma
            annyang.setLanguage("es-MX");
            annyang.addCommands(commands);

            // Start listening. You can call this here, or attach this call to an event, button, etc.
            annyang.start();
        }
    }

    function detenerComandos(){
        if (annyang) {
            annyang.abort();
        }
    }
});