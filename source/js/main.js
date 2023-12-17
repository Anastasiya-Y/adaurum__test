import {initChat} from './modules/init-chat.js';
import {initMediaplan} from './modules/init-mediaplan.js';
import {initLoadButton} from './modules/init-show-more-button.js';
import {initReport} from './modules/init-report.js';


window.onload = () => {
  initChat();
  initMediaplan();
  initLoadButton();
  initReport();
};
