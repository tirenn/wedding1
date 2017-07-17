$(function(){
	
	var menu = $('.navbar'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('one')){
				menu.fadeOut('fast', function(){
					$(this).removeId('one').addId('two').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('two')){
				menu.fadeOut('fast', function(){
					$(this).removeId('two').addId('one').fadeIn('fast');
				});
			}
		});

});