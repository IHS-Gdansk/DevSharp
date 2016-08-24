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

    var ip =0;
    $.getJSON('//ipinfo.io/', function(data) {
        ip = data.ip;
    });
    var today = new Date();
    var str = today.toGMTString();
    $scope.show_form = false;
    $scope.about_conference ,$scope.your_occupation, $scope.my_company,  $scope.about_me, $scope.special_preferences;

    $scope.showForm = function(){
        $scope.show_form = $scope.show_form ? false : true;
        $scope.show_form ? $("body").animate({ scrollTop: window.pageYOffset + 350 }, 500) : $("body").animate({ scrollTop: window.pageYOffset  - 350 }, 500);
    }
    
    $scope.hearAbout = function(n){
        $scope.from_employee = false;
        $scope.from_fb = false;
        $scope.from_other = false;

        switch(n) {
            case 1:
                $scope.from_employee = true; 
                $scope.about_conference = $scope.ihs_employee;
            break;
            case 2:
                $scope.from_fb = true;
                $scope.about_conference = "Facebook";
            break;
            case 3:
                $scope.from_other = true; 
                $scope.about_conference = $scope.about_other;
            break;
        }
    }
    
    $scope.occupation = function(n, data){
        $scope.software_developer = false;
        $scope.student = false;
        $scope.sqa_engineer = false;
        $scope.occupation_other = false;

        switch(n) {
            case 1: 
                $scope.software_developer= true; 
                $scope.your_occupation = data;
            break;
            case 2: 
                $scope.student = true;
                $scope.your_occupation = data;
                break;
            case 3: 
                $scope.sqa_engineer = true; 
                $scope.your_occupation = data;
            break;
           case 4: 
                $scope.occupation_other = true; 
                $scope.your_occupation = $scope.occu_other;
           break;
        }
    }
    
    $scope.specialPreferences = function(n, data){
        $scope.eat_normal = false;
        $scope.eat_vege = false;
        $scope.eat_other = false;

        switch(n) {
            case 1: 
                $scope.eat_normal = true;
                $scope.special_preferences = data;
            break;
            case 2: 
                $scope.eat_vege = true;
                $scope.special_preferences = data;
                break;
            case 3: 
                $scope.eat_other = true;
                $scope.special_preferences = $scope.pref_other;
            break;
        }
    }
	
	var onSuccess = function(data)
	{
		if(data === false)
		{
			onError(data);
		}
		$scope.message = "Your mail was delivered";
		$scope.success_msg = true;
		$scope.fail_msg = false;
		clearData();
		$("body").animate({ scrollTop: window.pageYOffset  - 450 }, 500);
	};
	
	var onError = function(data)
	{
		$scope.message = "Error! Try to send mail again";
		$scope.success_msg = false;
		$scope.fail_msg = true;
		clearData();
		$("body").animate({ scrollTop: window.pageYOffset  - 450 }, 500);
	};
    
    $scope.sendEmail = function(){
        
        var data = {
            Name: $scope.name,
            Surname: $scope.surname,
            Email: $scope.email,
            HearAboutConf: $scope.about_conference,
            Job: $scope.your_occupation,
            Company : $scope.my_company,
            About : $scope.about_me,
            SpecialMealPreferences: $scope.special_preferences,
            IpAddress: ip,
            GMTTime: str
        };

        $http({
            method: 'POST',
            url: 'http://devsharptest.azurewebsites.net/send',
            data: JSON.stringify(data)
        }).then(onSuccess, onError);

        $scope.form_message = true;
        
    }
     
    var clearData = function() {
        $scope.name = '';
        $scope.surname = '';
        $scope.email = '';
        $scope.about_conference = '';
        $scope.your_occupation = '';
        $scope.my_company='';
        $scope.about_me='';
        $scope.special_preferences = '';
        $scope.ihs_employee= '';
        $scope.about_other = '';
        $scope.occu_other = '';
        $scope.pref_other= '';
        $scope.from_employee = false;
        $scope.from_fb = false;
        $scope.from_other = false;
        $scope.software_developer = false;
        $scope.student = false;
        $scope.sqa_engineer = false;
        $scope.occupation_other = false;
        $scope.eat_normal = false;
        $scope.eat_vege = false;
        $scope.eat_other = false;
     }
     
     
}]);