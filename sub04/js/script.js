$(function(){

	var guideClass='gray';
	$('.guideText').each(function(){
		var guideText=this.defaultValue;
		var element=$(this);
		element.focus(function(){
			if(element.val()===guideText){
				//아무것도 입력하지 않았을 때
				
				element.val('');
				element.removeClass(guideClass);
			};
		});
		element.blur(function(){
			if(element.val()===''){
				//포커스된 텍스트창에 아무것도 입력되지 않고 벗어났을 때
				
				element.val(guideText);
				element.addClass(guideClass);
			};
		});
		if(element.val()===guideText){
			//문서를 처음 열었을 때
			
			element.addClass(guideClass);
		};
	});

});








