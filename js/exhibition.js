$(function(){
	
	var timer = null;
	var index = 0;
	var distance = -$('#exhibition .section3 ul').width();
	
	 timer = setInterval(banner,2000);
	 
	 function banner(){
	 	$('#exhibition .section3 .sec1-cont').css('left', distance);
	 	
	 	if(distance == 0){
	 		distance = -$('#exhibition .section3 ul').width();
	 	}
	 	index++;
	 	if(index>2){
	 		index = 0;
	 		distance = -$('#exhibition .section3 ul').width();
	 	}
	 	
		distance*=index;
	 }
	 
	
})
