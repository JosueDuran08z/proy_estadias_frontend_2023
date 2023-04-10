@extends('layouts.main')

@section('title', 'Oficinas')

@section('meta')
<meta property="keywords" content="Oficina central, dirección, contacto, mapa, ¿cómo llegar?, ¿Dónde está INAEBA?" />
<meta property="description" content="Oficinas centrales en León Guanajuato" />
@endsection

@section('content')
<div class="container tituloss">
    <div class="row">
        <div class="col-xs-12 col-sm-8 li-cardk">
            <div class="card cardCustom">
                <div class="lt-head">
                    <h4 class="encabezadoSeccion">Oficinas Centrales | León</h4>
                </div>
            </div>
            <div>
                <p>
                    Bulevar Delta 201, Sexto Piso, col. San José de Santa Julia<br>
                    C.P. 37530 en León, Guanajuato.<br>
                    Teléfonos:<br>
                    Lada sin costo 800 746 23 22<br>
                    León: (477) 148 12 60<br>
                    Recepción: ext. 5200
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4">
            @include('includes.menuSecundario.menu_conocenos')
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-8">

            <div>
                <center>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4294138023!2d-101.61914608588718!3d21.095439690876375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe0a8c4c860b%3A0xc9476343450444c5!2sINAEBA+Oficinas+Centrales!5e0!3m2!1ses-419!2sus!4v1529351098998"
                        width="500" height="350" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                </center>
            </div>
        </div>

    </div>
</div>
@stop