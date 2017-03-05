$(function(){
	var timer = null;
	var index = 0;
	var length = $('.banner li').length - 1;
	setInterval(function(){
		index++;
		if(index>length){
			index = 0;
		}
		banner(index);
	},2000);
	
	function banner(num){
		$('.banner .page a').eq(index).addClass('active').siblings().removeClass('active');
		$('.banner li').eq(num).show().siblings().hide();
	}
	
	//点击页码切换
	$('.banner .page a').click(function(){
		clearInterval(timer);
		timer = null;
	 	index = $(this).index();
	 	$(this).addClass('active').siblings().removeClass('active');
	 	time = setInterval(banner(index),2000)
	})
})

