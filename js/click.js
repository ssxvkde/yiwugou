$(function(){
	//商品展示点击切换商品(换一换)
	var changeIndex = 0;
	$('#exhibition .changeShop').click(function(){
		changeIndex+=1;
		if(changeIndex>2){
			changeIndex = 0;
		}
		console.log(changeIndex)
		$('#exhibition .section1 ul').eq(changeIndex).css('display', 'block').siblings().css('display', 'none');
		
		
	})
})
