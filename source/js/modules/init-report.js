import {createMyMessage, createResponseMessage} from './init-chat.js';

const reportBtn = document.querySelector('#btn-report');
const chatWindow = document.querySelector('#chat-window');


const arrAsk = ['Я хочу заказать отчет.'];
const addResponse = ['Отчет за текущий год может быть сформирован аналогично медиапланам за текущий год. Для тестирования шаблона запустите формирование медиапланов.'];
const onReportBtnClick = (evt) => {
  // Подготовка чата
  if (chatWindow.querySelectorAll('.message').length === 0) {
    chatWindow.innerHTML = '';
    chatWindow.style.justifyContent = 'end';
  }

  // Создание запроса
  evt.preventDefault();
  chatWindow.append(createMyMessage(arrAsk));

  // Создание ответа от агента
  setTimeout(() => {
    chatWindow.append(createResponseMessage(addResponse));
  }, 3000);
};

const initReport = () => {
  reportBtn.addEventListener('click', onReportBtnClick);
};


export {initReport};
