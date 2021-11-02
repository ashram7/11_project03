$(function(){
	var contents=$('#qnaContent');
	$.ajax({
		url:'datatest.xml',
		dataType:'xml',
		success:function(xml){
			var datas=$(xml);
			datas.find('data').each(function(){
				var data=$(this);
				var text_cat=data.find('cat').text();
				var text_outTitle=data.find('outTitle').text();
				var text_plus=data.find('plus').text();
				var text_inTitle=data.find('inTitle').text();
				var text_inAnswer=data.find('inAnswer').text();
				
				var outWrap=$('<div class="outer"></div>');
				var inWrap=$('<div class="innerWrap"></div>');
				
				var cat=$('<div class="cat"></div>').append(text_cat);
				
				var outTitle=$('<div class="title"><div class="label"></div></div>').append(text_outTitle);
				var plus=$('<div class="plus"><div class="label"><img src="../images/plus.png" alt="moreView"/></div></div>').append(text_plus);
				
				var inTitle=$('<div class="answerTit"></div>').append(text_inTitle);
				var inAnswer=$('<div class="answerCon"></div>').append(text_inAnswer);
				
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
	
});
