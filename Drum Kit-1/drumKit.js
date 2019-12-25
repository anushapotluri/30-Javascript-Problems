var boomSound = new Audio('sounds/boom.wav');
var clapSound = new Audio('sounds/hihat.wav');
var hihatSound = new Audio('sounds/hihat.wav');
var kickSound = new Audio('sounds/kick.wav');
var openhatSound = new Audio('sounds/openhat.wav');
var rideSound = new Audio('sounds/ride.wav');
var snareSound = new Audio('sounds/snare.wav');
var tinkSound = new Audio('sounds/tink.wav');
var tomSound = new Audio('sounds/tom.wav');
window.addEventListener('keypress', function(event){
    switch(event.key) {
        case 'a' : boomSound.play();
        break;
        case 's' : clapSound.play();
        break;
        case 'd' : hihatSound.play();
        break;
        case 'f' : kickSound.play();
        break;
        case 'g' : openhatSound.play();
        break;
        case 'h' : rideSound.play();
        break;
        case 'j' : snareSound.play();
        break;
        case 'k' : tinkSound.play();
        break;
        case 'l' : tomSound.play();
        break;
        default:
            console.log("Dont have music");
    }
   /* if(event.key === 'a'){
    boomSound.play();
    }
    if(event.key === 's'){
        clapSound.play();
        }
        if(event.key === 'd'){
            hihatSound.play();
            }
            if(event.key === 'f'){
                kickSound.play();
                }
                if(event.key === 'g'){
                    openhatSound.play();
                    }
                    if(event.key === 'h'){
                        rideSound.play();
                        }
                        if(event.key === 'j'){
                            snareSound.play();
                            }
                            if(event.key === 'k'){
                                tinkSound.play();
                                }
                                if(event.key === 'l'){
                                    tomSound.play();
                                    }*/
});