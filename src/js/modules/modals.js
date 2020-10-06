import calcScroll from "./calc-scroll";
export default function modals() {
	let triggerClicked = false;
	function bindModal(openModalSelector, modalSelector, closeModalSelector, destroyTrigger = false) {
		const openModal = document.querySelectorAll(openModalSelector);
		const modal = document.querySelector(modalSelector);
		const closeModal = document.querySelector(closeModalSelector);
		const scrollWidth = calcScroll();

		function closeAllModals() {
			document.querySelectorAll('[data-modal]').forEach(item => {
				item.style.display = 'none';
				item.classList.add('animated', 'fadeIn');
			});
		}

		openModal.forEach(item => {
			item.addEventListener('click', (e) => {
				closeAllModals();
				if (e.target) {
					e.preventDefault();
				}
				if(destroyTrigger){
					document.querySelector(openModalSelector).remove();
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
			if (e.target === modal) {
				closeAllModals();
				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0`;
			}
		});
	}

	function openModalByScroll(selector){
		window.addEventListener('scroll', () => {
			const documentScrollTop = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

			if(!triggerClicked && ((window.pageYOffset + document.documentElement.clientHeight) >= documentScrollTop)){
				if(document.querySelector(selector)){
					document.querySelector(selector).click();
				}
			}
		})
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
				document.body.style.marginRight = `${calcScroll()}px`;
				clearTimeout(modalTimeOut);
			}
		}, time);
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openModalByScroll('.fixed-gift');
	// openModalByTime('.popup-consultation', 3000);
};