
const publicURL = process.env.PUBLIC_URL;
const audioFilePath = `${publicURL}/component/drumkit/sounds/`;


function buttonanimation(currentkey) {
    let activebutton = document.querySelector("." + currentkey);
    try{
        activebutton.classList.add("pressedDrum");
        setTimeout(function() {
            activebutton.classList.remove("pressedDrum");
        }, 50);

    }catch(e){
        console.log(e);
    }
}

function makeSound(key){
    const drumSound = {
        'j' : new Audio(`${audio}kick-bass.mp3`),
        'k' : new Audio(`${audio}crash.mp3`),
        'l' : new Audio(`${audio}snare.mp3`),
        'a' : new Audio(`${audio}tom-1.mp3`),
        's' : new Audio(`${audio}tom-2.mp3`),
        'd' : new Audio(`${audio}tom-3.mp3`),
        'f' : new Audio(`${audio}tom-4.mp3`)
    }
    const sound = drumSound[key];
    if(sound) {return sound.play()};
    return key;
}

export { makeSound, buttonanimation};
