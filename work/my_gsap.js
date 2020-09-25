
function animeMobile() {
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
    let home_ad_brend_560 = document.querySelector('.home_ad_brend_560');

    if (screenMode(home_ad_brend_560, "display") != "none") {
        tl.from(logo, 1, {left:"632px", ease:Back.easeOut})
        .staggerFrom(textChars, myTime, {top:"-135vw", rotation: myRotate, autoAlpha: alpha, ease:easeOut}, 0.2);
        console.log("Выполнил функцию \"animeMobile\"");
    } else console.log("Это НЕ ПОНЯТНО ЧТО");
        
    // tl.from(logo, 1, {left:"632px", ease:Back.easeOut})
    // .staggerFrom(textChars, myTime, {top:"-135vw", rotation: myRotate, autoAlpha: alpha, ease:easeOut}, 0.2);
    // console.log("Выполнил функцию \"animeMobile\"");
}

function animeDesktop() {
    console.log("Выполнил функцию \"animeDesktop\"");
}

function screenMode (selector, property) {
    return window.getComputedStyle(selector,null).getPropertyValue(property);
}

window.onload = function(){
    let home_ad_brend_1080 = document.querySelector('.home_ad_brend_1080');
    let home_ad_brend_560 = document.querySelector('.home_ad_brend_560');
 
    console.log(screenMode(home_ad_brend_1080, "display"));
    console.log(screenMode(home_ad_brend_560, "display"));

    if (screenMode(home_ad_brend_1080, "display") != "none") {
        console.log("Это широкий экран");
        animeDesktop();
    } else if (screenMode(home_ad_brend_560, "display") != "none") {
        console.log("Это узкий, MODILE экран");
        animeMobile();
        // setTimeout(animeMobile, 7000);
        // setInterval(() => {
        //     console.log("Повторюшка");
        // }, 3000);
        setInterval(() => {
            animeMobile();
        }, 6000);
    } else console.log("Это НЕ ПОНЯТНО ЧТО");

    console.log("Закрузил");
    console.log(screenMode(home_ad_brend_560, "display"));
 
}

