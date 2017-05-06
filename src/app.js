import './style.scss';

$(document).ready(function() {


  
    $('.fa-bars').on('click', function() {
        $('.sideNav').toggleClass('showSideNav');
    });

    $('section').on('click', function(){
        if($('.sideNav').hasClass('showSideNav')) {
            $('.sideNav').removeClass('showSideNav');
        }
    })


});