// $(function(){


  var dropdownRoom = new Dropdown('#dropdown2');


  function Dropdown(id) {
    
    //сам dropdown (input)
    this.inputDropdown = document.querySelector(id);

    //лист вариантов (ul)
    this.arInputsDropdownList = this.inputDropdown.nextSibling.nextSibling.nextSibling.children;

    //объект с данными текущего dropdown
    this.objDataDropdown = {};

    //метод обновления данных dropdown
    this.refreshDataDropdown = (name, val) => {
      this.objDataDropdown[name] = val;
      console.log(this.objDataDropdown);
    };

    this.init = function() {

      //инициализация щелчка на dropdown
      this.inputDropdown.onclick = function(event) {
        event.target.classList.toggle('expanded');
      }

      //инициализация объекта с данными и кликов на + и на -
      for (let item of this.arInputsDropdownList) {
        // console.log( item );
        let less = item.childNodes[3].childNodes[1];
        let value = item.childNodes[3].childNodes[3];
        let more = item.childNodes[3].childNodes[5];
        if ( Number( value.getAttribute('value') ) === 0 ) {
          less.classList.add('disable');
        }
        less.onclick = function() {
          let currentVal = Number( value.getAttribute('value') );
          if ( currentVal === 1 ) {
            less.classList.add('disable');
          }
          if ( currentVal > 0 ) {
            value.setAttribute('value', --currentVal);
          }
          // this.refreshDataDropdown( value.getAttribute('data-name'), currentVal );
          console.log(currentVal);
        }
        more.onclick = function() {
          let currentVal = Number( value.getAttribute('value') );
          less.classList.remove('disable');
          value.setAttribute('value', ++currentVal);
          console.log(currentVal);
        }
        
      }

    };
    this.init();
    
  }

// });