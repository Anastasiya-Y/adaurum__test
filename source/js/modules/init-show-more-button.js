const showMoreButton = document.querySelector('#files-show-more');

const updateShowMoreButton = () => {
  const mediaplans = Array.from(document.querySelectorAll('.files__mediaplan-item'));

  if (showMoreButton) {
    showMoreButton.classList.add('hidden');

    mediaplans.forEach((item, index) => {
      item.classList.add('hidden');

      if (index <= 3) {
        item.classList.remove('hidden');
      } else if (index > 3) {
        showMoreButton.classList.remove('hidden');
      }
    });
  }
};

let counter = 7;
const onShowMoreButtonClick = () => {
  const mediaplans = Array.from(document.querySelectorAll('.files__mediaplan-item'));

  mediaplans.forEach((item, index) => {
    item.classList.add('hidden');

    if (index <= counter) {
      item.classList.remove('hidden');
    } else if (index > counter) {
      showMoreButton.classList.remove('hidden');
    }
  });
  counter += 4;
  if (mediaplans.length <= counter) {
    showMoreButton.classList.add('hidden');
    return;
  }
};

const initShowMoreButton = () => {
  showMoreButton.addEventListener('click', onShowMoreButtonClick);
};

export {updateShowMoreButton, initShowMoreButton};
