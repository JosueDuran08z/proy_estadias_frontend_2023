<!DOCTYPE html>
<html lang="en">

<head>
    <!-- required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    @yield('meta')
    <meta name="author" content="Instituto de Alfabetización y Educación Básica para Jóvenes y Adultos">
    <link rel="canonical" href="/" />

    <!-- Bootstrap CSS -->

    <link href="{{ url('/img/icons/bootstrap-icons.css') }}" rel="stylesheet" />
    <link rel="icon" type="image/vnd.microsoft.icon" href="{{ url('/img/impulso.ico') }}"/>
    <!--<link rel="icon" type="image/vnd.microsoft.icon" href="{{ url('/img/logoveda.png') }}" />-->
    <!--YA ESTABAN DESACTIVADOS, NO ACTIVAR-->
    <!-- <link rel="stylesheet" media="screen" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">-->

    <!--<link href="{{ url('/css/inaeba.css') }}" rel="stylesheet" />
        <link href="{{ url('/css/inaeba_veda.css') }}" rel="stylesheet" /> -->

    <link rel="stylesheet"  href="{{ url('/css/style2/sfia.css') }}" type="text/css" />
    <link rel="stylesheet"  href="{{ url('/css/style2/style.css') }}" type="text/css"  />
    <link rel="stylesheet"  href="{{ url('/css/boletin.css') }}" type="text/css"  />




   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script>
    <script src="https://code.responsivevoice.org/responsivevoice.js"></script>-->




    <!-- Script Chat -->
    <!--SE OCULTO PORQUE YA NO EXISTE-->
    <!--<script type="text/javascript" src="https://www.guanajuato.gob.mx/cgob2/js/compiled/chat_popup.js"></script>
    <script type="text/javascript">
    Mibew.ChatPopup.init({
        "id": "594be0ea25978f9a",
        "url": "\http://www.guanajuato.gob.mx/aviso-privacidadt.php",
        "preferIFrame": true,
        "modSecurity": false,
        "width": 640,
        "height": 480,
        "resizable": true,
        "styleLoader": "\https://www.guanajuato.gob.mx/cgob2\/index.php\/chat\/style\/popup"
    });
    </script>-->
    <script type="text/javascript">
    function abreAP(lnk) {
        window.open(lnk, "Aviso", "width=550,height=550,scrollbars=yes,location=no,menubar=0,toolbar=0");
    }
    </script>
    <script>
    (function(d) {
        var s = d.createElement("script");
        s.setAttribute("data-account", "9HnNMax2Vu");
        s.setAttribute("src", "https://cdn.userway.org/widget.js");
        (d.body || d.head).appendChild(s);
    })(document)
    </script>
    <noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website
            accessibility</a></noscript>




    <script crossorigin src="https://unpkg.com/universal-cookie@3/umd/universalCookie.min.js"></script>



    <!--YA ESTABA DESACTIVADO, NO ACTIVAR-->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>-->

    <title>Inaeba - @yield('title')</title>

    <!-- Librerias fontawesome para iconos -->
    <link href="{{ url('/css/libs/fontawesome/css/fontawesome.css') }}" rel="stylesheet" />
    <link href="{{ url('/css/libs/fontawesome/css/brands.css') }}" rel="stylesheet" />
    <link href="{{ url('/css/libs/fontawesome/css/solid.css') }}" rel="stylesheet" />


    <!-- Cargar React. -->
    <!-- Nota: cuando se despliegue, reemplazar "development.js" con "production.min.js". -->
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script id="configFile" src="{{ url('/js/config.js') }}" base_url="{{ env('API_BASE_URL') }}"></script>

    <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="https://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>

    <!-- SIRVE PARA CARGAR EL MAPA DE GOOGLE-->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <!--   JS PARA RECAPCTHA   -->


    <!-- JS PARA MULTISELECT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.17.0/slimselect.min.js"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.17.0/slimselect.min.css">

    <script src="{{ url('/js/gtag.js') }}"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body>
    <div>

    </div>
    @include('includes.header')
    <div class="container-xxl">@yield('content')</div>
    @include('includes.footer')

    <script src="{{ url('/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ url('/img/icons/bootstrap-icons.json') }}"></script>
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-40570660-1"></script>
    <!--<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script>
    <script src="{{ url('/js/bowser.min.js') }}"></script>
    <!--<script src="https://code.responsivevoice.org/responsivevoice.js"></script>--<<
    <script src="{{ url('/js/moduloAccesibilidad.min.js') }}"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-40570660-1');
    </script>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script>
    <!--<script src="https://code.responsivevoice.org/responsivevoice.js"></script>--<
    <script src="js/script.js"></script>
    <script src="slide/js/swiper.min.js"></script>





    <!-- GTranslate: https://gtranslate.io/ -->

    <style type="text/css">
    a.gflag {
        vertical-align: middle;
        font-size: 32px;
        padding: 1px 0;
        background-repeat: no-repeat;
     /*   background-image: url('https://flagicons.lipis.dev/flags/4x3/us.svg');*/
        background-color: rgb(211 211 211 / 0%) !important;
    }

    a.gflag img {
        border: 0;
    }

    /*a.gflag:hover {
        background-image: url('https://flagicons.lipis.dev/flags/4x3/mx.svg');
    }*/

    #goog-gt-tt {
        display: none !important;
    }

    .goog-te-banner-frame {
        display: none !important;
    }

    .goog-te-menu-value:hover {
        text-decoration: none !important;
    }

    body {
        top: 0 !important;
    }

    #google_translate_element2 {
        display: none !important;
    }
    </style>

    <div id="google_translate_element2"></div>
    <script type="text/javascript">
    function googleTranslateElementInit2() {
        new google.translate.TranslateElement({
            pageLanguage: 'es',
            autoDisplay: false
        }, 'google_translate_element2');
    }
    </script>
    <script type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>


    <script type="text/javascript">
    /* <![CDATA[ */
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c
                .toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',
        43, 43,
        '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'
        .split('|'), 0, {}))
    /* ]]> */
    </script>



    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <link href="{{ url('/css/bootstrap.min.css') }}" rel="stylesheet" />

    <script async defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js">

    </script>

    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script async defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js">
    </script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initialize&v=weekly"
      defer
    ></script>

</body>

</html>
