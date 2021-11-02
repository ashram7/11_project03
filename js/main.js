/* 메인페이지 */
 /* window.open("popup.html", "", "resizable=no, toolbar=no, width=540, height=600") */


$(function(){
	/* 로그인임펙트 */
	$('.impectMess').DB_springMove({
		key:'e24102',          //라이센스키
		dir:'y',               //방향축('x','y')
		mirror:1,              //반대방향이동(1,-1)
		radius:0.7,             //반경
		motionSpeed:0.3        //속도(0~1)
	})
	
	/* 헤더순환배너 */
	var mnBanner=$('.brandBanner');
	var mncurrent=0;
	var mntimer;
	
	function muBanMover(tg,start,end){
		tg.css('top',start).stop().animate({top:end},500);
	};
	mnMoving();
	function mnMoving(){
		mntimer=setInterval(function(){
			var prev=mnBanner.eq(mncurrent);
			mncurrent++;
			if(mncurrent>=mnBanner.size()){mncurrent=0};
			muBanMover(prev,'0%','-100%');
			var next=mnBanner.eq(mncurrent);
			muBanMover(next,'100%','0%');
		},2000);
	};
	$('.brandBanner').hover(
		function(){
			clearInterval(mntimer);
		},
		function(){
			mnMoving();
		}
	);
	
	/* 순환공지 */
	var notice=$('.cycleSec>p');
	var nextNo=$('.noArrowSet .next');
	var prevNo=$('.noArrowSet .prev');
	var Nocurrent=0;
	var timer;
	function moveNotice(Nocurrent){
		var thEq=notice.eq(Nocurrent+1);
		thEq.animate({top: '-100%'},500);
		notice.eq(Nocurrent).animate({top: 0},500);
		mover(Nocurrent);
	};
	function moverr(tg,start,end){
		tg.css('top',start).stop().animate({top:end},500);
	};
	function mover(Nocurrent){
		timer=setInterval(function(){
			var prev=notice.eq(Nocurrent);
			Nocurrent++;
			if(Nocurrent>=notice.size()-1){Nocurrent=0;};
			moverr(prev,'0','-100%');
			var next=notice.eq(Nocurrent);
			moverr(next,'100%','0');
			/* NoCurrent=$(this); */
		},3000);
	};
	var NoCurrent =0;
	nextNo.click(function(e){
		e.preventDefault();
		Nocurrent++;
		if(Nocurrent>=notice.size()-1){Nocurrent=0};
		moveNotice(Nocurrent);
	});
	prevNo.click(function(e){
		e.preventDefault();
		Nocurrent--;
		if(Nocurrent<0){Nocurrent=notice.size()-1};
		moveNotice(Nocurrent);
	});
	mover(Nocurrent);
	$('.cycleSec').hover(
		function(){
			clearInterval(timer);
		},
		function(){
			mover(Nocurrent);
		}
	);
	/* 트로피순환 */
	 var trophy  = setInterval(trophyFun, 2000);
	  var inter = true;
	  var idx = 2;
	  
	   function trophyFun(){
		 
		  $(".trophyWrap ul").animate({
			"left":-225*idx+"px"
		  },300);
		 /* $(".g_item ul li").eq(idx-1).addClass("on").siblings().removeClass("on"); */
		 idx++;
		 if(idx> $(".trophyWrap ul li").length-6){
		   $(".trophyWrap ul").animate({
			 "left":0
		   },0);
		   idx=0;
		   
		 }
	   }
	   
	   
	   $(".trophyWrap").hover(function(){
		 if(inter==true){
		   clearInterval(trophy);
		   inter=false;
		 }
	   },function(){
		 if(inter==false){
		   trophy  = setInterval(trophyFun, 2000);
		   inter=true;
		 }
		 
	   });
	   
	   
	   
	  /*  $(".g_item ul li").on('click',function(){
		 $(this).addClass("on").siblings().removeClass("on");
		 idx = $(this).index()+1;
		 $(".gallery ul").animate({
			"left":-225*idx+"px"
		  },1000);
		 
	   }); */
	   
	
	
	/* sns버튼 */
	var btn=$('.snsBtn');
	
	btn.each(function(){
	var anchor = $(this);
		
		anchor.bind('mouseenter focus',function(){
			anchor.addClass('sns');
		});
		anchor.bind('mouseleave blur',function(){
			anchor.removeClass('sns');
		});
	});
	
	var QaSec = $('#quickIcon li');
	var Qvis = $('#quickIcon .more img');
	Qvis.hide();
	QaSec.each(function(){
	var anchor = $(this);
	var i =anchor.index();
		anchor.bind('mouseenter focus',function(){
			Qvis.eq(i).css('display','block');
		});
		anchor.bind('mouseleave blur',function(){
			Qvis.eq(i).css('display','none');
		});
	});
	
	/* 마감임박과정 */
	var imgSec=$('.flowImgWrap');
	var more=$('.flowImgWrap img.more');
	
	imgSec.each(function(){
		var anchor = $(this);
		var more = anchor.find('.more');
		anchor.bind('mouseenter focus',function(){
			more.stop(true,true).fadeIn();
		});
		imgSec.bind('mouseleave blur',function(){
			more.stop(true,true).fadeOut();
		});
	});
	$('.cellWrap>div .flowCellInfo').each(function(){
		var anchor = $(this);
		anchor.hover(
			function(){
				anchor.stop(true,true).animate({'top':'113px'},300);
			},
			function(){
				anchor.stop(false,false).animate({'top':'200px'},300);						
			}
		);
	});
	
		
	$('.cellWrap>div').click(function(){
		if(bb){
			$(this).addClass('quick_open').stop(true,true).animate({'margin-right':'-70px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-right':'-70px'},500,function(){bb=false});
		}else{
			$(this).removeClass('quick_open').stop(false,false).animate({'margin-right':'0px'},500);
			$('.quickmenu').stop(false,false).animate({'margin-right':'0px'},500,function(){bb=true});			
		}
	});
	
	
	var imgSec=$('.pfImg');
	var more=$('.pfImg img.hide');
	
	imgSec.each(function(){
		var anchor = $(this);
		var hide=anchor.find('.hide');
		anchor.bind('mouseenter focus',function(){
			hide.stop(true,true).fadeIn();
		});
		imgSec.bind('mouseleave blur',function(){
			hide.stop(true,true).fadeOut();
		});
	});
	var imgSec=$('.content a');
	var more=$('.content a img.hide');
	
	imgSec.each(function(){
		var anchor = $(this);
		var hide=anchor.find('.hide');
		anchor.bind('mouseenter focus',function(){
			hide.stop(true,true).fadeIn();
		});
		imgSec.bind('mouseleave blur',function(){
			hide.stop(true,true).fadeOut();
		});
	});
	/* 퀵메뉴아이콘 */
	$('.quickIcon>li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/quickIcon'+num+'_on.png'});
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/quickIcon'+num+'_off.png'});
		}
	);

	/* 퀵메뉴슬라이드 */
	$('.quickMenu .nav>li').hover(
		function(){
			$(this).find('.sub').stop(true,true).slideDown();
		},
		function(){
			$(this).find('.sub').stop(false,false).slideUp();
		}
	);
	
	/* 퀵메뉴접었다펴기 */
	bb=true;
	$('.quickToggle').click(function(){
		if(bb){
			$(this).removeClass('quickOpen').stop(true,true).animate({'margin-left':'0px'},500);
			$('.quickMenu').stop(true,true).animate({'margin-left':'0px'},500,function(){bb=false});
		}else{
			$(this).addClass('quickOpen').stop(false,false).animate({'margin-left':'-150px'},500);
			$('.quickMenu').stop(false,false).animate({'margin-left':'-150px'},500,function(){bb=true});			
		}
	});
	
	
	/* 이미지애니메이션 */
	var box=$('.tCell');
	
	box.each(function(){
		var tgBox=$(this);
		var boxAn=tgBox.find('a');
		tgBox.bind('mouseenter focus',function(){
			boxAn.stop().animate({'margin-top':'-415px'},400);
		});
		tgBox.bind('mouseleave blur',function(){
			boxAn.stop().animate({'margin-top':'0px'},400);
		});
	});
	
	/* 가이드텍스트 */
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
	
	/* 미니배너 이미지슬라이드 */
	var interval=4000;
	$('#jobInterview').each(function(){
		var timer;
		var container = $(this);
		
		function switchImg(){
			var anchors=container.find('.studentWrap');
			var first=anchors.eq(0);
			var second=anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		function startTimer(){
		timer=setInterval(switchImg,interval);			
		};
		function stopTimer(){
			clearInterval(timer);
		};
		startTimer();
		container.find('.studentWrap').hover(
			function(){
				stopTimer();
			},
			function(){
				startTimer();
			}
		);
	});
	
	/* balloonTitle */
	
	/* var balloon=$('<div class="balloon"></div>').appendTo('body'); */
	var balloon = $('.balloon');
	
	function updateBalloonPosition(x,y){
		balloon.css({left: x+35, top: y});
	};
	
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},200);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},200,function(){balloon.hide();});
	};	
	$('.showBalloon').each(function(){
		var element=$(this);
		var text= element.attr('title');
		element.attr('title','');
		element.hover(
			function(e){
				$('.balloonBox').text(text);
				updateBalloonPosition(e.pageX,e.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		element.mousemove(function(e){
			updateBalloonPosition(e.pageX,e.pageY);
		});
	});
	
	/* 그린이벤트메뉴 */

	var box1 = $('.geBox1');
	var box2 = $('.geBox2');
	var box3 = $('.geBox3');
	var box4 = $('.geBox4');
	
	box1.hover(
		function(){
			box2.stop().animate({'width':'0', 'left':'1426px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'0', 'left':'1426px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'0', 'left':'1426px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box1.find('>.promo_box1_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 300, queue:false, easeing: 'easeOutCubic'});
			box1.find('.geMore').css('display', 'none');
			box1.find('.geMoreon').removeClass('off');
			box1.find('.geTit>span').stop(true,true).fadeIn(500);
			box1.find('.geTit').animate({'margin-left':'-75px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			
		},
		function(){
			box2.stop().animate({'width':'1426px', 'left':'355px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'1426px', 'left':'711px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'1426px', 'left':'1065px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box1.find('>.promo_box1_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box1.find('.geMore').css('display', 'block');
			box1.find('.geMoreon').addClass('off');
			box1.find('.geTit>span').stop(true,true).fadeOut(500);
			box1.find('.geTit').animate({'margin-left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});

		}
	);
	box2.hover(
		function(){
			box1.stop().animate({'width':'0', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'1440px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'0', 'right':'-20px','left':'1426'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'0', 'right':'-20px','left':'1426'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box2.find('.geMore').css('display', 'none');
			box2.find('.geMoreon').removeClass('off');
			box2.find('.geTit>span').stop(true,true).fadeIn(500);
			box2.find('.geTit').animate({'margin-left':'-70px'},{duration:600,queue:false,easeing:'easeOutCubic'});
		},
		function(){
			box1.stop().animate({'width':'1426px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'1440px', 'left':'355px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'1426px', 'right':'0', 'left':'711px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'1426px', 'right':'0', 'left':'1065px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box2.find('.geMore').css('display', 'block');
			box2.find('.geMoreon').addClass('off');
			box2.find('.geTit>span').stop(true,true).fadeOut(500);
			box2.find('.geTit').animate({'margin-left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
		}
	);
	box3.hover(
		function(){
			box1.stop().animate({'width':'0', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'0','left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'1440px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'0', 'right':'-20px','left':'1426'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box3.find('.geMore').css('display', 'none');
			box3.find('.geMoreon').removeClass('off');
			box3.find('.geTit>span').stop(true,true).fadeIn(500);
			box3.find('.geTit').animate({'margin-left':'-70px'},{duration:600,queue:false,easeing:'easeOutCubic'});
		},
		function(){
			box1.stop().animate({'width':'1426px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'1426px','left':'355px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'1426px', 'right':'0', 'left':'711px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'1440px', 'right':'0', 'left':'1065px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box3.find('.geMore').css('display', 'block');
			box3.find('.geMoreon').addClass('off');
			box3.find('.geTit>span').stop(true,true).fadeOut(500);
			box3.find('.geTit').animate({'margin-left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
		}
	);
	box4.hover(
		function(){
			box1.stop().animate({'width':'0', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'0','left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'0','left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'1440px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'90px','font-size':'26px', 'line-height':'90px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box4.find('.geMore').css('display', 'none');
			box4.find('.geMoreon').removeClass('off');
			box4.find('.geTit>span').stop(true,true).fadeIn(500);
			box4.find('.geTit').animate({'margin-left':'-70px'},{duration:600,queue:false,easeing:'easeOutCubic'});
		},
		function(){
			box1.stop().animate({'width':'1426px', 'left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box2.stop().animate({'width':'1426px','left':'355px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box3.stop().animate({'width':'1426px', 'right':'0', 'left':'711px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.stop().animate({'width':'1440px', 'right':'0', 'left':'1065px'},{duration:600,queue:false,easeing:'easeOutCubic'});
			box4.find('>.promo_box2_theme>h3.p_title').stop().animate({'height':'38px','font-size':'18px', 'line-height':'38px'},{duration: 600, queue:false, easeing: 'easeOutCubic'});
			box4.find('.geMore').css('display', 'block');
			box4.find('.geMoreon').addClass('off');
			box4.find('.geTit>span').stop(true,true).fadeOut(500);
			box4.find('.geTit').animate({'margin-left':'0'},{duration:600,queue:false,easeing:'easeOutCubic'});
		}
	);
	
	/* 탭콘텐츠 */
	$('.tabSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs=topDiv.find('div.content');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor= $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			if(currentAnchor.get(0)===lastAnchor.get(0)){
				return;
			};
			/* lastPanel.slideUp(200,function(){}); */
			lastPanel.stop().slideUp(200,function(){
				lastAnchor.removeClass('on');
				currentAnchor.addClass('on');
				currentPanel.stop().slideDown(200);
				lastAnchor = currentAnchor; //다음실행을 준비
				lastPanel = currentPanel; //다음실행을 준비

			});
		});
	});
	
/* 	var icon=$('#quickIcon li a');
	
	icon.each(function(){
		var tgBox=$(this);
		var boxAn=tgBox.find('img');
		tgBox.bind('mouseenter focus',function(){
			boxAn.stop().animate({'margin-top':'-10px'},400);
			boxAn.stop().animate({'margin-top':'0px'},400);
		});
		tgBox.bind('mouseleave blur',function(){
			boxAn.stop().animate({'margin-top':'0px'},400);
		});
	});
 */
	var icon=$('#quickIcon li a');
	var timer;
	function move(mv){
		mv.animate({'margin-top':'-10px'},500);
		mv.animate({'margin-top':'0px'},500);
	};
	
	icon.each(function(){
		var tg=$(this);
		var mvImg=tg.find('img');
		tg.hover(
			function(){
				move(mvImg);
				timer=setInterval(function(){
					move(mvImg);
				},1000);
			},
			function(){
				mvImg.stop(false,true).animate({top:'0px'},300);
				clearInterval(timer);
			}
		);
	});
	
/* 	$(function(){
	var img_move = $('#ct_menu>ul>li');
	var timer;
	function move(tg){
		tg.animate({top:'-10px'},500)
		tg.animate({top:'0px'},500)
	};
	
	img_move.each(function(){
		var each_link = $(this);
		var each_img = each_link.find('img');
		each_link.hover(
			function(){
				move(each_img);
				timer=setInterval(function(){
					move(each_img);
				},1000);
			},
			function(){
				each_img.stop(true,false).animate({top:'0px'},200);
				clearInterval(timer);
			}
		);
	});
});

	/* popup */
	if($.cookie('pop')!='no'){$('#popWrap').show();};
	$('#popWrap').css('cursor','move').draggable();
	$('#popWrap .close').on('click',function(){
		$('#popWrap').fadeOut();
		return false;
	});
	$('#popWrap .dayClose').on('click',function(e){
		$.cookie('pop','no',{expires:1});
		$('#popWrap').fadeOut();
		return false;
	});

});








