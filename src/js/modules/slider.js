export default function slider(slidesSelectors, direction, prevButtonSelector, nextButtonSelector){
	const slides = document.querySelectorAll(slidesSelectors);

	let slideIndex = 1;

	let paused = false;

	function showSlides(n){
		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}

		slides.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		slides[slideIndex - 1].style.display = 'block';
	}
	showSlides(slideIndex - 1);

	function swipeSlide(n){
		showSlides(slideIndex += n);
	}

	function activateAnimation(){
		if (direction === 'vertical') {
			paused = setInterval(() => {
				swipeSlide(1);
				slides[slideIndex - 1].classList.add('slideInDown');
			}, 3000);
		} else {
			paused = setInterval(() => {
				swipeSlide(1);
				slides[slideIndex - 1].classList.remove('slideInLeft');
				slides[slideIndex - 1].classList.add('slideInRight');
			}, 3000);
		}
	}
	activateAnimation();

	try {
		const prevButton = document.querySelector(prevButtonSelector);
		const nextButton = document.querySelector(nextButtonSelector);

		prevButton.addEventListener('click', function () {
			swipeSlide(-1);
			slides[slideIndex - 1].classList.remove('slideInRight');
			slides[slideIndex - 1].classList.add('slideInLeft');
		});
		nextButton.addEventListener('click', function () {
			swipeSlide(1);
			slides[slideIndex - 1].classList.remove('slideInLeft');
			slides[slideIndex - 1].classList.add('slideInRight');
		});
	}
	catch (e) {

	}

	slides[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);
	});
	slides[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});
};