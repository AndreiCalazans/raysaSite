import './style.scss';

$(document).ready(function() {


//Side Nav script\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
    $('.fa-bars').on('click', function() {
        $('.sideNav').toggleClass('showSideNav');
    });

    $('section').on('click', function(){
        if($('.sideNav').hasClass('showSideNav')) {
            $('.sideNav').removeClass('showSideNav');
        }
    })

// Fade in things script \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

     $(window).scroll( function(){


         //LOGIC TO MAKE GO BACK TO THE TOP BUTTON APPEAR
         var top_of_window = $(window).scrollTop();
         var start_of_areas = $('#areas').offset().top;

         if(top_of_window >= start_of_areas) {
             //show the button
             $('#to-top-btn').css('display' , 'inherit');
         } else {
             console.log('helelo');
             $('#to-top-btn').css('display' , 'none');
             
         }
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });


// SMOOTH SCROLL PLUGGING FROM CSS TRICKS
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




});