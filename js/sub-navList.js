$.ajax({
	url:"../json/navList.json",
	success:function(response){
//		console.log(response);

		//遍历---商品分类菜单
		$(response).each(function(_index,_value){
//   		console.log(_value.title);
			var li = $('<li></li>');
			var h3 = $('<h3></h3>').html(_value.title).appendTo(li);
			var b = $('<b></b>').html('>').appendTo(h3);
			
			//遍历--_value.typeName(a)
			$(_value.typeName).each(function(_num,_shop){
//				console.log(_shop.name);
				var a = $('<a></a>').html(_shop.name).appendTo(li);
			})
			
			$('.menu').append(li);
			
			//二级菜单
			var ul = $('<ul></ul>').addClass('goods-list').appendTo($('.secMenu'));
			
			$(_value.goodsList).each(function(_num1,_title){
//				console.log(_title.goodsTitle);
				var li = $('<li></li>').appendTo(ul);
				var p = $('<p></p>').addClass('title').html(_title.goodsTitle).appendTo(li);
				var span = $('<span></span>').addClass('shops').appendTo(li);

				$(_title.goodsShop).each(function(_num2,_shopName){
//					console.log(_shopName.shopName);
					var a = $('<a></a>').html(_shopName.shopName).appendTo(span);
				})
			});
			

		})
	}
});