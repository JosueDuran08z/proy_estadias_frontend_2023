<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="/img/icons/bootstrap-icons.css" rel="stylesheet">
  <link rel="icon" type="image/vnd.microsoft.icon" href="/img/impulso.ico">
  <!-- <link rel="stylesheet" media="screen" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
  <link href="/css/swiper.min.css" rel="stylesheet"> -->
  <link href="/css/inaeba.css" rel="stylesheet">
  <!-- <link href="/css/sfia.css" rel="stylesheet"> -->
  <link href="/css/style.css" rel="stylesheet">
  <link href="/css/transparencia/docs.css" rel="stylesheet">
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
  <title>Inaeba - @yield('title')</title>
</head>

<body class="">
  @include('includes.header_info_publica')
  <div class="mt-3 mb-3">
    @yield('content')
  </div>
  @include('includes.footer')

  <script src="/js/bootstrap.bundle.min.js"></script>
  <script src="/img/icons/bootstrap-icons.json"></script>
  <!-- <script src="/js/script.js"></script> -->
  <!-- <script src="/js/swiper.min.js"></script> -->
  <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-40570660-1"></script>
  <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script> -->
  <!--<script src="https://code.responsivevoice.org/responsivevoice.js"></script>-->
</body>

</html>