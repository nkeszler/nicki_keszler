function shrinkNavbar(){
	$('#navbar').addClass('shrink').removeClass('grow');
	$('li').hide();
};

function growNavbar(){
	$('#navbar').addClass('grow').removeClass('shrink');
	$('li').show();
};

$(document).ready(function(){

	var lastScroll = 0;
	$(window).on('scroll', function(){

		var scrollIndex = $(window).scrollTop();
		$('#header_img').css({'margin-top' :-170 + (scrollIndex*0.5)});
		console.log(scrollIndex);
		if (scrollIndex > 315){
			shrinkNavbar();
			$('#nav_circle').addClass('shrink').removeClass('grow');
		}else{
			growNavbar();
			$('#nav_circle').addClass('grow').removeClass('shrink');
		}

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