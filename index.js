
var photos = ["img/pic-1.jpg","img/pic-2.jpg","img/pic-3.jpg"];

var imgId = document.querySelector(".carousel-item img");
var count=0;


function nextButton(){
count++;
if(count >=photos.length){
    count=0;
    imgId.src=photos[count];
}else{
    imgId.src=photos[count];
}

}

function prevButton(){

    count--;
if(count < 0){
    count=photos.length-1;
    imgId.src=photos[count];
}else{
    imgId.src=photos[count];
}
}
