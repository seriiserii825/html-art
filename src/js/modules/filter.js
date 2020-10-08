export default function filter() {
	const menu = document.querySelector('.portfolio-menu');
	const menuAll = document.querySelectorAll('.portfolio-menu li');
	const allItems = document.querySelectorAll('.portfolio-wrapper .all');
	const portfolioNo = document.querySelector('.portfolio-no');

	function filterClasses(className) {
		allItems.forEach(item => {
			item.style.display = 'none';
			item.classList.remove('animated', 'fadeIn');

			portfolioNo.style.display = 'none';
			portfolioNo.classList.remove('animated', 'fadeIn');
		});

		if (className === 'grandmother' || className === 'granddad') {
			portfolioNo.style.display = 'block';
			portfolioNo.classList.add('animated', 'fadeIn');
		} else {
			document.querySelectorAll('.' + className).forEach(item => {
				item.style.display = 'block';
				item.classList.add('animated', 'fadeIn');
			});
		}
	}

	menu.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;

		if (target && target.nodeName === 'LI') {
			menuAll.forEach(item => {
				item.classList.remove('active');
			})
			target.classList.add('active');
			const className = target.getAttribute('class').split(' ')[0];
			filterClasses(className);
		}
	});
};