function position() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }
    var section3 = document.querySelector('.section-3');

    var container = section3.querySelector('.image-container');

    //Section 3
    var section3 = document.querySelector('.section-3');
    var pen = section3.querySelector('.pen');
    var phone = section3.querySelector('.phone');
    var notes = section3.querySelector('.notes');

    pen.style.left = -(pen.offsetWidth + container.offsetLeft)  + 'px';
    phone.style.left = -(phone.offsetWidth + container.offsetLeft)  + 'px';
    notes.style.right = -(notes.offsetWidth + container.offsetLeft)  + 'px';


    //Section 4
    var section4 = document.querySelector('.section-4');
    var phone4 = section4.querySelector('.phone');
    var text1 = section4.querySelector('.textbox-1');
    var text2 = section4.querySelector('.textbox-2');

    phone4.style.left = -(phone4.offsetWidth + container.offsetLeft)  + 'px';
    text1.style.opacity = 0;
    text2.style.opacity = 0;


    //Section 5
    var section5 = document.querySelector('.section-5');
    var phone5 = section5.querySelector('.phone');
    var passport = section5.querySelector('.passport');
    var earbuds = section5.querySelector('.earbuds');
    var dime1 = section5.querySelector('.dime-1');
    var dime2 = section5.querySelector('.dime-2');

    phone5.style.left = -(phone5.offsetWidth + container.offsetLeft)  + 'px';
    passport.style.right = -(passport.offsetWidth + container.offsetLeft)  + 'px';
    earbuds.style.bottom = -earbuds.offsetHeight - 200 + 'px';
    dime1.style.bottom = -(dime1.offsetHeight) - 200 + 'px';
    dime2.style.bottom = -(dime2.offsetHeight) - 200 + 'px';

}


position();
