$(function(){
	
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1846898&appid=e16562d519a8afd00cb9f02a17662dfb&units=metric',function(data){
		//alert(data.city.name);
		//alert(data.list[0].main.temp_min);
		var $minTemp=data.main.temp_min;
		var $maxTemp=data.main.temp;
		var $cTemp=data.main.temp_max;
		var $cfeel=data.main.feels_like;
		var $chumi=data.main.humidity;
		var now = new Date(Date.now());
		var month = now.getMonth()+1;
		var $cDate = now.getFullYear() +'년 '+ month+'월 ' + now.getDate()+'일 '+now.getHours()+'시 ';
		var $wIcon=data.weather[0].icon;
		$('.ctemp').append(Math.floor($cTemp)+"°");
		$('.clowtemp').append(Math.floor($minTemp)+"°");
		$('.chightemp').append(Math.floor($maxTemp)+"°");
		$('.cfeel').append(Math.floor($cfeel)+"°");
		$('.chumi').append(Math.floor($chumi)+"°");
		$('.WsubTit').append("( "+$cDate+" )");
		$('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$wIcon+'@2x.png"/>');
	});
});