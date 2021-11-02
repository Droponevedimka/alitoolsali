<!DOCTYPE html>
<html lang="en">
<head>

 <?php
	
    if(stristr($_SERVER["HTTP_REFERER"], 'facebook') !== false || stristr($_SERVER["HTTP_REFERER"], 'vk.com') !== false || stristr($_SERVER["HTTP_REFERER"], 'twitter') !== false) {
        $_SERVER["HTTP_REFERER"] = "";
//        header('Location: /');
    }
    if ($_SERVER["REQUEST_URI"] == "/final/1") {
        $title = "Я в доску свой на районе!";
        $image = "http://alitools.qmark.info/assets/img/share/r1.jpg";
    } elseif ($_SERVER["REQUEST_URI"] == "/final/2"){
        $title = "Я cамый модный в офисе";
        $image = "http://alitools.qmark.info/assets/img/share/r2.jpg";
    } elseif ($_SERVER["REQUEST_URI"] == "/final/3"){
        $title = "Я российский обыкновенный";
        $image = "http://alitools.qmark.info/assets/img/share/r3.jpg";
    } elseif ($_SERVER["REQUEST_URI"] == "/final/4"){
        $title = "Я тигр из “Жизнь Пи”";
        $image = "http://alitools.qmark.info/assets/img/share/r4.jpg";
    }
    else {
        $title = "Насколько ты прокачался в путешествиях?";
        $image = "http://alitools.qmark.info/assets/img/share/meta-fb-test.jpg" ;
    }
    ?> 
	<meta property="og:url"  id="url"              content="/" />
    <meta property="og:title" id="title"             content="<?= $title?>" />
    <meta property="og:description"  id="decsr"      content="" />
    <meta property="og:image"   id="image"           content="<?= $image?>"/>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
 
  <script type="text/javascript" src="https://vk.com/js/api/share.js?93" charset="windows-1251"></script>


  <title>Любишь прибарахлиться в сезон скидок?</title>
  <meta property="og:title" content="Любишь прибарахлиться в сезон скидок?">
  <meta name="title" content="Любишь прибарахлиться в сезон скидок?" />
  <meta name="description" content="Узнай, сэкономил ли ты на самом деле!">

  <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NXCW9QZ');</script>
  <!-- End Google Tag Manager -->
  
<link href="/assets/css/vendors.205b61c3118f836e9c56.css" rel="stylesheet"><link href="/assets/css/app.205b61c3118f836e9c56.css" rel="stylesheet"></head>
<body>
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXCW9QZ"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
    <div id="fb-root"></div>

    <div id="app"></div>


<script type="text/javascript" src="/assets/js/vendors.205b61c3118f836e9c56.js"></script><script type="text/javascript" src="/assets/js/app.205b61c3118f836e9c56.js"></script><script type="text/javascript" src="/assets/js/lk.205b61c3118f836e9c56.js"></script></body>
</html>
</html>