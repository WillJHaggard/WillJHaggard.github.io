


// Debounce
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}












//Get Blocks
var block = document.getElementsByClassName('block');
var header = document.querySelector('.header');
var logoContainer = header.querySelector('.container');

var firstIsTurned = false;
var secondIsTurned = false;
var lines1IsAnimating = false;
var lines2IsAnimating = false;


for (var j = 0; j < block.length; j++) {

    if (j === 0 || j === 2 || j === 5 || j === 6 || j === 7) {
        var pin = document.createElement('div');
        pin.className = 'pin';
        pin.style.opacity = 0;
        block[j].querySelector('.map').appendChild(pin);

        var time = document.createElement('span');
        var timeData = block[j].getAttribute('data-time');
        time.className = 'time';
        time.innerHTML = timeData;
        time.style.opacity = 0;
        pin.appendChild(time);
    }

    if (j === 0) {
        pin.style.top = 42 + '%';
        pin.style.left = 40.5 + '%';
    }

    if (j === 2) {
        pin.style.top = 52 + '%';
        pin.style.left = 41.5 + '%';
    }

    if (j === 5) {
        pin.style.top = 65 + '%';
        pin.style.left = 56 + '%';
    }

    if (j === 6) {
        pin.style.top = 42 + '%';
        pin.style.left = 29 + '%';
    }

    if (j === 7) {
        pin.style.top = 54 + '%';
        pin.style.left = 47 + '%';
    }
}

//Animate menu on hover
var topMenu = document.querySelector('.menu-block');
var menuPress = topMenu.querySelector('.press');
var menuDownload = topMenu.querySelector('.download');
var menuTwitter = topMenu.querySelector('.twitter');


// menuPress.addEventListener('mouseover', pressHover, false);
// menuDownload.addEventListener('mouseover', downloadHover, false);
// menuTwitter.addEventListener('mouseover', twitterHover, false);

// menuPress.addEventListener('mouseout', unhover, false);
// menuDownload.addEventListener('mouseout', unhover, false);
// menuTwitter.addEventListener('mouseout', unhover, false);


// Lines

var lineData = [
    {
        positionx : 42,
        positiony : 35,
        rotation : -97,
        width : 16,
        image : null
    },
    {
        positionx : 14,
        positiony : 100,
        rotation : -10.5,
        width : 29,
        image : null
    },
    {
        positionx : 43,
        positiony : 87,
        rotation : -123,
        width : 15.5,
        image : null
    },
    {
        positionx : 35,
        positiony : 55,
        rotation : -33,
        width : 10,
        image : null
    },
    {
        positionx : 43.2,
        positiony : 41,
        rotation : -123,
        width : 20,
        image : null
    },
    {
        positionx : 38,
        positiony : 100,
        rotation : -120,
        width : 14.9,
        image : null
    },
    {
        positionx : 30,
        positiony : 82.5,
        rotation : -32,
        width : 33,
        image : null
    },
    {
        positionx : 58,
        positiony : 58,
        rotation : 58,
        width : 14.2,
        image : null
    },
    {
        positionx : 65.2,
        positiony : 74.5,
        rotation : -32,
        width : 28.2,
        image : null
    },
    {
        positionx : 89,
        positiony : 54,
        rotation : 56,
        width : 16,
        image : null
    },
    {
        positionx : 97.5,
        positiony : 72.2,
        rotation : -31,
        width : 4,
        image : null
    },
    {
        positionx : 0,
        positiony : 38,
        rotation : 65,
        width : 47,
        image : null
    },
    {
        positionx : 18.5,
        positiony : 74.5,
        rotation : -26,
        width : 38,
        image : null
    },
    {
        positionx : 54,
        positiony : 61,
        rotation : -116,
        width : 80,
        image : null
    },
    {
        positionx : 52.5,
        positiony : 100,
        rotation : -116,
        width : 33,
        image : null
    },
    {
        positionx : 38,
        positiony : 73,
        rotation : -24,
        width : 23,
        image : null
    },
    {
        positionx : 59,
        positiony : 65,
        rotation : -114,
        width : 22,
        image : null
    }
];

var loadcounter = 0;
var counter = 0;
var loops = lineData.length;

for (counter; counter < loops; counter++)
{
    var currentLineData = lineData[counter];
    var image = document.createElement('div');
    image.style.left = currentLineData.positionx + '%';
    image.style.top = currentLineData.positiony + '%';
    image.style.position = 'absolute';
    image.style.zIndex = 5;

    image.style.webkitTransform = 'rotate(' + currentLineData.rotation + 'deg)';
    image.style.MozTransform = 'rotate(' + currentLineData.rotation + 'deg)';
    image.style.msTransform = 'rotate(' + currentLineData.rotation + 'deg)';
    image.style.OTransform = 'rotate(' + currentLineData.rotation + 'deg)';
    image.style.transform = 'rotate(' + currentLineData.rotation + 'deg)';

    image.style.webkitTransformOrigin = 0;
    image.style.MozTransformOrigin = 0;
    image.style.msTransformOrigin = 0;
    image.style.OTransformOrigin = 0;
    image.style.transformOrigin = 0;


    TweenMax.to(image, 0, {
        css: {
            opacity: .5
        }
    });

    image.style.width = 0;
    image.style.height = 5 + 'px';
    image.style.backgroundColor = '#ee5e39';
    image.style.zIndex = 1;

    currentLineData.image = image;
}

var curBlock = 0;

for (var j = 0; j < block.length; j++) {

    if (j === 0 || j === 2 || j === 5 || j === 6 || j === 7) {

        if (j === 2) {
            block[j].querySelector('.map').appendChild(lineData[curBlock].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 1].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 2].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 3].image);

            curBlock += 4;
        } else if (j === 5) {
            block[j].querySelector('.map').appendChild(lineData[curBlock].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 1].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 2].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 3].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 4].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 5].image);

            curBlock += 6;
        } else if (j === 6) {
            block[j].querySelector('.map').appendChild(lineData[curBlock].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 1].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 2].image);
            curBlock += 3;
        } else if (j === 7) {
            block[j].querySelector('.map').appendChild(lineData[curBlock].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 1].image);
            block[j].querySelector('.map').appendChild(lineData[curBlock + 2].image);
            curBlock += 3;
        } else {

            block[j].querySelector('.map').appendChild(lineData[curBlock].image);
            curBlock ++;
        }
    }

}


// // these three hover functions using tweenmax are for the three top buttons (not nav)
// function pressHover() {

//     var ico = this.querySelector('.ico');
//     var icoHov = this.querySelector('.hover-bkg');
//     var text = this.querySelector('span');
//     text.style.display = 'block';

//     TweenMax.to(ico, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(icoHov, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(text, .2, {
//         y: -8,
//         ease: Quad.easeOut
//     });
// };


// function downloadHover() {

//     var ico = this.querySelector('.ico');
//     var icoHov = this.querySelector('.hover-bkg');
//     var text = this.querySelector('span');
//     text.style.display = 'block';

//     TweenMax.to(ico, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(icoHov, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(text, .2, {
//         y: -8,
//         ease: Quad.easeOut
//     });
// };


// function twitterHover() {

//     var ico = this.querySelector('.ico');
//     var icoHov = this.querySelector('.hover-bkg');
//     var text = this.querySelector('span');
//     text.style.display = 'block';

//     TweenMax.to(ico, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(icoHov, .2, {
//         y: 8,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(text, .2, {
//         y: -8,
//         ease: Quad.easeOut
//     });

// };


// function unhover() {
//     var ico = this.querySelector('.ico');
//     var icoHov = this.querySelector('.hover-bkg');
//     var text = this.querySelector('span');
//     text.style.display = 'block';

//     TweenLite.killTweensOf(ico);
//     TweenLite.killTweensOf(text);

//     TweenMax.to(ico, .2, {
//         y: 0,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(icoHov, .2, {
//         y: 0,
//         ease: Quad.easeOut
//     });

//     TweenMax.to(text, .2, {
//         y: 0,
//         ease: Quad.easeOut
//     });
// };


//Section 3
var section3 = document.querySelector('.section-3');
var pen = section3.querySelector('.pen');
var phone = section3.querySelector('.phone');
var notes = section3.querySelector('.notes');


//Section 4
var section4 = document.querySelector('.section-4');
var phone4 = section4.querySelector('.phone');
var text1 = section4.querySelector('.textbox-1');
var text2 = section4.querySelector('.textbox-2');


//Section 5
var section5 = document.querySelector('.section-5');
var phone5 = section5.querySelector('.phone');
var passport = section5.querySelector('.passport');
var earbuds = section5.querySelector('.earbuds');
var dime1 = section5.querySelector('.dime-1');
var dime2 = section5.querySelector('.dime-2');



function checkScroll() {

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return;
    }


    var yPos = window.pageYOffset + (window.innerHeight / 2);
    var yPosBlock = window.pageYOffset;

    var del = 0.4;
    var dur = 0.15;

    if (yPosBlock > 985 - 100) {

        // console.log(1)

        TweenMax.to(block[0], 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[0].querySelector('.map'), 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            onStart: function() {
                firstIsTurned = true;
                animateLines1();
            }
        });

        TweenMax.to(block[2], 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 0.2
        });

        TweenMax.to(block[2].querySelector('.map'), 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 0.2
        });

        function animateLines1() {

            if (lines1IsAnimating === true) {
                return;
            }

            lines1IsAnimating = true;


            for (var j = 0; j < 5; j++) {

                TweenMax.killTweensOf(lineData[j].image);
                lineData[j].image.style.width = 0;

            }


            for (var j = 0; j < 5; j++) {

                if (firstIsTurned === true) {


                    TweenMax.to(lineData[j].image, dur, {
                        css: {width: lineData[j].width + '%'},
                        delay: del,
                        ease: Linear.easeNone
                    });

                    del = del + 0.2;


                }

            }



            // TweenMax.to(lineData[1].image, dur, {
            //  css: {width: lineData[1].width + '%'},
            //  delay: (del + .3),
            //  ease: Linear.easeNone
            // });

            // TweenMax.to(lineData[2].image, dur, {
            //  css: {width: lineData[2].width + '%'},
            //  delay: (del + (.3 * 2)),
            //  ease: Linear.easeNone
            // });

            // TweenMax.to(lineData[3].image, dur, {
            //  css: {width: lineData[3].width + '%'},
            //  delay: (del + (.3 * 3)),
            //  ease: Linear.easeNone
            // });

            // TweenMax.to(lineData[4].image, dur, {
            //  css: {width: lineData[4].width + '%'},
            //  delay: (del + (.3 * 4)),
            //  ease: Linear.easeNone
            // });

        }


    } else {


        TweenMax.to(block[0], 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            onStart: function() {
                firstIsTurned = false;
                lines1IsAnimating = false;

                TweenMax.to(block[0].querySelector('.map'), 0.6, {
                    rotationX: -180,
                    transformOrigin: 50 +'%',
                    transformPerspective: 4000
                });
            }
        });



        TweenMax.to(block[2], 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[2].querySelector('.map'), 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        for (var j = 0; j < 5; j++) {

            TweenMax.killTweensOf(lineData[j].image);
            lineData[j].image.style.width = 0;

        }

        // TweenMax.killTweensOf(lineData[0]);
        // TweenMax.killTweensOf(lineData[1]);
        // TweenMax.killTweensOf(lineData[2]);
        // TweenMax.killTweensOf(lineData[3]);
        // TweenMax.killTweensOf(lineData[4]);

        // lineData[0].image.style.width = 0;
        // lineData[1].image.style.width = 0;
        // lineData[2].image.style.width = 0;
        // lineData[3].image.style.width = 0;
        // lineData[4].image.style.width = 0;



    }

    if (yPosBlock >= block[2].offsetTop) {



    } else {

    }

    if (yPosBlock >= (985 + block[0].clientHeight + block[1].clientHeight) - 100) {


        TweenMax.to(block[5], 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            onStart: function() {
                animateLines2();
                secondIsTurned = true;
            }
        });

        TweenMax.to(block[5].querySelector('.map'), 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[6], 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 0.9
        });

        TweenMax.to(block[6].querySelector('.map'), 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 0.9
        });

        TweenMax.to(block[7], 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 1.3
        });

        TweenMax.to(block[7].querySelector('.map'), 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            delay: 1.3
        });

        //Lines

        //setTimeout(function() {animateLines2()}, 100);

        function animateLines2 () {

            del = 0.1;


            if (lines2IsAnimating === true) {
                return;
            }


            for (var j = 5; j < 17; j++) {

                TweenMax.killTweensOf(lineData[j].image);
                lineData[j].image.style.width = 0;

            }

            lines2IsAnimating = true;

            TweenMax.to(lineData[5].image, (dur / 2), {
                css: {width: lineData[5].width + '%'},
                delay: del,
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[6].image, dur, {
                css: {width: lineData[6].width + '%'},
                delay: (del + 0.3),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[7].image, (dur / 2), {
                css: {width: lineData[7].width + '%'},
                delay: (del + (0.5)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[8].image, dur, {
                css: {width: lineData[8].width + '%'},
                delay: (del + (0.6)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[9].image, (dur /2), {
                css: {width: lineData[9].width + '%'},
                delay: (del + (0.7)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[10].image, (dur / 2), {
                css: {width: lineData[10].width + '%'},
                delay: (del + (0.8)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[11].image, (dur / 2), {
                css: {width: lineData[11].width + '%'},
                delay: (del + (1)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[12].image, (dur / 2), {
                css: {width: lineData[12].width + '%'},
                delay: (del + (1.1)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[13].image, (dur * 1.7), {
                css: {width: lineData[13].width + '%'},
                delay: (del + (1.2)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[14].image, (dur / 2), {
                css: {width: lineData[14].width + '%'},
                delay: (del + (1.6)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[15].image, dur, {
                css: {width: lineData[15].width + '%'},
                delay: (del + (1.8)),
                ease: Linear.easeNone
            });

            TweenMax.to(lineData[16].image, (dur / 2), {
                css: {width: lineData[16].width + '%'},
                delay: (del + (2)),
                ease: Linear.easeNone
            });
        }

    } else {


        TweenMax.killTweensOf(block[5]);
        TweenMax.killTweensOf(block[5].querySelector('.map'));

        TweenMax.killTweensOf(block[6]);
        TweenMax.killTweensOf(block[6].querySelector('.map'));

        TweenMax.killTweensOf(block[7]);
        TweenMax.killTweensOf(block[7].querySelector('.map'));

        TweenMax.to(block[5], 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000,
            onStart: function() {
                secondIsTurned = false;
                lines2IsAnimating = false;
            }
        });

        TweenMax.to(block[5].querySelector('.map'), 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[6], 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[6].querySelector('.map'), 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[7], 0.6, {
            rotationX: 0,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        TweenMax.to(block[7].querySelector('.map'), 0.6, {
            rotationX: -180,
            transformOrigin: 50 +'%',
            transformPerspective: 4000
        });

        //Lines

        TweenMax.killTweensOf(lineData[5].image);
        TweenMax.killTweensOf(lineData[6].image);
        TweenMax.killTweensOf(lineData[7].image);
        TweenMax.killTweensOf(lineData[8].image);
        TweenMax.killTweensOf(lineData[9].image);
        TweenMax.killTweensOf(lineData[10].image);
        TweenMax.killTweensOf(lineData[11].image);
        TweenMax.killTweensOf(lineData[12].image);
        TweenMax.killTweensOf(lineData[13].image);
        TweenMax.killTweensOf(lineData[14].image);
        TweenMax.killTweensOf(lineData[15].image);
        TweenMax.killTweensOf(lineData[16].image);

        lineData[5].image.style.width = 0;
        lineData[6].image.style.width = 0;
        lineData[7].image.style.width = 0;
        lineData[8].image.style.width = 0;
        lineData[9].image.style.width = 0;
        lineData[10].image.style.width = 0;
        lineData[11].image.style.width = 0;
        lineData[12].image.style.width = 0;
        lineData[13].image.style.width = 0;
        lineData[14].image.style.width = 0;
        lineData[15].image.style.width = 0;
        lineData[16].image.style.width = 0;

    }

    if (yPosBlock >= block[6].offsetTop) {


    } else {


    }

    if (yPosBlock >= block[7].offsetTop) {



    } else {

    }


    if (yPos >= (section3.offsetTop)) {



        TweenMax.to(pen, 0.4, {
            css: {left: 90 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.2
        });

        TweenMax.to(phone, 0.4, {
            css: {left: 184 + 'px'},
            ease: Quad.EaseOut
        });

        TweenMax.to(notes, 0.4, {
            css: {right: -100 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.1
        });

    }


    if (yPos >= (section4.offsetTop)) {

        TweenMax.to(phone4, 0.4, {
            css: {left: 50 + '%', marginLeft: -130 + 'px'},

            ease: Quad.EaseOut
        });

        TweenMax.to(text1, 0.5, {
            css: {opacity: 1},
            ease: Linear.EaseNone
        });

        TweenMax.to(text2, 0.5, {
            css: {opacity: 1},
            ease: Linear.EaseNone,
            delay: 0.5
        });


            // var vid = document.getElementById('video');


            // vid.play();


    }


    if (yPos >= (section5.offsetTop)) {

        TweenMax.to(phone5, 0.4, {
            css: {left: phone5.offsetWidth - 170 + 'px'},
            ease: Quad.EaseOut
        });

        TweenMax.to(passport, 0.5, {
            css: {right: 50 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.3
        });

        TweenMax.to(earbuds, 0.4, {
            css: {bottom: -80 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.2
        });

        TweenMax.to(dime1, 0.4, {
            css: {bottom: -40 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.4
        });

        TweenMax.to(dime2, 0.4, {
            css: {bottom: -35 + 'px'},
            ease: Quad.EaseOut,
            delay: 0.5
        });

    }

    for (var j = 0; j < block.length; j++) {

        // if (j === 0 || j === 2 || j === 5 || j === 6 || j === 7) {
        //  var pin = block[j].querySelector('.pin');
        //  var time = pin.querySelector('.time');


        //  if (yPosBlock >= block[j].offsetTop) {

        //      pin.style.display = 'block';

        //      TweenMax.to(pin, 0.2, {
        //          y: -30,
        //          opacity: 1,
        //          delay: 0.4,
        //          ease: Quad.easeOut
        //      });

        //      TweenMax.to(time, 0.4, {
        //          opacity: 1,
        //          x: -30,
        //          delay: .6
        //      });

        //      TweenMax.to(time, 0.4, {
        //          scaleY: -1
        //      });

        if (j === 0) {
            var pin = block[j].querySelector('.pin');
            var pin2 = block[2].querySelector('.pin');
            var time = pin.querySelector('.time');
            var time2 = pin2.querySelector('.time');


            if (yPosBlock >= 985 - 100) {



                pin.style.display = 'block';

                TweenMax.to(pin, 0.2, {
                    y: -30,
                    opacity: 1,
                    delay: 0.4,
                    ease: Quad.easeOut
                });

                TweenMax.to(time, 0.4, {
                    opacity: 1,
                    x: -30,
                    delay: 0.5
                });

                TweenMax.to(time, 0.4, {
                    scaleY: -1
                });

                pin2.style.display = 'block';

                TweenMax.to(pin2, 0.2, {
                    y: -30,
                    opacity: 1,
                    delay: 1.2,
                    ease: Quad.easeOut
                });

                TweenMax.to(time2, 0.4, {
                    opacity: 1,
                    x: -30,
                    delay: 1.3
                });

                TweenMax.to(time2, 0.4, {
                    scaleY: -1
                });

            } else {

                TweenMax.killTweensOf(pin);
                TweenMax.killTweensOf(pin2);
                TweenMax.killTweensOf(time);
                TweenMax.killTweensOf(time2);

                pin.style.display = 'none';

                TweenMax.to(pin, 0, {
                    y: 0,
                    opacity: 0
                });

                TweenMax.to(time, 0, {
                    opacity: 0,
                    x: 0
                });

                pin2.style.display = 'none';

                TweenMax.to(pin2, 0, {
                    y: 0,
                    opacity: 0
                });

                TweenMax.to(time2, 0, {
                    opacity: 0,
                    x: 0
                });
            }

        } else if (j === 5) {
            var pin = block[j].querySelector('.pin');
            var pin2 = block[6].querySelector('.pin');
            var pin3 = block[7].querySelector('.pin');
            var time = pin.querySelector('.time');
            var time2 = pin2.querySelector('.time');
            var time3 = pin3.querySelector('.time');


            if (yPosBlock >= (985 + block[0].clientHeight + block[1].clientHeight) - 100) {

                pin.style.display = 'block';

                TweenMax.to(pin, 0.2, {
                    y: -30,
                    opacity: 1,
                    delay: 0.5,
                    ease: Quad.easeOut
                });

                TweenMax.to(time, 0.4, {
                    opacity: 1,
                    x: -30,
                    delay: 0.6
                });

                TweenMax.to(time, 0.4, {
                    scaleY: -1
                });

                pin2.style.display = 'block';

                TweenMax.to(pin2, 0.2, {
                    y: -30,
                    opacity: 1,
                    delay: 1.4,
                    ease: Quad.easeOut
                });

                TweenMax.to(time2, 0.4, {
                    opacity: 1,
                    x: -30,
                    delay: 1.5
                });

                TweenMax.to(time2, 0.4, {
                    scaleY: -1
                });


                pin3.style.display = 'block';

                TweenMax.to(pin3, 0.2, {
                    y: -30,
                    opacity: 1,
                    delay: 2.2,
                    ease: Quad.easeOut
                });

                TweenMax.to(time3, 0.4, {
                    opacity: 1,
                    x: -30,
                    delay: 2.3
                });

                TweenMax.to(time3, 0.4, {
                    scaleY: -1
                });

            } else {

                TweenMax.killTweensOf(pin);
                TweenMax.killTweensOf(pin2);
                TweenMax.killTweensOf(pin3);
                TweenMax.killTweensOf(time);
                TweenMax.killTweensOf(time2);
                TweenMax.killTweensOf(time3);

                pin.style.display = 'none';

                TweenMax.to(pin, 0, {
                    y: 0,
                    opacity: 0
                });

                TweenMax.to(time, 0, {
                    opacity: 0,
                    x: 0
                });

                pin2.style.display = 'none';

                TweenMax.to(pin2, 0, {
                    y: 0,
                    opacity: 0
                });

                TweenMax.to(time2, 0, {
                    opacity: 0,
                    x: 0
                });

                pin3.style.display = 'none';

                TweenMax.to(pin3, 0, {
                    y: 0,
                    opacity: 0
                });

                TweenMax.to(time3, 0, {
                    opacity: 0,
                    x: 0
                });
            }

        }

    }

    logoContainer.style.marginBottom = 100 + (window.pageYOffset/2) + 'px';
    logoContainer.style.opacity = 1-(window.pageYOffset/100);

};



// var div = document.querySelector('.tween-test');


// TweenMax.to(div, 1.5, {backgroundColor:'#ccc'});
window.addEventListener('resize', debounce(checkScroll, 50), false);
window.addEventListener('scroll', debounce(checkScroll, 50), false);
