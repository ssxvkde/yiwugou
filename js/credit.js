$(function(){
//	console.log($('.main-sec3 li').length)
	//主体li隔行变色
	var length = $('.main-sec3 li').length;
	for(var i=0; i<length; i++){
		if(i%2 != 0){
			$('.main-sec3 li').eq(i).css('background', '#f1f1f1')
		}
	}
	$('.main-sec3 li').eq(length-1).css('border-bottom','5px solid #e3e4e8').css('border-radius', '5px');
	$('.main-sec3 li').eq(0).css('border-top','1px solid #e3e4e8').css('border-radius', '5px');
})
