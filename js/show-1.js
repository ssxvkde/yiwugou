$.ajax({
	url : "../json/show-1.json",
	success : function(response){
//		console.log(response);
		
		//遍历生产商品展示
		$(response).each(function(_index, _value){
//			console.log(_value.name);
			var div = $('<div></div>').addClass('frame').appendTo('#main .show');
			var span = $('<span></span>')
		})
	}
	
	
	
	
});

