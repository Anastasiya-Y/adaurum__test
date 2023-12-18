const optionsButton = document.querySelector('#chat-submenu');

const initOptions = () => {
  optionsButton.addEventListener('click', onOptionsButtonClick);
};

const onOptionsButtonClick = () => {
  const options = document.querySelector('#options');

  if (options.classList.contains('hidden')) {
    options.classList.remove('hidden');
  } else {
    options.classList.add('hidden');
  }
};

export {initOptions};
