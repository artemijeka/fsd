'use strict';


let likeButton1 = new LikeButton('#likeButton1');
let likeButton2 = new LikeButton('#likeButton2');


function LikeButton( id ) {


  let self = this;


  this.likeButton = document.querySelector( id );
  // this.likeButton.value; 
  
  
  this.changeValue = function() {
    // console.log(self.likeButton.getAttribute('data-like-checked') == 'true');
    if (self.likeButton.getAttribute('data-like-checked') == 'true') {
      self.likeButton.value--;
      self.likeButton.setAttribute('data-like-checked', 'false');
    } else {
      self.likeButton.value++;
      self.likeButton.setAttribute('data-like-checked', 'true');
    }
  }


  this.likeButton.onclick = this.changeValue;
  

}