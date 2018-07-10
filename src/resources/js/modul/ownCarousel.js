

!function( j, w, d ) {

  j.app = j.app || {};

  j.app.team = {

    init: function() {

      j.app.team.load();

    },

    load: function() {

      j.app.team.owlCarouselLoad();

    },

    owlCarouselLoad: function() {

      var teamCarousel = j( '.team .owl-carousel' );

      teamCarousel.owlCarousel({

        items: 1,
        autoplay: true,
        margin:50,
        responsive: {
          576: {
            items: 2
          },
          768: {
            items: 3
          }
        }

      });

    }

  },

  j.app.partner = {

    init: function() {

      j.app.partner.load();

    },

    load: function() {

      j.app.partner.owlCarouselLoad();

    },

    owlCarouselLoad: function() {

      var partnerCarousel = j( '.partner .owl-carousel' );

      partnerCarousel.owlCarousel({

        items: 1,
        autoplay: true,
        responsive: {
          576: {
            items: 2
          },
          768: {
            items: 3
          }
        }

      });

    }

  }

  j.app.testimonial = {

    init: function() {

      j.app.testimonial.load();

    },

    load: function() {

      j.app.testimonial.owlCarouselLoad();

    },

    owlCarouselLoad: function() {

      var testimonialCarousel = j( '.testimonial .owl-carousel' );

      testimonialCarousel.owlCarousel({

        items: 1,
        autoplay: true,
        margin: 10,
        nav: true,
        navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
        ]

      });

    }

  }
}(jQuery, $('body'), $(window), $(document));
!function( j ) {
  j(document).ready(function() {
    j.app.team.init();
    j.app.partner.init();
    j.app.testimonial.init();
  })
}( jQuery );
