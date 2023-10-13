import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const locStorage = {
  getSrotage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// player.on('play', function (data) {
//   data.seconds = 100;
//   console.log('data play: ', data);
// });
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// 'videoplayer-current-time';
player.on(
  'timeupdate',
  _(function (data) {
    locStorage.setStorage('videoplayer-current-time', data.seconds);
  }, 1000)
);
player
  .setCurrentTime(locStorage.getSrotage('videoplayer-current-time'))
  .then(function (seconds) {
    // console.log('seconds: ', seconds);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
