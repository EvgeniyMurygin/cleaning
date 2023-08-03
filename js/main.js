$(function(){
  $('.certificates__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/certificates/arrow-left.png" alt="arrows"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/certificates/arrow-right.png" alt="arrows"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
    // dots: true,
    // arrows: false,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });



  $('.difficulties-slider').slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/certificates/arrow-left.png" alt="arrows"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/certificates/arrow-right.png" alt="arrows"></button>',
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
    // centerMode: true,
    // variableWidth: true,
    // centerPadding: '0px',
    // focusOnSelect: true,

   });



  // $('.slider__foto').slick({

  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   dots: true,
  //   centerMode: true,
  //   variableWidth: true,

  //  });



  $('.questions__item-title').on('click', function(){

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');

  });

});


// centerMode: true,
// centerPadding: '100px',
// slidesToShow: 5,
// focusOnSelect: true,
// dots: false,
// infinite: true,

const questionsItems = document.querySelector('.questions__items');
const questionsItemtitles = document.querySelectorAll('.questions__item-title');

questionsItemtitles.forEach.call(questionsItemtitles, function (questionsItemtitle) {
  questionsItemtitle.addEventListener('click', function() {

    const currentText = questionsItemtitle.parentElement.querySelector('.questions__item-text');

    questionsItemtitle.classList.toggle('questions__item-title--active');
    currentText.classList.toggle('questions__item-text--visible');

    if (currentText.classList.contains('questions__item-text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }

  });
});

var mixer = mixitup('.watch-cleaning__inner', {
  load: {
    filter: '.bedroom'
  }
});