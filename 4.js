img_4 = "";
status = "";
objects = [];

function preload(){
img_4 = loadImage("4.jpg");
}

function setup(){
canvas = createCanvas(800, 400);
canvas.position(300, 200);
r = random(255);
g = random(255);
b = random(255);

OBJ_D = ml5.objectDetector("cocossd", model_loaded);
document.getElementById("4S").innerHTML = "Status : Detecting Objects"
}

function model_loaded(){
console.log("Model Loaded!");
status = "true";
OBJ_D.detect(img_4, gopose);
}

function draw(){
image(img_4, 0, 0, 1000, 500);
if(status == "true"){
document.getElementById("4N").innerHTML = "Number of objects detected : "+objects.length;
for(i = 0; i < objects.length; i++){
document.getElementById("4S").innerHTML = "Status : Detected objects";   
fill(r, g, b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"%", objects[i].x + 10, objects[i].y -55);
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

function back4(){
window.location = "index.html";
}