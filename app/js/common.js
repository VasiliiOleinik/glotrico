$(function () {
  $('#profile-ico').on('click', function () {
    $(this).siblings('.profile-dropdown').fadeIn();
  });

  $(document).mouseup(function (e) {
    var div = $(".profile-dropdown");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.fadeOut();
    }
  });
});
