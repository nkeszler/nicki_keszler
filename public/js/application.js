function navbarToggle(scrollIndex, scrollAmount){
	if (onBlog()){
		if (scrollIndex > 433){
			shrinkNavbar()
		}else{
			growNavbar()
		}
	}else{
		if (scrollIndex > (scrollAmount*0.85)){ // was 433
			shrinkNavbar();
		}else{
			growNavbar();
		}
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
	$('li').show();
};
function toggleSignature(opacity){
	if (opacity <= 0){
		$('#signature').hide();
		$('#signature_contact').hide();
		$('.logos').css({'visibility':'visible'});
	}else{
		$('#signature').show();
		$('#signature_contact').show();	
		$('.logos').css({'visibility':'hidden'});
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
		object.children().children().addClass('hover');
		object.children().children().animate({width: "+=1px", height: "+=1px",'margin-left': "-=1px",'margin-bottom': "-=1px"},4);
		displayContactText(object.children());
		//$('.logo-container:not(.hover) img').animate({width: "-=1px", height: "-=1px"}, 4);  < --- Opposite Shrink/Grow
	}
}
function hoverOut(object, lastScroll){
		//$('.logo-container:not(.hover) img').animate({width: "+=1px", height: "+=1px"}, 4);  < --- Opposite Shrink/Grow
		object.children().children().removeClass('hover');
		object.children().children().animate({width: "-=1px", height: "-=1px",'margin-left': "+=1px",'margin-bottom': "+=1px"},4);
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
function setActiveNav(){
	$('.nav .glyphicon').removeClass('active')
	if (window.location.pathname.replace(/\//g, '') == ''){
		$('.nav .glyphicon-home').addClass('active')
	}else if (window.location.pathname.replace(/\//g, '') == 'contact'){
		$('.nav .glyphicon-envelope').addClass('active')
	}else{
		$('.nav .glyphicon-pushpin').addClass('active')
	}
}
function cropBottomContent(){
	$('.bottom_content').css('height','25.4%')
}
function appendBlogPosts(){
	$.getJSON('/blog_posts', function(response){
 			var posts = response.posts.reverse();
 			for (var i=0; i<posts.length; i++){
 				$('body').append("<div class='blog-post'><h1 id='title'>"+posts[i].title+"</h1><p id='text'>"+posts[i].text.replace("/n","<br/>")+"</p><h5 id='date'>"+posts[i].date+"</h5></div>")
 			}
 		});
}
function onBlog(){
	return window.location.pathname.replace(/\//g, '') == 'blog'
}

$(document).ready(function(){

	setActiveNav();

	if (onBlog()){
		cropBottomContent();
		// appendBlogPosts();
	}

	// Clicking Navcircle
	$('#nav_circle').on('click', function(){
		if($(this).hasClass('shrink')){
			$('#navbar').toggleClass('expand', function(){
				$('li').toggle(150);
			});
		}
	});

	// Success alert message timeout
	setTimeout(function(){$('#message_success').slideUp(400)},1600);

	var scrollAmount = $(document).height() - window.innerHeight;
	var lastScroll = $(window).scrollTop();
		// $('.dragMe').draggable({axis: 'y'});

	// Detect Scroll - Shrink Navbar + Fade Logos/Signature + Adjust Header Img
	$(window).on('scroll', function(){
		// Reset Scroll Amount
		scrollAmount = $(document).height() - window.innerHeight;

		// Disable hover: Hover + Contact Text
		$('.logo-container img').removeClass('hover');
		$('#contact-text').remove();
		$('.text-area *').show()
		$('#navbar').removeClass('expand');

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
