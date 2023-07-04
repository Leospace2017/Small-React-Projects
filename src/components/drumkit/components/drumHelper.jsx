

//const publicURL = process.env.VITE_PUBLIC_URL || "";
const audioFilePath = `src/component/drumkit/sounds/`;


function buttonAnimation(currentkey) {
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
        'j' : new Audio(`src/components/drumkit/sounds/kick-bass.mp3`),
        'k' : new Audio(`src/components/drumkit/sounds/crash.mp3`),
        'l' : new Audio(`src/components/drumkit/sounds/snare.mp3`),
        'a' : new Audio(`src/components/drumkit/sounds/tom-1.mp3`),
        's' : new Audio(`src/components/drumkit/sounds/tom-2.mp3`),
        'd' : new Audio(`src/components/drumkit/sounds/tom-3.mp3`),
        'f' : new Audio(`src/components/drumkit/sounds/tom-4.mp3`)
    }
    const sound = drumSound[key];
    if(sound) {return sound.play()};
    return key;
}

export { buttonAnimation, makeSound };


