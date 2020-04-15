$(function() {
  

  $('.jsSelect').niceSelect();


  $(".jsMaskedDate").inputmask('datetime', {
    mask: "1.2.y",
    alias: "dd:mm:yyyy",
    placeholder: "ДД.ММ.ГГГГ",
    separator: '.'
  });


  $('.jsDateDropdown').datepicker({
    dateFormat: "dd.mm.yy"
  });
  

});