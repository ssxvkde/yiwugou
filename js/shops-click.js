$(function(){
	//sec3点击
	$('.choice-l a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.choice .show-show').click(function(){
		$('.show-1').css('z-index', '10');
		$('.show-2').hide().css('z-index', '1');
		changePage(1);
		
	})
	$('.choice .show-show-2').click(function(){
		$('.show-1').css('z-index', '1');
		$('.show-2').show().css('z-index', '10');
		
	})
	
	
	
	//sec5点击
	//点击上下页切换上下页
	var index = 0;
	var pageLength = $('.main-cont .pageNum').length;
	console.log(pageLength)
	var show = $('.main-cont .show');
	$('.main-cont .pageBack').click(function(){
//		alert('上');
		index--;
		if(index<0){
			index = 0;
			return;
		}
		changePage(index);
		
	})
	
	$('.main-cont .pageNext').click(function(){
//		alert('下');
		index++;
		if(index> pageLength-1){
			index = pageLength-1;
		}
		changePage(index);
	})
	
	//点击页码切换上下页
	$('.page .pageNum').click(function(){
		//1开始...
		var index = $(this).index() - 1;
//		console.log(index);
		changePage(index);
		
	})
	
	//点击确定直接跳转
	$('.go').click(function(){
		var index = $('.go input').val() - 1;
		if(index<0){
			alert('请输入正确数字');
		}else if(index > pageLength-1){
			alert('请输入正确数字');
		}else{
			changePage(index);
		}
	})
	
	function changePage(num){
		show.eq(num).show().siblings(".show").hide();
		$('.choice span').html(num+1 + '/3');
		$('.page .pageNum a').eq(num).addClass('active').parent().siblings().children('.pageNum a').removeClass('active');
	}
})
