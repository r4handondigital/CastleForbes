$(document).ready(function(){
/*
	Códigos de invocação dos plugins.
*/
	$('select').material_select();

	$(".button-collapse").sideNav();

	 $('.sobre-detalhes').owlCarousel({
        loop:true,
        items:1,
         nav:false,
        autoplay:true,
        animateOut: 'fadeOut',
     
    });


	  $('.box-depoimentos').owlCarousel({
        loop:true,
        items:1,
         nav:true,
         dots:false,
        autoplay:true,
        animateOut: 'fadeOut',
     
    });


	  $('.timer').countTo();

	  $('#earth').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });


});























