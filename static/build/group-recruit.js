// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var apply;
    $('a[href$="group/"]').addClass('current');
    stickFooter();
    apply = $('#teamCont').data('pk');
    if (apply !== -1) {
      $('button.btn-default').hide();
      $("button[id='apply-" + apply + "']").siblings('p.text-danger').show();
    }
    $('.alert').on('click', function() {
      return $(this).fadeOut();
    });
    $('#joinBtn').on('click', function() {
      if ($('#invCode').val()) {
        return $.ajax({
          url: 'join/',
          type: 'post',
          dataType: 'json',
          data: {
            code: $('#invCode').val()
          },
          success: function(data) {
            if (data.msg === 'okay') {
              $('#groupName').text(data.name);
              $('#joinSuccess').fadeIn();
              return window.setTimeout('location.href="/group/"', 1000);
            } else {
              return window.setTimeout("$('#joinFail').fadeIn()", 1000);
            }
          }
        });
      }
    });
    $('#createBtn').on('click', function() {
      if ($('#grpName').val()) {
        return $.ajax({
          url: 'create/',
          type: 'post',
          dataType: 'json',
          data: {
            name: $('#grpName').val()
          },
          success: function(data) {
            if (data.msg === 'okay') {
              $('#createSuccess').fadeIn();
              return window.setTimeout('location.href="/group/"', 1000);
            } else {
              return window.setTimeout("$('#createFail').fadeIn()", 1000);
            }
          }
        });
      }
    });
    $('button[id^="apply-"]').on('click', function() {
      var pk;
      pk = ($(this).attr('id')).substr(6);
      return $.ajax({
        url: 'apply/',
        type: 'post',
        dataType: 'json',
        data: {
          pk: pk
        },
        success: (function(_this) {
          return function(data) {
            if (data.msg === 'okay') {
              $('button.btn-default').hide();
              $('#applySuccess').fadeIn();
              $(_this).siblings('p.text-danger').fadeIn();
              return window.setTimeout("$('#applySuccess').fadeOut()", 1000);
            } else {
              $('#applyFail').fadeIn();
              return window.setTimeout("$('#applyFail').fadeOut()", 1000);
            }
          };
        })(this)
      });
    });
    return $('#withdrawBtn').on('click', function() {
      return $.ajax({
        url: 'withdraw/',
        type: 'post',
        dataType: 'json',
        success: function(data) {
          $('p.text-danger').hide();
          $('button.btn-default').fadeIn();
          $('#withdrawSuccess').fadeIn();
          return window.setTimeout("$('#withdrawSuccess').fadeOut()", 1000);
        }
      });
    });
  });

}).call(this);
