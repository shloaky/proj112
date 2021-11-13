prediction_1 = "";
prediction_2 = "";
prediction_3 = "";
prediction_4 = "";
prediction_5 = "";
prediction_6 = "";

Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takephoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="emoji_img" src="'+data_uri+'">';

    });
}
console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models//model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
};
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "prediction 1  is"+prediction_1;
    speak_data2 = "prediction 2  is"+prediction_2;
    speak_data3 = "prediction 3  is"+prediction_3;
    speak_data4 = "prediction 4  is"+prediction_4;
    speak_data5 = "prediction 5  is"+prediction_5;
    speak_data6 = "prediction 6  is"+prediction_6;
    var utterthis = new SpeechSynthesisUtterance( speak_data1+ speak_data2+ speak_data3+ speak_data4+ speak_data5+ speak_data6);
    synth.speak(utterthis);
}

function prediction(){
    img = document.getElementById("emoji_img");
    classifier.classify(img,gotresults);
}
function gotresults(error,results){
    if (error){
       console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        document.getElementById("result_emotion_name3").innerHTML=results[2].label;
        document.getElementById("result_emotion_name4").innerHTML=results[3].label;
        document.getElementById("result_emotion_name5").innerHTML=results[4].label;
        document.getElementById("result_emotion_name6").innerHTML=results[5].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        prediction_3 = results[2].label;
        prediction_4 = results[3].label;
        prediction_5 = results[4].label;
        prediction_6 = results[5].label;
        speak();
        if(results[0].label == "OK"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "THUMBS UP"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if(results[0].label == "PEACE"){
            document.getElementById("update_emoji3").innerHTML = "&#9996;";
        }
        if(results[0].label == "FIST"){
            document.getElementById("update_emoji4").innerHTML = "&#9994;";
        }
        if(results[0].label == "CLAP"){
            document.getElementById("update_emoji5").innerHTML = "&#128079;";
        }
        if(results[0].label == "ROCK AND ROLL"){
            document.getElementById("update_emoji6").innerHTML = "&#129304;";
        }
        if(results[1].label == "OK"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[1].label == "THUMBS UP"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if(results[1].label == "PEACE"){
            document.getElementById("update_emoji3").innerHTML = "&#9996;";
        }
        if(results[1].label == "FIST"){
            document.getElementById("update_emoji4").innerHTML = "&#9994;";
        }
        if(results[1].label == "CLAP"){
            document.getElementById("update_emoji5").innerHTML = "&#128079;";
        }
        if(results[0].label == "ROCK AND ROLL"){
            document.getElementById("update_emoji6").innerHTML = "&#129304;";
        }
    }
}