$(function(){

	var heightHead = $(window).height();
	if($(window).width() > 1200){
		$('.maskHead').css('height', heightHead);
		$('header').css('height', heightHead);		
	}else{
		heightHead = 600;
		$('.maskHead').css('height', heightHead);
		$('header').css('height', heightHead);				
	}
	//lang

	var toggleLang = 0;
	$('#RU').css('opacity', '1');
	$('#RU.bottomLang').css('color', '#7AC142');
	$('#EN.FootLang').css('color', '#fff');
	$('#RU').click(toggleLangf);
	$('#EN').click(toggleLangf);
	$('#RU.bottomLang').click(toggleLangf);
	$('#EN.bottomLang').click(toggleLangf);
	$('#RU.FootLang').click(toggleLangf);
	$('#EN.FootLang').click(toggleLangf);

	function toggleLangf(){
		if(toggleLang === 0){
			$('#RU').css('opacity', '0.7');
			$('#EN').css('opacity', '1');
			$('#EN.bottomLang').css('color', '#7AC142');
			$('#RU.bottomLang').css('color', '#636163');
			$('#EN.FootLang').css('color', '#fff');
			$('#RU.FootLang').css('color', '#000');
			toggleLang++;
		}else if(toggleLang === 1){
			$('#RU').css('opacity', '1');
			$('#EN').css('opacity', '0.7');
			$('#EN.bottomLang').css('color', '#636163');
			$('#RU.bottomLang').css('color', '#7AC142');
			$('#EN.FootLang').css('color', '#000');
			$('#RU.FootLang').css('color', '#fff');
			toggleLang--;
		}
	};

	//menu

	$('#buttonOpenLogoHead').click( function(){
		$('#buttonOpenLogoHead').css('display', 'none')
		$('.maskHead').slideToggle(400, function(){
			$('.maskHead').css('display','block');
			$('.logoHead').css('display','block');
			$('.logoHead').css('position','absolute');
			$('.maskHead').css('opacity','0.9');
			$('#buttonOpenLogoHeadClose').css('display','block');
		});
	});

	$('#buttonOpenLogoHeadClose').click(function(){
		$('#buttonOpenLogoHeadClose').css('display','none');
		$('#buttonOpenLogoHead').slideToggle(400, function(){
			$('.logoHead').css('position','relative');
			$('.maskHead').css('opacity','0.65');
			$('.maskHead').css('display','none');
			$('.logoHead').css('display','none');
			$('#buttonOpenLogoHead').css('display','block');
		});		
	});

	var heightMnuHead = ($('.mnuHead').css('height')).slice(0,3);

	$('#headMenu').click(function(){
		$('.mnuHead').slideToggle(400, function(){
			$('.mnuHead').css('display','block');
			$('.mnuHead').css('height', heightMnuHead)
			$('#headMenu').css('display','inline-block');
		});
	});

	$('#headMenuClose').click(function(){
		$('.mnuHead').slideToggle(400, function(){
			$('.mnuHead').css('display','none');
		});		
	});

	//slider

	var sliderName = ['Есть молоко',
	'Второй заголовок',
	'Третий заголовок',
	'Четвертый заголовок',
	'Пятый заголовок'
	];
	var sliderDescription = [
	'СОВРЕМЕННЫЙ СЕРВИС ДЛЯ ЖИТЕЛЕЙ ГОРОДОВ ПО ПРИОБРЕТЕНИЮ НАТУРАЛЬНЫХ МОЛОЧНЫХ ПРОДУКТОВ',
	'Второе описание второе описание второе описание второе описание второе описание второе описание',
	'Третье описание третье описание третье описание третье описание третье описание третье описание',
	'Четвертое описание четвертое описание четвертое описание четвертое описание четвертое',
	'Пятое описание пятое описание пятое описание пятое',
	];
	var sliderImg = [
	'url(../dist/img/headFon.jpg)',
	'url(../dist/img/headFon2.jpg)',
	'url(../dist/img/headFon.jpg)',
	'url(../dist/img/headFon2.jpg)',
	'url(../dist/img/headFon.jpg)'
	];

	var currentSlid = 0;

	$('#nextSlid').click(SliderHeadNext);
	$('#preSlid').click(SliderHeadPre);

	SliderHeadPre();

	function getSlid(){
		var wordOne = [];
		for(var i = 0; i < sliderName[currentSlid].length; i++){
			if(sliderName[currentSlid][i] != ' '){
				wordOne.push(sliderName[currentSlid][i]);
			}else{
				break;
			}
		}
		$('.wrapperHeadCaption h2').html('<span>'+wordOne.join('')+'</span><br>'+sliderName[currentSlid].slice(wordOne.length));
		$('.textHead').html(sliderDescription[currentSlid]);
		$('header').css('background-image', sliderImg[currentSlid]);
		$('.circleB').css('opacity','0.4');
		$('.circleB:nth-child('+(currentSlid+1)+')').css('opacity','1');	
	}

	function SliderHeadNext(){
		$('.wrapperHeadCaption h2').show(function(){

			if(currentSlid < sliderName.length-1){
				currentSlid++;
			}
			getSlid();
		});
	}

	function SliderHeadPre(){
		$('.wrapperHeadCaption h2').show(function(){

			if(currentSlid <= sliderName.length && currentSlid !== 0){
				currentSlid--;
			}
			getSlid();
		});
	}

	//bullets circle slider

	$('.cB1').click(function (){
		currentSlid = 0;
		getSlid();
	});

	$('.cB2').click(function (){
		currentSlid = 1;
		getSlid();
	});

	$('.cB3').click(function (){
		currentSlid = 2;
		getSlid();
	});

	$('.cB4').click(function (){
		currentSlid = 3;
		getSlid();
	});

	$('.cB5').click(function (){
		currentSlid = 4;
		getSlid();
	});


});