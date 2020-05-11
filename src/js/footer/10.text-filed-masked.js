$(function() {

  $('[data="text-field-date"]').inputmask('datetime', {
    mask: "1.2.y",
    alias: "dd:mm:yyyy",
    placeholder: "ДД.ММ.ГГГГ",
    separator: '.'
  });

});