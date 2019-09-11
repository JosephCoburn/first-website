var i = 0; 
var time = 5000;

var images = [
  'https://i.imgur.com/vmY70y6.png',
  'https://i.imgur.com/wbqfHoO.png',
  'https://i.imgur.com/4oolLlW.png',
  'https://i.imgur.com/Xxmoddw.png'
];

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