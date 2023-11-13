import Player from '@vimeo/player';
import _ from 'lodash.throttle';
import { saveStorage, loadStorage } from './helper/storage';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', _(timeUpdateLocalStorage, 1000));
player.setCurrentTime(loadStorage(KEY_STORAGE) ?? 0);

function timeUpdateLocalStorage(data) {
  saveStorage(KEY_STORAGE, data.seconds);
}
