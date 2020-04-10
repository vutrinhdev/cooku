$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  // $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  //------- Niceselect  js --------//  

  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };
  if (document.getElementById("service-select")) {
    $('select').niceSelect();
  };

  //------- Lightbox  js --------//  

  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //------- Superfist nav menu  js --------//  

  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  //------- Mobile Nav  js --------//  

  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  //------- Smooth Scroll  js --------//  

  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  $(document).ready(function () {

    $('html, body').hide();

    if (window.location.hash) {

      setTimeout(function () {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

          scrollTop: $(window.location.hash).offset().top - 108

        }, 1000)

      }, 0);

    } else {

      $('html, body').show();

    }

  });

  //------- Header Scroll Class  js --------//  

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $('#header').addClass('header-scrolled');
  //   } else {
  //     $('#header').removeClass('header-scrolled');
  //   }
  // });

  //------- Owl Carusel  js --------//

  $('.active-testimonial-carusel').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    autoplayHoverPause: true,
    smartSpeed: 500,
    dots: false,
    // autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      }
    }
  });


  $('.active-blog-carusel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      961: {
        items: 3,
      }
    }
  });

  //------- Light Gallery js --------//
  if (document.getElementById('lightgallery')) {
    $('#lightgallery').lightGallery({
      selector: '.all'
    });
  }

  //------- Timer Countdown  js --------//  

  if (document.getElementById("count")) {

    var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="count"
      document.getElementById("count").innerHTML =

        "<div class='col'><span>" + days + "</span><br> Days " + "</div>" + "<div class='col'><span>" + hours + "</span><br> Hours " + "</div>" + "<div class='col'><span>" + minutes + "</span><br> Minutes " + "</div>" + "<div class='col'><span>" + seconds + "</span><br> Seconds </div>";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "EXPIRED";
      }
    }, 1000);

  }

  //------- Google Map  js --------//  

  if (document.getElementById("map")) {
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e9e9e9"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dedede"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#333333"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f2f2f2"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
      });
    }
  }

  //------- Mailchimp js --------//

  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });

  /*----------------------------------------------------*/
  /*  Isotope Fillter js
  /*----------------------------------------------------*/
  $(window).load(function () {
    $('.project-filter ul li').click(function () {
      $('.project-filter ul li').removeClass('active');
      $(this).addClass('active');
      var filterData = $(this).attr('data-filter');
      $projectGrid.isotope({
        filter: filterData
      })
    });


    var $projectGrid = $(".projects_inner").isotope({
      itemSelector: ".all",
      percentPosition: true,
    });
  });

  //------- Progress Bar --------//
  $.fn.bekeyProgressbar = function (options) {

    var $this = $(this);

    var $progressBar = $this;
    var $progressCount = $progressBar.find('.progressBar-percentage-count');
    var $circle = $progressBar.find('.progressBar-circle');
    var percentageProgress = $progressBar.attr('data-progress');
    var percentageRemaining = (100 - percentageProgress);
    var percentageText = $progressCount.parent().attr('data-progress');

    //Calcule la circonférence du cercle
    var radius = $circle.attr('r');
    var diameter = radius * 2;
    var circumference = Math.round(Math.PI * diameter);

    //Calcule le pourcentage d'avancement
    var percentage = circumference * percentageRemaining / 100;

    $circle.css({
      'stroke-dasharray': circumference,
      'stroke-dashoffset': percentage
    })

  };


  $('.progressBar--animateNone').bekeyProgressbar({
    animate: false,
    animateText: false
  });

  $('.progressBar--animateCircle').bekeyProgressbar({
    animate: true,
    animateText: false
  });

  $('.progressBar--animateText').bekeyProgressbar({
    animate: false,
    animateText: true
  });

  $('.progressBar--animateAll').bekeyProgressbar();

  Countdown.init();
});

// Create Countdown
var Countdown = {

  // Backbone-like structure
  $el: $('.countdown'),

  // Params
  countdown_interval: null,
  total_seconds: 0,

  // Initialize the countdown  
  init: function () {

    // DOM
    this.$ = {
      hours: this.$el.find('.bloc-time.hours .figure'),
      minutes: this.$el.find('.bloc-time.min .figure'),
      seconds: this.$el.find('.bloc-time.sec .figure')
    };

    // Init countdown values
    this.values = {
      hours: this.$.hours.parent().attr('data-init-value'),
      minutes: this.$.minutes.parent().attr('data-init-value'),
      seconds: this.$.seconds.parent().attr('data-init-value'),
    };

    // Initialize total seconds
    this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

    // Animate countdown to the end 
    this.count();
    Split(['#one', '#two'], {
      sizes: [50, 50],
      minSize: 400,
      gutterSize: 10,
    })
  },

  count: function () {

    var that = this,
      $hour_1 = this.$.hours.eq(0),
      $hour_2 = this.$.hours.eq(1),
      $min_1 = this.$.minutes.eq(0),
      $min_2 = this.$.minutes.eq(1),
      $sec_1 = this.$.seconds.eq(0),
      $sec_2 = this.$.seconds.eq(1);

    this.countdown_interval = setInterval(function () {

      if (that.total_seconds > 0) {

        --that.values.seconds;

        if (that.values.minutes >= 0 && that.values.seconds < 0) {

          that.values.seconds = 59;
          --that.values.minutes;
        }

        if (that.values.hours >= 0 && that.values.minutes < 0) {

          that.values.minutes = 59;
          --that.values.hours;
        }

        // Update DOM values
        // Hours
        that.checkHour(that.values.hours, $hour_1, $hour_2);

        // Minutes
        that.checkHour(that.values.minutes, $min_1, $min_2);

        // Seconds
        that.checkHour(that.values.seconds, $sec_1, $sec_2);

        --that.total_seconds;
      }
      else {
        clearInterval(that.countdown_interval);
      }
    }, 1000);
  },

  animateFigure: function ($el, value) {

    var that = this,
      $top = $el.find('.top'),
      $bottom = $el.find('.bottom'),
      $back_top = $el.find('.top-back'),
      $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
      rotationX: '-180deg',
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function () {

        $top.html(value);

        $bottom.html(value);

        TweenMax.set($top, { rotationX: 0 });
      }
    });

    TweenMax.to($back_top, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: 'all'
    });
  },

  checkHour: function (value, $el_1, $el_2) {

    var val_1 = value.toString().charAt(0),
      val_2 = value.toString().charAt(1),
      fig_1_value = $el_1.find('.top').html(),
      fig_2_value = $el_2.find('.top').html();

    if (value >= 10) {

      // Animate only if the figure has changed
      if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
      if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

      // If we are under 10, replace first figure with 0
      if (fig_1_value !== '0') this.animateFigure($el_1, 0);
      if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }
  }
};
