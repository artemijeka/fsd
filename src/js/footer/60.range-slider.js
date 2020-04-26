'use strict';

// let rangeSlider1 = new RangeSlider('#rangeSlider1', '#rangeSliderInterface1');

// function RangeSlider(idInput, idInterface) {

//   let self = this;

//   this.rangeSliderInput = document.querySelector(idInput);
//   this.rangeSliderInterface = document.querySelector(idInterface);


//   this.minRangeSlider = 5000;
//   this.minRangeSliderPercent = 100;
//   this.maxRangeSlider = 10000;
//   this.maxRangeSliderPercent = 0;
//   this.range = this.maxRangeSlider - this.minRangeSlider;//5000 = 100%
//   this.rangeOnePercent = this.range / 100;//50 = 1%


//   this.iterfaceSlanc = document.createElement('span');
//   this.iterfaceSlanc.classList.add('range-slider__interface-slanc');
//   this.rangeSliderInterface.appendChild(this.iterfaceSlanc);


//   this.minIterface = document.createElement('span');
//   this.minIterface.classList.add('range-slider__interface-min');
//   this.minIterface.setAttribute('data', 'min');
//   this.minIterface.setAttribute('data-cur-val', '5500');
//   this.rangeSliderInterface.appendChild(this.minIterface);


//   this.maxIterface = document.createElement('span');
//   this.maxIterface.classList.add('range-slider__interface-max');
//   this.maxIterface.setAttribute('data', 'max');
//   this.maxIterface.setAttribute('data-cur-val', '8700');
//   this.rangeSliderInterface.appendChild(this.maxIterface);


//   this.setPosition = function(spiner) {
//     let curValue = spiner.getAttribute('data-cur-val');
//     let curPosition = (curValue - this.range) / this.rangeOnePercent;//7000-5000=2000/50=40
//     if (curPosition > this.maxRangeSliderPercent) this.maxRangeSliderPercent = curPosition;
//     if (curPosition < this.minRangeSliderPercent) this.minRangeSliderPercent = curPosition;    
//     spiner.style.left = curPosition+'%';
//     this.iterfaceSlanc.style.left = this.minRangeSliderPercent+'%';
//     this.iterfaceSlanc.style.right = 100 - this.maxRangeSliderPercent+'%';
//   }

  
//   this.setPosition(this.minIterface);
//   this.setPosition(this.maxIterface);

// }





$(function () {

  var minRangeSliderValue;
  var maxRangeSliderValue;
  var $minRangeSliderView = $('#rangeSlider1').prev().find('.range-slider__descr-min')[0];
  var $maxRangeSliderView = $('#rangeSlider1').prev().find('.range-slider__descr-max')[0];

  $( "#rangeSliderInterface1" ).slider({
    range: true,
    min: 5000,
    max: 10000,
    values: [ 6000, 7000 ],
    slide: function( event, ui ) {
      minRangeSliderValue = String( ui.values[0] );
      maxRangeSliderValue = String( ui.values[1] );
      // console.log('test');
      var setRangeSliderValue = document.querySelector('#rangeSlider1');
      setRangeSliderValue.setAttribute('value', "{'min':'" + minRangeSliderValue + "'; max:'" + maxRangeSliderValue + "'}");
      minRangeSliderValue = minRangeSliderValue.slice(0, -3) + ' ' + minRangeSliderValue.slice(-3, 4);
      maxRangeSliderValue = maxRangeSliderValue.slice(0, -3) + ' ' + maxRangeSliderValue.slice(-3, 4);

      $($minRangeSliderView).html(minRangeSliderValue);
      $($maxRangeSliderView).html(maxRangeSliderValue);
    }
  }); 

  
});