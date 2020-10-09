export default function scrollToTop(btnSelector) {
	const btn = document.querySelector(btnSelector);
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 300) {
			btn.classList.add('animated', 'fadeIn');
		} else {
			btn.classList.remove('fadeIn');
		}
	});

	const links = document.querySelectorAll('[href^="#"]');
	const speed = 0.1;
	links.forEach(item => {
		item.addEventListener('click', function (event) {
			event.preventDefault();

			const widthTop = document.documentElement.scrollTop;
			const hash = this.hash;
			const toBlock = document.querySelector(hash).getBoundingClientRect().top;
			let start = null;

			function step(time) {
				if(start === null){
					start = time;
				}

				let progress = time - start;
				let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

				document.documentElement.scrollTo(0, r);

				if(r !== widthTop + toBlock){
					requestAnimationFrame(step);
				}else{
					location.hash = hash;
				}
			}

			requestAnimationFrame(step);
		});
	});
}