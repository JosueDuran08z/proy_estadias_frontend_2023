<!--Start of Tawk.to Script-->
<script type="text/javascript">
/*var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6037cf751c1c2a130d626fa5/1evd04ok1';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();*/
</script>
<!--End of Tawk.to Script-->


@extends('layouts.main')

@section('title', 'Asesoría en Línea')

@section('meta')
<meta property="keywords" content="Asesoría, Línea, Online, Plataforma, Chat, Virtual, Moodle" />
<meta property="description"
    content="Para entrar a nuestra plataforma INAEBA Virtual, ingresa con estas credenciales." />
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 li-cardk">
            
        </div>
    </div>
    <div class="row">
        <div class="column col-xs-12 col-md-12 col-lg-8 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Asesoría en línea</h4>
                </div>
            </div>
            <div class="row">

                <div class="col-md-4">
                    <div class="card mx-auto" style="width: 18rem;">
                        <img src="{{ url('/img/imagen/ace_modle.jpg') }}"
                            class="card-img-top img-thumbnail img-responsive" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">¡Consulta material de apoyo, videos y actividades!</h5>
                            <p class="card-text">
                                Para entrar a nuestra plataforma <b>INAEBA</b> Virtual, ingresa utilizando
                                como usuario y contraseña la palabra: <b> estudiar</b>
                            </p>
                            <a href="http://187.216.153.132/moodle/login/index.php" target="_blank"
                                class="btn btn-primary">Ingresar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column col-xs-12 col-md-12 col-lg-4 li-cardk">
            @include('includes.menuSecundario.menu_destacados')
        </div>
    </div>
</div>
@stop