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



    $('.featured-slider-bestselling').slick({
        infinite: false,
        dots: false,
        slidesToShow: 5,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-filter-2'),
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

    $('.featured-slider-latest').slick({
        infinite: false,
        dots: false,
        slidesToShow: 5,  
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        speed: 200,
        appendArrows:$('.slider-header-filter-3'),
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


    // Featured slider filters

    $(document).on('click', '.featured-filters span', function(){
        $(this).addClass('active').siblings().removeClass('active')
    });



    $('.featured-slider-bestselling').fadeOut();
    $('.featured-slider-latest').fadeOut();  

    $('.slider-header-filter-2').fadeOut();  
    $('.slider-header-filter-3').fadeOut();  
    
    $('.featured').click(function(){
        $('.slider-header-filter').fadeIn(1000);  
        $('.slider-header-filter-2').fadeOut(5);  
        $('.slider-header-filter-3').fadeOut(5);  
        $('.featured-slider-bestselling').fadeOut(5); // Скрывает начальное содержимое.
        $('.featured-slider-latest').fadeOut(5); // Показывает содержимое диалога.
        $('.featured-slider-featured').fadeIn(1000); // Показывает содержимое диалога.
    });

    $('.bestselling').click(function(){
        $('.slider-header-filter').fadeOut(5);  
        $('.slider-header-filter-2').fadeIn(1000);
        $('.slider-header-filter-3').fadeOut(5);    
        $('.featured-slider-featured').fadeOut(5); // Скрывает начальное содержимое.
        $('.featured-slider-bestselling').fadeIn(1000); // Скрывает начальное содержимое.
        $('.featured-slider-latest').fadeOut(5); // Показывает содержимое диалога.
    });

    $('.latest').click(function(){
        $('.slider-header-filter').fadeOut(5);  
        $('.slider-header-filter-2').fadeOut(5);  
        $('.slider-header-filter-3').fadeIn(1000);  
        $('.featured-slider-bestselling').fadeOut(5);  
        $('.featured-slider-latest').fadeIn(1000); 
        $('.featured-slider-featured').fadeOut(5);   
    });

     


});


    

 



