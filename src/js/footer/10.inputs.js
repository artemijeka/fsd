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



  $('[data="openDropdownList"]').on('click', function(){
    console.log('test');
    $(this).toggleClass('expanded');
  });


  $('[data="numberValueMore"]').on('click', function(e){
    let currentVal = $(this).prev().val();
    $(this).prev().prev().removeClass('disable');
    $(this).prev().val(++currentVal);
  });

  $('[data="numberValueLess"]').on('click', function(e) {
    let currentVal = Number( $(this).next().val() );
    console.log(currentVal);
    if (currentVal === 1) {
      $(this).addClass('disable');
    }  
    if (currentVal > 0) {
      $(this).next().val(--currentVal);
    }
  });

  let dropdownRoom = {
    $inputDescr: $('[data="openDropdownList"]'),
    
  };

});