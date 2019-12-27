var boomSound = new Audio('sounds/boom.wav');
var clapSound = new Audio('sounds/clap.wav');
var hihatSound = new Audio('sounds/hihat.wav');
var kickSound = new Audio('sounds/kick.wav');
var openhatSound = new Audio('sounds/openhatSound.wav');
var rideSound = new Audio('sounds/ride.wav');
var snareSound = new Audio('sounds/snare.wav');
var tinkSound = new Audio('sounds/tink.wav');
var tomSound = new Audio('sounds/tom.wav');
var mainDiv = document.getElementById('mainid');
window.addEventListener('keypress', function(event){
switch(event.key){
case 'a':
     boomSound.play();
     break;
case 's':
    clapSound.play();
    break;
case 'd' :
    hihatSound.play();
    break;
case 'f' :
    kickSound.play();
    break;
case 'g' :
    openhatSound.play();
    break;
case 'h':
    rideSound.play();
    break;
case 'j':
    snareSound.play();
    break;
case 'k':
    tinkSound.play();
    break;
case 'l':
    tomSound.play();
    break;
default:
    console.log("Music unserviceable");
}
var keyEvents = ['a','s','d','f','g','h','j','k','l'];
if(keyEvents.indexOf(event.key)!== -1){
for(var i=0; i<mainDiv.childElementCount;i++){
    var currentNode = mainDiv.children[i];
    if(currentNode.dataset.key=== event.key){
        currentNode.classList.add('keyEffect');
        setTimeout(function(currentNode){
            currentNode.classList.remove('keyEffect');
        },200,currentNode);
    }

}
}

});
