

//const publicURL = process.env.VITE_PUBLIC_URL || "";
const audioFilePath = `src/component/drumkit/sounds/`;


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
        'j' : new Audio(`${audioFilePath}kick-bass.mp3`),
        'k' : new Audio(`${audioFilePath}crash.mp3`),
        'l' : new Audio(`${audioFilePath}snare.mp3`),
        'a' : new Audio(`${audioFilePath}tom-1.mp3`),
        's' : new Audio(`${audioFilePath}tom-2.mp3`),
        'd' : new Audio(`${audioFilePath}tom-3.mp3`),
        'f' : new Audio(`${audioFilePath}tom-4.mp3`)
    }
    const sound = drumSound[key];
    if(sound) {return sound.play()};
    return key;
}

export { makeSound, buttonanimation};


