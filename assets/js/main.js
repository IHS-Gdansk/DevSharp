$(function() {

    /*---------------------------------------*/
    /*  PAGE LOADER
    /*---------------------------------------*/
    $(window).load(function(){
        $('#page-loader').fadeOut('fast');
    });
  
    
    /*---------------------------------------*/
    /*  JQUERY FOR PAGE SCROLLING FEATURE
    /*  requires jQuery Easing plugin
    /*---------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('body').attr('data-offset');
            
            if($('.navbar.navbar-fixed-top').hasClass('side-menu') && $(window).width() >= 992){
                $('body').data('offset', 1);
                offset = $('body').data('offset');
            }

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
            
            $('.navbar-rj-collapse').collapse('hide');
        });
    };
    
    
    /*---------------------------------------*/
    /*  STICKY NAVBAR
    /*---------------------------------------*/
    $('.navbar.navbar-fixed-top').sticky({topSpacing: 0});
    
    var stickySideMenu = function(){
        var navbar = $('.navbar.navbar-fixed-top.side-menu');
        
        if ($(window).width() >= 992) {
            navbar.unstick();
        }
        else
        {
            navbar.unstick();
            navbar.sticky({topSpacing: 0});
        }
    };
    
    pageScroll();
    stickySideMenu();
    
    $(window).smartresize(function(){
        pageScroll();
        stickySideMenu();
    });
    
    $('.navbar-trigger-open').click(function(e) {
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });

    $('.navbar-trigger-close').click(function(e) {
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });
    

    /*---------------------------------------*/
    /*  OWL CAROUSEL
    /*---------------------------------------*/
    $('#carousel-who-we-are').owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
    
    /*---------------------------------------*/
    /*  TIMELINE TOGGLE
    /*---------------------------------------*/
      $('.timeline-heading').on('click',function(){
        $(this).siblings('.timeline-body').toggle(300);
    });

  
  
    /*---------------------------------------*/
    /*  ANIMATION CONTACT FORM
    /*---------------------------------------*/
      $(".input.-text").on( 'focus', function(){
        $(this).siblings('.labelAnim').addClass('onFocus');
      });
      
      $(".input.-text").on( 'blur', function(){
        if($(this).val() === '') {
          $(this).siblings('.labelAnim').removeClass('onFocus');
        }
      });
  
  
});

    /*---------------------------------------*/
    /*  CONTACT FORM
    /*---------------------------------------*/
var app = angular.module("app",[]);
app.controller("translateCtrl",['$scope', '$http', function($scope, $http){
    dict = {
        "date": {
            "en": "21st September 2018",
            "pl": "21 Września 2018"
        },
        "organizedBy":{
            "en": "Founded by",
            "pl": "Organizowana przez"
        },
        "about":{"en": "About", "pl": "O konferencji"},
        "speakers":{"en": "Speakers", "pl": "Prelegenci"},
        "registration": {"en": "Registration", "pl": "Rejestracja"},
        "contact":{"en": "Contact", "pl": "Kontakt"},
        "language":{"en": "Przelacz na polski", "pl": "Switch to English"},
        "intro.1": {
            "en": "Are you a developer or programmer looking to boost your skills? Then join us for the <strong>Dev# 2018</strong> conference - a free event dedicated to helping sharpen your knowledge and expertise.", 
            "pl": "Jeżeli jesteś developerem i zależy ci na rozwijaniu swoich  umiejętności to dołącz do nas podczas konferencji Dev# 2018. Tradycyjnie już, jest to darmowa impreza skierowana do społeczności profesjonalistów IT nakierowana na szerzenie wiedzy oraz nawiązywanie kontaktów."
        },
        "intro.2": {
            "en": "Our conference this year features six international speakers eager to share their expertise and experience in the latest technologies. Don't miss this unique opportunity to learn from them, and to interact with both the speakers and other conference participants in a friendly, supportive atmosphere.", 
            "pl": "Na naszą konferencję zaprosiliśmy sześciu prelegentów chętnych podzielić się z Wami swoim doświadczeniem. Dev# 2018 to unikalna okazja aby w niezobowiązującej atmosferze zdobyć wiedzę o najnowszych technologiach, znaleźć wspólny język zarówno z naszymi prelegentami jak i innymi uczestnikami konferencji."
        },
        "intro.3": { 
            "en": "World-leading information provider <strong>IHS Markit</strong> has been organizing internal conferences in Gdańsk for a decade with <strong>Mark Seemann</strong>, <strong>Karl-Henrik Nilsson</strong> from <strong>Tretton37</strong>, <strong>Chris Klug</strong> from <strong>Novatrox Consulting AB</strong>, <strong>Michał Taszycki</strong> from <strong>Creative Mind</strong> and <strong>Tomasz Heimowski</strong> from <strong>IHS Markit</strong> joining us for wonderful event last time. This year, second time in a row, we share the knowledge - and the fun - with all interested developers!", 
            "pl": "IHS Markit specjalizuje się w dostarczaniu danych i analiz klientom biznesowym i instytucjonalnym. Firma - zatrudniająca w Gdańsku liczny zespół deweloperski - wspiera również organizowanie wydarzeń IT. W poprzednich latach na naszych konferencjach prezentowali tacy prelegenci jak min. Mark Seemann, Karl-Henrik Nilsson (Tretton37), Chris Klug (Novatrox Consulting AB), Michał Taszycki (Creative Mind)."
        },
        "intro.4": {
            "en": "So why wait? Join us! Learn with us!", 
            "pl": "W tym roku - po raz kolejny - dzielimy się wiedzą ze wszystkimi zainteresowanymi!"
        },
        "intro.link": {
            "en": "Get your ticket", 
            "pl": "Zarejestruj sie"
        },
        "facts":{"en": "FACTS", "pl": "Fakty"},
        "day":{"en": "Day", "pl": "Dzień"},
        "talks":{"en": "Talks", "pl": "Prelekcji"},
        "people":{"en": "People", "pl": "Ludzi"},
        "cost":{"en": "Cost", "pl": "Koszt"},
        "cost.price":{"en": "Free", "pl": "0 zł"},
        "speaker.theimowski.about": {
            "en": "Tomasz is a passionate developer whose main areas of interest are F# and Functional Programming in general. As a Software Engineer at IHS Markit he tackles problems from various domains. In his free time, apart from contributing to OSS projects and learning new tech stuff, he enjoys lifting weights as well as dancing.", 
            "pl": ""
        },
        "speaker.abar.about": {
            "en": "In his career Adam touched on various tech stacks, but even though he admires simple structures, simple rules and order, which are often hard to find on the Web, these are Web technologies that are his programming passion. Adam works on versatile web apps in Bright Inventions and runs the website that reviews device integration capabilities of the web -", 
            "pl": ""
        },
        "comingsoon":{"en": "Coming soon", "pl": "Wkrótce"},
        "registernow":{"en": "Register now!", "pl": "Zarejestruj sie juz teraz!"},
        "findus":{"en": "You will find us here", "pl": "Znajdziesz nas tutaj"},
        "office":{"en": "Gdańsk office site", "pl": "Strona gdańskiego biura"},
        "intouch":{"en": "Get In Touch", "pl": "Kontakt"},
        "aboutus.title":{"en": "About", "pl": "O"},
        "aboutus.about":{ 
            "en": "IHS Markit’s singular ability to look across complex industries, financial markets, and government actions that drive the global economy and provide our customers with insights, perspective and solutions for what really matters.", 
            "pl": ""
        },
    };
    language = "pl";
 
    $scope.changeLanguage = function () {
        language = (language === "pl") ? "en" : "pl";
    };

    $scope.translate = function(key) {
        return dict[key][language];
    };
}]);