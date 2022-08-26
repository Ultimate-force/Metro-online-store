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



     
})


// document.getElementById('customarrow').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('cselect').click();
//   });
 



