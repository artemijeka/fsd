$(function(){
  
  let dropdownRoom = {
    $inputDropdownRoom: $('[data="openDropdownList"]'),
    $inputDropdownRoomList: $('[data="openDropdownList"]').next().next(),
    init: function() {
      $('[data="numberValueLess"]').on('click', function(e) {
        let currentVal = Number( $(this).next().val() );
        // console.log(currentVal);
        if ( currentVal === 1 ) {
          $(this).addClass('disable');
        }
        if ( currentVal > 0 ) {
          $(this).next().val(--currentVal);
        }
      });

      $('[data="numberValueMore"]').on('click', function(e) {
        let currentVal = $(this).prev().val();
        $(this).prev().prev().removeClass('disable');
        $(this).prev().val(++currentVal);
      });

      $('[data="openDropdownList"]').on('click', function(e) {
        // console.log('test');
        $(this).toggleClass('expanded');
      });

      this.$inputDropdownRoomList.each((index) => {
        console.log($(this).find('ul'));
      });

    },
  };

  dropdownRoom.init();

  // console.log(dropdownRoom.$inputDropdownRoomList);

});