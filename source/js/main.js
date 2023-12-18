import {initChat} from './modules/init-chat.js';
import {initMediaplan} from './modules/init-mediaplan.js';
import {initShowMoreButton} from './modules/init-show-more-button.js';
import {initReport} from './modules/init-report.js';
import {initOptions} from './modules/init-options-button.js';


window.onload = () => {
  initChat();
  initMediaplan();
  initShowMoreButton();
  initReport();
  initOptions();
};
