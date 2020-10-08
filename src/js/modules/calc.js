export default function calc(size, material, options, promocode, result) {
	const sizeBlock = document.querySelector(size);
	const materialBlock = document.querySelector(material);
	const optionsBlock = document.querySelector(options);
	const promocodeBlock = document.querySelector(promocode);
	const resultBlock = document.querySelector(result);

	function calcPrice() {
		let sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
		if (sizeBlock.value === '' || materialBlock.value === '') {
			resultBlock.textContent = 'Введите размер и тип материала';
		} else if (promocodeBlock.value === 'COUPON') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	}

	sizeBlock.addEventListener('change', calcPrice);
	materialBlock.addEventListener('change', calcPrice);
	optionsBlock.addEventListener('change', calcPrice);
	promocodeBlock.addEventListener('input', calcPrice);
};