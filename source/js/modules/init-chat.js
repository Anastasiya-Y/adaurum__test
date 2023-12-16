const form = document.querySelector('#form');
const chatWindow = document.querySelector('#chat-window');
const textArea = document.querySelector('#message-input');


function onFormSubmit(evt) {
  if (chatWindow.querySelectorAll('.message').length === 0) {
    chatWindow.innerHTML = '';
    chatWindow.style.justifyContent = 'end';
  }

  evt.preventDefault();
  chatWindow.append(createMyMessage());

  setTimeout(() => {
    chatWindow.append(createResponseMessage());
  }, 3000);
}

// My message

const createMyMessage = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'message--my-message');

  const messageText = document.createElement('div');
  messageText.classList.add('message__text');
  messageText.innerHTML = getMessageText();

  const messageTime = document.createElement('span');
  messageTime.classList.add('message__time');
  messageTime.innerHTML = getDate();


  messageContainer.append(messageText);
  messageContainer.append(messageTime);
  textArea.value = '';

  return messageContainer;
}

const getMessageText = () => {
  const messageText = textArea.value;
  return messageText;
}

const getDate = () => {
  const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  return date;
}

// Response message

const createResponseMessage = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'message--response-message');

  const messageAgentPhotoPicture = document.createElement('picture');

  const messageAgentPhotoWebp = document.createElement('source');
  messageAgentPhotoWebp.setAttribute('type', 'image/webp');
  messageAgentPhotoWebp.setAttribute('src', 'img/content/photo-jim.webp');

  const messageAgentPhotoPng = document.createElement('img');
  messageAgentPhotoPng.setAttribute('src', 'img/content/photo-jim.png');
  messageAgentPhotoPng.setAttribute('width', '49');
  messageAgentPhotoPng.setAttribute('height', '49');
  messageAgentPhotoPng.setAttribute('alt', 'Photo of Jim.');

  messageAgentPhotoPicture.append(messageAgentPhotoWebp, messageAgentPhotoPng);

  const messageText = document.createElement('div');
  messageText.classList.add('message__text');
  messageText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const messageInfo = document.createElement('div');
  messageInfo.classList.add('message__info');

  const messageAgent = document.createElement('span');
  messageAgent.classList.add('message__agent');
  messageAgent.innerHTML = 'Jim';

  const messageTime = document.createElement('span');
  messageTime.classList.add('message__time');
  messageTime.innerHTML = getDate();

  messageInfo.append(messageAgent, messageTime);

  messageContainer.append(messageAgentPhotoPicture);
  messageContainer.append(messageText);
  messageContainer.append(messageInfo);
  // textArea.value = '';

  return messageContainer;
}

const onTextAreaEnterPress = (evt) => {
  if (evt.ctrlKey && evt.keyCode === 13) {
    const newEvent = new Event('submit', {cancelable: true});
    evt.target.form.dispatchEvent(newEvent);
  }
};

form.addEventListener('submit', onFormSubmit);


textArea.addEventListener('keydown', onTextAreaEnterPress);
