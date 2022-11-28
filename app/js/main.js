
$(document).mouseup(function (e) {
  let block = $(".modal-wrapper  , .modal , .modal-two");
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.hide();
  }
});
$(document).ready(function () {
  $("body").css("display", "none");

  $("body").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});


$(function () {
  $('.header__right-btn ').on('click', function () {
    $('.modal').slideToggle(300), $('.modal-wrapper').fadeIn(297).css('display', 'flex');
    return false;
  });
  $('.header__list--bg ').on('click', function () {
    $('.modal-two').slideToggle(300), $('.modal-wrapper').fadeIn(297).css('display', 'flex');
    
    return false;
  });


  $('.modal-wrapper').on('click', function () {
    $('.modal-wrapper ,.modal , .header__list-more , .modal-two').fadeOut(297);
    if (window.matchMedia('(max-width: 500px)').matches) {
      $('.modal-wrapper ,.modal , .header__list-more , .modal-two').fadeOut(297);
    }
  });

  $('.modal , .modal-two').on('click', function () {
    $('.modal-wrapper').css('display', 'block');
  });

  $('.reinsurance-faq__question--one').on('click', function () {
    $('.reinsurance-faq__text--one').slideToggle(300), $('.reinsurance-faq__img--one').toggleClass('transform');

    return false;
  });


  $('.reinsurance-faq__question--two').on('click', function () {
    $('.reinsurance-faq__text--two').slideToggle(300), $('.reinsurance-faq__img--two').toggleClass('transform');

    return false;
  });


  $('.reinsurance-faq__question--three').on('click', function () {
    $('.reinsurance-faq__text--three').slideToggle(300), $('.reinsurance-faq__img--three').toggleClass('transform');

    return false;
  });

  $('.reinsurance-faq__question--four').on('click', function () {
    $('.reinsurance-faq__text--four').slideToggle(300), $('.reinsurance-faq__img--four').toggleClass('transform');

    return false;
  });

  $('.reinsurance-faq__question--five').on('click', function () {
    $('.reinsurance-faq__text--five').slideToggle(300), $('.reinsurance-faq__img--five').toggleClass('transform');

    return false;
  });
  $('.marketplace-faq__question--one').on('click', function () {
    $('.marketplace-faq__text--one').slideToggle(300), $('.marketplace-faq__img--one').toggleClass('transform');

    return false;
  });


  $('.marketplace-faq__question--two').on('click', function () {
    $('.marketplace-faq__text--two').slideToggle(300), $('.marketplace-faq__img--two').toggleClass('transform');

    return false;
  });


  $('.marketplace-faq__question--three').on('click', function () {
    $('.marketplace-faq__text--three').slideToggle(300), $('.marketplace-faq__img--three').toggleClass('transform');

    return false;
  });

  $('.marketplace-faq__question--four').on('click', function () {
    $('.marketplace-faq__text--four').slideToggle(300), $('.marketplace-faq__img--four').toggleClass('transform');

    return false;
  });

  $('.marketplace-faq__question--five').on('click', function () {
    $('.marketplace-faq__text--five').slideToggle(300), $('.marketplace-faq__img--five').toggleClass('transform');

    return false;
  });

  $('.purchases-faq__question--one').on('click', function () {
    $('.purchases-faq__text--one').slideToggle(300), $('.purchases-faq__img--one').toggleClass('transform');

    return false;
  });


  $('.purchases-faq__question--two').on('click', function () {
    $('.mpurchases-faq__text--two').slideToggle(300), $('.purchases-faq__img--two').toggleClass('transform');

    return false;
  });



  $('.business__img-one').on('click', function () {
    $('.business__items-more--one ').slideToggle(300);
    $('.business__items-more--one ').css('display', 'flex');
    $('.business__img-one').toggleClass('transform');
  });

  $('.business__img-two').on('click', function () {
    $('.business__items-more--two ').slideToggle(300);
    $('.business__items-more--two ').css('display', 'flex');
    $('.business__img-two').toggleClass('transform');
  });
  $('.audit-faq__question--one').on('click', function () {
    $('.audit-faq__text--one').slideToggle(300), $('.audit-faq__img--one').toggleClass('transform');

    return false;
  });

  $('.audit-faq__question--two').on('click', function () {
    $('.audit-faq__text--two').slideToggle(300), $('.audit-faq__img--two').toggleClass('transform');

    return false;
  });






  $('.personal-faq__question--one').on('click', function () {
    $('.personal-faq__text--one').slideToggle(300), $('.personal-faq__img--one').toggleClass('transform');

    return false;
  });
  $('.personal-faq__question--two').on('click', function () {
    $('.personal-faq__text--two').slideToggle(300), $('.personal-faq__img--two').toggleClass('transform');

    return false;
  });
  $('.personal-faq__question--three').on('click', function () {
    $('.personal-faq__text--three').slideToggle(300), $('.personal-faq__img--three').toggleClass('transform');

    return false;
  });
  $('.personal-faq__question--four').on('click', function () {
    $('.personal-faq__text--four').slideToggle(300), $('.personal-faq__img--four').toggleClass('transform');

    return false;
  });



  $('.contacts__btn--contacts').on('click', function () {
    $('.contacts__btn--contacts').toggleClass('active');
    $('.contacts__btn--requisites , .contacts__btn--info').removeClass('active');
    $('.contacts__info--contacts').slideToggle(300);
    $('.contacts__info--requisites ,.contacts__info--info').css('display', 'none');


  });
  $('.contacts__btn--requisites').on('click', function () {
    $('.contacts__btn--requisites').toggleClass('active');
    $('.contacts__btn--contacts , .contacts__btn--info').removeClass('active');
    $('.contacts__info--requisites').slideToggle(300);
    $('.contacts__info--contacts ,.contacts__info--info').css('display', 'none');


  });
  $('.contacts__btn--info').on('click', function () {
    $('.contacts__btn--info').toggleClass('active');
    $('.contacts__btn--requisites , .contacts__btn--contacts').removeClass('active');
    $('.contacts__info--info').slideToggle(300);
    $('.contacts__info--contacts ,.contacts__info--requisites').css('display', 'none');
  });

  $('.business__filter-btn--responsibility').on('click', function () {
    $('.business__filter-btn--responsibility').addClass('active');
    $('.business__category-responsibility').fadeIn(297);
    $('.business__category-property , .business__category-finance, business__category-personal, .business__category-property ').css('display', 'none');
    $('.business__filter-btn--property , .business__filter-btn--finance , .business__filter-btn--personal').removeClass('active');
  });
  $('.business__filter-btn--property').on('click', function () {
    $('.business__filter-btn--property').addClass('active');
    $('.business__category-property').fadeIn(297);
    $('.business__category-responsibility , .business__category-finance , .business__category-personal ').css('display', 'none');
    $('.business__filter-btn--responsibility , .business__filter-btn--finance , .business__filter-btn--personal').removeClass('active');
  });
  $('.business__filter-btn--finance').on('click', function () {
    $('.business__filter-btn--finance').addClass('active');
    $('.business__category-finance').fadeIn(297);
    $('.business__category-responsibility , .business__category-property, .business__category-personal ').css('display', 'none');
    $('.business__filter-btn--responsibility , .business__filter-btn--property , .business__filter-btn--personal').removeClass('active');
  });
  $('.business__filter-btn--personal').on('click', function () {
    $('.business__filter-btn--personal').addClass('active');
    $('.business__category-personal').fadeIn(297);
    $('.business__category-responsibility , .business__category-property, .business__category-finance').css('display', 'none');
    $('.business__filter-btn--responsibility , .business__filter-btn--property , .business__filter-btn--finance').removeClass('active');
  });

  $('.business__filter-btn--all').on('click', function () {
    $('.business__filter-btn--all').addClass('active');
    $('.business__category-personal,.business__category-responsibility ,.business__category-property ,.business__category-finance  ').fadeIn(297);
    // $('.business__category-responsibility , .business__category-property, .business__category-finance').css('display' , 'none');
    $('.business__filter-btn--responsibility , .business__filter-btn--property , .business__filter-btn--finance,.business__filter-btn--personal').removeClass('active');
  });




  $('.calculate__item-btn--house').on('click', function () {
    $('.calculate__form-inner--house').slideToggle(300).fadeIn(297).css('display', 'block');
    $('.calculate__item-btn--house').addClass('active');
    $('.calculate__item-btn--art , .calculate__item-btn--transport , .calculate__item-btn--life').removeClass('active');
    $('.calculate__form-inner--transport , .calculate__form-inner--art , .calculate__form-inner--life').fadeOut(297).css('display', 'none'); return false;
  });
  $('.calculate__item-btn--transport').on('click', function () {
    $('.calculate__form-inner--transport').slideToggle(300).fadeIn(297).css('display', 'block');
    $('.calculate__item-btn--transport').addClass('active');
    $('.calculate__item-btn--art , .calculate__item-btn--house , .calculate__item-btn--life').removeClass('active')
    $('.calculate__form-inner--house , .calculate__form-inner--art , .calculate__form-inner--life').fadeOut(297).css('display', 'none'); return false;
  });
  $('.calculate__item-btn--art').on('click', function () {
    $('.calculate__form-inner--art').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--art').addClass('active');
    $('.calculate__item-btn--transport , .calculate__item-btn--house , .calculate__item-btn--life').removeClass('active');
    $('.calculate__form-inner--house , .calculate__form-inner--transport , .calculate__form-inner--life').fadeOut(297).css('display', 'none'); return false;


  });
  $('.calculate__item-btn--life').on('click', function () {
    $('.calculate__form-inner--life').slideToggle(300).fadeIn(297).css('display', 'block'), $('.calculate__item-btn--life').addClass('active'),
      $('.calculate__item-btn--transport , .calculate__item-btn--house , .calculate__item-btn--art').removeClass('active');
    $('.calculate__form-inner--house , .calculate__form-inner--transport , .calculate__form-inner--art').fadeOut(297).css('display', 'none'); return true;

  });

  $('.header__burger').on('click', function () {
    $('.header__menu-inner , .header__burger').toggleClass('active');
    $('.header__menu-inner').slideToggle(300).css('display', 'flex')
  });


  $('.partners__toggle').on('click', function () {
    $('.partners__group').toggleClass('hide');
    if ($('.partners__group').hasClass('hide')) {
      $('.partners__toggle').css('display', 'none');
    } else {
      $('.partners__toggle').css('display', 'none');
    }

    return false;
  });
});
















