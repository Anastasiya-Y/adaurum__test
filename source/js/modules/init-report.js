import {createMyMessage, createResponseMessage} from './init-chat.js';

const reportBtn = document.querySelector('#btn-report');
const chatWindow = document.querySelector('#chat-window');


const arrAsk = ['Я хочу заказать отчет.'];
const addResponse = ['Отчет за текущий год может быть сформирован аналогично медиапланам за текущий год. Для тестирования шаблона запустите формирование медиапланов.'];
const onReportBtnClick = (evt) => {
  // Prepare chat
  if (chatWindow.querySelectorAll('.message').length === 0) {
    chatWindow.innerHTML = '';
    chatWindow.style.justifyContent = 'end';
  }

  // Сreate message
  evt.preventDefault();
  chatWindow.append(createMyMessage(arrAsk));

  // Create response from agent
  setTimeout(() => {
    chatWindow.append(createResponseMessage(addResponse));
  }, 3000);
};

const initReport = () => {
  reportBtn.addEventListener('click', onReportBtnClick);
};


export {initReport};
