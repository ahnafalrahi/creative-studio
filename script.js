const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



const landingPage = document.querySelector('.landingpage');

lenis.on('scroll', () => {
    if (landingPage) {
        const speed = parseFloat(landingPage.getAttribute('data-scroll-speed')) || 1;
        const scrollPos = lenis.scroll;
        const transformValue = scrollPos * speed;

        landingPage.style.transform = `translateY(${transformValue}px)`;
    }
});



function landingpage(){
    var tl = gsap.timeline()

    tl.to(".inside-wrap span",{
      y:0,
      duration:1,
      stagger:0.1,
      backgroundColor:" #2F1AA7"
    })
    tl.to(".loader",{
      opacity:0,
      display:"none",
      duration:0.5
    })

    tl.from(".nav-circle",{
        right: '-100%',
        duration:1.5,
    })

    tl.from(".key",{
      opacity:0,
      duration:1,
    },"text")

    tl.from(".display h4",{
      opacity:0,
      duration:1,
    },"text")
    
    tl.from(".navigate h4,.logo,.text",{
        opacity:0,
        duration:1,
        y: "30px",
        stagger:0.1
    },"text")

    tl.from(".display-box",{
        width:0,
        duration:1
    },"text")
      
}

gsap.to(".top-text",{
    scrollTrigger:{
    trigger:".right-intro",
    // scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"bottom 0%",
    duration:10,
    scrub:true,
    stagger:3,
    },
    y:0
    
})

gsap.to(".top-text1",{
    scrollTrigger:{
    trigger:".page2",
    // scroller:".main",
    // markers:true,
    start:"top 40%",
    end:"bottom 70%",
    duration:15,
    scrub:true,
    },
    y:0
    
})

function imgReveal(){
  // let v1 = document.querySelector(".v1");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let sec1 = document.querySelector(".service-1");
let sec2 = document.querySelector(".service-2");
let sec3 = document.querySelector(".service-3");
let sec4 = document.querySelector(".service-4");

sec1.addEventListener("mouseover", function () {
  img1.style.opacity = "0.4";
});

sec1.addEventListener("mouseout", function () {
  img1.style.opacity = "0";
});

sec2.addEventListener("mouseover", function () {
  img2.style.opacity = "0.4";
});

sec2.addEventListener("mouseout", function () {
  img2.style.opacity = "0";
});

sec3.addEventListener("mouseover", function () {
  img3.style.opacity = "0.4";
});

sec3.addEventListener("mouseout", function () {
  img3.style.opacity = "0";
});

sec4.addEventListener("mouseover", function () {
  img4.style.opacity = "0.4";
});

sec4.addEventListener("mouseout", function () {
  img4.style.opacity = "0";
});
}

function blurAnimation(){
  gsap.registerPlugin(ScrollTrigger);
  
	let tl = gsap.timeline({
	  scrollTrigger: {
		trigger: ".page4",
		pin: true,
		start: '40% 40%',
		end: '200% 50%',
		scrub: true,
	  }
	});

  tl.to(".achive-box1",{
    opacity: 1,
	  filter: "blur(0px)"
  })
  tl.to(".achive-box2",{
    opacity: 1,
	  filter: "blur(0px)"
  })
  tl.to(".achive-box3",{
    opacity: 1,
	  filter: "blur(0px)"
  })
  tl.to(".achive-box4",{
    opacity: 1,
	  filter: "blur(0px)"
  })
  tl.to(".achive-desc",{
    opacity: 1,
	  filter: "blur(0px)"
  })
}

function page5(){

  gsap.registerPlugin(ScrollTrigger);
  
	let tl = gsap.timeline({
	  scrollTrigger: {
		trigger: ".page6",
    start:"top 40%",
    end:"bottom 120%",
		scrub: true,
	  }
	});

  tl.to(".cr-1",{ 
    duration:1,
    opacity:1
})
  tl.to(".cr-2",{
    duration:1,
    opacity:1
})
  tl.to(".cr-3",{
    duration:1,
    opacity:1
})
  tl.to(".cr-4",{
    duration:1,
    opacity:1
})
  tl.to(".cr-5",{
    duration:1,
    opacity:1
})
  tl.to(".cr-6",{
    duration:1,
    opacity:1
})
}

function page6(){

  gsap.registerPlugin(ScrollTrigger);
  
	let tl = gsap.timeline({
	  scrollTrigger: {
		trigger: ".work-3-4",
    start:"top 50%",
    end:"bottom 55%",
		// scrub:true,
    duration:1,

	  }
	});

  tl.to(".work-1",{ 
    opacity:1
})
  tl.to(".work-2",{
    opacity:1
})
  tl.to(".work-3",{
    opacity:1
})
  tl.to(".work-4",{
    opacity:1
})

}

page6()

gsap.to(".top-text3",{
  scrollTrigger:{
  trigger:".work-3-4",
  // scroller:".main",
  // markers:true,
  start:"top 40%",
  end:"bottom 70%",
  duration:15,
  scrub:true,
  },
  y:0
  
})



function cursor(){
let cursor = document.querySelector(".cursor");
let pointer = document.querySelector(".pointer");
let main  = document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      ease: "power2.out"
  })
})
main.addEventListener("mousemove",function(dets){
  gsap.to(pointer,{
      x:dets.x,
      y:dets.y,
      ease: "power2.out"
  })
})

}

function servicePointer() {
  let services = document.querySelectorAll(".service");
  let pointer = document.querySelector(".pointer");
  let cursor = document.querySelector(".cursor");

  services.forEach(service => {
      service.addEventListener("mouseover", () => {
          pointer.style.display = "block";
          cursor.style.display = "none";
      });

      service.addEventListener("mouseout", () => {
          pointer.style.display = "none";
          cursor.style.display = "block"
      });
  });
}

servicePointer();

function morePointer() {
  let mores = document.querySelectorAll(".mores");
  let pointer = document.querySelector(".pointer");
  let cursor = document.querySelector(".cursor");

  mores.forEach(more => {
    more.addEventListener("mouseover", () => {
          pointer.style.display = "block";
          cursor.style.display = "none"

      });

      more.addEventListener("mouseout", () => {
          pointer.style.display = "none";
          cursor.style.display = "block"
      });
  });
}

morePointer();


cursor()
page6()
page5()
blurAnimation()
landingpage()
imgReveal()

