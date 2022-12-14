$(document).ready(function () {
  
  // visible dropdown menu

  $('.category-list').on('click', function () {
    if ($('.megamenu').is(':visible')) {
      $('.megamenu').fadeOut();
    } else { 
      $('.megamenu').fadeIn();
    }
  });


  // Fade dropdown language change menu

  $(".dropdown").hover(
    function () {
      $('.dropdown-content', this).stop().fadeIn();
    },
    function () {
      $('.dropdown-content', this).stop().fadeOut();
    });

  // if the click target is not a container or a child of a container

  $(document).mouseup(function (e) {
    var container = $(".megamenu");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }
  });

  // dropleft menu

  $("#li-hover").hover(
    function () {
      $('#megamenu-list', this).stop().fadeIn();
    },
    function () {
      $('#megamenu-list', this).stop().fadeOut();
    });


  // navbar list menu dropdown and arrow

  (function () {
    document.querySelector('#down-click').addEventListener('click', function () {
      $('.sub-menu').toggleClass('closed');
      $('#down-click').toggleClass('rotate');

    }, false);
  })();


  // Footer widget area dropdown 

  $('.information-links__media li:nth-of-type(1)').on('click', function () {
    $('.information-links__media').toggleClass('closed');
    $('#down-click-info').toggleClass('rotate');
  });

  $('.category-links__media li:nth-of-type(1)').on('click', function () {
    $('.category-links__media').toggleClass('closed');
    $('#down-click-cat').toggleClass('rotate');
  });

  $('.footer-contact__media li:nth-of-type(1)').on('click', function () {
    $('.footer-contact__media').toggleClass('closed');
    $('#down-click-con').toggleClass('rotate');
  });


  // navbar mobile hamburger function

  $('.hamburger').click(function () {
    $('.mobile-menu').toggleClass('navbar-active');
  })

  $('.close-menu').click(function () {
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
    appendArrows: $('.slider-header'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
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
    appendArrows: $('.slider-header-cat'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
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
    appendArrows: $('.slider-header-deals'),
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }, {
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
    appendArrows: $('.slider-header-customers'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
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
    appendArrows: $('.slider-header-filter'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Featured slider filters --active

  $(document).on('click', '.featured-filters span', function () {
    $(this).addClass('active').siblings().removeClass('active')
  });


  // logo slider 

  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    speed: 800,
    easing: 'ease',
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 888,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 670,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }
    ]

  });

  // logo slider repeat

  $('.logo-slider').on('afterChange', function (event, slick, currentSlide) {
    if (currentSlide == 4) {
      $('.logo-slider').slick('slickGoTo', 0);
    }
  });


  //Top Rated Slider

  $('.topRated-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    speed: 200,
    appendArrows: $('.slider-header-topRated'),
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Best seller slider 

  $('.bestSeller-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    speed: 200,
    appendArrows: $('.slider-header-bestSeller'),
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Our latest blog section slider 

  $('.latestBlog-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    speed: 200,
    appendArrows: $('.slider-header-latestBlog'),
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  //   Our  latest blog images gallery popup 

  Fancybox.bind('[data-fancybox="gallery"]', {
    infinite: true,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },
    Thumbs: {
      Carousel: {
        Sync: {
          friction: 0.9,
        },
      },
    },
  });




  // Sweet alert  function for popup after log in
  $('#send').on('click', check);

  function check() {
    if ($('#text').val() !== '' && $('#email').val() !== '') {
      $(".popUp-overlay").fadeOut(1000);
      $(".popUp-wrapper").addClass("confirm");
      setTimeout(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome',
          hideClass: {
            popup: 'animate__animated animate__bounceOutRight'
          },
          text: 'You sign in!',
          showConfirmButton: false,
          timer: 3000,
          toast: true
        })
      }, 800)

    }

  }




});



// Pre-loader function

document.body.onload = function () {

  setTimeout(function () {
    let preLoader = document.getElementById('page-preloader');

    if (!preLoader.classList.contains('unvisible')) {
      preLoader.classList.add('unvisible');
    }
  }, 1000);
}


// Select Function

let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let inputSel = document.getElementById("inputSel");
let options = document.querySelectorAll(".select-container .option");
let customSelectArrow = document.querySelector(".customSelectArrow");

select.onclick = () => {
    selectContainer.classList.toggle("active");
    $('.customSelectArrow').toggleClass("customSelectOpen");
};

options.forEach((e) => {
    e.addEventListener("click", () => {
        inputSel.value = e.innerText;
        selectContainer.classList.remove("active");
        $('.customSelectArrow').removeClass("customSelectOpen");
        options.forEach((e) => {
            e.classList.remove("selected");
        });
        e.classList.add("selected");
    });
});

const sel = document.querySelector('.select');
document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(sel);
  if ( !click ) {
    selectContainer.classList.remove("active");
    $('.customSelectArrow').removeClass("customSelectOpen");
  }
})


// SelectMedia Function

let selectContainerMedia = document.querySelector(".select-containerMedia");
let selectMedia = document.querySelector(".selectMedia");
let inputSelMedia = document.getElementById("inputSelMedia");
let optionsMedia = document.querySelectorAll(".select-containerMedia .optionMedia");

selectMedia.onclick = () => {
    selectContainerMedia.classList.toggle("activeMedia");
    $('.customSelectArrowMedia').toggleClass("customSelectOpenMedia");
};

optionsMedia.forEach((g) => {
    g.addEventListener("click", () => {
        inputSelMedia.value = g.innerText;
        selectContainerMedia.classList.remove("activeMedia");
        $('.customSelectArrowMedia').removeClass("customSelectOpenMedia");
        optionsMedia.forEach((g) => {
            g.classList.remove("selectedMedia");
        });
        g.classList.add("selectedMedia");
    });
});

const selMedia = document.querySelector('.selectMedia');
document.addEventListener('click', (e) => {
  const clickMedia = e.composedPath().includes(selMedia);
  if ( !clickMedia ) {
    selectContainerMedia.classList.remove("activeMedia");
    $('.customSelectArrowMedia').removeClass("customSelectOpenMedia");
  }
})



  // best deals product countdown

  let countDownDate = new Date("October 14, 2023 15:37:25").getTime();


  let x = setInterval(function () {


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


  let a = setInterval(function () {


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


  let b = setInterval(function () {


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


  let c = setInterval(function () {


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


  let d = setInterval(function () {


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


  // Scroll top button

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("ScrollActive");
    } else {
      toTop.classList.remove("ScrollActive");
    }
  })


  // PopUp open function

  let popupBg = document.querySelector(".popUp-overlay");
  const popUp = document.querySelector(".popUp-wrapper")

  setTimeout(function () {
    popupBg.classList.add("anim-bg");
    popUp.classList.add("anim");
  }, 5000)

  // PopUp close button function

  let close = document.querySelector(".popUp-close");

  close.addEventListener("click", myFunction);
  function myFunction() {
    popUp.classList.add("hinge");
    $(".popUp-overlay").fadeOut(1000);
  }


  // Popup input text numbers block validation function

  let n = document.forms["myForm"]["text"]
  let numb = /[0-9]/g;

  n.oninput = function () {
    this.value = this.value.replace(numb, '')

  }


  // If unputs is empty
  var input = document.getElementsByClassName('inp');

  for (var i = 0; i < input.length; i++) {

    input[i].onblur = function () {
      if (this.value == "") {
        this.className = "red";
      }
    };

    input[i].onfocus = function () {
      if (this.className == 'red') {
        this.className = "";
      }

    };
  }