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
	ddaycount1()
	
	function ddaycount1(){		
		/* one */
		doomsdayOne=new Date('Janu 1,2021 00:00:00')
		today=new Date()
		howfarOne=doomsdayOne-today
		if(howfarOne>0){
			setTimeout('ddaycount1()',1000)
		}else{
			clearTimeout('ddaycount1()')
			document.getElementById('countTit').innerHTML="모집이 마감되었습니다."
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

	}

