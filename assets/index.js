import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const btn = document.querySelector('button');
const unmuteBtn = document.querySelector('#unmute'); 
const player = new MediaPlayer({ 
        el: video, 
        //plugins: [ new AutoPlay() ] 
    });

btn.onclick = ()=>player.togglePlay();
unmuteBtn.onclick = ()=>player.unmute();