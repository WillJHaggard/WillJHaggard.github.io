var loader = document.querySelector('.page-loader');

hideElements();

var imgPerc = 0;

var imgArr = [
    'section-1/menu-icons.png',
    'section-1/header-image.jpg',
    'section-2/pin.png',
    'section-2/image-1.jpg',
    'section-2/image-2.jpg',
    'section-2/image-3.jpg',
    'section-2/image-4.jpg',
    'section-2/image-5.jpg',
    'section-3/bkg.jpg',
    'section-3/pen.png',
    'section-3/mobile-fallback-1.png',
    'section-3/notes.png',
    'section-4/bkg.jpg',
    'section-4/phone-section-4.png',
    'section-4/icons.png',
    'section-5/bkg.jpg',
    'section-5/phone-section-5.png',
    'section-5/passport.png',
    'section-5/earbuds.png',
    'section-5/dime-1.png',
    'section-5/dime-2.png',
    'section-6/arrow.png',
    'section-7/background.jpg'
];

for (var j = 0; j < imgArr.length; j++) {
    var img = new Image();
    img.src = '../images/' + imgArr[j];

    img.onload = function() {
        loadPerc();
    }
}

function loadPerc() {

    var diff = imgPerc;

    imgPerc += (100 / imgArr.length);

    TweenMax.to(loader, 0.1, {
        css: {width: imgPerc + '%'},
        overwrite: false,
        ease: Linear.easeNone,
    });



}

window.onload = function() {
    TweenMax.to(loader, .2, {
        css: {width: 100 + '%'},
        overwrite: false,
        ease: Linear.easeNone,
    });

    setTimeout(function() {
        document.querySelector('.page-wrap').style.opacity = 1;
        loader.style.opacity = 0;
        animateInElements();
    },100);
}

// Animate in on load




function hideElements() {

    var tab = document.querySelector('.nav');
    var header = document.querySelector('.header');
    var logo = header.querySelector('.logo');
    var logoText = header.querySelector('span');

    var section1 = document.querySelector('.section-1');
    var topBlock = section1.querySelector('.top-block');
    var box = section1.querySelector('.box');
    var menuIcos = section1.getElementsByClassName('menu-alt');

    var allSections = document.querySelector('.load-wrap');

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        TweenMax.to(tab, 0, {
            css: {
                transform: 'rotate(-45deg)',
                right: window.innerWidth + 'px',
                top: -(window.innerHeight - 77.5) + 'px'
            }
        });
    } else {
        TweenMax.to(tab, 0, {
            css: {transform: 'rotate(90deg)', }
        });
    }

    tab.style.top = -(window.innerHeight) + 'px';
    tab.style.opacity = 0;


    // logo.style.top = -(35 + logo.offsetHeight) + 'px';
    // logo.style.left = -35 + 'px';
    // logo.style.opacity = 0;

    // TweenMax.to(logo, 0, {
    //     css: {transform: 'rotate(-20deg)'}
    // });


    logoText.style.opacity = 0;
    logoText.style.left = 150 + 'px';


    topBlock.style.marginTop = 200 + 'px';
    topBlock.style.opacity = 0;

    TweenMax.to(topBlock, 0, {
        rotationX: -30,
        transformOrigin: 50 +'%',
        transformPerspective: 4000
    });


    box.style.opacity = 0;

    TweenMax.to(box, 0, {
        css: {transform: 'rotate(20deg)'}
    });

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        for (var j = 0; j < menuIcos.length; j++) {
            menuIcos[j].style.position = 'absolute';
            menuIcos[j].style.left = (33 * j) + '%';
            menuIcos[j].style.top = (menuIcos[j].offsetHeight) + 'px';
            menuIcos[j].style.opacity = 0;
        }

    } else {
        for (var j = 0; j < menuIcos.length; j++) {
            menuIcos[j].style.position = 'absolute';
            menuIcos[j].style.left = (menuIcos[j].offsetWidth * j) + 'px';
            menuIcos[j].style.top = 25 + 'px';
            menuIcos[j].style.opacity = 0;
        }
    }

    allSections.style.opacity = 0;
};


function animateInElements() {

    var tab = document.querySelector('.nav');
    var header = document.querySelector('.header');
    var logo = header.querySelector('.logo');
    var logoText = header.querySelector('span');

    var section1 = document.querySelector('.section-1');
    var topBlock = section1.querySelector('.top-block');
    var box = section1.querySelector('.box');
    var menuIcos = section1.getElementsByClassName('menu-alt');

    var allSections = document.querySelector('.load-wrap');

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        TweenMax.to(tab, .5, {
            css: {
                top: -(window.innerHeight - 62) + 'px',
                right: (window.innerWidth - 50) + 'px',
                opacity: 1,
                delay: .2
            }
        });
    } else {
        TweenMax.to(tab, .5, {
            css: {
                transform: 'rotate(45deg)',
                top: -(window.innerHeight - 50) + 'px',
                opacity: 1,
                delay: .2
            }
        });
    }


    // TweenMax.to(logo, .5, {
    //     css: {
    //         transform: 'rotate(0deg)',
    //         opacity: 1,
    //         top: 0,
    //         left: 0
    //     },
    //     delay: .4
    // });


    TweenMax.to(logoText, .5, {
        css: {
            opacity: 1,
            left: 0
        },
        delay: .3
    });


    TweenMax.to(topBlock, .5, {
        css: {opacity: 1, marginTop: 0},
        delay: .7
    });

    TweenMax.to(topBlock, .5, {
        rotationX: 0,
        transformOrigin: 50 +'%',
        transformPerspective: 4000,
        delay: .7
    });


    TweenMax.to(box, .5, {
        css: {transform: 'rotate(0deg)', opacity: 1},
        delay: .8
    });


    var del = .8;

    for (var j = 0; j < menuIcos.length; j++) {

        TweenMax.to(menuIcos[j], .5, {
            css: {opacity: 1, top: 0},
            delay: del,
            ease: Quad.easeOut
        });

        del += .1;
    }


    TweenMax.to(allSections, .5, {
        css: {opacity: 1},
        delay: 1.4
    });
};
