$(document).ready(function(){

	var lastScroll = 0;
	$(window).on('scroll', function(){

		var scrollIndex = $(window).scrollTop();
		$('#header_img').css({'margin-top' :-170 + (scrollIndex*0.5)});

// For scroll up and down
  //   if (scrollIndex > lastScroll){
  //      $('#header_img').css({'margin-top' :'+=2px'});
  //   }
  //   else {
  //      $('#header_img').css({'margin-top' :'-=2px'});
  //   }
  //   lastScroll = scrollIndex;
})
	

});


	// $('.moving').on('mousedown',function(event){
	// 	offsetX = event.offsetX;
	// 	offsetY = event.offsetY;
	// 	$(window).on('mousemove', function(event){
	// 		event.preventDefault();
	// 		$('.moving').css({'left':(event.pageX - offsetX) + 'px',
	// 												'top' :(event.pageY - offsetY) + 'px'});
	// 	});
	// }).on('mouseup', function(){
	// 	$(window).off('mousemove');
	// });