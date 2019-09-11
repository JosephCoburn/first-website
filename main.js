var i = 0;
var images = [];
var time = 7000;

images[0] = 'https://i.imgur.com/vmY70y6.png';
images[1] = 'https://i.imgur.com/wbqfHoO.png';
images[2] = 'https://i.imgur.com/4oolLlW.png';
images[3] = 'https://i.imgur.com/Xxmoddw.png';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  } 

  setTimeout("changeImg()", time);
}

window.onload = changeImg;