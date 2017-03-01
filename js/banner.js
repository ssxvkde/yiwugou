$(function(){
	
	var timer = null;
	var index = 0;
	var distance = -$('.banner li').width();
	
	 timer = setInterval(banner,2000);
	 
	 function banner(){
	 	$('.banner-img').css('left', distance);
	 	
	 	if(distance == 0){
	 		distance = -$('.banner li').width();
	 	}
	 	$('.page a').eq(index).addClass('active').siblings().removeClass('active');
	 	index++;
	 	if(index>2){
	 		index = 0;
	 		distance = -$('.banner li').width();
	 	}
	 	
		distance*=index;
	 }
	 
	 $('.page a').click(function(){
	 	clearInterval(timer);
		timer = null;
	 	index = $(this).index();
	 	distance*=index;
	 	$('.banner-img').css('left', distance);
	 	if(distance == 0){
	 		distance = -$('.banner li').width();
	 	}
	 	$(this).addClass('active').siblings().removeClass('active');
	 	
	 	timer = setInterval(banner,2000);
	 })
	
})
