$(function(){
	var contents=$('#qnaContent');
	$.ajax({
		url:'data.xml',
		dataType:'xml',
		async:false,
		success:function(xml){
			var datas=$(xml);
			datas.find('data').each(function(){
				var data=$(this);
				var text_cat=data.find('cat').text();
				var text_outTitle=data.find('outTitle').text();
				var text_plus=data.find('plus').text();
				var text_inTitle=data.find('inTitle').text();
				var text_inAnswer=data.find('inAnswer').text();
				
				var outWrap=$('<div class="outer cf"></div>');
				var inWrap=$('<div class="innerWrap"></div>');
				
				var cat=$('<div class="cat"></div>').html(text_cat);
				
				var outTitle=$('<div class="title label"></div>').html(text_outTitle);
				var plus=$('<div class="plus label"></div>').html(text_plus);
				
				var inTitle=$('<div class="answerTit"></div>').html(text_inTitle);
				var inAnswer=$('<div class="answerCon"></div>').html(text_inAnswer);
				
				outWrap.append(cat);
				outWrap.append(outTitle);
				outWrap.append(plus);
				outWrap.append(inWrap);
				inWrap.append(inTitle);
				inWrap.append(inAnswer);
				contents.append(outWrap);
			});
		}
	});

	
	var class_closed='closed';
	$('#qnaContent').each(function(){
		var dl=$(this);
		var allDt=dl.find('.label');
		var allDd=dl.find('.innerWrap');
		
		closeAll();
		
		function closeAll(){
			allDt.addClass(class_closed);
			allDd.addClass(class_closed);
		};
		function open(dt,dd){
			dt.removeClass(class_closed);
			dd.removeClass(class_closed);			
		};
		allDt.css('cursor','pointer');
		allDt.click(function(){
			var dt=$(this);
			var dd=dt.parent('div').find('.innerWrap');
			closeAll();
			open(dt,dd);
			dt.css('cursor','default');
		});
	});
	
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
