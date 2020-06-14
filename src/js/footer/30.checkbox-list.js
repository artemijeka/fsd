'use strict';


iniTcheckboxList();


function iniTcheckboxList() {
  let collectionCheckboxLists = document.querySelectorAll('[data="checkboxList"]');
  let arCheckboxLists = [];
  let i = 0;
  
  collectionCheckboxLists.forEach( (elm, ind, nodeList) => {
    let curId = elm.getAttribute('id');
    console.log(curId);
    arCheckboxLists[i++] = new CheckboxList( '#' + curId );
  });
}


function CheckboxList(id) {


  //инициализируем объект чтобы потом обращаться к нему внутри событий
  let self = this;


  //инициализация блока в DOM
  this.checkboxList = document.querySelector(id);


  //выбираем все переключатели списка
  this.checkboxListToggle = this.checkboxList.querySelector('[data-toggle]');
  // console.log( this.checkboxListToggle );
  
  
  //инициализация щелчка на toggle
  this.checkboxListToggle.onclick = function() {
    self.checkboxList.toggleAttribute('data-expanded');
  }

  
}