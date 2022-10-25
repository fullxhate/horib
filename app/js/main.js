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


