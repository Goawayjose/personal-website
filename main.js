var main = function() {
    
    
    var circle1 = $('.circle1')
    var circle2 = $('.circle2')
    var circle3 = $('.circle3')
    var circle4 = $('.circle4')

    var navabo = $('#navabo')
    var navexp = $('#navexp')
    var navwor = $('#navwor')
    var navcon = $('#navcon')
    
    navabo.hide();
    navexp.hide();
    navwor.hide();
    navcon.hide();
    
    circle1.mouseenter(function(){
        navabo.show();
        $('.glyphicon-sunglasses').css({'color':'rgb(63, 72, 93)'});
    });
    circle1.mouseleave(function(){
        navabo.hide();
        $('.glyphicon-sunglasses').css({'color': 'white'});
    });
    
    circle2.mouseenter(function(){
        navexp.show();
$('.glyphicon-education').css({'color':'rgb(230, 19, 83)'});
    });
    circle2.mouseleave(function(){
        navexp.hide();
        $('.glyphicon-education').css({'color':'white'});
    });

    
    circle3.mouseenter(function(){
        navwor.show();
$('.glyphicon-globe').css({'color':'black'});
    });
    circle3.mouseleave(function(){
        navwor.hide();
$('.glyphicon-globe').css({'color':'white'});
    });
    
    circle4.mouseenter(function(){
        navcon.show();
    });
    circle4.mouseleave(function(){
        navcon.hide();
    });
    
    
    
    var plef = $('#plef')
    var pra = $('#right')
    var site1 = $('#site1')
    var Aswag = $('#swagright')
    var Ayea = $('#yealeft')
    var yeades = $('#yeadescription')
    var swagdes = $('#swagdescription')
    
  site1.addClass('site1first')
//right side
    pra.mouseenter(function(){
        site1.animate({"left": "+=200px"});
        site1.animate({'border-radius': '-=200px'});
        site1.removeClass('site1first');
        site1.addClass('site1second'); 
        Ayea.hide();
        swagdes.css({'opacity': '1'});
    });
    pra.mouseleave(function(){
        site1.addClass('site1first');
        site1.removeClass('site1second');
        site1.animate({'border-radius': '+=200px'});
        site1.animate({"left": "-=200px"});
        Ayea.show();
        swagdes.css({'opacity': '0'});
    });
    
//left side    
    plef.mouseenter(function(){
      site1.animate({"left": "-=500px"});
        site1.animate({'border-radius': '-=200px'});
        site1.removeClass('site1first');
        site1.addClass('site1left');  
        Aswag.hide();
        yeades.css({'opacity': '1'});
    });
    plef.mouseleave(function(){
        site1.animate({"left": "+=500px"});
        site1.animate({'border-radius': '+=200px'});
        site1.addClass('site1first');
        site1.removeClass('site1left');
        Aswag.show();
        yeades.css({'opacity': '0'});
    });
    
    
    $('#site2').mouseenter(function(){
        $('#site2').css({'background-size': '200%'});
    });
    
    $('#site2').mouseleave(function(){
        $('#site2').css({'background-size': '100%'});
    });
    
    $('#site3').mouseenter(function(){
        $('#site3').css({'background-size': '300%'});
    });
    
    $('#site3').mouseleave(function(){
        $('#site3').css({'background-size': '200%'});
    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        
        if(wScroll > 520){
            $('#site2').addClass('circleUp');
            $('#site1').addClass('sweg');
        }
        
        if(wScroll > 600){
            $('#site3').addClass('circleUp');
        }
    });
    
    
    
}

$(document).ready(main);