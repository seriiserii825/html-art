import {getResource} from "../services/resources";

export default function showMoreStyles(trigger, wrapper) {
	const btn = document.querySelector(trigger);
	getResource('../assets/db.json').then((res) => showCard(res.styles));

	function showCard(data) {
		btn.addEventListener('click', () => {
			data.forEach(item => {
				const div = document.createElement('div');
				div.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
				div.innerHTML = `
                <div class=styles-block>
                    <img src="${item.src}" alt>
                    <h4>${item.title}</h4>
                    <a href="#">${item.link}</a>
                </div>
			`;
				document.querySelector(wrapper).appendChild(div);
			});
		});
	}
};