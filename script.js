Shery.imageEffect(".back",{style: 5,config:{"a":{"value":1.5,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9718919083878801},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.38,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true})
var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function () {
        if(!animating){
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0],{ top:"100%"} );
                    animating = false;
                },
            });
            index === h1s.length-1 ? (index=0) : index++
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }

    });

})
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const popular = document.querySelector(".popular");
document.querySelectorAll(".popular").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});


const popular2 = document.querySelector(".popular2");
document.querySelectorAll(".popular2").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular2").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular3 = document.querySelector(".popular3");
document.querySelectorAll(".popular3").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular3").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular4 = document.querySelector(".popular4");
document.querySelectorAll(".popular4").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular4").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular5 = document.querySelector(".popular5");
document.querySelectorAll(".popular5").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular5").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular6 = document.querySelector(".popular6");
document.querySelectorAll(".popular6").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular6").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular7 = document.querySelector(".popular7");
document.querySelectorAll(".popular7").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular7").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular8 = document.querySelector(".popular8");
document.querySelectorAll(".popular8").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular8").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular9 = document.querySelector(".popular9");
document.querySelectorAll(".popular9").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular9").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

const popular10 = document.querySelector(".popular10");
document.querySelectorAll(".popular10").forEach((item) => {
  item.classList.remove("opened");
  });
document.querySelectorAll(".popular10").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});



