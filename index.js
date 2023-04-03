
// import './main.js';
// import './style/tailwind.css';
// import './style/projects.css';
// import './projects.js';
// import './projects.js';




import LocomotiveScroll from 'locomotive-scroll';
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";
// import barba from '@barba/core';
// import barbaCss from '@barba/css';
// import imagesLoaded from 'imagesloaded';
// import Swup from 'swup';




// const swup = new Swup();





// tell Barba to use the css plugin
// barba.use(barbaCss);

// init Barba
// barba.init();


//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/

// const tl = gsap.timeline();


// tl.from(".c0",{
//   y: "100%",
//   opacity: 0,
//   duration: .5,
//   opacity: .8
// });
// gsap.registerPlugin(CSSRulePlugin);
// console.log('skew);


// function contentAnimation () {

// const myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 	  resolve('foo');
// 	}, 300);
// });

// Splitting();
// console.clear();





const pageContainer = document.querySelector(".scrollContainer");


const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".scrollContainer"),
	smooth: true,
	inertia: 0.8,
	smooth: true,
    lerp: 0.08,
    getDirection: true,
    smoothMobile: false,
    scrollFromAnywhere: false,
	mobile: {
		breakpoint: 0,
		smooth: false,
		getDirection: false,
	},
	tablet: {
		breakpoint: 0,
		smooth: true,
		getDirection: true,
	},
});




// const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector(".scrollContainer"),
// 	smooth: true
// });




// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)



locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});




// animation starts
var tml = gsap.timeline({ defaults: { duration: 1 } })
tml.fromTo(".scene", { opacity: 0, scale: 0 }, { opacity: 0.1, scale: 1, stagger: 0.1 }, "-=.7")
tml.fromTo("body", 1.5, { opacity: 0, backgroundColor: "black" }, { opacity: 0.9, ease: "Power1.easeInOut", stagger: 0.1, }, "-=.7")

	// .fromTo(".imgs", {opacity: 1, scale:0 }, { opacity: 1, scale:1 }, "-=.5")
	.fromTo(".logo-wrap", { x: -150, scale: 1.5, opacity: 0, duration: 1 }, { x: 0, scale: 1, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo(".menu-icon", { x: 150, scale: 1.5, opacity: 0, duration: 1 }, { x: 0, scale: 1, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo("#img1", { x: -600, opacity: 0, duration: 0.5 }, { x: 0, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo("#img2", { x: 800, opacity: 0, duration: 0.5 }, { x: 0, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo("#img3", { x: -800, opacity: 0, duration: 0.5 }, { x: 0, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo("#img4", { x: 800, opacity: 0, duration: 0.5 }, { x: 0, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo("#auto", { y: 100, scale: 3, opacity: 0, duration: 0.5 }, { y: 0, scale: 1, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")
	.fromTo(".explore-btn", { y: 100, scale: 2, opacity: 0, duration: 0.5 }, { y: 0, scale: 1, opacity: 1, ease: "Power4.easeInOut", stagger: 0.1 }, "-=.7")


	let sctl = gsap.timeline({ defaults: { duration: 1 } })

	sctl.to(".cd-header", {backgroundColor: "#101115", duration:1 , ease: 'Power4.easeInOut' })

	
	ScrollTrigger.create({
		trigger: '.dc1',
		start: "top 100%",
		end: "+=500",
		scroller: ".scrollContainer",
		animation: sctl,
		scrub: true, //tenterback
		// events: onEnter onLeave onEnterBack onLeaveBack
		// toggleActions: "restart play reverse reset"
	});


	// let exbttl = gsap.timeline({ defaults: { duration: 1 } })

	// exbttl.fromTo(".content", { y: 0, opacity: 1, duration: 3 }, { y: -130, opacity: 1, ease: "Power1.easeIn"})
	
	
	// ScrollTrigger.create({
	// 	trigger: '.slider',
	// 	start: "100% 96%",
	// 	end: "+=500",
	// 	scroller: ".scrollContainer",
	// 	animation: exbttl,
	// 	// scrub: true, //tenterback
	// 	// events: onEnter onLeave onEnterBack onLeaveBack
	// 	toggleActions: "restart play reverse reverse"
	// });



	


// animation ends



// b
var letter1 = document.querySelector('[data-js="letter-1"]');
// u
var letter2 = document.querySelector('[data-js="letter-2"]');
// l
var letter3 = document.querySelector('[data-js="letter-3"]');
// l
var letter4 = document.querySelector('[data-js="letter-4"]');
// g
var letter5 = document.querySelector('[data-js="letter-5"]');
// i
var letter6 = document.querySelector('[data-js="letter-6"]');
// t
var letter7 = document.querySelector('[data-js="letter-7"]');


// Animation for b
TweenMax.to(letter1, 20, { // duration 200s
	top: "-100%",
	rotation: "360deg",
	repeat: -1, // infinite repetition
	delay: -90, // delay relative to duration to set starting point
	ease: Linear.easeNone
});

// Animation for u
TweenMax.to(letter2, 30, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -70,
	ease: Linear.easeNone
});

// Animation for l
TweenMax.to(letter3, 17, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -60,
	ease: Linear.easeNone
});

// Animation for l
TweenMax.to(letter4, 25, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -50,
	ease: Linear.easeNone
});

// Animation for g
TweenMax.to(letter5, 20, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -40,
	ease: Linear.easeNone
});

// Animation for i
TweenMax.to(letter6, 15, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -30,
	ease: Linear.easeNone
});

// Animation for t
TweenMax.to(letter7, 27, {
	top: "-100%",
	rotation: "360deg",
	repeat: -1,
	delay: -20,
	ease: Linear.easeNone
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();