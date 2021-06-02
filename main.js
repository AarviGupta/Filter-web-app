nose_x=0;
nose_y=0;
function preload(){
moustache=loadImage('https://i.postimg.cc/9MhBh1VQ/moustache1.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
// to access the webcam
video=createCapture(VIDEO);
video.size(300,300);
video.hide(); 
//to initialize the post net model
posenet=ml5.poseNet(video,modelloaded);
// to execute the comparision
posenet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300);
image(moustache,nose_x,nose_y,70,40);
}
function take_snapshot(){
    
}
//to define the modelloaded function
function modelloaded(){
    console.log('Post net is intialized');
}
//to define gotposes()
function gotposes(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-35;
    nose_y=results[0].pose.nose.y+2;
    console.log("nose x="+nose_x);
    console.log("nose y="+nose_y);
}
}