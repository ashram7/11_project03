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
	function ddaycount(){
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
		/* one */
		doomsdayOne=new Date('Janu 1,2022 00:00:00')
		today=new Date()
		howfarOne=doomsdayOne-today
		if(howfarOne>0){
			setTimeout('ddaycount()',1000)
		}else{
			clearTimeout('ddaycount()')
			document.getElementByClassName('countTit').innerHTML="카운트가 종료되었습니다."
			return false
		}
		daysOne=Math.floor(howfarOne/(1000*60*60*24))
		hoursOne=Math.floor(howfarOne/(1000*60*60))
		minsOne=Math.floor(howfarOne/(1000*60))
		minsOne=Math.floor(howfarOne/(1000*60))
		secsOne=Math.floor(howfarOne/(1000))
		
		dOne = daysOne
		hOne = hoursOne-daysOne*24
		mOne = minsOne-hoursOne*60
		sOne = secsOne-minsOne*60
		$('.day100One').attr("src",imgArr[hund(dOne)])
		$('.day10One').attr("src",imgArr[tenth(dOne)])
		$('.day1One').attr("src",imgArr[unit(dOne)])
		$('.hour10One').attr("src",imgArr[tenth(hOne)])
		$('.hour1One').attr("src",imgArr[unit(hOne)])
		$('.min10One').attr("src",imgArr[tenth(mOne)])
		$('.min1One').attr("src",imgArr[unit(mOne)])
		$('.sec10One').attr("src",imgArr[tenth(sOne)])
		$('.sec1One').attr("src",imgArr[unit(sOne)])
		
		if(dOne<10){dOne='00'+dOne}else if(dOne<100){dOne='0'+dOne}
		if(hOne<10){hOne='0'+hOne}
		if(mOne<10){mOne='0'+mOne}
		if(sOne<10){sOne='0'+sOne}

		/* two */
		doomsdayTwo=new Date('May 1,2022 00:00:00')
		today=new Date()
		howfarTwo=doomsdayTwo-today
		if(howfarTwo>0){
			setTimeout('ddaycount()',1000)
		}else{
			clearTimeout('ddaycount()')
			document.getElementsByClassName('countTit').innerHTML="카운트가 종료되었습니다."
			return false
		}
		daysTwo=Math.floor(howfarTwo/(1000*60*60*24))
		hoursTwo=Math.floor(howfarTwo/(1000*60*60))
		minsTwo=Math.floor(howfarTwo/(1000*60))
		minsTwo=Math.floor(howfarTwo/(1000*60))
		secsTwo=Math.floor(howfarTwo/(1000))
		
		dTwo = daysTwo
		hTwo = hoursTwo-daysTwo*24
		mTwo = minsTwo-hoursTwo*60
		sTwo = secsTwo-minsTwo*60
		$('.day100Two').attr("src",imgArr[hund(dTwo)])
		$('.day10Two').attr("src",imgArr[tenth(dTwo)])
		$('.day1Two').attr("src",imgArr[unit(dTwo)])
		$('.hour10Two').attr("src",imgArr[tenth(hTwo)])
		$('.hour1Two').attr("src",imgArr[unit(hTwo)])
		$('.min10Two').attr("src",imgArr[tenth(mTwo)])
		$('.min1Two').attr("src",imgArr[unit(mTwo)])
		$('.sec10Two').attr("src",imgArr[tenth(sTwo)])
		$('.sec1Two').attr("src",imgArr[unit(sTwo)])
		
		if(dTwo<10){dTwo='00'+dTwo}else if(dTwo<100){dTwo='0'+dTwo}
		if(hTwo<10){hTwo='0'+hTwo}
		if(mTwo<10){mTwo='0'+mTwo}
		if(sTwo<10){sTwo='0'+sTwo}

		/* three */
		doomsdayThr=new Date('Augu 1,2022 00:00:00')
		today=new Date()
		howfarThr=doomsdayThr-today
		if(howfarThr>0){
			setTimeout('ddaycount()',1000)
		}else{
			clearTimeout('ddaycount()')
			document.getElementsByClassName('countTit').innerHTML="카운트가 종료되었습니다."
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

		/* four */
		doomsdayFour=new Date('Dece 1,2022 00:00:00')
		today=new Date()
		howfarFour=doomsdayFour-today
		/*document.write(howfar)*/
		if(howfarFour>0){
			setTimeout('ddaycount()',1000)
		}else{
			clearTimeout('ddaycount()')
			document.getElementsByClassName('countTit').innerHTML="카운트가 종료되었습니다."
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
		
		if(dFour<10){dFour='00'+dFour}else if(dFour<100){dFour='0'+dFour}
		if(hFour<10){hFour='0'+hFour}
		if(mFour<10){mFour='0'+mFour}
		if(sFour<10){sFour='0'+sFour}

		
		
	}

