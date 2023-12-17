const loadButton = document.querySelector('#files-show-more');

const updateLoadButton = () => {
  const mediaplans = Array.from(document.querySelectorAll('.files__mediaplan-item'));

  if (loadButton) {
    loadButton.classList.add('hidden');

    mediaplans.forEach((item, index) => {
      item.classList.add('hidden');

      if (index <= 3) {
        item.classList.remove('hidden');
      } else if (index > 3) {
        loadButton.classList.remove('hidden');
      }
    });
  }
};

let counter = 7;
const onLoadButtonClick = () => {
  const mediaplans = Array.from(document.querySelectorAll('.files__mediaplan-item'));

  // const mediaplansHidden = document.querySelectorAll('.files__mediaplan-item.hidden');

  // if (mediaplansHidden.length === 0) {
  //   loadButton.classList.add('hidden');
  // }
  // if (mediaplans.length <= counter) {
  //   loadButton.classList.add('hidden');
  //   return;
  // } else {
  //   loadButton.classList.remove('hidden');
  // }
  mediaplans.forEach((item, index) => {
    item.classList.add('hidden');

    if (index <= counter) {
      item.classList.remove('hidden');
    } else if (index > counter) {
      loadButton.classList.remove('hidden');
    }
  });
  counter += 4;
  // if (mediaplans.length <= counter) {
  //   loadButton.classList.add('hidden');
  //   return;
  // }
  //loadButton.classList.add('hidden');
};

const initLoadButton = () => {
  loadButton.addEventListener('click', onLoadButtonClick);
};

export {updateLoadButton, initLoadButton};
