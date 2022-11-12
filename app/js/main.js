
$(document).mouseup(function (e) {
  var block = $(".modal-wrapper , , .business__img-one , .business__items-more--two ,.calculate__form-inner--life , .calculate__item-btn--house, ..calculate__item-btn--transport , .calculate__item-btn--art");
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.hide();
  }
});
$(document).mouseup(function (e) {
  var block = $(".modal");
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.hide();
  }
});




$(function () { 


  $('.header__right-btn ').on('click', function () {
    $('.modal').slideToggle(300), $('.modal-wrapper').fadeIn(297).css('display', 'flex');
    return false;
  });

  $('.modal-wrapper').on('click', function () {
    $('.modal-wrapper ,.modal').fadeOut(297)
  });

  $('.modal').on('click', function () {
    $('.modal-wrapper').css('display', 'block');
  });

  $('.faq__question--one').on('click', function () {
    $('.faq__text--one').slideToggle(300), $('.faq__img--one').toggleClass('transform');

    return false;
  });

  $('.faq__question--one').on('click', function () {
    $('.faq__text--one').slideToggle(300), $('.faq__img--one').toggleClass('transform');

    return false;
  });

  $('.faq__question--two').on('click', function () {
    $('.faq__text--two').slideToggle(300), $('.faq__img--two').toggleClass('transform');

    return false;
  });

  $('.faq__question--two').on('click', function () {
    $('.faq__text--two').slideToggle(300), $('.faq__img--two').toggleClass('transform');

    return false;
  });

  $('.faq__question--three').on('click', function () {
    $('.faq__text--three').slideToggle(300), $('.faq__img--three').toggleClass('transform');

    return false;
  });

  $('.faq__question--four').on('click', function () {
    $('.faq__text--four').slideToggle(300), $('.faq__img--four').toggleClass('transform');

    return false;
  });

  $('.faq__question--five').on('click', function () {
    $('.faq__text--five').slideToggle(300), $('.faq__img--five').toggleClass('transform');

    return false;
  });

  $('.business__img-one').on('click', function () {
    $('.business__items-more--one').slideToggle(300).fadeIn(297).css('display', 'flex'), $('.business__img-one').toggleClass('transform');
  $('.business__img-one.transform').on('click', function () {
    $('.business__items-more--one').fadeOut(297).css('display', 'none'), $('.business__img-one').removeClass('transform');
    
  });
  });

  $('.business__img-two').on('click', function () {
    $('.business__items-more--two').slideToggle(300).fadeIn(297).css('display', 'flex'), $('.business__img-two').toggleClass('transform');
    $('.business__img-two.transform').on('click' , function () {
      $('.business__items-more--two').fadeOut(297).css('display', 'none'), $('.business__img-two').removeClass('transform');
      return false;
    })

    return false;
  });





  let mixer = mixitup('.business__filter-btn');
  

  $('.calculate__item-btn--house').on('click' , function () {
    $('.calculate__form-inner--house').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--house').addClass('active'),
      $('.calculate__form-inner--transport, .calculate__form-inner--life, .calculate__form-inner--art').removeClass('active').fadeOut(297).css('display', 'none'); return false;
  })
  $('.calculate__item-btn--transport').on('click' , function () {
    $('.calculate__form-inner--transport').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--transport').addClass('active'), $('.calculate__form-inner--house, .calculate__form-inner--life, .calculate__form-inner--art').removeClass('active').fadeOut(297).css('display', 'none'); return false;
  })
  $('.calculate__item-btn--art').on('click' , function () {
    $('.calculate__form-inner--art').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--art').addClass('active'),
      $('.calculate__form-inner--transport, .calculate__form-inner--life, .calculate__form-inner--house').removeClass('active').fadeOut(297).css('display', 'none')
  })
  $('.calculate__item-btn--life').on('click' , function () {
    $('.calculate__form-inner--life').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--life').addClass('active'),
      $('.calculate__form-inner--transport, .calculate__form-inner--house, .calculate__form-inner--art').removeClass('active').fadeOut(297).css('display', 'none');return  true;
      
  })
});






