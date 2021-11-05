var images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
];

var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < length){
        num = images.length-1;
    }
    slider.src = images[num];
}
