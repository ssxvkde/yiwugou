$(function(){
	//头部客户服务
	$('.serve').mouseover(function(){
		$('.help').css('display', 'block').css('z-index','10');
		$(this).css('background', 'antiquewhite').css('border','1px solid gray').css('border-bottom','1px solid white');
	}).mouseout(function(){
		$(this).css('background', '').css('border','0');
		$('.help').css('display', 'none').css('z-index','0');
	});
	
	//头部语言栏
	$('.language').mouseover(function(){
		$(this).css('border','0').css('overflow','visible').css('z-index','10');
		$('.language ul').css('border','1px solid gray');
	}).mouseout(function(){
		$('.language').css('border','1px solid gray').css('overflow','hidden').css('z-index','0');
		$('.language ul').css('border','0');
	});
	
	//搜索分站
	$('.market').mouseover(function(){
		$(this).css('border','1px solid gray').css('background-position', '-65px -475px');
		$('.market ul').css('display', 'block').css('z-index','10');
	}).mouseout(function(){
		$('.market').css('border','0').css('background-position', '-65px -445px');;
		$('.market ul').css('display', 'none').css('z-index','0');
	});
	
	//搜索栏箭头
	$('.find-cont span').mouseover(function(){
		$('.find-cont ul').css('display', 'block').css('z-index','10');
		$(this).css('background-position', '0 -440px');
	}).mouseout(function(){
		$('.find-cont div').mouseover(function(){
			$('.find-cont ul').css('display', 'block').css('z-index','10');
			$('.find-cont span').css('background-position', '0 -440px');
		}).mouseout(function(){
			$('.find-cont ul').css('display', 'none').css('z-index','0');
			$('.find-cont span').css('background-position', '0 -470px');
		})
		$('.find-cont ul').css('display', 'none').css('z-index','0');
		$(this).css('background-position', '0 -470px');
	});
	
	//导航栏商铺商品
	$('.commodity').mouseover(function(){
		$('.commodity .menu').css('display', 'block').css('z-index','10');
	}).mouseout(function(){
		$('.commodity .menu').css('display', 'none').css('z-index','0');
	});
	
	//商品二级菜单
	$('.menu').mouseover(function(){
		$('.commodity .secMenu').css('display', 'block').css('z-index','10');
	}).mouseout(function(){
		$('.commodity .secMenu').mouseover(function(){
			$('.commodity .secMenu').css('display', 'block').css('z-index','10');
		}).mouseout(function(){
			$('.commodity .secMenu').css('display', 'none').css('z-index','0');
		})
		$('.commodity .secMenu').css('display', 'none').css('z-index','0');
	});
	
	//导航采购
	$('.buy').mouseover(function(){
		$('.buy-cont').show().css('z-index','10');
	}).mouseout(function(){
		$('.buy-cont').hide().css('z-index','0');
	});
	
	//导航外贸服务
	$('.trade').mouseover(function(){
		$('.trade-cont').show().css('z-index','10');
	}).mouseout(function(){
		$('.trade-cont').hide().css('z-index','0');
	});
	
	//导航商铺服务
	$('.shopServe').mouseover(function(){
		$('.shopServe-cont').show().css('z-index','10');
	}).mouseout(function(){
		$('.shopServe-cont').hide().css('z-index','0');
	});
	
	//轮播图第三部分一如改变背景
	$('.bazaar .last a').mouseover(function(){
		var index = $(this).index();
		if(index==0){
			$('.bazaar .last span').eq(index).css('background-position','-442px -139px');
		}else if(index==1){
			$('.bazaar .last span').eq(index).css('background-position','-442px -160px');
		}else if(index==2){
			$('.bazaar .last span').eq(index).css('background-position','-443px -182px');
		}
	}).mouseout(function(){
		$('.bazaar .last span').eq(0).css('background-position','-462px -139px');
		$('.bazaar .last span').eq(1).css('background-position','-462px -160px');
		$('.bazaar .last span').eq(2).css('background-position','-463px -182px');
	});
	

	//信用平台导航诚信
	$('.nav-cont .zhengxin').mouseover(function(){
		$('.zx-cont').css('display', 'block').css('z-index', '100');
	}).mouseout(function(){
		$('.zx-cont').mouseover(function(){
			$('.zx-cont').css('display', 'block').css('z-index', '100');
		}).mouseout(function(){
			$('.zx-cont').css('display', 'none').css('z-index', '0');
		})
		$('.zx-cont').css('display', 'none').css('z-index', '0');
	});
	
	
	//论坛新闻显示
	$('.newsTitle a').mouseover(function(){
		var index = $(this).index();
//		console.log(index);
		$(this).addClass('active').siblings().removeClass('active');
		$('.news-deta ul').eq(index).show().siblings().hide();
	})
})
