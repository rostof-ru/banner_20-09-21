
// alert("Привет, МИР !!! GSAP2");

// window.onload = function(){
//     var logo = document.getElementById("my-logo");
//     TweenLite.from(logo, 1, {left:"632px"});
// }

window.onload = function(){
    const logo = document.getElementById("my-logo");
    const telefon = document.getElementById("my-telefon");
    const restoran = document.getElementById("my-restoran");
    const sad = document.getElementById("my-chehov-sad");
    const my_overlay = document.getElementById("my-overlay");
    const overlay = document.getElementById("my-overlay-bottom");
    const text = new SplitText( telefon );
    const textChars = text.chars;
    var delayValue = 0.2;
    var delayPlus = 0.1;
    var delayMinus = '-=1.8';
    // var easeOut = Back.easeOut;
    // var easeOut = Power4.easeOut;
    var easeOut = Bounce.easeOut;
    var alpha = 0.3;
    var myTime = 0.9;
    var myRotate = -160;
    var tl = new TimelineLite();

    // TweenLite.from(logo, 1, {left:"632px", ease:Back.easeOut});
    // TweenLite.from(textChars[0], 2, {left:"632px", delay:delayValue, ease:easeOut});
    // TweenLite.from(textChars[1], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[2], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[3], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[4], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[5], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[6], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[7], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[8], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[9], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[10], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(textChars[11], 2, {left:"632px", delay:(delayValue += delayPlus), ease:easeOut});
    // TweenLite.from(restoran, 4, {opacity: 0, ease:Back.easeOut});
    // TweenLite.from(sad, 3, {opacity: 0, ease:Back.easeOut});
    // TweenLite.from(my_overlay, 4, {opacity: 0, ease:Back.easeOut});
    // TweenLite.from(overlay, 4, {opacity: 0, ease:Back.easeOut});
    // TweenLite.staggerFrom( textChars, 0.5, { opacity: 0, rotation: -180, ease: easeOut }, 0.02);

    // tl.from(logo, 1, {left:"632px", ease:Back.easeOut});
    // tl.from(textChars[0], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[1], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[2], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[3], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[4], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[5], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[6], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[7], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[8], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[9], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[10], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.from(textChars[11], 2, {left:"132vw", ease:easeOut}, delayMinus);
    // tl.staggerFrom(textChars, myTime, {left:"132vw", top:"-35vw", rotation: myRotate, autoAlpha: alpha, ease:easeOut}, 0.2);
    tl.staggerFrom(textChars, myTime, {top:"-135vw", rotation: myRotate, autoAlpha: alpha, ease:easeOut}, 0.2);
}

