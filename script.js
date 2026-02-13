gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 2,
    effects: true
})

function animarPagina(){
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
    y: 20,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
})

// Animação da seção obrigado2

gsap.from(".secaoObrigado2 ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: .03,
    scrollTrigger: {
        trigger: ".secaoObrigado2 ul",
        start: "0% 80%",
        end: "100% 50%",
        scrub: true,        
    }
})

// Animação da seção footer

gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})

// Letras animadas

const grupoTextoSplit = document.querySelectorAll(".textoSplit")

grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines"
    })

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: .3,
        stagger: .03,
        scrollTrigger: {
            trigger: textoUnicoSplit,
        }
    })
})
}



const tl =gsap.timeline({
    onComplete(){
        animarPagina()
        gsap.to("#preloader", {
            opacity: 0,
            onComplete(){
                gsap.to("#preloader", {
                    display: "none"
                })
            }
        })
    }
})

tl.to("#preloader path", {
    strokeDashoffset: 0,
    duration: 2,
})

tl.to("#preloader path", {
    strokeDashoffset: 1,
    duration: .5,
    fill: "rgba(168, 19, 19)",
})
    
