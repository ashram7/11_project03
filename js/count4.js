	/*숫자 자릿수 나누기*/
	function unit(x){/*1의자리 숫자*/
		var m = x%10
		return m
	}
	function tenth(y){/*10의자리 숫자*/
		var m = y/10%10
		m=Math.floor(m)
		return m
	}
	function hund(v){/*100의자리 숫자*/
		var m = v/100
		m=Math.floor(m)
		return m
	}

	/*카운트 함수 정의*/ 

		imgArr=[
			'images/images/num0.png',
			'images/images/num1.png',
			'images/images/num2.png',
			'images/images/num3.png',
			'images/images/num4.png',
			'images/images/num5.png',
			'images/images/num6.png',
			'images/images/num7.png',
			'images/images/num8.png',
			'images/images/num9.png'
		]
	ddaycount4()
		
	function ddaycount4(){		
		/* three */
		doomsdayFour=new Date('Augu 1,2022 00:00:00')
		today=new Date()
		howfarFour=doomsdayFour-today
		if(howfarFour>0){
			setTimeout('ddaycount4()',1000)
		}else{
			clearTimeout('ddaycount4()')
			document.getElementsById('countTit').innerHTML="모집이 마감되었습니다."
			return false
		}
		daysFour=Math.floor(howfarFour/(1000*60*60*24))
		hoursFour=Math.floor(howfarFour/(1000*60*60))
		minsFour=Math.floor(howfarFour/(1000*60))
		minsFour=Math.floor(howfarFour/(1000*60))
		secsFour=Math.floor(howfarFour/(1000))
		
		dFour = daysFour
		hFour = hoursFour-daysFour*24
		mFour = minsFour-hoursFour*60
		sFour = secsFour-minsFour*60
		$('.day100Four').attr("src",imgArr[hund(dFour)])
		$('.day10Four').attr("src",imgArr[tenth(dFour)])
		$('.day1Four').attr("src",imgArr[unit(dFour)])
		$('.hour10Four').attr("src",imgArr[tenth(hFour)])
		$('.hour1Four').attr("src",imgArr[unit(hFour)])
		$('.min10Four').attr("src",imgArr[tenth(mFour)])
		$('.min1Four').attr("src",imgArr[unit(mFour)])
		$('.sec10Four').attr("src",imgArr[tenth(sFour)])
		$('.sec1Four').attr("src",imgArr[unit(sFour)])
		
		if(dFour<10){dThr='00'+dFour}else if(dFour<100){dFour='0'+dFour}
		if(hFour<10){hThr='0'+hFour}
		if(mFour<10){mThr='0'+mFour}
		if(sFour<10){sThr='0'+sFour}
	}

