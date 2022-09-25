$(document).ready(function(){
    $('#customarrow').click(function() {
        $(this).toggleClass('customSelectOpen');
    }), function() { 
        $(this).toggleClass('customSelectArrow');
    };

    $('#cselect').click(function() {
        $('#customarrow').toggleClass('customSelectOpen');
    }), function() { 
        $('#customarrow').toggleClass('customSelectArrow');
    };

    // secondArrowFunction

    $('#customarrowsecond').click(function() {
        $(this).toggleClass('customSelectOpen');
    }), function() { 
        $(this).toggleClass('customSelectArrow');
    };

    $('#cselectsecond').click(function() {
        $('#customarrowsecond').toggleClass('customSelectOpen');
    }), function() { 
        $('#customarrowsecond').toggleClass('customSelectArrow');
    };


    // visible dropdown menu
    $(function(){
        $('.category-list').click(function(){
            divTrigger = $('.category-list').index(this);
         
            thisMegaMenu = $('.megamenu:eq('+divTrigger+')');      
            $('.megamenu').fadeOut();
            if(thisMegaMenu.is(":not(':visible')")){    
            thisMegaMenu.fadeIn();
            }
            
    });
       
    });

    // dropleft menu
    $("#li-hover").hover(
        function() {
         $('#megamenu-list', this).stop().fadeIn();
        },
        function() { 
            $('#megamenu-list', this).stop().fadeOut();
    });


    // navbar menu arrow
    (function() {
        document.querySelector('#down-click').addEventListener('click', function() {
            $('.sub-menu').toggleClass('closed');
            $('#down-click').toggleClass('rotate');
    
        }, false);
      })();



    $('.hamburger').click(function() {
        $('.mobile-menu').toggleClass('navbar-active');
    }) 
    
    $('.close-menu').click(function() {
        $('.mobile-menu').removeClass('navbar-active');
    }) 


    

    // product-carousel

    $('.product-slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 5,  
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      speed: 200,
      appendArrows:$('.slider-header'),
         responsive: [
         {
            breakpoint: 1250,
            settings: {
                slidesToShow: 4
           }
         },{
            breakpoint: 1020,
            settings: {
               slidesToShow: 3
           }
         },{
            breakpoint: 768,
            settings: {
               slidesToShow: 2
           }
        },{
            breakpoint: 540,
            settings: {
               slidesToShow: 1
           }
        }
]
    });


    // category slider

    $('.cat-slider').slick({
        infinite: false,
        dots: false,
        slidesToShow: 5,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-cat'),
           responsive: [
           {
              breakpoint: 1250,
              settings: {
                  slidesToShow: 4
             }
           },{
              breakpoint: 1020,
              settings: {
                 slidesToShow: 3
             }
           },{
              breakpoint: 768,
              settings: {
                 slidesToShow: 2
             }
          },{
              breakpoint: 540,
              settings: {
                 slidesToShow: 1
             }
          }
  ]
      });


    // Deals slider
    

    $('.deals-slider').slick({
        infinite: false,
        dots: false,
        slidesToShow: 2,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-deals'),
           responsive: [
           {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3
             }
           },{
              breakpoint: 1060,
              settings: {
                 slidesToShow: 2
             }
           },{
              breakpoint: 768,
              settings: {
                 slidesToShow: 1
             }
          },{
              breakpoint: 540,
              settings: {
                 slidesToShow: 1
             }
          }
  ]
      });


    // customers slider

    
    $('.customers-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-customers'),
        responsive: [
            {
               breakpoint: 1200,
               settings: {
                   slidesToShow: 2
              }
            },{
               breakpoint: 590,
               settings: {
                  slidesToShow: 1
              }
            }
   ]
      });

    
    // Featured product slider 

    $('.featured-slider-featured').slick({
        infinite: false,
        dots: false,
        slidesToShow: 5,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-filter'),
           responsive: [
           {
              breakpoint: 1250,
              settings: {
                  slidesToShow: 4
             }
           },{
              breakpoint: 1020,
              settings: {
                 slidesToShow: 3
             }
           },{
              breakpoint: 768,
              settings: {
                 slidesToShow: 2
             }
          },{
              breakpoint: 540,
              settings: {
                 slidesToShow: 1
             }
          }
  ]
      });

    
    // logo slider 

    $('.logo-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        dots: false,
        slidesToShow: 6,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 800,
        easing: 'ease',
        arrows: false,
           responsive: [
           {
              breakpoint: 1250,
              settings: {
                  slidesToShow: 5
             }
           },{
              breakpoint: 888,
              settings: {
                 slidesToShow: 5
             }
           },{
              breakpoint: 768,
              settings: {
                 slidesToShow: 4
             }
          },{
            breakpoint: 670,
            settings: {
               slidesToShow: 3
           }
        },{
              breakpoint: 500,
              settings: {
                 slidesToShow: 2
             }
          }
  ]

  });

  $('.logo-slider').on('afterChange', function(event, slick, currentSlide){
    if (currentSlide == 4) { 
        $('.logo-slider').slick('slickGoTo', 0);
      }
  });

    // Featured slider filters --active

    $(document).on('click', '.featured-filters span', function(){
        $(this).addClass('active').siblings().removeClass('active')
    });

  

});

    // best deals product countdown

let countDownDate = new Date("October 14, 2023 15:37:25").getTime();


let x = setInterval(function() {

  
  let now = new Date().getTime();
    
  
  let distance = countDownDate - now;
    
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   
  document.getElementById("days").innerHTML = days;
  
  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  
   
}, 1000);


let countDownDateTwo = new Date("October 23, 2023 15:37:25").getTime();


let a = setInterval(function() {

  
  let nowTwo = new Date().getTime();
    
  
  let distanceTwo = countDownDateTwo - nowTwo;
    
  
  let daysTwo = Math.floor(distanceTwo / (1000 * 60 * 60 * 24));
  let hoursTwo = Math.floor((distanceTwo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesTwo = Math.floor((distanceTwo % (1000 * 60 * 60)) / (1000 * 60));
  let secondsTwo = Math.floor((distanceTwo % (1000 * 60)) / 1000);
    
   
  document.getElementById("daysTwo").innerHTML = daysTwo;
  
  document.getElementById("hoursTwo").innerHTML = hoursTwo;

  document.getElementById("minutesTwo").innerHTML = minutesTwo;
  document.getElementById("secondsTwo").innerHTML = secondsTwo;
    
  
   
}, 1000);


let countDownDateThree = new Date("October 30, 2023 15:37:25").getTime();


let b = setInterval(function() {

  
  let nowThree = new Date().getTime();
    
  
  let distanceThree = countDownDateThree - nowThree;
    
  
  let daysThree = Math.floor(distanceThree / (1000 * 60 * 60 * 24));
  let hoursThree = Math.floor((distanceThree % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesThree = Math.floor((distanceThree % (1000 * 60 * 60)) / (1000 * 60));
  let secondsThree = Math.floor((distanceThree % (1000 * 60)) / 1000);
    
   
  document.getElementById("daysThree").innerHTML = daysThree;
  
  document.getElementById("hoursThree").innerHTML = hoursThree;

  document.getElementById("minutesThree").innerHTML = minutesThree;
  document.getElementById("secondsThree").innerHTML = secondsThree;
    
  
   
}, 1000);


let countDownDateFour = new Date("Dec 25, 2022 15:37:25").getTime();


let c = setInterval(function() {

  
  let nowFour = new Date().getTime();
    
  
  let distanceFour = countDownDateFour - nowFour;
    
  
  let daysFour = Math.floor(distanceFour / (1000 * 60 * 60 * 24));
  let hoursFour = Math.floor((distanceFour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesFour = Math.floor((distanceFour % (1000 * 60 * 60)) / (1000 * 60));
  let secondsFour = Math.floor((distanceFour % (1000 * 60)) / 1000);
    
   
  document.getElementById("daysFour").innerHTML = daysFour;
  
  document.getElementById("hoursFour").innerHTML = hoursFour;

  document.getElementById("minutesFour").innerHTML = minutesFour;
  document.getElementById("secondsFour").innerHTML = secondsFour;
    
  
   
}, 1000);


let countDownDateFive = new Date("October 14, 2024 15:37:25").getTime();


let d = setInterval(function() {

  
  let nowFive = new Date().getTime();
    
  
  let distanceFive = countDownDateFive - nowFive;
    
  
  let daysFive = Math.floor(distanceFive / (1000 * 60 * 60 * 24));
  let hoursFive = Math.floor((distanceFive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesFive = Math.floor((distanceFive % (1000 * 60 * 60)) / (1000 * 60));
  let secondsFive = Math.floor((distanceFive % (1000 * 60)) / 1000);
    
   
  document.getElementById("daysFive").innerHTML = daysFive;
  
  document.getElementById("hoursFive").innerHTML = hoursFive;

  document.getElementById("minutesFive").innerHTML = minutesFive;
  document.getElementById("secondsFive").innerHTML = secondsFive;
    
  
   
}, 1000);


 



