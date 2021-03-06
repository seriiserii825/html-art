import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import scrollToTop from "./modules/scrollToTop";

document.addEventListener('DOMContentLoaded', () => {
	modals();
	slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	slider('.main-slider-item', 'vertical');
	forms();
	showMoreStyles('.button-styles', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price');
	filter();
	pictureSize('.sizes-block');
	scrollToTop('.pageup');
});