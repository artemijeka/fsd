'use strict';


var objDropdownRoom1 = new Dropdown('#dropdown1');
var objDropdownRoom2 = new Dropdown('#dropdown2');
var objDropdownCategory = new Dropdown('#dropdownCategory');


function Dropdown(id) {


  let self = this;


  //сам dropdown (input)
  this.inputDropdown = document.querySelector(id);


  //лист вариантов (ul)
  this.arInputsDropdownList = this.inputDropdown.nextSibling.nextSibling.nextSibling.children;


  //объект с данными текущего dropdown
  this.objDataDropdown = {};


  this.defaultPlaceholder = this.inputDropdown.getAttribute('placeholder');


  //инициализация щелчка на dropdown
  this.inputDropdown.onclick = function() {
    self.inputDropdown.classList.toggle('expanded');
  }


  //метод обновления данных dropdown
  this.refreshDataDropdown = function (name, val) {
    this.objDataDropdown[name] = val;
    this.setInputPlaceholder();
    this.setInputDataForBackend();
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
    let dataForBackend = JSON.stringify(this.objDataDropdown);
    this.inputDropdown.setAttribute(['data-for-backend'], dataForBackend);
  }


  //инициализация объекта с данными и кликов на + и на -
  for (let collectionOfItem of this.arInputsDropdownList) {
    let less, more, curValue, acceptListBtn;
    collectionOfItem.querySelectorAll('*').forEach((elem, ind, arr) => {
      if (elem.getAttribute('data') === 'numberValueLess') {
        less = elem;
      }
      if (elem.getAttribute('data') === 'numberValueMore') {
        more = elem;
      }
      if (elem.getAttribute('data') === 'numberValue') {
        curValue = elem;
      }
      if (elem.getAttribute('data') === 'acceptListBtn') {
        acceptListBtn = elem;
      }
    });


    //инициализация объекта с данными dropdown
    // this.objDataDropdown[curValue.getAttribute('data-name')] = curValue.value;


    if (typeof (curValue) != 'undefined') {
      if (Number(curValue.value) === 0) {
        less.classList.add('disable');
      }
    }

    if (typeof (less) != 'undefined') {
      less.onclick = function () {
        let currentVal = Number(curValue.getAttribute('value'));
        if (currentVal === 1) {
          less.classList.add('disable');
        }
        if (currentVal > 0) {
          curValue.setAttribute('value', --currentVal);
        }
        self.refreshDataDropdown(curValue.getAttribute('data-name'), currentVal);
        // console.log(self.objDataDropdown);
      }
    }

    if (typeof (more) != 'undefined') {
      more.onclick = function () {
        let currentVal = Number(curValue.getAttribute('value'));
        less.classList.remove('disable');
        curValue.setAttribute('value', ++currentVal);
        self.refreshDataDropdown(curValue.getAttribute('data-name'), currentVal);
        // console.log(self.objDataDropdown);
      }
    }

    if (typeof(acceptListBtn) != 'undefined') {
      console.log('test1');
      acceptListBtn.onclick = function() {
        console.log('test2');
        self.inputDropdown.classList.remove('expanded');
      }
    }
  }



}