// preloader
$("#preloader")
  .delay(1000)
  .animate(
    {
      opacity: "0",
    },
    500,
    function () {
      $("#preloader").css("display", "none");
    }
  );
//Menu Stick
var header = $(".sticky-bar");
var win = $(window);
win.on("scroll", function () {
  var scroll = win.scrollTop();
  if (scroll < 200) {
    header.removeClass("stick");
    $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
    $(".header-style-2 .categories-button-active").removeClass("open");
  } else {
    header.addClass("stick");
  }
});
//ScrollUp
$.scrollUp({
  scrollText: '<i class="fi-rr-arrow-small-up"></i>',
  easingType: "linear",
  scrollSpeed: 900,
  animation: "fade",
});
//Wow Active
new WOW().init();
//sidebar sticky
if ($(".sticky-sidebar").length) {
  $(".sticky-sidebar").theiaStickySidebar();
}
//Category toggle function
if ($(".categories-button-active").length) {
  var searchToggle = $(".categories-button-active");
  searchToggle.on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).siblings(".categories-dropdown-active-large").removeClass("open");
    } else {
      $(this).addClass("open");
      $(this).siblings(".categories-dropdown-active-large").addClass("open");
    }
  });
}
//Select active
if ($(".select-active").length) {
  $(".select-active").select2();
}
//CounterUp
if ($(".count").length) {
  $(".count").counterUp({
    delay: 10,
    time: 2000,
  });
}
// Isotope active
if ($(".grid").length) {
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "masonry",
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });
}
//SidebarSearch
function sidebarSearch() {
  var searchTrigger = $(".search-active"),
    endTriggersearch = $(".search-close"),
    container = $(".main-search-active");
  searchTrigger.on("click", function (e) {
    e.preventDefault();
    container.addClass("search-visible");
  });
  endTriggersearch.on("click", function () {
    container.removeClass("search-visible");
  });
}
sidebarSearch();
//Sidebar menu Active
function mobileHeaderActive() {
  var navbarTrigger = $(".burger-icon"),
    endTrigger = $(".mobile-menu-close"),
    container = $(".mobile-header-active"),
    wrapper4 = $("body");
  wrapper4.prepend('<div class="body-overlay-1"></div>');
  navbarTrigger.on("click", function (e) {
    navbarTrigger.toggleClass("burger-close");
    e.preventDefault();
    container.toggleClass("sidebar-visible");
    wrapper4.toggleClass("mobile-menu-active");
  });
  endTrigger.on("click", function () {
    container.removeClass("sidebar-visible");
    wrapper4.removeClass("mobile-menu-active");
  });
  $(".body-overlay-1").on("click", function () {
    container.removeClass("sidebar-visible");
    wrapper4.removeClass("mobile-menu-active");
    navbarTrigger.removeClass("burger-close");
  });
}
mobileHeaderActive();
/*---------------------
        Mobile menu active
    ------------------------ */
var $offCanvasNav = $(".mobile-menu"),
  $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu
  .parent()
  .prepend(
    '<span class="menu-expand"><i class="fi-rr-angle-small-down"></i></span>'
  );
/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();
/*Category Sub Menu Toggle*/
$offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
  var $this = $(this);
  if (
    $this
      .parent()
      .attr("class")
      .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
    ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
  ) {
    e.preventDefault();
    if ($this.siblings("ul:visible").length) {
      $this.parent("li").removeClass("active");
      $this.siblings("ul").slideUp();
    } else {
      $this.parent("li").addClass("active");
      $this
        .closest("li")
        .siblings("li")
        .removeClass("active")
        .find("li")
        .removeClass("active");
      $this.closest("li").siblings("li").find("ul:visible").slideUp();
      $this.siblings("ul").slideDown();
    }
  }
});
//Perfect Scrollbar
const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");

// Odometer JS
$(".odometer").appear(function (e) {
  var odo = $(".odometer");
  odo.each(function () {
    var countNumber = $(this).attr("data-count");
    $(this).html(countNumber);
  });
});
//Testimonial Slider
$(".testimonial-slider-three").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>',
  ],
  margin: 25,
  items: 1,
  thumbs: false,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  autoHeight: true,
});
$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2,
    },
    500: {
      items: 3,
    },
    600: {
      items: 4,
    },
    800: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});

$(".swiper-group-3").each(function () {
  var swiper_3_items = new Swiper(this, {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
      250: {
        slidesPerView: 1,
      },
    },
  });
});

// Nice Select JS
$("select").niceSelect();

// Date Picker
$("#datetimepicker").datepicker({
  weekStart: 0,
  todayBtn: "linked",
  language: "es",
  orientation: "bottom auto",
  keyboardNavigation: false,
  autoclose: true,
});

$(".accordion")
  .find(".accordion-title")
  .on("click", function () {
    // Adds Active Class
    $(this).toggleClass("active");
    // Expand or Collapse This Panel
    $(this).next().slideToggle("fast");
    // Hide The Other Panels
    $(".accordion-content").not($(this).next()).slideUp("fast");
    // Removes Active Class From Other Titles
    $(".accordion-title").not($(this)).removeClass("active");
  });
/*----------------------------------------
           back to top
        ----------------------------------------*/
$(document).on("click", ".back-to-top", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    100
  );
});
$(window).on("scroll", function () {
  /*---------------------------------------
            back-to-top
        -----------------------------------------*/
  var ScrollTop = $(".back-to-top");
  if ($(window).scrollTop() > 100) {
    ScrollTop.fadeIn(500);
  } else {
    ScrollTop.fadeOut(500);
  }

  /*---------------------------------------
            sticky-active
        -----------------------------------------*/
  var scroll = $(window).scrollTop();
  if (scroll < 445) {
    $(".navbar").removeClass("sticky-active");
  } else {
    $(".navbar").addClass("sticky-active");
  }
});
