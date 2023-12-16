const form = document.querySelector('#form');
const chatWindow = document.querySelector('#chat-window');
const textArea = document.querySelector('#message-input');

form.addEventListener('submit', onFormSubmit);

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

  const messageText = document.createElement('div');
  messageText.classList.add('message__text');
  messageText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const messageInfo = document.createElement('div');

  const messageAgent = document.createElement('span');
  messageAgent.classList.add('message__agent');
  messageAgent.innerHTML = 'Jim';

  const messageTime = document.createElement('span');
  messageTime.classList.add('message__time');
  messageTime.innerHTML = getDate();

  messageInfo.append(messageAgent, messageTime);

  messageContainer.append(messageText);
  messageContainer.append(messageInfo);
  // textArea.value = '';

  return messageContainer;
}
