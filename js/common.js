<!-- 메뉴 -->
$(function(){
	/* 로그인임펙트 */
	$('.impectMess').DB_springMove({
		key:'e24102',          //라이센스키
		dir:'y',               //방향축('x','y')
		mirror:1,              //반대방향이동(1,-1)
		radius:0.7,             //반경
		motionSpeed:0.3        //속도(0~1)
	});
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
	

});