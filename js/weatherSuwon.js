$(function(){
	let weatherIcon = {
		'01' : 'fas fa-sun fa-9x',
		'02' : 'fas fa-cloud-sun fa-9x', 
		'03' : 'fas fa-cloud fa-9x',
		'04' : 'fas fa-cloud-meatball fa-9x',
		'09' : 'fas fa-cloud-sun-rain fa-9x',
		'10' : 'fas fa-cloud-showers-heavy fa-9x',
		'11' : 'fas fa-poo-storm fa-9x', 
		'13' : 'far fa-snowflake fa-9x', 
		'50' : 'fas fa-smog fa-9x' 
	};	
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835553&appid=e16562d519a8afd00cb9f02a17662dfb&units=metric',function(data){
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
		var $wIcon=(data.weather[0].icon).substr(0,2);
		$('.Suctemp').text(Math.floor($cTemp)+"°");
		$('.Suclowtemp').text("최저 "+Math.floor($minTemp)+"°");
		$('.Suchightemp').text("최고 "+Math.floor($maxTemp)+"°");
		$('.Sucfeel').text("체감 "+Math.floor($cfeel)+"°");
		$('.Suchumi').text("습도 "+Math.floor($chumi)+"°");
		$('.SuWsubTit').text("( "+$cDate+" )");
		$('.Sucicon>img').remove();
		$('.Sucicon').append('<i class="' + weatherIcon[$wIcon] +'"></i>');
	});
});