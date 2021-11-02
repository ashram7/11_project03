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
		
	ddaycount2()
	
function ddaycount2(){		
		/* two */
		doomsdayTwo=new Date('May 1,2022 00:00:00')
		today=new Date()
		howfarTwo=doomsdayTwo-today
		if(howfarTwo>0){
			setTimeout('ddaycount2()',1000)
		}else{
			clearTimeout('ddaycount2()')
			document.getElementById('countTit').innerHTML="모집이 마감되었습니다."
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

		
	}

