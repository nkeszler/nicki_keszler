function navbarToggle(scrollIndex, scrollAmount){
	if (scrollIndex > (scrollAmount*0.85)){ // was 433
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
function fadeSignatureAndLogos(scrollIndex, scrollAmount){
	$('#signature').css({'opacity': 1 - (scrollIndex / (scrollAmount*0.44)) }); // was 225
	$('#signature_contact').css({'opacity': 1 - (scrollIndex / (scrollAmount*0.44)) }); // was 225
	$('.logos img').css({'opacity': Math.min(0.8, (scrollIndex - (scrollAmount*0.39)) / (scrollAmount*0.49))}); // was 200 / 250
	// Hides and Shows Signature for overlap issue
	toggleSignature($('#signature').css('opacity'));
}
function displayContactText(object){
	$('.text-area *').hide();
	$('.text-area').append('<h1 id="contact-text">'+object.children('.logo').attr('data-text')+'</h1>');
}
function removeContactText(){
	$('.text-area *').show();
	$('#contact-text').remove();
}
function hoverIn(object, lastScroll, scrollAmount){
	if(lastScroll > (scrollAmount*0.44)){
		object.children().addClass('hover');
		object.children().animate({width: "+=1px", height: "+=1px",'margin-left': "-=1px",'margin-bottom': "-=1px"},4);
		displayContactText(object);
		//$('.logo-container:not(.hover) img').animate({width: "-=1px", height: "-=1px"}, 4);  < --- Opposite Shrink/Grow
	}
}
function hoverOut(object, lastScroll){
		//$('.logo-container:not(.hover) img').animate({width: "+=1px", height: "+=1px"}, 4);  < --- Opposite Shrink/Grow
		object.children().removeClass('hover');
		object.children().animate({width: "-=1px", height: "-=1px",'margin-left': "+=1px",'margin-bottom': "+=1px"},4);
		removeContactText();
}
function bob(){
	$('.logos .logo').animate({'margin-top': '-=5px', 'margin-bottom': '+=5px'},700,function(){
		$('.logos .logo').animate({'margin-top': '+=5px', 'margin-bottom': '-=5px'},700,bob());
	});
	// $('.logos img:not(.logo)').animate({'opacity':'-=0.1'},800,function(){
	// 	$('.logos img:not(.logo)').animate({'opacity':'+=0.1'},800,bob());
	// });
}

$(document).ready(function(){

	var scrollAmount = $(document).height() - window.innerHeight;
	console.log(scrollAmount);
	var lastScroll = $(window).scrollTop();
		// $('.dragMe').draggable({axis: 'y'});

	// Detect Scroll - Shrink Navbar + Fade Logos/Signature + Adjust Header Img
	$(window).on('scroll', function(){
		// Reset Scroll Amount
		scrollAmount = $(document).height() - window.innerHeight;

		// Disable hover: Hover + Contact Text
		$('.logo-container>img').removeClass('hover');
		$('#contact-text').remove();
		$('.text-area *').show()

		var scrollIndex = $(window).scrollTop();
		// Moves header_img for perspective effect
		$('#header_img').css({'margin-top' :-130 + (scrollIndex*0.5)});

		navbarToggle(scrollIndex, scrollAmount);
		fadeSignatureAndLogos(scrollIndex, scrollAmount);

		lastScroll = scrollIndex;
	})

	// bob($('.logos img:not(.logo)'));
	bob();
	
	// Hover Logos
	$('.logo-container').hover(function() { hoverIn($(this),lastScroll, scrollAmount) }, function() { hoverOut($(this),lastScroll)});

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