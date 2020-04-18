$(function(){


  var dropdownRoom = new Dropdown('#dropdown2');


  function Dropdown(id) {
    
    //сам dropdown (input)
    this.$inputDropdown = $(id);

    //лист вариантов (ul)
    this.$inputDropdownList = this.$inputDropdown.next().next();

    //набор кол-ва и названий
    this.objOfinputsDropdown = this.$inputDropdownList.find('[data=\'numberValue\']');

    //объект с данными текущего dropdown
    this.objDataDropdown = {};

    //метод обновления данных dropdown
    this.refreshDataDropdown = function(name, val) {
      this.objDataDropdown[name] = val;
      console.log(this.objDataDropdown);
    };

    this.init = function() {

      //инициализация щелчка на dropdown
      this.$inputDropdown.on('click', function(e) {
        $(this).toggleClass('expanded');
      });

      //инициализация объекта с данными и кликов на + и на -
      $.each(this.objOfinputsDropdown, (i, v) => {
        this.objDataDropdown[$(v).data('name')] = $(v).val();
        if ($(v).val()==0) {
          $(v).addClass('disable');
        }

        // +
        $(v).next().on('click', function(e) {
          let currentVal = $(this).prev().val();
          $(this).prev().prev().removeClass('disable');
          $(this).prev().val(++currentVal);
        });
        // -
        $(v).prev().on('click', function(e) {
          let currentVal = Number( $(this).next().val() );
          // console.log(currentVal);
          if ( currentVal === 1 ) {
            $(this).addClass('disable');
          }
          if ( currentVal > 0 ) {
            $(this).next().val(--currentVal);
          }
        });
      });

      console.log(this.objDataDropdown);

    };

    this.init();
    
  }

});