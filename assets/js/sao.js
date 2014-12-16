$(document).ready(function(){
	$('.wrapper #trigger').click(function(){
		$('.wrapper #menu').toggleClass('open');
    });

	$(".wrapper").swipe( {
        swipeDown:function(event, direction, distance, duration, fingerCount) {
          $('#menu').addClass('open');  
        },
        swipeUp:function(event, direction, distance, duration, fingerCount) {
          $('#menu').removeClass('open');  
		},
        threshold:0
     });
});
