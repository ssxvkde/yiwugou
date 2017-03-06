$(function(){
	//免登录移入
	$('.li3 input').mouseover(function(){
		$('.li3 div').show();
	}).mouseout(function(){
		$('.li3 div').hide();
	})
	
	//点击切换密码或手机登录
	$('.no').click(function(){
		$('.no-info').show();
		$('.need-info').hide();
	});
	$('.need').click(function(){
		$('.no-info').hide();
		$('.need-info').show();
	})
})
