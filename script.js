function homepageAnimation(){
    gsap.set(".slidesm",{scale:5})

var tl =gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        
        scrub: 1
    }

})


tl.to(".vdodiv", {
   
    '--clip': "0%",
    ease: Power2  
},'a')

.to(".slidesm", {
   
    scale:1,
    ease: Power2
    
},'a')

.to(".lft", {
   
    xPercent:-10,
    stagger: .03,
    ease: Power4
    
},'b')
.to(".rgt", {
   
    xPercent:10,
    stagger: 0.3,
    ease: Power4
    
},'b')


}


function realPageAnimation(){
    gsap.to("slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
        
        gsap.to(this.querySelector(".picture"),{opacity:1, x: gsap.utils.mapRange(0,window.innerWidth, -200 , 200, dets.clientX),ease: Power4 , duration:.5})
    })
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".picture"),{opacity:0,ease: Power4 , duration:.5})
    })
})
}

function bodyColorChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("data-theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("data-theme", e.dataset.color);
            }
        });
    });
}



function locoMotive(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub: 1
        },
        y: 0,
        ease : Power4
    })
}


function paraAnimation() {
    var clutter = "";
    var textElement = document.querySelector(".textpara");
    
    if (!textElement) {
        console.error("Text element not found.");
        return;
    }
    
    // Split text into spans
    textElement.textContent.split("").forEach(function(e) {
        if (e === " ") {
            clutter += `<span>&nbsp;</span>`;
        } else {
            clutter += `<span>${e}</span>`;
        }
    });
    textElement.innerHTML = clutter;
    
    // Debugging
    console.log("Text content split into spans.");
    
    // Ensure GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.set(".textpara span", { opacity: 0.1 });
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 1
            },
            opacity: 1,
            stagger: 0.03,
            ease: "power4"
        });
        
        console.log("Animation applied.");
    } else {
        console.error("GSAP or ScrollTrigger is not loaded.");
    }
}





capsulesAnimation()
homepageAnimation()
realPageAnimation()
teamAnimation()
paraAnimation()

locoMotive()
bodyColorChange()