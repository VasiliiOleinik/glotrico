$(function () {
  // Выпадающее меню из профиля
  $('#profile-cab').on('click', function () {
    $(this).children('.profile-dropdown').fadeIn();
  });
  $(document).mouseup(function (e) {
    var div = $(".profile-dropdown");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.fadeOut();
    }
  });
  // Выбор даты
  $('#period').daterangepicker({
    opens: 'center',
    autoUpdateInput: false,
    locale: {
      "format": "MM/DD/YYYY",
      "separator": " - ",
      "applyLabel": "Сохранить",
      "cancelLabel": "Назад",
      "daysOfWeek": [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб"
      ],
      "monthNames": [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      "firstDay": 1
    },
  });
  $('#period').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM.DD.YYYY') + ' - ' + picker.endDate.format('MM.DD.YYYY'));
  });
  // Выбор пассажиров
  $('.menu-section_travelers').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.travelers-menu').fadeIn();
    } else {
      $('.travelers-menu').fadeOut();
    }
  });
  $(document).mouseup(function (e) {
    var div = $(".travelers-menu");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.fadeOut();
      $('.menu-section_travelers').removeClass('active');
    }
  });
  // Калькулятор пассажиров
  $('.travelers-menu_calc .btn-plus').on('click', function () {
    let thisValue = Number.parseInt($(this).siblings('input').val());
    $(this).siblings('input').val(++thisValue);
    if (thisValue > 0) {
      $(this).siblings('.btn-minus').removeClass('disabled');
    }
  });
  $('.travelers-menu_calc .btn-minus').on('click', function () {
    let thisValue = Number.parseInt($(this).siblings('input').val());
    $(this).siblings('input').val(--thisValue);
    if (thisValue <= 0) {
      $(this).siblings('input').val(0);
      $(this).addClass('disabled');
    } else {
      $(this).removeClass('disabled');
    }
  });
});

