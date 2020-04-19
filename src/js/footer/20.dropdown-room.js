'use strict';


var objDropdownRoom1 = new Dropdown('#dropdown1');
var objDropdownRoom2 = new Dropdown('#dropdown2');


function Dropdown(id) {


  //сам dropdown (input)
  this.inputDropdown = document.querySelector(id);

  //лист вариантов (ul)
  this.arInputsDropdownList = this.inputDropdown.nextSibling.nextSibling.nextSibling.children;


  //объект с данными текущего dropdown
  this.objDataDropdown = {};


  //инициализация щелчка на dropdown
  this.inputDropdown.onclick = function(event) {
    event.target.classList.toggle('expanded');
  }


  //метод обновления данных dropdown
  this.refreshDataDropdown = function(name, val) {
    this.objDataDropdown[name] = val;
    this.setInputPlaceholder();
    this.setInputDataForBackend();
  }

  this.setInputPlaceholder = function() {
    let placeholder = '';
    for (let [key, val] of Object.entries(this.objDataDropdown)) {
      if (val > 0) {
        key = key.split(' ')[0];
        placeholder += ', ' + val + ' ' + key;
      }
    }
    placeholder = placeholder.substring(2);
    this.inputDropdown.setAttribute('placeholder', placeholder);
  }

  this.setInputDataForBackend = function() {
    let dataForBackend = JSON.stringify( this.objDataDropdown );
    this.inputDropdown.setAttribute(['data-for-backend'], dataForBackend);
  }
  
  //инициализация объекта с данными и кликов на + и на -
  for (let item of this.arInputsDropdownList) {
    let less = item.childNodes[3].childNodes[1];
    let value = item.childNodes[3].childNodes[3];
    let more = item.childNodes[3].childNodes[5];
    let self = this;

    //инициализация объекта с данными dropdown
    this.objDataDropdown[value.getAttribute('data-name')] = value.value;

    if (Number(value.value) === 0) {
      less.classList.add('disable');
    }

    less.onclick = function() {
      let currentVal = Number(value.getAttribute('value'));
      if (currentVal === 1) {
        less.classList.add('disable');
      }
      if (currentVal > 0) {
        value.setAttribute('value', --currentVal);
      }
      self.refreshDataDropdown(value.getAttribute('data-name'), currentVal);
      console.log(self.objDataDropdown);
    }

    more.onclick = function() {
      let currentVal = Number(value.getAttribute('value'));
      less.classList.remove('disable');
      value.setAttribute('value', ++currentVal);
      self.refreshDataDropdown(value.getAttribute('data-name'), currentVal);
      console.log(self.objDataDropdown);
    }
  }


}