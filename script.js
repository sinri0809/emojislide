'use strict';


window.onload = function(){
  function moveLeftRight(count, move){
    move = `${count}00%`;
    contents.forEach((cont) => {
      cont.style.transform = `translateX(${move})`;
    })
  }
  const contents = document.querySelectorAll('.slide-content');
  const control = document.querySelectorAll('.slide-control > div')
  // console.log(control); // o - left 1 - right
  let count = 0;
  let move = `${count}00%`;

  control.forEach((item, index) => {
    item.addEventListener('click', function(){
      if(index == 1){
        count -= 1;
        moveLeftRight(count, move);
      }
      else if(index == 0){
        count += 1;
        moveLeftRight(count, move);
      }
    })

  });

}