function setup(){
    var video=createCapture(VIDEO);
    video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(550,90)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',got_poses) 
}
function modelLoaded(){
    console.log('poseNet carregado')
}
function got_poses(results){
    if (results.length>0){
        console.log(results)
    }
}
function draw(){
background('green')
}