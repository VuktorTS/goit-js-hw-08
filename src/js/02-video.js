import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const keyStorage = 'videoplayer-current-time';

const locStorage = {
  getSrotage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

player.on('timeupdate', _(timeUpdateLocalStorage, 1000));
player.setCurrentTime(locStorage.getSrotage(keyStorage));

function timeUpdateLocalStorage(data) {
  locStorage.setStorage(keyStorage, data.seconds);
}
