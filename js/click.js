$(function(){

	//商品展示点击切换商品(换一换)
	var changeIndex = 0;
	$('#exhibition .changeShop').click(function(){
		changeIndex+=1;
		if(changeIndex>2){
			changeIndex = 0;
		}
		$('#exhibition .section1 ul').eq(changeIndex).css('display', 'block').siblings().css('display', 'none');
	});
	
	
	//论坛info点击
	$('.hot-l .info').click(function(){
		$('.info ul').css('display', 'block').css('z-index', '100');
	}).mouseout(function(){
		$('.info ul').mouseover(function(){
			$('.info ul').css('display', 'block').css('z-index', '100');
		}).mouseout(function(){
			$('.info ul').css('display', 'none').css('z-index', '-1');
		})
		$('.info ul').css('display', 'none').css('z-index', '-1');
		
	});
	
	//论坛快速导航点击
	$('.hot-r .quick').click(function(){
		$('.quick-cont').show().css('z-index', '100');
		$(this).css('background-position', '0 -27px');
	}).mouseout(function(){
		$('.quick-cont').mouseover(function(){
			$('.quick-cont').show().css('z-index', '100');
			$(this).css('background-position', '0 -27px');
		}).mouseout(function(){
			$('.quick-cont').hide().css('z-index', '-1');
			$(this).css('background-position', '0 0');
		})
		$('.quick-cont').hide().css('z-index', '-1');
		$(this).css('background-position', '0 0');
	})
	
})
