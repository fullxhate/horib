$(document).ready(function () {
  $('.header__list--bg ').click(function () {
    $('.header__list-hover').slideToggle(300).css('display', 'flex');
    $(".myOverlay").fadeIn(297, function () {
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

$(document).ready(function () {
  $('.header__right-btn ').click(function () {
    $('.modal').slideToggle(300).css('display', 'flex');
    return false;

  });
});
$(document).mouseup(function (e) {
  var block = $(".modal");
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.hide();
  }
});
$(document).ready(function () {
  $('.faq__question--one').click(function () {
    $('.faq__text--one').slideToggle(300);
    
    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--two').click(function () {
    $('.faq__text--two').slideToggle(300);

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--three').click(function () {
    $('.faq__text--three').slideToggle(300);

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--four').click(function () {
    $('.faq__text--four').slideToggle(300);

    return false;
  });
});
$(document).ready(function () {
  $('.faq__question--five').click(function () {
    $('.faq__text--five').slideToggle(300);

    return false;
  });
});
$(function () {
  $('.faq__img').on('click', function() {
    $(this).toggleClass('transform');
  });
});



