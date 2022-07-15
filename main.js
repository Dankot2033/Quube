// Illustrations animations
var coffee = document.getElementById("coffee");
var cactus = document.getElementById("cactus");
var pc = document.getElementById("pc");
var sciFi = document.getElementById("sciFi");
var car = document.getElementById("car");

window.setInterval(()=>{illustrationAnimations()},800);
var i = 1;

function illustrationAnimations(){
    if(i % 2 == 0){
        coffee.src="media/SVG/coffee2.svg";
        cactus.src="media/SVG/cactus2.svg";
        pc.src="media/SVG/pc2.svg";
        sciFi.src="media/SVG/sciFi2.svg";
        car.src="media/SVG/car2.svg";
    }else if(i % 10 == true){
        coffee.src="media/SVG/coffee3.svg";
        cactus.src="media/SVG/cactus.svg";
        pc.src="media/SVG/pc3.svg";
        sciFi.src="media/SVG/sciFi.svg";
        car.src="media/SVG/car.svg";
    }else{
        coffee.src="media/SVG/coffee.svg";
        cactus.src="media/SVG/cactus.svg";
        pc.src="media/SVG/pc.svg";
        sciFi.src="media/SVG/sciFi.svg";
        car.src="media/SVG/car.svg";
    }

    i++;
}