// JavaScript Document
$(function() {
	//navigation
	showSubmenu = function(mainId,subId){
		$('header').toggleClass('active');
		$('nav#menu a:nth-child('+mainId+')').toggleClass('active');
		$('nav#menu a:nth-child('+mainId+')>li').toggleClass('active');
		$('#'+subId).slideToggle();
	};
	closeSubmenu = function(e){
		$('.submenu').hide();
		$('#menu ul').children().removeClass('active');
		$('#menu ul a').children().removeClass('active');
	};

	headerBorder = function(diff){
		if($(document).innerWidth()>700)
			$('header h1.logo').css('width',$(document).innerWidth()-$('nav#menu').width()-diff);
	}
	$('.submenu a').click(function(e) {
		$('.submenu a').removeClass('active');
        $(this).addClass('active');
    });
	//mobile-navigation
	toggleMobileMenu = function(e){
		$('#mobilemenu ul').slideToggle();
		$('#menu-icon').toggleClass('active');
		$('header').toggleClass('active');
	};
	closeMobileMenu = function(e){
		$('#mobilemenu ul').slideUp();
		$('#menu-icon').removeClass('active');
		$('header').removeClass('active');
	};
	$('#menu-icon').click(function(){
		toggleMobileMenu();
	});
	$('.hasSubmenu').click(function(){
		$(this).parent().children('div').slideToggle();
		$(this).parent().toggleClass('active');
	});
	
	//main
	$(document).ready(function(e) {
        headerBorder(13);
    });
	$(window).resize(function(e) {
        headerBorder(0);
		if($(document).innerWidth()<700){
			closeSubmenu();
			closeMobileMenu();
		}
    });
});