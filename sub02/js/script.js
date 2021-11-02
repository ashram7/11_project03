$(function(){
	var current=0;
	var thumbListSize=4;
	var thumbnail=$('.thumbNails');
	var prev=thumbnail.find('.left');
	var next=thumbnail.find('.right');
	var container=$('.container ul');
	var containWidth=thumbnail.find('.containerIn').width();
	console.log(containWidth);
	var thumb=container.find('>.thumb');
	var maxSize=thumb.size();
	console.log(maxSize);
	var image= $('.images > p');
	var info= $('.infoSet > p');

	next.on('click',function(e){
		e.preventDefault();
		if(current<maxSize/thumbListSize-1){current++;};
		console.log(current);
		listMove();
	});
	prev.on('click',function(e){
		e.preventDefault();
		if(current>0){current--;};
		console.log(current);
		listMove();
	});
	listMove();
	function listMove(){
		var tl=containWidth*current*-1
		container.stop().animate({left:tl},{duration:400,easing:'easeOutCubic'});
	};
	thumb.on('click',function(){
	   image.fadeOut();
	   info.css('display','none');
	   var i=$(this).index();
	   image.eq(i).fadeIn();
	   info.eq(i).css('display','block');
	});
	
	$('.menuTab li').click(function(e){
		e.preventDefault();
		$('.menuTab li').removeClass('active');
		$(this).addClass('active');
	});
});