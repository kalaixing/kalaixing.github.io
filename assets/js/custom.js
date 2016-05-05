
/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */


$(document).ready(function () {


     /*====================================
    SLIDER SCRIPTS
    ======================================*/
    $('#carousel-slider').carousel({
        interval: 2000 //CHANGE TIME IN MILLI SECONDS
    });


    /*====================================
    VAGAS BACKGROUND SLIDESHOW SCRIPTS
    ======================================*/
    $.vegas('slideshow', {
        backgrounds: [
        { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
        { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },


        ]
    })('overlay', {
        /** SLIDESHOW OVERLAY IMAGE **/
        src: 'assets/js/vegas/overlays/01.png' // THERE ARE TOTAL 01 TO 15.png  IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE ANYONE
    });


    /*====================================
    WRITE YOUR SCRIPTS BELOW
    ======================================*/


});
