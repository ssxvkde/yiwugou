$(function(){
	//头部客户服务
	$('.serve').mouseover(function(){
		$('.help').css('display', 'block');
		$(this).css('background', 'antiquewhite').css('border','1px solid gray').css('border-bottom','1px solid white');
	}).mouseout(function(){
		$(this).css('background', '').css('border','0');
		$('.help').css('display', 'none');
	});
	
	//头部语言栏
	$('.language').mouseover(function(){
		$(this).css('border','0').css('overflow','visible');
		$('.language ul').css('border','1px solid gray');
	}).mouseout(function(){
		$(this).css('border','1px solid gray').css('overflow','hidden');
		$('.language ul').css('border','0');
	});
	
	//搜索分站
	$('.market').mouseover(function(){
		$(this).css('border','1px solid gray').css('background-position', '-65px -475px');
		$('.market ul').css('display', 'block');
	}).mouseout(function(){
		$('.market').css('border','0').css('background-position', '-65px -445px');;
		$('.market ul').css('display', 'none');
	});
	
	//搜索栏箭头
	$('.find-cont span').mouseover(function(){
		$('.find-cont ul').css('display', 'block');
		$(this).css('background-position', '0 -440px');
	}).mouseout(function(){
		$('.find-cont ul').css('display', 'none');
		$(this).css('background-position', '0 -470px');
	})
	
})
