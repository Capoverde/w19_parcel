// style
import './../scss/app.scss'

/**
 * Libs
 */
import gsap from 'gsap'
import $ from "jquery";
import slick from 'slick-carousel';


//  animowanie textu

const tl = gsap.timeline({ defaults: { ease: 'Circ.easeOut' } })

const line = document.getElementById('line')
const socials = document.querySelector('.socials__box')
const vavList = document.getElementById('navList')

tl.from(line, 1.5, { scaleX: 0, transformOrigin: '20%' }).set(line, { opacity: 1 })
  .fromTo('#hw19', { y: '10%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.7, stagger: 0.2 })
  .fromTo('#hnow', { x: '10%', opacity: 0, rotateZ: '270deg' }, { x: '0%', opacity: 1, duration: 0.7 })
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
*                  SLICK-CAROUSEL
=============================================== */

