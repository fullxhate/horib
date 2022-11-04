$(document).ready(function () {
  $('.header__list--bg ').on('click' ,function () {
    $('.header__list-hover').slideToggle(300).css('display', 'flex');
    $('.modal-wrapper').fadeIn(297, function () {
    });
    
    return false;
    
    
  });
});
$(document).mouseup(function (e) {
  var block = $(".header__list-hover");
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

$(document).ready(function () {
  $('.header__right-btn ').on('click' ,function () {
    $('.modal').slideToggle(300), $('.modal-wrapper').fadeIn(297) .css('display', 'flex');
    return false;
  });
});
$(document).ready(function () {
  $('.modal-wrapper').on('click', function () {
    $('.modal-wrapper').fadeOut(297)
  })
  });
$(document).ready(function () {
  $('.modal').on('click', function () {
    $('.modal-wrapper').css('display', 'block');
  })
  });



$(document).mouseup(function (e) {
  var block = $(".modal-wrapper" );
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.hide();
  }
});
$(document).ready(function () {
  $('.faq__question--one').on('click', function () {
    $('.faq__text--one').slideToggle(300), $('.faq__img--one').toggleClass('transform');
    
    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--two').on('click', function () {
    $('.faq__text--two').slideToggle(300), $('.faq__img--two').toggleClass('transform');

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--three').on('click' ,function () {
    $('.faq__text--three').slideToggle(300), $('.faq__img--three').toggleClass('transform');

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--four').on('click' ,function () {
    $('.faq__text--four').slideToggle(300), $('.faq__img--four').toggleClass('transform');

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--five').on('click' ,function () {
    $('.faq__text--five').slideToggle(300), $('.faq__img--five').toggleClass('transform');

    return false;
  });
});



