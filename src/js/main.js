import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";

document.addEventListener('DOMContentLoaded', () => {
	modals();
	slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	slider('.main-slider-item', 'vertical');
	forms();

});