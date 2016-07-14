$ ->

  $('a[href$="writeup/"]').addClass 'current'

  Simditor.locale = 'en-US'
  editor = new Simditor
    textarea: $('#editor')
    toolbar: [
                'title'
                'bold'
                'italic'
                'strikethrough'
                '|'
                'ol'
                'ul'
                'blockquote'
                'code'
                'table'
                '|'
                'link'
                'hr'
                '|'
                'markdown'
            ]
    toolbarFloatOffset: $('nav').height()

  $('#uploadBtn').on 'click', ->
    if $('#imageName').val().length == 0
      return
    $.ajaxFileUpload
      url: '/writeup/uploadImage/'
      secureurl: false
      fileElementId: 'imageFile'
      dataType: 'json'
      success: (data) ->
        if data.msg == 'okay'
          $('.alert-success').fadeIn()
          li = '<li class="list-group-item"><a class="btn btn-xs btn-link pull-right" data-toggle="tooltip" data-placement="right" title="click to insert" data-path data-name><i class="fa fa-share-square-o"></i></a><p></p></li>'
          $('ul.list-group').append li
          $li = $('ul.list-group li').last()
          $li.find('p').text $('#imageName').val()
          $li.find('a').attr 'data-path', data.path
          $li.find('a').attr 'data-name', $('#imageName').val()
          $('[data-toggle="tooltip"]').tooltip()
          $('a.btn.btn-xs.btn-link').on 'click', ->
            content = '![' + ($(this).data 'name') + '](' + ($(this).data 'path') + ')'
            insertAtCursor $('textarea')[0], content
          window.setTimeout "$('.alert-success').fadeOut()", 1000

  $('#submitBtn').on 'click', ->
    console.log editor.getValue()

  stickFooter()