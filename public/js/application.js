function navbarToggle(scrollIndex){
	if (scrollIndex > 433){
		shrinkNavbar();
	}else{
		growNavbar();
	}
};
function shrinkNavbar(){
	$('#navbar').addClass('shrink').removeClass('grow');
	$('#nav_circle').addClass('shrink').removeClass('grow');
	$('li').hide();
};
function growNavbar(){
	$('#navbar').addClass('grow').removeClass('shrink');
	$('#nav_circle').addClass('grow').removeClass('shrink');
	$('li').slideDown(400);
};
function toggleSignature(opacity){
	if (opacity <= 0){
		$('#signature').hide();
		$('#signature_contact').hide();	
	}else{
		$('#signature').show();
		$('#signature_contact').show();	
	}
}
function fadeSignatureAndLogos(scrollIndex){
	$('#signature').css({'opacity': 1 - (scrollIndex / 225) });
	$('#signature_contact').css({'opacity': 1 - (scrollIndex / 225) });
	$('.logos img').css({'opacity': Math.min(0.8, (scrollIndex - 200) / 250)});
	// Hides and Shows Signature for overlap issue
	toggleSignature($('#signature').css('opacity'));
}
function hoverIn(object, lastScroll){
	if(lastScroll > 225){
		object.children().addClass('hover');
		object.children().animate({width: "+=1px", height: "+=1px",'margin-left': "-=1px"},4);
		// object.parent().children().not(object).children().animate({width: "-=1px", height: "-=1px"},4);
	}
}
function hoverOut(object, lastScroll){
		object.children().removeClass('hover');
		object.children().animate({width: "-=1px", height: "-=1px",'margin-left': "+=1px"},4);
		// object.parent().children().not(object).children().animate({width: "+=1px", height: "+=1px"},4);
}

$(document).ready(function(){

	var lastScroll = $(window).scrollTop();
		// $('.dragMe').draggable({axis: 'y'});

	// Detect Scroll - Shrink Navbar + Fade Logos/Signature + Adjust Header Img
	$(window).on('scroll', function(){
		// Disable hover
		$('.logo-container>img').removeClass('hover');

		var scrollIndex = $(window).scrollTop();
		// Moves header_img for perspective effect
		$('#header_img').css({'margin-top' :-130 + (scrollIndex*0.5)});

		navbarToggle(scrollIndex);
		fadeSignatureAndLogos(scrollIndex);

		lastScroll = scrollIndex;
	})
	
	// Hover Logos
	$('.logo-container').hover(function() { hoverIn($(this),lastScroll) }, function() { hoverOut($(this),lastScroll) });

});

// For scroll up and down
  //   if (scrollIndex > lastScroll){
  //      $('#header_img').css({'margin-top' :'+=2px'});
  //   }
  //   else {
  //      $('#header_img').css({'margin-top' :'-=2px'});
  //   }
  //   lastScroll = scrollIndex;

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