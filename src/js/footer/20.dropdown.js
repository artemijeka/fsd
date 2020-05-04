'use strict';


var objDropdownRoom1 = new Dropdown('#dropdown1');
var objDropdownRoom2 = new Dropdown('#dropdown2');
var objDropdownCategory1 = new Dropdown('#dropdownCategory1');
var objDropdownCategory2 = new Dropdown('#dropdownCategory2');


function Dropdown(id) {


  let self = this;


  //сам dropdown (input)
  this.inputDropdown = document.querySelector(id);


  //лист вариантов (ul)
  this.arInputsDropdownList = this.inputDropdown.nextSibling.nextSibling.nextSibling.children;
  // console.log(this.arInputsDropdownList);

  //объект с данными текущего dropdown
  this.objDataDropdown = {};


  //кнопка очистки
  this.cleanListBtn = null;


  this.defaultPlaceholder = this.inputDropdown.getAttribute('placeholder');


  //инициализация щелчка на dropdown
  this.inputDropdown.onclick = function () {
    self.inputDropdown.classList.toggle('expanded');
  }


  //метод обновления данных dropdown
  this.refreshDataDropdown = function (name, val) {
    this.objDataDropdown[name] = val;
    this.setInputPlaceholder();
    this.setInputDataForBackend();
  }


  this.cleanDataDropdown = function() {
    this.init(true);//clean = true
    for (let key in this.objDataDropdown) {
      this.refreshDataDropdown( key, 0 );
    }
    this.cleanListBtn.classList.remove('active');
  }


  this.setInputPlaceholder = function () {
    let placeholder = '';
    for (let [key, val] of Object.entries(this.objDataDropdown)) {
      if (val > 0) {
        key = key.split(' ')[0];
        placeholder += ', ' + val + ' ' + key;
      }
    }
    placeholder = placeholder.substring(2);
    if (placeholder === '') {
      this.inputDropdown.setAttribute('placeholder', this.defaultPlaceholder);
    } else {
      this.inputDropdown.setAttribute('placeholder', placeholder);
    }
  }


  this.setInputDataForBackend = function () {
    let dataForBackend = JSON.stringify( this.objDataDropdown );
    this.inputDropdown.setAttribute( ['data-for-backend'], dataForBackend );
  }


  this.init = function (clean = false) {

    //инициализация объекта с данными и кликов на '+', на '-', на 'применить'
    for (let collectionOfItem of this.arInputsDropdownList) {

      let less, more, curItem, curName, curVal, acceptListBtn, cleanListBtn;

      collectionOfItem.querySelectorAll('*').forEach((elem, ind, arr) => {

        if (elem.getAttribute('data') === 'numberValueLess') {
          less = elem;
          if (clean) {
            less.classList.add('disable');
          }
        }
        if (elem.getAttribute('data') === 'numberValueMore') {
          more = elem;
        }
        if (elem.getAttribute('data') === 'numberValue') {
          curItem = elem;
          // console.log(curItem);
          curName = curItem.getAttribute('data-name');
          curVal = Number(curItem.getAttribute('value'));
          if (curVal !== 0) {
            this.refreshDataDropdown(curName, curVal);
          }
          if (clean) {
            curItem.setAttribute('value', 0)
          }
        }
        if (elem.getAttribute('data') === 'acceptListBtn') {
          acceptListBtn = elem;
        }
        if (elem.getAttribute('data') === 'cleanListBtn') {
          this.cleanListBtn = cleanListBtn = elem;
        }

      });

      if (typeof (curItem) !== 'undefined') {
        if (Number(curItem.value) === 0) {
          less.classList.add('disable');
        }
      }

      if (typeof (less) !== 'undefined') {
        less.onclick = function () {
          let curVal = Number(curItem.getAttribute('value'));
          if (curVal === 1) {
            less.classList.add('disable');
          }
          if (curVal > 0) {
            curItem.setAttribute('value', --curVal);
          }
          self.refreshDataDropdown(curItem.getAttribute('data-name'), curVal);
          //TODO сделать скрытие кнопки очистить когда все чисто
          // console.log(self.objDataDropdown);
        }
      }

      if (typeof (more) !== 'undefined') {
        more.onclick = function () {
          let curVal = Number(curItem.getAttribute('value'));
          less.classList.remove('disable');
          curItem.setAttribute('value', ++curVal);
          self.refreshDataDropdown(curItem.getAttribute('data-name'), curVal);
          // console.log(self.objDataDropdown);
          self.cleanListBtn.classList.add('active');//показываем кнопку очистить по прибавлению
        }
      }

      if (typeof (acceptListBtn) !== 'undefined') {
        acceptListBtn.onclick = function () {
          self.inputDropdown.classList.remove('expanded');
        }
      }

      if (typeof (cleanListBtn) !== 'undefined') {
        cleanListBtn.onclick = function () {
          self.cleanDataDropdown();
        }
      }

    }

  }

  this.init();

}