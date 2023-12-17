import {createMyMessage, createResponseMessage} from './init-chat.js';
import { updateLoadButton } from './init-show-more-button.js';

const mediaplanBtn = document.querySelector('#btn-mediaplan');
const chatWindow = document.querySelector('#chat-window');
const filesTemplate = document.querySelector('#files-template');
const mediaplanContainer = document.querySelector('#files-mediaplan');
const mediaplanList = document.querySelector('#files-mediaplan-list');

const arrAsk = ['Я хочу заказать медиаплан.'];
const addResponse = ['Медиаплан за текущий год находится в процессе формирования. Результат Вы можете отслеживать онлайн в разделе "Файлы".'];
const addResponseReady = ['Все медиапланы за текущий год сформированы или находятся в процессе формирования. Результат Вы можете найти в разделе "Файлы".'];

const iconStatusLoading = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.26136 10.2727L8.34659 4H7.1875L7.27273 10.2727H8.26136ZM7.22585 12.5696C7.37642 12.7202 7.55682 12.7955 7.76705 12.7955C7.90909 12.7955 8.03693 12.7614 8.15057 12.6932C8.26705 12.6222 8.35938 12.5284 8.42756 12.4119C8.49858 12.2955 8.53409 12.1676 8.53409 12.0284C8.53409 11.8182 8.45881 11.6378 8.30824 11.4872C8.15767 11.3366 7.97727 11.2614 7.76705 11.2614C7.55682 11.2614 7.37642 11.3366 7.22585 11.4872C7.07528 11.6378 7 11.8182 7 12.0284C7 12.2386 7.07528 12.419 7.22585 12.5696Z" fill="#949494"/></svg>';
const iconStatusReady = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#1CC437"/><path d="M3.83333 7.375L5.64226 9.1387C6.41901 9.89604 7.65791 9.89604 8.43466 9.1387L12.1667 5.5" stroke="white" stroke-width="1.5"/></svg>';

const textLoading = 'Медиаплан в процессе составления';
const textReady = 'Медиаплан от 1.06.22 готов';
const onMediaplanBtnClick = (evt) => {
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
    initMediaplanContainer();
  }, 3000);
};

const initMediaplanContainer = () => {
  if (document.querySelectorAll('.files__mediaplan-item').length > 0) {
    chatWindow.append(createResponseMessage(addResponseReady));
    return;
  }

  chatWindow.append(createResponseMessage(addResponse));
  filesTemplate.style.display = 'none';
  mediaplanContainer.style.display = 'flex';
  createMediaplanItems();
};


const setPause = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const createMediaplanItems = async () => {
  for (let i = 1; i <= 12; i++) {
    const mediaplanItem = createMediaplanItem();
    mediaplanList.prepend(mediaplanItem);
    await setPause(4050);
    updateLoadButton();
  }
};

// Mediaplan month counter
let counter = 1;

const createMediaplanItem = () => {
  // Container
  const mediaplanItem = document.createElement('li');
  mediaplanItem.classList.add('files__mediaplan-item');

  const mediaplanItemContainer = document.createElement('div');
  mediaplanItemContainer.classList.add('files__mediaplan-item-container');

  // Icon file
  const mediaplanIconFileContainer = document.createElement('div');
  mediaplanIconFileContainer.classList.add('files__mediaplan-icon-container', 'files__mediaplan-icon-container--file');
  mediaplanIconFileContainer.innerHTML = '<svg width="24" height="24"><use href="img/sprite.svg#icon-file"></use></svg>';

  // Text
  const mediaplanText = document.createElement('span');
  mediaplanText.classList.add('files__mediaplan-text');
  mediaplanText.innerHTML = `Companyname ${counter++}/23`;

  // Icon file
  const mediaplanIconRefreshContainer = document.createElement('div');
  mediaplanIconRefreshContainer.classList.add('files__mediaplan-icon-container', 'files__mediaplan-icon-container--refresh');
  mediaplanIconRefreshContainer.innerHTML = '<svg width="24" height="24"><use href="img/sprite.svg#icon-refresh"></use></svg>';

  // Mediaplan status container
  const mediaplanStatusContainer = document.createElement('div');
  mediaplanStatusContainer.classList.add('files__mediaplan-status-container');

  mediaplanItemContainer.append(mediaplanIconFileContainer);
  mediaplanItemContainer.append(mediaplanText);
  mediaplanItemContainer.append(mediaplanIconRefreshContainer);
  mediaplanItemContainer.append(mediaplanStatusContainer);

  mediaplanItem.append(mediaplanItemContainer, setMediaplanLoadingStatus(mediaplanStatusContainer, iconStatusLoading, textLoading));

  setTimeout(() => {
    setMediaplanLoadingStatus(mediaplanStatusContainer, iconStatusReady, textReady);
    mediaplanIconRefreshContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 12L12 17L7 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L12 16" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><line x1="5.75" y1="18.25" x2="18.25" y2="18.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/></svg>';
    mediaplanIconRefreshContainer.style.backgroundColor = '#f4d4ed';

    setTimeout(() => {
      mediaplanStatusContainer.remove();
    }, 2000);
  }, 2000);

  return mediaplanItem;
};

const setMediaplanLoadingStatus = (container, svg, statusText) => {
  container.innerHTML = '';
  container.innerHTML = svg;

  const mediaplanStatusText = document.createElement('span');
  mediaplanStatusText.innerHTML = statusText;

  container.append(mediaplanStatusText);

 return container;
};


const initMediaplan = () => {
  mediaplanBtn.addEventListener('click', onMediaplanBtnClick);
};


export {initMediaplan};
