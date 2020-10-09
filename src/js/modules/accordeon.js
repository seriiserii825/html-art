export default function accordeon(itemsSelector, contentSelector){
	const items = document.querySelectorAll(itemsSelector);
	const content = document.querySelectorAll(contentSelector);

	function slideUp(elem) {
		elem.style.transition = "all 2s ease-in-out";
		elem.style.height = "0px";
		elem.style.display = "none";
	}

	function slideDown(elem) {
		elem.style.transition = "all 2s ease-in-out";
		elem.style.display = "block";
		setTimeout(() => {
			elem.style.height = "400px";
		}, 300);
	}

	items.forEach(elem => {
		elem.addEventListener('click', function (e) {
			content.forEach(item => {
				slideUp(item);
			});

			const elemItem = e.target.parentNode.nextElementSibling;
			slideDown(elemItem);
		});
	});
};