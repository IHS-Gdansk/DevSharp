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
  
      // lazy load images with data-src attribute
      $(window).on('load', function() {
        images = $('img');
        for (var i = 0; i < images.length; i++) {
            if (images[i].getAttribute('data-src')) {
                images[i].setAttribute('src', images[i].getAttribute('data-src'));
            }
        }
    });  
});

    /*---------------------------------------*/
    /*  CONTACT FORM
    /*---------------------------------------*/
var app = angular.module("app",[]);
app.controller("translateCtrl",['$scope', function($scope){
    dict = {
        "date": {
            "en": "21st September 2019",
            "pl": "21 Września 2019"
        },
        "organizedBy":{
            "en": "founded by",
            "pl": "pod patronatem"
        },
        "about":{"en": "About", "pl": "O konferencji"},
        "speakers":{"en": "Speakers", "pl": "Prelegenci"},
        "registration": {"en": "Registration", "pl": "Rejestracja"},
        "sponsors": {"en": "Sponsors", "pl": "Sponsorzy"},
        "papers": {"en": "Call for papers", "pl": "Zgłoś swoją prelekcję"},
        "contact":{"en": "Contact", "pl": "Kontakt"},
        "language":{"en": "Przelacz na polski", "pl": "Switch to English"},
        "intro.1": {
            "en": "If you are a developer looking to sharpen your skills then join us for the upcoming Dev# 2019 conference. As always it is a free* event targeted at the Tri-City IT community with the purpose of sharing knowledge and connecting with other IT professionals.", 
            "pl": "Jeżeli jesteś developerem i zależy ci na rozwijaniu swoich umiejętności to dołącz do nas podczas konferencji Dev# 2019. Tradycyjnie, jest to darmowa* impreza skierowana do społeczności profesjonalistów IT, nakierowana na szerzenie wiedzy oraz nawiązywanie kontaktów."
        },
        "intro.2": {
            "en": "Dev# 2019 is a unique opportunity to find a common language with other conference participants and the speakers themselves in a relaxed and unassuming atmosphere.", 
            "pl": "Dev# 2019 to unikalna okazja, aby w niezobowiązującej atmosferze zdobyć wiedzę o najnowszych technologiach, znaleźć wspólny język, zarówno z naszymi wykładowcami, jak i innymi uczestnikami konferencji."
        },
        "intro.3": { 
            "en": "After the talks there will be a networking party for all attendees. In order to ensure proper vibe, we chose Stary Maneż in Gdansk for the venue - the place known for its great concert venue, delicious cuisine, and excellent beer brewed on the location.", 
            "pl": "Po prezentacjach odbędzie się \"networking party\" dla wszystkich uczestników konferencji. Aby zapewnić dobrą atmosferę, na miejsce spotkania wybraliśmy Stary Maneż w Gdańsku, który znany jest ze świetnej sali koncertowej, dobrej kuchni oraz wybornego, warzonego na miejscu piwa."
        },
        "intro.link": {
            "en": "Get your ticket", 
            "pl": "Zarejestruj się"
        },
        "intro.footer": {
            "en": "*Entry deposit is required, it will be returned if you show up on conference.",
            "pl": "*Wymagana jest wstępna kaucja, która zostanie zwrócona gdy pojawisz się na konferencji."
        },
        "facts":{"en": "FACTS", "pl": "Fakty"},
        "day":{"en": "Day", "pl": "Dzień"},
        "talks":{"en": "Talks", "pl": "Prelekcji"},
        "attendees":{"en": "Attendees", "pl": "Uczestników"},
        "cost":{"en": "Cost", "pl": "Koszt"},
        "cost.price":{"en": "Free*", "pl": "0 zł*"},
        //speakers
        "speaker.theimowski.about": {
            "en": "Tomasz is a passionate developer whose main areas of interest are F# and Functional Programming in general. As a Senior Software Engineer at IHS Markit, he tackles problems from various domains. In his free time, apart from contributing to OSS projects and learning new tech stuff, he enjoys lifting weights as well as dancing.",
            "pl": "Tomasz jest programistą, którego głównymi obszarami zainteresowania są F# i programowanie funkcyjne. Jako Starszy Programista w firmie IHS Markit rozwiązuje problemy z różnych dziedzin. W wolnym czasie, oprócz kontrybuowania do projektów open source'owych i nauki nowych technologii, uwielbia podnosić ciężary i tańczyć."
        },
        "speaker.theimowski.prelection.title": {"en": "SAFE apps with F# web stack", "pl": "SAFE apps with F# web stack"},
        "speaker.theimowski.prelection.info": {
            "en": "Modern web stacks often involve more than one programming language. SAFE on the other side offers an end-to-end solution, with static typing safety and other powerful language capabilities on both server and client side in plain F#. In the presentation, we'll discover possibilities of the stack during a live demo. After starting a SAFE project from scratch, we'll develop new features by sharing common F# code between client and server and observe changes using hot module replacement. The corresponding letters in the acronym stand for: Suave - lightweight and composable web server, Azure - cloud provider from Microsoft, Fable - F# to JavaScript transpiler and Elmish - set of F# libraries imitating Elm architecture.",
            "pl": "Nowoczesne web stacki często wymagają więcej niż jednego języka programowania. SAFE za to oferuje rozwiązanie end-to-end, ze statycznym typowaniem i innymi mocnymi stronami F# zarówno po stronie serwera jak i klienta. Podczas prezentacji, przy pomocy kodowania na żywo, poznamy możliwości tego stack'a. Po utworzeniu projektu SAFE od zera, rozwiniemy nowe funkcjonalności poprzez współdzielenie kodu F# między klientem a serwerem i zaobserwujemy natychmiastowe zmiany korzystając z Hot Module Replacement. Odpowiednie litery w akronimie SAFE oznaczają: Suave - lekki web serwer, Azure - dostawca chmury od Microsoftu, Fable - kompilator F# do JavaScript'u i Elmish - zbiór bibliotek F# do UI imitujący architekturę języka Elm."
        },
        "speaker.abar.about": {
            "en": "In his career Adam touched on various tech stacks, but even though he admires simple structures, simple rules and order, which are often hard to find on the Web, these are Web technologies that are his programming passion. Adam works on versatile web apps in Bright Inventions and runs the website that reviews device integration capabilities of the web -", 
            "pl": "Na swojej drodze zawodowej Adam zahaczył o różnorodne technologie, ale choć uwielbia proste struktury, proste reguły i porządek, których nieraz próżno w Webie szukać, to właśnie technologie webowe są jego programistyczną pasją. Tworzy wszechstronne aplikacje webowe w Bright Inventions oraz prowadzi stronę o możliwościach Weba na urządzeniach mobilnych -"
        },
        "speaker.abar.prelection.title": {"en": "What Web Can Do Today?", "pl": "What Web Can Do Today?"},
        "speaker.abar.prelection.info": {
            "en": "We clearly associate smartphones with native applications because they are able to seamlessly integrate with the system, give an access to the device hardware interfaces and provide a decent performance. But are native technologies the only ones that make it possible? This presentation is an overview of the possibilities of web technologies in the area of integration with mobile devices and my small contribution to the discussion whether Web technologies will be able to replace native mobile applications one day.",
            "pl": "Smartfony jednoznacznie kojarzą nam się z natywnymi aplikacjami, gdyż potrafią one integrować się z systemem, dają dostęp do interfejsów sprzętowych urządzenia oraz zapewniają przyzwoitą wydajność. Ale czy tylko natywne technologie to umożliwiają? Ta prezentacja to przegląd możliwości technologii webowych pod kątem integracji z urządzeniami mobilnymi oraz trzy grosze do dyskusji o tym, czy technologie webowe będą w stanie wyprzeć natywne aplikacje mobilne."
        },
        
        "comingsoon":{"en": "Coming soon", "pl": "Wkrótce"},
        "registernow":{"en": "Register now", "pl": "Zarejestruj się"},
        "findus":{"en": "You will find us here", "pl": "Miejsce konferencji"},
        "previousevents": {"en": "Previous Events", "pl": "Poprzednie Wydarzenia"},
        "office":{"en": "Gdańsk office site", "pl": "Odwiedź stronę gdańskiego biura"},
        "intouch":{"en": "Get In Touch", "pl": "Kontakt"},
        "toannounced": { "en": "More speakers to be announced", "pl": "Kolejni prelegenci wkrótce" },
        "agenda.toannounced": { "en": "To be announced", "pl": "Wkrótce" },
        "agenda.break": { "en": "Break", "pl": "Przerwa" },
        "agenda.moredetailstofollowshortly": { "en": "More details to follow shortly", "pl": "Więcej szczegółów wkrótce" }
    };
    language = "en";

    $scope.isPolish = function () { return language === "pl" };
    $scope.isEnglish = function () { return language === "en" };

    $scope.changeLanguage = function () {
        language = (language === "pl") ? "en" : "pl";
    };

    $scope.translate = function(key) {
        return dict[key][language];
    };
}]);