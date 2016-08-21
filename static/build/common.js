// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var csrfSafeMethod, csrftoken;
    window.stickFooter = function() {
      var docHeight, footerTop;
      docHeight = $(window).height();
      footerTop = $('.footer').position().top + $('.footer').height() + 20;
      console.log(footerTop);
      console.log(docHeight);
      if (footerTop < docHeight) {
        return $('.footer').css({
          'margin-top': (docHeight - footerTop) + 'px'
        });
      } else {
        return $('.footer').css({
          'margin-top': '0px'
        });
      }
    };
    csrftoken = $.cookie('csrftoken');
    csrfSafeMethod = function(method) {
      return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
    };
    $.ajaxSetup({
      beforeSend: function(xhr, settings) {
        if (!(csrfSafeMethod(settings.type) || this.crossDomain)) {
          return xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      }
    });
    $('a[href="#signIn"]').on('click', function() {
      return location.href = '/';
    });
    $('a[href="#signUp"]').on('click', function() {
      return location.href = '/';
    });
    return $('a[href="#signOut"]').on('click', function() {
      $.post('/sign-out/');
      return location.href = '/';
    });
  });

}).call(this);
