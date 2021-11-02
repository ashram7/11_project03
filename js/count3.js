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
	ddaycount3()
		
	function ddaycount3(){		
		/* three */
		doomsdayThr=new Date('Augu 1,2022 00:00:00')
		today=new Date()
		howfarThr=doomsdayThr-today
		if(howfarThr>0){
			setTimeout('ddaycount3()',1000)
		}else{
			clearTimeout('ddaycount3()')
			document.getElementsById('countTit').innerHTML="모집이 마감되었습니다."
			return false
		}
		daysThr=Math.floor(howfarThr/(1000*60*60*24))
		hoursThr=Math.floor(howfarThr/(1000*60*60))
		minsThr=Math.floor(howfarThr/(1000*60))
		minsThr=Math.floor(howfarThr/(1000*60))
		secsThr=Math.floor(howfarThr/(1000))
		
		dThr = daysThr
		hThr = hoursThr-daysThr*24
		mThr = minsThr-hoursThr*60
		sThr = secsThr-minsThr*60
		$('.day100Thr').attr("src",imgArr[hund(dThr)])
		$('.day10Thr').attr("src",imgArr[tenth(dThr)])
		$('.day1Thr').attr("src",imgArr[unit(dThr)])
		$('.hour10Thr').attr("src",imgArr[tenth(hThr)])
		$('.hour1Thr').attr("src",imgArr[unit(hThr)])
		$('.min10Thr').attr("src",imgArr[tenth(mThr)])
		$('.min1Thr').attr("src",imgArr[unit(mThr)])
		$('.sec10Thr').attr("src",imgArr[tenth(sThr)])
		$('.sec1Thr').attr("src",imgArr[unit(sThr)])
		
		if(dThr<10){dThr='00'+dThr}else if(dThr<100){dThr='0'+dThr}
		if(hThr<10){hThr='0'+hThr}
		if(mThr<10){mThr='0'+mThr}
		if(sThr<10){sThr='0'+sThr}
	}

