gsap.timeline({defaults:{duration:1}}).to("body",{opacity:1,ease:"Power1.easeInOut",delay:1}).to(".nav_component",{opacity:1,y:0,stagger:.1,ease:"Power1.easeInOut"},"-=0.2").to(".header_wrapper",{opacity:1,ease:"Power1.easeInOut",x:0},"-=0.8").to(".header_lottie-component",{opacity:1,y:0,ease:"Power1.easeInOut"}).to(".sup",{color:"#F95A5A",ease:"Power2.easeInOut",y:0,stagger:.01});let e=gsap.timeline({defaults:{duration:1}});e.to(".course-wyn_animation-text-left",{x:0,ease:"Power1.easeInOut"},"-=0.10").to(".course-wyn_animation-text-right",{x:0,ease:"Power1.easeInOut"},"-=0.9").to(".course-wyn_midi-image",{opacity:1,ease:"Power1.easeInOut"},"-=0.9"),ScrollTrigger.create({trigger:".course-wyn_animation-text-left",start:"top 50%",end:"+=500",animation:e});let t=gsap.timeline({defaults:{duration:1}});t.to(".course-wyn_midi-title-mobile",{opacity:1,y:0,ease:"Power1.easeInOut"},""),ScrollTrigger.create({trigger:".sup",start:"top 10%",end:"+=500",animation:t});let a=gsap.timeline({defaults:{duration:1}});a.to(".course-modules_heading-wrapper",{opacity:1,y:0,ease:"Power1.easeInOut"},"").to(".course-modules_subheading-container",{opacity:1,y:0,ease:"Power1.easeInOut"},"-=0.5").to("#stylebtn",{opacity:1,y:0,ease:"Power1.easeInOut"},"-=0.5"),ScrollTrigger.create({trigger:"#abtbtn",start:"top 10%",end:"+=500",animation:a});let o=gsap.timeline({defaults:{duration:1}});o.to(".webdev_syl",{zIndex:10,opacity:1,x:0,ease:"Power1.easeInOut"},"").to(".webdev_lott",{zIndex:9,opacity:1,x:0,ease:"Power1.easeInOut"},""),ScrollTrigger.create({trigger:"#stylebtn",start:"top 60%",end:"+=500",animation:o,scrub:!0,scrub:1,toggleActions:"play pause resume reset"});let r=gsap.timeline({defaults:{duration:1}});r.to(".idaut_syl",{zIndex:10,opacity:1,x:0,ease:"Power1.easeInOut"},"").to(".idaut_lott",{zIndex:9,opacity:1,x:0,ease:"Power1.easeInOut"},""),ScrollTrigger.create({trigger:".webdev_lott",start:"100% 50%",end:"+=500",animation:r,scrub:!0,scrub:1,toggleActions:"play pause resume reset"});let s=gsap.timeline({defaults:{duration:1}});s.to(".embdev_syl",{zIndex:10,opacity:1,x:0,ease:"Power1.easeInOut"},"").to(".embdev_lott",{zIndex:9,opacity:1,x:0,ease:"Power1.easeInOut"},""),ScrollTrigger.create({trigger:".idaut_syl",start:"bottom 50%",end:"+=500",animation:s,scrub:!0,scrub:1,toggleActions:"play pause resume reset"});let i=gsap.timeline({defaults:{duration:1}});i.to(".course-areas_content-wrapper",{opacity:1,scale:1,y:0,ease:"Power1.easeInOut"},""),ScrollTrigger.create({trigger:"#dwnbtn",start:"top 50%",end:"+=500",animation:i});let n=gsap.timeline({defaults:{duration:2}});n.to(".to-right",{x:-1500,ease:"power1.inOut"},"").to(".to-left",{x:1500,ease:"power1.inOut"},""),ScrollTrigger.create({trigger:".course-areas_content-wrapper",start:"top 70%",end:"+="+10*window.innerHeight,anticipatePin:!0,animation:n,scrub:!0,scrub:1,toggleActions:"play pause resume reset"}),$(".dd_label").click((function(){$(this).closest(".dropdown").toggleClass("active").siblings(".dropdown").removeClass("active")})),$(document).mouseup((function(e){var t=$(".dd_label");t.is(e.target)||0!==t.has(e.target).length||$(".dd_label").closest(".dropdown").removeClass("active")}));
//# sourceMappingURL=courses.6c59d739.js.map
