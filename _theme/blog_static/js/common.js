jQuery(function($) {
  var lastIsSticky = undefined,
    $document = $(document),
    $header = $("header");


  $(window).on("scroll", function() {
    var scroll = $document.scrollTop(),
      isSticky = scroll > 80;

    if (lastIsSticky === isSticky) {
      return;
    }
    lastIsSticky = isSticky;

    if (isSticky) {
      $header.addClass("sticky")
    }
    else {
      $header.removeClass("sticky")
    }
  });



	if($('html').innerWidth()<768){
		$('.sp-img').each(function(){
			$(this).attr("src",$(this).attr("src").replace('-pc.jpg', '-sp.jpg'));
			$(this).attr("src",$(this).attr("src").replace('-pc.png', '-sp.png'));
		});
	}else{
		$('.sp-img').each(function(){
			$(this).attr("src",$(this).attr("src").replace('-sp.jpg', '-pc.jpg'));
			$(this).attr("src",$(this).attr("src").replace('-sp.png', '-pc.png'));
		});
	}


});


$(window).resize(function(){
							  
	if($('html').innerWidth()<768){
		$('.sp-img').each(function(){
			$(this).attr("src",$(this).attr("src").replace('-pc.jpg', '-sp.jpg'));
			$(this).attr("src",$(this).attr("src").replace('-pc.png', '-sp.png'));
		});
	}else{
		$('.sp-img').each(function(){
			$(this).attr("src",$(this).attr("src").replace('-sp.jpg', '-pc.jpg'));
			$(this).attr("src",$(this).attr("src").replace('-sp.png', '-pc.png'));
		});
	}
});


// *
