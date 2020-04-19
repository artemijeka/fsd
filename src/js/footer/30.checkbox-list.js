'use strict';


let checkboxList1 = new CheckboxList('#checkboxList1');
let checkboxList2 = new CheckboxList('#checkboxList2');


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