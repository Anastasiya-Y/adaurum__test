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

const createMyMessage = (...args) => {
  let arr = args;
  // Container
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'message--my-message');

  // Message text
  const messageText = document.createElement('div');
  messageText.classList.add('message__text');
  messageText.innerHTML = getMessageText(arr);

  // Time
  const messageTime = document.createElement('span');
  messageTime.classList.add('message__time');
  messageTime.innerHTML = getDate();

  // Put in the container
  messageContainer.append(messageText);
  messageContainer.append(messageTime);
  textArea.value = '';

  return messageContainer;
};

const getMessageText = (...args) => {
  let messageText;
  if (textArea.value) {
    messageText = textArea.value;
  } else {
    messageText = args[0];
  }
  return messageText;
};


const getDate = () => {
  const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  return date;
};

// Response message

const createResponseMessage = (...args) => {
  // Container
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'message--response-message');

  // Photo of agent
  const messageAgentPhoto = document.createElement('img');
  messageAgentPhoto.setAttribute('src', 'img/content/photo-jim.png');
  messageAgentPhoto.setAttribute('width', '49');
  messageAgentPhoto.setAttribute('height', '49');
  messageAgentPhoto.setAttribute('alt', 'Photo of Jim.');

  // Response text
  const messageText = document.createElement('div');
  messageText.classList.add('message__text');
  if (args.length === 0) {
    messageText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  } else {
    messageText.innerHTML = args[0];
  }

  // Agent info
  const messageInfo = document.createElement('div');
  messageInfo.classList.add('message__info');

  const messageAgent = document.createElement('span');
  messageAgent.classList.add('message__agent');
  messageAgent.innerHTML = 'Jim';

  // Time
  const messageTime = document.createElement('span');
  messageTime.classList.add('message__time');
  messageTime.innerHTML = getDate();

  // Put agent info
  messageInfo.append(messageAgent, messageTime);

  // Put in the container
  messageContainer.append(messageAgentPhoto);
  messageContainer.append(messageText);
  messageContainer.append(messageInfo);

  return messageContainer;
};

const onTextAreaEnterPress = (evt) => {
  if (evt.ctrlKey && evt.keyCode === 13) {
    const newEvent = new Event('submit', {cancelable: true});
    evt.target.form.dispatchEvent(newEvent);
  }
};

const initChat = () => {
  form.addEventListener('submit', onFormSubmit);
  textArea.addEventListener('keydown', onTextAreaEnterPress);
};

export {initChat, createMyMessage, createResponseMessage};
