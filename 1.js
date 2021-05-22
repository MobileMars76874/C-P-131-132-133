img_1 = "";
status = "";
objects = [];


function preload(){
img_1 = loadImage("1.jpg");
}

function setup(){
canvas = createCanvas(800, 400);
canvas.position(300, 200);
r = random(255);
g = random(255);
b = random(255);

OBJ_D = ml5.objectDetector("cocossd", model_loaded);
document.getElementById("1S").innerHTML = "Status : Detecting Objects"
}

function model_loaded(){
console.log("Model Loaded!");
status = "true";
OBJ_D.detect(img_1, gopose);
}

function draw(){
image(img_1, 0, 0, 1000, 500);
if(status == "true"){
document.getElementById("1N").innerHTML = "Number of objects detected : "+objects.length;
for(i = 0; i < objects.length; i++){
document.getElementById("1S").innerHTML = "Status : Detected objects";   
fill(r, g, b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"%", objects[i].x +10, objects[i].y - 55);
noFill();
stroke(r, g, b);
rect(objects[i].x, objects[i].y - 65, objects[i].width, objects[i].height);
}
}
}

function gopose(error, results){
if(error){
console.log("error");
}
else{
objects = results;
console.log(results);
}
}

function back1(){
window.location = "index.html";
}
