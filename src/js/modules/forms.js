// import checkInputNumber from "./check-input-number";
import {postData} from "../services/resources";

export default function postForms() {
	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('form input');
	const upload = document.querySelectorAll('[name="upload"]');

	upload.forEach(item => {
		item.addEventListener('input', () => {
			const fileName = item.files[0].name;
			const fileNameArr = fileName.split('.');
			const dots = fileNameArr[0].length > 6 ? '...' : '.';
			const resultFileName = fileNameArr[0].substr(0, 7) + dots + fileNameArr[1];
			item.previousElementSibling.textContent = resultFileName;
		});
	});

	// checkInputNumber('form input[name = "user_phone"]');

	const messages = {
		loading: "Идет отправка данных",
		success: "Данные успешно получены",
		error: "Произошла ошибка",
		spinner: "assets/img/spinner.gif",
		ok: "assets/img/ok.png",
		fail: "assets/img/fail.png"
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php',
	};

	function clearData() {
		inputs.forEach(item => {
			item.value = '';
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = "Файл не выбран";
		});
	}

	forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			const messageBlock = document.createElement('div');
			messageBlock.classList.add('message-block');
			item.parentNode.appendChild(messageBlock);
			item.classList.add('animated', 'fadeOutUp');

			setTimeout(() => {
				item.style.display = 'none';
			}, 400);


			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', messages.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			messageBlock.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = messages.loading;
			messageBlock.appendChild(textMessage);

			const formData = new FormData(item);
			let api;
			api = item.closest('.popup-design') || item.classList.contains('form-calc') ? path.designer : path.question;
			console.log(api);

			postData(api, formData)
				.then((data) => {
					console.log(data);
					statusImg.setAttribute('src', messages.ok);
					textMessage.textContent = messages.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', messages.fail);
					textMessage.textContent = messages.error;
				})
				.finally(() => {
					clearData();
					setTimeout(() => {
						messageBlock.remove();
						item.style.display = 'block';
						item.classList.remove('fadeOutUp');
						item.classList.add('fadeInUp');
					}, 3000);
				});
		});
	});
};