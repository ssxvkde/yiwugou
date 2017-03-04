$(function() {
	$.ajax({
		url: "../json/show-1.json",
		success: function(response) {
			//		console.log(response);
			var div1 = $('#main div[class=main-cont]');
			//遍历生产商品展示
			$(response).each(function(_index, _value) {
//				console.log(_value.src);
				var temp1 = response[_index],
				var div2 = $('<div class="show clearfix"></div>').appendTo(div1);
				$(temp1).each(function(index, value) {
						var temp2 = temp1[index];
						var div3 = $('<div class="frame"></div>').appendTo(div2);
						var span = $('<span></span>').appendTo(div3);
						var imgA = $('<a></a>').appendTo(div3);
						var img = $('<img />').prop('src', temp2.src).appendTo(div3);
						var ul = $('<ul></ul>').appendTo(div3);
						var name = $('<li></li>').appendTo(ul);
						var nameA = $('<a></a>').html(temp2.name).appendTo(name);
						var street = $('<li></li>').html(temp2.street).appendTo(ul);
						var num = $('<li></li>').html(temp2.num).appendTo(ul);
						var manage = $('<li></li>').html(temp2.manage).appendTo(ul);
					})

			})
		}

	});

})