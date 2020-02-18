$(document).ready(function(){

	// Stk
	$(window).scroll(function(){
		var a= $(window).scrollTop(); 

		if(a>300){
			$('.header-area').addClass('top-fixt');
		}
		else{
			$('.header-area').removeClass('top-fixt');
		}
	})
	
	// Mobile Menu
	$(".nav-bars" ).on( "click", function() {
       $('.canvas-menu').toggleClass('canvas');
        return false;
    });

	// Counter Active
	$('.counter').counterUp({
		delay: 5,
		time: 4000,
	});

	// Client Carousel
	$('.people-corousel-area').owlCarousel({
		loop:true,
		autoplayTimeout:3000,
		items:3,
		autoplay:true,
		responsive :{
			0:{
				items:1
			},
			767:{
				items:2
			},
			990:{
				items:3
			}
		}
	});

	// Client Carousel
	$('.team-member-carousel').owlCarousel({
		loop:true,
		items:4,
		autoplayTimeout:3000,
		autoplay:true,
		autoplayHoverPause:true,
		responsive :{
			0:{
				items:1
			},

			576:{
				items:2
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	//Scrollt Smooth 

	 $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -55            // offste (in px) for fixed top navigation
    });
	
	
	// mixitup
	var mixer = mixitup('.gallery-filtering');



		
	// Magnific PopUp
	$('.item-overlay-icon a').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

	// skillbar

	$('#jq').LineProgressbar({
	  percentage: 92,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq2').LineProgressbar({
	  percentage: 86,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq3').LineProgressbar({
	  percentage: 56,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq4').LineProgressbar({
	  percentage: 64,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq5').LineProgressbar({
	  percentage: 36,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq6').LineProgressbar({
	  percentage: 78,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq7').LineProgressbar({
	  percentage: 62,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});

	$('#jq8').LineProgressbar({
	  percentage: 74,
	  fillBackgroundColor: '#777',
	  backgroundColor: '#fff',
	  radius: '3px',
	  height: '26px',
	  width: '100%',
	  duration: 10000,
	});



});


jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

// Mixitup
$(document).ready(function(){

		var mixer = mixitup('.filter-area');
		var mixer = mixitup(container, {
	    selectors: {
	        target: '.blog-item'
	    },
	    animation: {
	        duration: 300
	    }
	});

});