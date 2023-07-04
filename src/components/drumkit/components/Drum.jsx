import { useEffect,useState, useReducer } from "react";
import { makeSound, buttonAnimation } from "./drumHelper";
import "./Drum.scss"

const initialState = {
    key: null,
    sound: null,
    buttonPressed:false,
}

function reducer(state,action){
    switch(action.type){
        case 'click':
        case 'key-press':
            return {
                key:action.key,
                sound: action.sound,
                buttonPressed: true
            };
        case 'button-release':
            return{
                key:null,
                sound : null,
                buttonPressed: false
            }
        default:
            return state;
    }
}

export function Drum() {

    const [state, dispatch] = useReducer(reducer,initialState)//vllt noch für die erweiterungen
    const [isFocus, setIsFocus] = useState(false)

        function handleButtonClick(event){
  
            if (isFocus){
                const key = event.target.innerText;
                dispatch({ type: 'click', key: key , sound: key} )
                makeSound(key)
                buttonAnimation(key)
            }
            
        }
        
        useEffect(() => {
            const handleKeyPress = (event) => {
                    buttonAnimation(event.key);
                    makeSound(event.key);
                    console.log(event.key);
                    dispatch({ type: 'key-press', key: event.key, sound: event.key });
            };
            
            document.addEventListener("keypress", handleKeyPress);
            
            return () => {
              document.removeEventListener("keypress", handleKeyPress);
            };
        }, [isFocus]);


    function handleButtonRelease(){//benutzt man bei mouseup oder onTouchEnd events um zustands zulöschen
        dispatch({ type: 'buttonRelease'});
    }

  return (
    <div
      id="Drumkit"
      className={`h-screen ^flex flex-col items-center ${
        isFocus ? "outline-2 outline-red-600" : ""
      } w-6/12 m-auto md:justify-center mt-14`}
      onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
    >
      <h2 className="text-center bg-gradient-to-r from-blue-500 w-full">
        DrumKit 🥁(afterFocus)
        <span className="text-blue-700">Press/Click_Keys</span>
      </h2>
      <div className="flex flex-col items-center md:flex-row">
        <DrumButton
          className={`a bg-tom1  drumBtnConfig`}
          content="a"
          onClick={(e) =>handleButtonClick}
        />
        <DrumButton
          className={`s bg-tom2  drumBtnConfig`}
          content="s"
          onClick={() => handleButtonClick}
        />
        <DrumButton
          className={`d bg-tom3  drumBtnConfig`}
          content="d"
          onClick={() => handleButtonClick}
        />
        <DrumButton
          className={`f bg-tom4  drumBtnConfig`}
          content="f"
          onClick={() => handleButtonClick}
        />
        <DrumButton
          className={`j bg-kick  drumBtnConfig`}
          content="j"
          onClick={() => handleButtonClick}
        />
        <DrumButton
          className={`k bg-crash  drumBtnConfig`}
          content="k"
          onClick={() => handleButtonClick}
        />
        <DrumButton
          className={`l bg-snare  drumBtnConfig`}
          content="l"
          onClick={() => handleButtonClick}
        />
      </div>
      <p className="text-xs">Sounds Path problem with github, if you are interested in the drumkit, just run it on the local machine.</p>
    </div>

  );
}

function DrumButton({ content, className, onClick }) {
  return (
    <button className={className} onClick={onClick()}>
      {content}
    </button>
  );
}
