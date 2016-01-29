var nav = document.querySelector('.nav');

var navIsDown = false;

if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    nav.style.right = (window.innerWidth - 50) + 'px';

    window.onresize = function(event) {
        if (navIsDown === false) {
            nav.style.top = -(window.innerHeight - 62) + 'px';
            nav.style.right = (window.innerWidth - 50) + 'px';
        }
    };

} else {

    nav.style.right = (window.innerWidth / 1.2) + 'px';

    window.onresize = function(event) {
        if (navIsDown === false) {
            nav.style.top = -(window.innerHeight - 50) + 'px';
            nav.style.right = (window.innerWidth / 1.2) + 'px';
        }
    };

}


function navClick(){

    if (navIsDown === false) {

        navIsDown = true;

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            TweenMax.to(nav, .4, {
                css: {top: 0, right: 0, transform: 'rotate(0deg)'},
                ease: Expo.easeOut,
                delay: 0.4
            });
        } else {
            TweenMax.to(nav, .4, {
                css: {top: 0, right: 0, transform: 'rotate(0deg)'},
                ease: Expo.easeOut,
                delay: 0.4
            });
        }


    } else if (navIsDown === true) {
        navIsDown = false;


        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            TweenMax.to(nav, .4, {
                css: {top: -(window.innerHeight - 62) + 'px', right: (window.innerWidth - 50) + 'px', transform: 'rotate(-45deg)'},
                ease: Expo.easeOut,
                delay: 0.4
            });
        } else {
            TweenMax.to(nav, .4, {
                css: {top: -(window.innerHeight - 50) + 'px', right: (window.innerWidth / 1.2) + 'px', transform: 'rotate(45deg)'},
                ease: Expo.easeOut,
                delay: 0.4
            });
        }

    }
}

nav.addEventListener("click", navClick, false);
