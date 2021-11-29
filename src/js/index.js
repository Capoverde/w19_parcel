// style
import './../scss/app.scss'

/**
 * Libs
 */
import gsap from 'gsap'
import $ from "jquery";
  // import Swiper JS

  // import Swiper from 'swiper';
  // import Swiper styles
  // import 'swiper/css';

  const swiper = new Swiper();


//  animowanie textu

const tl = gsap.timeline({ defaults: { ease: 'Circ.easeOut' } })

const line = document.getElementById('line')
const socials = document.querySelector('.socials__box')
const vavList = document.getElementById('navList')
const container = document.querySelector('.container')




tl.fromTo(container, 2, {z:0, opacity:0}, {z:'100%', opacity:1})
.from(line, 1.5, { scaleX: 0, transformOrigin: '20%' }).set(line, { opacity: 1 })
  .fromTo('#hw19', { y: '10%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.7, stagger: 0.2 })
  .fromTo('#hnow', { x: '8%', opacity: 0, rotateZ: '270deg' }, { x: '-2%', opacity: 1, duration: 0.7 })
  .fromTo(socials.children, { y: '10%', opacity: 0}, { y: '0%', opacity: 1, duration: 0.7, stagger:.2, ease:'SlowMo' })
  .fromTo("#copy", { y: '10%', opacity: 0}, { y: '0%', opacity: 1, duration: 0.7, stagger:.2, ease:'SlowMo' })

const n = ()=>{
  tl.fromTo(navList.children, { x: '10%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.7, stagger: 0.2 })
}


/*
*                  HAMBURGER
=============================================== */

console.log(navList);

const hamburger = document.querySelector('.menu__box')
const burger = document.querySelector('#menu2');

hamburger.addEventListener('click', e =>{
  navList.classList.toggle('menuListToggle')
  n();
})

/*
*                  SPEAKERS
=============================================== */

// const speaker1 = document.getElementById('speaker1')
// const speaker2 = document.getElementById('speaker2')
const speakers = document.querySelectorAll('.speakers > *')
console.log(speakers)


speakers.forEach(speaker => speaker.addEventListener('click', e =>{
   if(e.target.className = 'fa-volume-down' ){
     e.target.className = 'fa-volme-mute'
   }
   console.log('klikniety element', e.target)
}))


/*
*                  SWIPER-CAROUSEL
=============================================== */
const sswiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/*
*                  SOUND VISUALIZER
=============================================== */
/* * 
 * audio visualizer with html5 audio element
 *
 * v0.1.0
 * 
 * licenced under the MIT license
 * 
 * see my related repos:
 * - HTML5_Audio_Visualizer https://github.com/wayou/HTML5_Audio_Visualizer
 * - 3D_Audio_Spectrum_VIsualizer https://github.com/wayou/3D_Audio_Spectrum_VIsualizer
 * - selected https://github.com/wayou/selected
 * - MeowmeowPlayer https://github.com/wayou/MeowmeowPlayer
 * 
 * reference: http://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
 */
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
window.onload = function() {
    var audio = document.getElementById('audio');
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio);
    // we have to connect the MediaElementSource with the analyser 
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    // we're ready to receive some data!
    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 1, //width of the meters in the spectrum
        gap = 1, //gap between meters
        capHeight = 1,
        capStyle = '#fff',
        meterNum = 800 / (6), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, '#fff');
    gradient.addColorStop(0.5, '#fff');
    gradient.addColorStop(0, '#fff');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            // if (value < capYPositionArray[i]) {
            //     ctx.fillRect(i * 0, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            // } else {
            //     ctx.fillRect(i * 0, cheight - value, meterWidth, capHeight);
            //     capYPositionArray[i] = value;
            // };
            ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
    }
    renderFrame();
    audio.play();
};

const audio = document.querySelector('audio')
audio.addEventListener('click', e => console.log(e.target))