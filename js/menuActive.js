$(function(){
    var menu = $('#gnb > li');
	var pageURL = location.href;
	var activeMenu;
	menu.on({
		mouseenter:function(event){
			var tg = $(this);
			menu.removeClass('on');
			tg.addClass('on');
			tg.find('.width100').slideDown();
		},
		mouseleave:function(){
			var tg = $(this);
			tg.removeClass('on');
			tg.find('.width100').css('display','none');
			onActive();
		}
	});
	menu.each(function(i){
		var tg = $(this);
		var menuURL = tg.children('a').attr('href');
		var active = pageURL.indexOf(menuURL);
		if(active>-1){activeMenu = tg;};
		// activeMenu = 원뎁스(li > a href="2depth_menu.html")
	});/* menu.each 끝 */
	onActive();
	function onActive(){
		if(activeMenu){activeMenu.addClass('on');};
	};
	
	$('.sendImpect').DB_springMove({
		key:'e24102',          //라이센스키
		dir:'y',               //방향축('x','y')
		mirror:-1,              //반대방향이동(1,-1)
		radius:3,             //반경
		motionSpeed:0.1        //속도(0~1)
	});


/* 	var topmenu = $('#gnb > li');
	var topwrap = $('#gnbSection');
	var menuHeight = topmenu.children('a').height();
	var pageURL = location.href;
	var activeMenu;
	topmenu.on({
		mouseover:function(){
			var tg = $(this);
			topmenu.removeClass('on');
			tg.addClass('on');
		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');
			onActive();
		}
	});
	topmenu.each(function(i){
		var tg = $(this);
		var sub = tg.find('>.width100 > ul > li');
		var menuURL = tg.children('a').attr('href');
		var active = pageURL.indexOf(menuURL);
		if(active>-1){activeMenu = tg;};
		sub.on({
			mouseover:function(event){
				var tg = $(this);
				sub.removeClass('on');
				tg.addClass('on');
			},
			mouseout:function(){
				var tg = $(this);
				tg.removeClass('on');
				onActive();
			}
		});/* sub.on 끝 */
	//});/* topmenu.each 끝 */
/* 	topmenu.hover(
		function(){
			var tg=$(this);
			var tgNum=tg.index();
			$('.width100').eq(tgNum).stop(true,true).slideDown(500);
		},
		function(){
			$('.width100').stop(true,true).slideUp(300);
		}
	);
	onActive();
	function onActive(){
		if(activeMenu){activeMenu.trigger('mouseover');};
	};
 */
});