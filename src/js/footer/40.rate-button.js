'use strict';



let rateButton1 = new RateButton('#rateButton1');
let rateButton2 = new RateButton('#rateButton2');




function RateButton(id) {

  let self = this;


  this.rateButtonBox = document.querySelector(id);


  this.valueNumberRate = 0;


  this.rateButtonItems = this.rateButtonBox.children;


  for (let button of self.rateButtonItems) {
    button.onclick = function(e) {
      self.setRate(e);
    }      
  }
  
  this.setRate = function(e) {
    // console.log(e.target.parentNode);//button
    if (e.target.parentNode.classList.contains('checked') && this.valueNumberRate === 1) {
      this.resetRate(e.target.parentNode);
    } else {
      this.valueNumberRate = Number( e.target.parentNode.getAttribute('data-rate-number') );   
      // console.log(e.target.parentNode.getAttribute('data-rate-number'));
      this.rateButtonBox.setAttribute('data-rate-value', this.valueNumberRate);
      // this.resetRateView();
      this.setRateView(this.valueNumberRate);
    }
  }


  this.resetRate = function(firstButton) {
    console.log('reset');
    this.rateButtonBox.setAttribute('data-rate-value', '');
    // this.setRateView(0);
    console.log(firstButton);
    firstButton.classList.remove('checked');
  }


  this.setRateView = function(setRateNumber) {
    for (let button of self.rateButtonItems) {
      // console.log(setRateNumber);
      // console.log(button);
      let currentButtonNumber = button.getAttribute('data-rate-number');

      if (setRateNumber >= currentButtonNumber) {
        button.classList.add('checked');
      } else {
        button.classList.remove('checked');
      }
    }
  }


}