var owlItemsCount = $(".owl-wrapper").children().length;
var owlItemWidth = $(".owl-item").width();
var i = 0;
var ms = '1000';
var owlProductsWidth = 0;
var owlItemProductsWidth = 0;
var subtractor = 0;
var blogSubtractor = 0;
var owlBlogWidth = 0;
var owlItemBlogWidth = 0;

$(document).ready(function () {
  $("body").append("<div id='goToTop' title='Top'></div>");
  $("#goToTop").hide();
  /* Go to Top JS START */
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('#goToTop').fadeIn();
      } else {
        $('#goToTop').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#goToTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
  /* Go to Top JS END */
});

document.addEventListener('scroll', function () {
  if ($(window).width() > 1200) {
    if (window.scrollY > $(".full-header").height()) {
      $(".full-header").addClass("fixed");
    } else {
      $(".full-header").removeClass("fixed");
    }
  } else {
    $(".full-header").removeClass("fixed");
  }
});

if ($(window).width() > 767) {
  $(".product-thumb.transition").mouseover(function () {
    $(this).find('.button-group').css({
      'opacity': 1,
      '-moz-opacity': 1,
      '-khtml-opacity': 1,
      '-webkit-opacity': 1
    });

    $(this).find('.sale-icon').css({
      'display': 'block'
    });
  });

  $(".product-thumb.transition").mouseout(function () {
    $(this).find('.button-group').css({
      'opacity': 0,
      '-moz-opacity': 0,
      '-khtml-opacity': 0,
      '-webkit-opacity': 0
    });

    $(this).find('.sale-icon').css({
      'display': 'none'
    });
  });
} else {
  $(".product-thumb .button-group").css({
    'opacity': 1,
    '-moz-opacity': 1,
    '-khtml-opacity': 1,
    '-webkit-opacity': 1
  });

  $('.sale-icon').css({
    'display': 'none'
  });
}

if ($(window).width() > 991) {
  $(".ttabout-desc").removeClass("collapse");
  $(".list-unstyled").removeClass("collapse");
  $(".paymentcms").removeClass("collapse");
  $(".toggle").removeAttr("data-toggle");
} else {
  $(".ttabout-desc").addClass("collapse");
  $(".list-unstyled").addClass("collapse");
  $(".paymentcms").addClass("collapse");
  $(".toggle").attr("data-toggle", "collapse");
}

$(".list-unstyled.footer-list").removeClass("collapse");

if ($(window).width() < 481) {
  owlProductsWidth = ($(".owl-wrapper-products").width() - 60) * 10;
  $(".owl-wrapper-products").css({
    'width': owlProductsWidth.toString() + 'px'
  });
  owlBlogWidth = (($(window).width() - 50) * 10) + 100;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 1;
  blogSubtractor = 1;
} else if ($(window).width() < 768) {
  var multiplier = ($(".owl-wrapper-products").width() - 480) / 2;
  owlProductsWidth = 2100 + (Math.round(multiplier) * 10);
  $(".owl-wrapper-products").css({
    'width': owlProductsWidth.toString() + 'px'
  })
  owlBlogWidth = owlProductsWidth + 100;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 2;
  blogSubtractor = 2;
} else if ($(window).width() < 992) {
  $(".owl-wrapper-products").css({
    'width': '2300px'
  })
  owlProductsWidth = 2300;
  owlBlogWidth = 3550;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 3;
  blogSubtractor = 2;
} else if ($(window).width() < 1200) {
  $(".owl-wrapper-products").css({
    'width': '2230px'
  })
  owlProductsWidth = 2230;
  owlBlogWidth = 2290;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 3;
  blogSubtractor = 3;
} else if ($(window).width() < 1301) {
  $(".owl-wrapper-products").css({
    'width': '2050px'
  })
  owlProductsWidth = 2050;
  owlBlogWidth = 2790;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 4;
  blogSubtractor = 3;
} else {
  $(".owl-wrapper-products").css({
    'width': '2250px'
  })
  owlProductsWidth = 2250;
  owlBlogWidth = 3070;
  $(".owl-wrapper-blog").css({
    'width': owlBlogWidth.toString() + 'px'
  });
  subtractor = 4;
  blogSubtractor = 3;
}

owlItemProductsWidth = owlProductsWidth / 10;
$(".owl-item-products").css({
  'width': owlItemProductsWidth.toString() + 'px'
});

owlItemBlogWidth = owlBlogWidth / 10;
$(".owl-item-blog").css({
  'width': owlItemBlogWidth.toString() + 'px'
});

window.addEventListener("orientationchange", function () {
  // Announce the new orientation number
  i = 0;

  $(".owl-wrapper").css({
    'width': $(".owl-wrapper").width().toString() + 'px',
    'border-width': '0',
    'transition': 'all ' + ms + 'ms ease 0s',
    'transform': 'translate3d(' + i.toString() + 'px, 0px, 0px)'
  });

  if ($(window).width() < 481) {
    owlProductsWidth = ($(window).width() - 60) * 10;
    $(".owl-wrapper-products").css({
      'width': owlProductsWidth.toString() + 'px'
    })
    owlBlogWidth = (($(window).width() - 50) * 10) + 100;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 1;
    blogSubtractor = 1;
  } else if ($(window).width() < 768) {
    var multiplier = ($(window).width() - 480) / 2;
    owlProductsWidth = 2100 + (Math.round(multiplier) * 10);
    $(".owl-wrapper-products").css({
      'width': owlProductsWidth.toString() + 'px'
    })
    owlBlogWidth = owlProductsWidth + 100;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 2;
    blogSubtractor = 2;
  } else if ($(window).width() < 992) {
    $(".owl-wrapper-products").css({
      'width': '2300px'
    })
    owlProductsWidth = 2300;
    owlBlogWidth = 3550;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 3;
    blogSubtractor = 2;
  } else if ($(window).width() < 1200) {
    $(".owl-wrapper-products").css({
      'width': '2230px'
    })
    owlProductsWidth = 2230;
    owlBlogWidth = 2290;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 4;
    blogSubtractor = 3;
  } else if ($(window).width() < 1301) {
    $(".owl-wrapper-products").css({
      'width': '2050px'
    })
    owlProductsWidth = 2050;
    owlBlogWidth = 2790;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 4;
    blogSubtractor = 3;
  } else {
    $(".owl-wrapper-products").css({
      'width': '2250px'
    })
    owlProductsWidth = 2250;
    owlBlogWidth = 3070;
    $(".owl-wrapper-blog").css({
      'width': owlBlogWidth.toString() + 'px'
    });
    subtractor = 4;
    blogSubtractor = 3;
  }

  owlItemProductsWidth = owlProductsWidth / 10;
  $(".owl-item-products").css({
    'width': owlItemProductsWidth.toString() + 'px'
  });

  owlItemBlogWidth = owlBlogWidth / 10;
  $(".owl-item-blog").css({
    'width': owlItemBlogWidth.toString() + 'px'
  });

  $(".owl-wrapper-products").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + i.toString() + 'px, 0px, 0px)'
  })

  $(".owl-wrapper-blog").css({
    'transition': 'all 500 ms ease 0s',
    'transform': 'translate3d(' + i.toString() + 'px, 0px, 0px)'
  })

  if ($(window).width() > 991) {
    $(".ttabout-desc").removeClass("collapse");
    $(".list-unstyled").removeClass("collapse");
    $(".paymentcms").removeClass("collapse");
    $(".toggle").removeAttr("data-toggle");
    $(".list-unstyled.footer-list").removeClass("collapse");
  } else {
    $(".ttabout-desc").addClass("collapse");
    $(".list-unstyled").addClass("collapse");
    $(".paymentcms").addClass("collapse");
    $(".toggle").attr("data-toggle", "collapse");
    $(".list-unstyled.footer-list").removeClass("collapse");
  }
}, false);

var owlWrapperProducts = $(".tab-pane.active .owl-wrapper-products").children().length;

var trans = 0;
$(".owl-prev#owl-p-specials").click(function () {
  owlWrapperProducts = $("#owl-specials").children().length;
  transString = $("#owl-specials")[0].style.transform.split("(")[1].split("px")[0];
  trans = parseInt(transString);

  if (trans === 0) {
    trans -= owlItemProductsWidth * (owlWrapperProducts - subtractor);
  } else {
    trans += owlItemProductsWidth;
  }
  $("#owl-specials").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + trans.toString() + 'px, 0px, 0px)'
  })
});

$(".owl-next#owl-n-specials").click(function () {
  owlWrapperProducts = $("#owl-specials").children().length;
  transString = $("#owl-specials")[0].style.transform.split("(")[1].split("px")[0];
  trans = parseInt(transString);

  if (trans === owlItemProductsWidth * (owlWrapperProducts - subtractor) * -1) {
    trans = 0;
  } else {
    trans -= owlItemProductsWidth;
  }
  $("#owl-specials").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + trans.toString() + 'px, 0px, 0px)'
  })
});

$(".owl-prev.owl-buttons-tabs").click(function () {
  owlWrapperProducts = $(".tab-pane.active .owl-wrapper-products").children().length;
  transString = $(".tab-pane.active .owl-wrapper-products")[0].style.transform.split("(")[1].split("px")[0];
  trans = parseInt(transString);

  if (trans === 0) {
    trans -= owlItemProductsWidth * (owlWrapperProducts - subtractor);
  } else {
    trans += owlItemProductsWidth;
  }
  $(".tab-pane.active .owl-wrapper-products").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + trans.toString() + 'px, 0px, 0px)'
  })
});

$(".owl-next.owl-buttons-tabs").click(function () {
  owlWrapperProducts = $(".tab-pane.active .owl-wrapper-products").children().length;
  transString = $(".tab-pane.active .owl-wrapper-products")[0].style.transform.split("(")[1].split("px")[0];
  trans = parseInt(transString);

  if (trans === owlItemProductsWidth * (owlWrapperProducts - subtractor) * -1) {
    trans = 0;
  } else {
    trans -= owlItemProductsWidth;
  }
  $(".tab-pane.active .owl-wrapper-products").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + trans.toString() + 'px, 0px, 0px)'
  })
});

$(".ttblog_prev").click(function () {
  var owlWrapperBlogCount = $(".owl-wrapper-blog").children().length;
  var blogTransString = $(".owl-wrapper-blog")[0].style.transform.split("(")[1].split("px")[0];
  var blogTrans = parseInt(blogTransString);

  if (blogTrans === 0) {
    blogTrans -= owlItemBlogWidth * (owlWrapperBlogCount - blogSubtractor);
  } else {
    blogTrans += owlItemBlogWidth;
  }
  $(".owl-wrapper-blog").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + blogTrans.toString() + 'px, 0px, 0px)'
  })
});

$(".ttblog_next").click(function () {
  var owlWrapperBlogCount = $(".owl-wrapper-blog").children().length;
  var blogTransString = $(".owl-wrapper-blog")[0].style.transform.split("(")[1].split("px")[0];
  var blogTrans = parseInt(blogTransString);

  if (blogTrans === owlItemBlogWidth * (owlWrapperBlogCount - blogSubtractor) * -1) {
    blogTrans = 0;
  } else {
    blogTrans -= owlItemBlogWidth;
  }
  $(".owl-wrapper-blog").css({
    'transition': 'all 200 ms ease 0s',
    'transform': 'translate3d(' + blogTrans.toString() + 'px, 0px, 0px)'
  })
});

$("i.fa-plus").click(function () {
  $(this).removeClass("fa").removeClass("fa-plus").addClass("fas fa-minus");
  if (!($(this).hasClass("collapsed"))) {
    $(this).removeClass("fas fa-minus").addClass("fa fa-plus");
  }
});

setInterval(function () {
  if (i !== 0) {
    ms = '800';
  }

  if (i === 0) {
    owlItemWidth = $(".owl-item").width();
  }

  i -= owlItemWidth;

  $(".owl-wrapper").css({
    'width': $(".owl-wrapper").width().toString() + 'px',
    'border-width': '0',
    'transition': 'all ' + ms + 'ms ease 0s',
    'transform': 'translate3d(' + i.toString() + 'px, 0px, 0px)'
  });

  $(".owl-item").css({
    'width': $(".owl-item").width().toString() + 'px',
  });

  owlItemWidth = $(".owl-item").width();

  var sub = 0;
  var windowWidth = $(window).width();

  if (windowWidth < 481) {
    sub = 2;
  } else if (windowWidth < 768) {
    sub = 3;
  } else if (windowWidth < 1201) {
    sub = 4;
  } else {
    sub = 5;
  }

  if (i <= -1 * (owlItemWidth) * (owlItemsCount - sub)) {
    i = owlItemWidth;
  }
}, 5000);