function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('MobileNet',modelLoaded)
}

function modelLoaded(){
  console.log('Model Loaded')
}

function draw(){
 image(video,0,0,250,250);
 classifier.classify(video,gotResult)
}
var prev_results='';

function gotResult(error,results){
 if (error) {
  console.error(error)
 } else {
  if ((results[0].confidence>0.5)&& prev_results != results[0].label){
     console.log(results)
     prev_result= results[0].label

     document.getElementById("result_object_name").innerHTML= results[0].label
    document.getElementById("result_object_accuracy").innerHTML= Math.round(results[0].confidence*100)+"%"
 }
}
}


