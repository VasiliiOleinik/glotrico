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
    $(this).val(picker.startDate.format('DD.MM.YY') + ' - ' + picker.endDate.format('DD.MM.YY'));
  });
  $('.single-calendar').daterangepicker({
    opens: 'center',
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    autoUpdateInput: false,
    maxYear: parseInt(moment().format('YYYY'),10),
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
  $('.single-calendar').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('DD.MM.YY'));
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

