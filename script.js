$('.nav-link, .btn-ghost').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300 );
        return false;
      }
    }
    
  }); 
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >=  150 ) {
        $(".navbar-floating").css("padding-top", "15px");
        $(".navbar-floating").css("padding-bottom", "15px")
        $(".navbar-floating").css("background-color", "black")
      
    } else {
        $(".navbar-floating").css("padding-top", "10px");
        $(".navbar-floating").css("padding-bottom", "10px")
        $(".navbar-floating").css("background-color", "rgba(0, 0, 0, 0.582)")
    }
  });
  $(window).scroll(function() {
      var scroll  = $(window).scrollTop();
      if (scroll >= 0 && scroll <= 600) {
          $("#home1").css("color", "#16c0f0")
      } 
     else {
        $("#home1").css("color", "#fff")
     }
    })
    $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 601 && scroll <= 1100) {
            $("#about1").css("color", "#16c0f0")
        } 
       else {
          $("#about1").css("color", "#fff")
       }
      })
      $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 1100.1 && scroll <= 2300) {
            $("#courses1").css("color", "#16c0f0")
        } 
       else {
          $("#courses1").css("color", "#fff")
       }
      })
      $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 2300.1 && scroll <= 2900) {
            $("#contact1").css("color", "#16c0f0")
        } 
       else {
          $("#contact1").css("color", "#fff")
       }
      })
    