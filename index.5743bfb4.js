var tml=gsap.timeline({defaults:{duration:1}});tml.fromTo("body",{opacity:0},{opacity:1,ease:"Power1.easeInOut",delay:1}).fromTo(".nav_component",{opacity:0,y:-100},{opacity:1,y:0,stagger:.1,ease:"Power1.easeInOut"},"-=0.2").fromTo(".nav_logo",{rotate:0},{rotate:360,ease:"Power1.easeInOut"},"-=0.6").fromTo(".header_wrapper",{opacity:0,x:50},{opacity:1,ease:"Power1.easeInOut",x:0},"-=0.8").fromTo(".header_lottie-component",{opacity:1,x:-1500,y:500},{opacity:1,ease:"Power1.easeInOut",x:10,y:0});let inttl=gsap.timeline({defaults:{duration:1}});inttl.fromTo(".home-intro_heading",{opacity:0,y:100},{opacity:1,ease:"Power.easeInOut",y:0,stagger:.1},"-=0.10").fromTo(".intro_image-container",{opacity:1,clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)"},{opacity:1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"},"-=0.9").fromTo(".home-intro_text-container",{opacity:0,y:100},{opacity:1,ease:"Power2.easeInOut",y:0,stagger:.1},"-=0.8").fromTo(".intro_button-container",{opacity:0,y:100},{opacity:1,ease:"Power2.easeInOut",y:0,stagger:.1},"-=0.7"),ScrollTrigger.create({trigger:".home-header_btn-container",start:"top 20%",end:"+=500",animation:inttl});let stcd=gsap.timeline({defaults:{duration:1}});stcd.fromTo("#webd",{opacity:0,y:300},{opacity:1,y:0,ease:"Power.easeInOut",stagger:.1},"-=0.10"),stcd.fromTo("#aut",{opacity:0,y:400},{opacity:1,y:0,ease:"Power.easeInOut",stagger:.1},"-=0.9"),stcd.fromTo("#emb",{opacity:0,y:500},{opacity:1,y:0,ease:"Power.easeInOut",stagger:.1},"-=0.8"),ScrollTrigger.create({trigger:"#cut",start:"top 50%",end:"+=500",animation:stcd});
//# sourceMappingURL=index.5743bfb4.js.map
