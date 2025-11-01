let tl = gsap.timeline({scrollTrigger: {
    trigger : "#main",
    start: "75% 50%",
    end: "100% 50%",
    scrub : 5,
    pin :true,
    duration :1
}})
tl.to(".img-div  img" , {
    width: "100vw",
  height: "100vh",

})