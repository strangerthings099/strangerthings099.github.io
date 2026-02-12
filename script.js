gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 2,
    effects: true
})

// Animação da seção hero

gsap.from(".hero", {
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
})

// Animação da seção cards

gsap.from(".card", {
    opacity: 0,
    duration: 1,
    y: 30,
    filter: "blur(20px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 70%",
    }
})