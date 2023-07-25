  var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      rewind: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });
    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    
  document.addEventListener('DOMContentLoaded', function() {
      const closeButton = document.querySelector('.sign-close');
      const signwindow = document.querySelector('.main-sign');
      const sign_in=document.querySelector('.sign')
      const wish_button=document.querySelector('.wishlist')
      const wish_closeButton = document.querySelector('.close');
      const favourite_window = document.querySelector('.favourite');



      
      sign_in.addEventListener('click', function() {
      
          signwindow.style.display = 'block';
     
    });
      closeButton.addEventListener('click', function() {
        
            signwindow.style.display = 'none';
           
      });
      wish_button.addEventListener('click', function() {
    
          favourite_window.style.display = 'block';
        
    });
    wish_closeButton.addEventListener('click', function() {
     
        favourite_window.style.display = 'none';
      
  });


      
  });
  
$(document).ready(function(){
  $('.burger').click(function(){
    $('.responsive').toggle('.show')
  })
})