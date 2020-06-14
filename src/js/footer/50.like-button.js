'use strict';


iniTlikeButton();


function iniTlikeButton() {
  let collectionlikeButtons = document.querySelectorAll('[data="likeButton"]');
  let arlikeButtons = [];
  let i = 0;

  collectionlikeButtons.forEach((elm, ind, nodeList) => {
    let curId = elm.getAttribute('id');
    arlikeButtons[i++] = new LikeButton('#' + curId);
  });
}

// let likeButton1 = new LikeButton('#likeButton1');
// let likeButton2 = new LikeButton('#likeButton2');


function LikeButton(id) {


  let self = this;

  this.likeButton = document.querySelector(id);

  let likeButtonText = self.likeButton.nextSibling.nextSibling;

  likeButtonText.innerText = this.likeButton.value;

  this.changeValue = function () {
    if (self.likeButton.getAttribute('data-like-checked') == 'true') {
      self.likeButton.value--;
      likeButtonText.innerText = self.likeButton.value;
      self.likeButton.setAttribute('data-like-checked', 'false');
    } else {
      self.likeButton.value++;
      likeButtonText.innerText = self.likeButton.value;
      self.likeButton.setAttribute('data-like-checked', 'true');
    }
  }

  this.likeButton.onclick = this.changeValue;


}