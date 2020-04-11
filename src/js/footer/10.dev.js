$(function() {
  

  $('select.input__dropdown').niceSelect();


  $(".input__masked").inputmask('datetime', {
    mask: "1.2.y",
    alias: "dd:mm:yyyy",
    placeholder: "ДД.ММ.ГГГГ",
    separator: '.'
  });
  $(".input__masked").on('keyup', function(){
    var maskedInput = $('.input__masked').val();
    console.log( maskedInput );
  });

});