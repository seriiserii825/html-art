const pictureSize = (blocksSelector) => {
	const block = document.querySelectorAll(blocksSelector);

	function showImg(block) {
		const img = block.querySelector('img');
		img.classList.add('animated', 'zoomIn');
		img.src = img.src.slice(0, -4) + '-1.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'none';
		});
	}

	function hideImg(block) {
		const img = block.querySelector('img');
		img.classList.remove('animated', 'zoomIn');
		img.src = img.src.slice(0, -6) + '.png';
		block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
			p.style.display = 'block';
		});
	}

	block.forEach(item => {
		item.addEventListener('mouseover', () => {
			showImg(item);
		});
		item.addEventListener('mouseout', () => {
			hideImg(item);
		});
	});
};
export default pictureSize;