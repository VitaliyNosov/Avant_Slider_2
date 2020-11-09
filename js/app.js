document.addEventListener("DOMContentLoaded", function() {

    // slider

    $('.single-item').slick({
      nextArrow: document.querySelector('#my-arrow-next'),
      prevArrow: document.querySelector('#my-arrow-prev') 
    });

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      infinite: true,
      initialSlide: 0,
      // autoplay: true,
      arrows: true,
      nextArrow: document.querySelector('#my-arrow-next-two'),
      prevArrow: document.querySelector('#my-arrow-prev-two'),
      responsive:[  
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8
          }
    
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6
          }
    
        },
        {
        breakpoint: 769,
        settings: {
          slidesToShow: 5
        }
    
        },
        {
          breakpoint: 482,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5
          }
    
        }
      ] 
    });

    // popup

    $(".item").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
});
