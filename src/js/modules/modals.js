import calcScroll from "./calc-scroll";
export default function modals() {
	function bindModal(openModalSelector, modalSelector, closeModalSelector, closeModalOnOverlay = true) {
		const openModal = document.querySelectorAll(openModalSelector);
		const modal = document.querySelector(modalSelector);
		const closeModal = document.querySelector(closeModalSelector);
		const scrollWidth = calcScroll();

		function closeAllModals() {
			document.querySelectorAll('[data-modal]').forEach(item => {
				item.style.display = 'none';
			});
		}

		openModal.forEach(item => {
			item.addEventListener('click', (e) => {
				closeAllModals();
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		});

		closeModal.addEventListener('click', () => {
			closeAllModals();
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0`;
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeModalOnOverlay) {
				closeAllModals();
				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0`;
			}
		});
	}

	function openModalByTime(selector, time) {

		const modalTimeOut = setTimeout(() => {
			let display;

			document.querySelectorAll('[data-modal]').forEach((item) => {
				if(getComputedStyle(item).display !== 'none'){
					display = 'block';
				}
			});

			if(!display){
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
				clearTimeout(modalTimeOut);
			}
		}, time);
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	openModalByTime('.popup-consultation', 3000);
};