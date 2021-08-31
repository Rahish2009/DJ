song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Initalized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)


    {
        circle(rightWristx, rightWristY,20);

        if (rightWristY >0 && rightWrist <=100) 
        {
            document.getElementById("speed").innerHTML = "speed is 0.5x";
            song.rate(0.5);
        }
        
       else if (rightWristY >100 && rightWrist <=200) 
        {
            document.getElementById("speed").innerHTML = "speed is 1x";
            song.rate(1);
        }
    
       else if (rightWristY >200 && rightWrist <=300) 
        {
            document.getElementById("speed").innerHTML = "speed is 1.5x";
            song.rate(1.5);
        }
    
        else if (rightWristY >300 && rightWrist <=400) 
        {
            document.getElementById("speed").innerHTML = "speed is 2x";
            song.rate(2);
        }
        else if (rightWristY >400 && rightWrist <=500) 
        {
            document.getElementById("speed").innerHTML = "speed is 2.5x";
            song.rate(2.5);
        }
    
    }
}




function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
 function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + score);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
    }
 }
 if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }