@extends('layouts.main')

@section('title', 'Ombudsperson')

@section('meta')
  <meta property="keywords" content="Soluciones justas, equidad, Ombudsperson, Orientar, Respeto, Resolver, Imparcialidad, ¿Qué es Ombudsperson?" />
  <meta property="description" content="Propone soluciones justas y equitativas para resolver planteamientos en temas señalados." />
@endsection

@section('content')
<div class="">
  <div class="container">
    <div class="row"> 
      <div class="col-sm-12 col-md-8 col-xl-8">
        <div class="card cardCustom">
            <div class="lt-head">
                <h4 class="encabezadoSeccion">Conoce Ombudsperson</h4>
            </div>
        </div>
        <img class="responsive" src="{{ url('/img/OMBUDSPERSON_DETALLE.png') }}" alt="Ombudsperson">
      </div>
      <div class="col-sm-12 col-md-4 col-xl-4">
        @include('includes.menuSecundario.menu_conocenos')
      </div>
    </div>           
  </div>
</div>
@stop