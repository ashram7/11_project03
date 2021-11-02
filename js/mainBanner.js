$(function(){
	
	var visual = $('.slideImg');
	var button = $('.controlThumb');
	var maincurrent = 0;
	var setIntervalId;
	
	var randomNumber=Math.round(Math.random()*($('.controlThumb').size()-1));

	
	button.bind({
		click:function(){
			tg = $(this);
			randomNumber= tg.index();
			if(maincurrent===tg.index()){return;}
			button.find('img').css('opacity','0.5');
			button.find('a').stop().animate({'width':'165px','height':'95px'})
			button.find('img').stop().animate({'width':'165px','height':'95px','opacity':'0.5'})
			tg.find('a').stop().animate({'width':'240px','height':'140px'})
			tg.find('img').stop().animate({'width':'240px','height':'140px','opacity':'1'})
			
			mainmove(randomNumber);
			return false;
		}
	});
	
	function maintimer(){
		setIntervalId = setInterval(function(){
			var n=maincurrent+1;
			if(n===visual.size()){n=0;}


			button.eq(n).trigger('click');
		},3000);
	};
	maintimer();
	
	function mainmove(randomNumber){
		var currentEl = visual.eq(maincurrent);
		var nextEl = visual.eq(randomNumber);
		var currentBl = button.eq(maincurrent);
		var prevBl = button.eq(maincurrent-1);
		var nextBl = button.eq(randomNumber);
	
		currentEl.css({left:'0%'}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:'0'}); 	
		prevBl.css({top:'325px'}).stop().animate({top:'20px','z-index':10});
		nextBl.css({top:'20px'}).stop().animate({top:'150px',left:'-35px','z-index':1});
		currentBl.css({top:'150px'}).stop().animate({top:'325px',left:0,'z-index':1}); 	
		maincurrent = randomNumber;
	};


	$('.slidearrowSet .left').click(function(){
		randomNumber--;
		if(randomNumber<0 && maincurrent>$('.controlThumb').size()){
			randomNumber=$('.controlThumb').size()-1;
			maincurrent=$('.controlThumb').size()-1;
		};
		$('.controlThumb').eq(randomNumber).trigger('click');
	});
	/* 변수치환이 안되고있음. 왜냐하면 밑에있는게 위로 안올라가고있자나. 그걸 해결해 알겠지?미래의 나.. */
	$('.slidearrowSet .right').click(function(){
		randomNumber++;
		if(randomNumber==$('.controlThumb').size()){randomNumber=0;};
		$('.controlThumb').eq(randomNumber).trigger('click');
	}); 
	$('#mainBanner').on({
		mouseover:function(){
			clearInterval(setIntervalId);
		},
		mouseout:function(){
			maintimer();
		}
	});
	
/* var panelWidth=$('.slideImg').width();
	
	$('.controlBtn').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		//console.log(index);
		moveSlider(index);
		return false;
	});

	function moveSlider(index){
		var willMoveLeft=-(index%3*panelWidth);
		$('.sliderPanel').animate({left: willMoveLeft},'100');
		$('.controlBtn[data-index='+index+']').addClass('active');
		$('.controlBtn[data-index!='+index+']').removeClass('active');
		randomNumber=index;
	};
	
	
	var randomNumber=Math.round(Math.random()*($('.controlBtn').size()-1));
	moveSlider(randomNumber);
	var setIntervalId;
	
	function timer(){
		setIntervalId=setInterval(function(){
			randomNumber++;
			if(randomNumber==$('.controlBtn').size()){randomNumber=0;};
			moveSlider(randomNumber);
		},5000);
	};
	timer();
	$('#mainBanner').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	$('.slidearrowSet>.left').click(function(){
		randomNumber--;
		if(randomNumber<0){randomNumber=$('.controlBtn').size()-1;};
		$('.controlBtn').eq(randomNumber).trigger('click');
	});
	$('.slidearrowSet>').click(function(){
		randomNumber++;
		if(randomNumber==$('.controlBtn').size()){randomNumber=0;};
		$('.controlBtn').eq(randomNumber).trigger('click');
	});
 */

 
/*  	$('.controlBtn').each(function(index){
		$(this).attr('data-index',index);
		index=randomNumber;
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
		return false;
	});
	var slideImg=$('.slideImg')
	function moveSlider(index){
		timer();
		slideImg.animate({left: '-100%'},200);
		slideImg.eq(index).animate({left: 0},200);
		$('.controlBtn[data-index='+index+']').addClass('active');
		$('.controlBtn[data-index!='+index+']').removeClass('active');
		index=randomNumber;
	};

	var randomNumber=Math.round(Math.random()*($('.controlBtn').size()-1));
	moveSlider(randomNumber);
	var setIntervalId;
	
	function timer(){
		var banner = $('.slideImg');
		setIntervalId=setInterval(function(){
			var prev = banner.eq(index);
			move(prev, '0%','-100%');
			index++;
			if(index==banner.size()){index=0;};
			var next = banner.eq(index);
			move(next, '100%','0%');
		},3000);
		function move(tg,start, end){
			tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
		};
	};
	timer();
	$('.mainBanner').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	$('.slidearrowSet>.left').click(function(){
		randomNumber--;
		if(randomNumber<0){randomNumber=$('.controlBtn').size()-1;};
		$('.controlBtn').eq(randomNumber).trigger('click');
	});
	$('.slidearrowSet>.right').click(function(){
		randomNumber++;
		if(randomNumber==$('.controlBtn').size()){randomNumber=0;};
		$('.controlBtn').eq(randomNumber).trigger('click');
	}); 
 */
});