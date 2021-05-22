img_2 = "";
status = "";
objects = [];

function preload(){
img_2 = loadImage("2.jpg");
}

function setup(){
canvas = createCanvas(800, 400);
canvas.position(300, 200);
r = random(255);
g = random(255);
b = random(255);

OBJ_D = ml5.objectDetector("cocossd", model_loaded);
document.getElementById("2S").innerHTML = "Status : Detecting Objects"
}

function model_loaded(){
console.log("Model Loaded!");
status = "true";
OBJ_D.detect(img_2, gopose);
}

function draw(){
image(img_2, 0, 0, 1000, 500);
if(status == "true"){
document.getElementById("2N").innerHTML = "Number of objects detected : "+objects.length;
for(i = 0; i < objects.length; i++){
document.getElementById("2S").innerHTML = "Status : Detected objects";   
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

function back2(){
window.location = "index.html";
}