



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


