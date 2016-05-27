// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    $('a[href$="contest/"]').addClass('current');
    stickFooter();
    $('input[type="checkbox"]').bootstrapSwitch({
      size: 'mini',
      onColor: 'info',
      offColor: 'warning',
      handleWidth: 50,
      labelWidth: 30,
      onText: 'Team',
      offText: 'User',
      onInit: function(event, state) {
        return $(this).parent().parent().addClass('pull-right');
      },
      onSwitchChange: function(event, state) {
        if (state) {
          $('#userList').hide();
          $('#teamList').fadeIn();
        } else {
          $('#teamList').hide();
          $('#userList').fadeIn();
        }
        return stickFooter();
      }
    });
    $('a[href^="#user-"]').on('click', function() {
      var pk;
      pk = ($(this).attr('href')).substr(6);
      return location.href = '/person/' + pk;
    });
    return $('a[href^="#team-"]').on('click', function() {
      var pk;
      pk = ($(this).attr('href')).substr(6);
      return location.href = '/team/' + pk;
    });
  });

}).call(this);
