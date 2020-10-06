export default function checkInputNumber(input) {
	const elems = document.querySelectorAll(input);
	elems.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});

	});
}
