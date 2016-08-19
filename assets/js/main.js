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
app.controller("contactCtrl",['$scope', '$http', function($scope, $http){
  
    $scope.show_form = false;
    $scope.showForm = function(){
        $scope.show_form = $scope.show_form ? false : true;
        $scope.show_form ? $("body").animate({ scrollTop: window.pageYOffset + 350 }, 500) : $("body").animate({ scrollTop: window.pageYOffset  - 350 }, 500);
    }
    
    $scope.radioBehave = function(n){

        $scope.from_employee = false;
        $scope.from_university = false;
        $scope.from_fb = false;
        $scope.from_other = false;

        switch(n) {
            case 1: $scope.from_employee = true; break;
            case 2: $scope.from_university = true; break;
            case 3: $scope.from_fb = true; break;
            case 4: $scope.from_other = true; break;
        }
    }
    
    $scope.sendEmail = function(){
        $scope.ihs_employee === undefined ? $scope.ihs_employee = " ": $scope.ihs_employee = $scope.ihs_employee;
        var data = {
          from: $scope.name + ' ' + $scope.surname +  ' ' + '<' + $scope.email + '>',
          to: 'devsharp2016@gmail.com',
          subject: 'Devsharp Conference',
          text: 'Testing some Mailgun awesomness!',
          h:'h:X-My-Header',
          html :'<b>Mailgun rocks</b>',
          inline:'@files/awesome.gif' ,
          'o:campaign':'some_campaign_id',
          'o:deliverytime':'Thu, 12 April 2018 15:11:30 GMT',
          'o:dkim':'yes',
          'o:tag':'newsletter',
          'v:':'v:my-var'
        };
        $http({
           method: 'POST',
           url: 'https://mailgun.p.mashape.com/devsharp.azurewebsites.net/messages',
           headers: {
              'Authorization': 'Basic ZGV2c2hhcnAyMDE2OmRldnNoYXJwMjAxNg==',
              'X-Mashape-Key': 'i2sDGutXozmshI4D4dIWX7GYFDbWp1oMOENjsnZe1zf9qOQNeA',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'text/plain',
           },
          data: data

        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log(response);
        });
      
      
    };
  
  
  
}]);