import Van from "../assets/van.svg";
import { useVanContext } from "../context/VanContex";

export default function VanMessage() {
  const { state, dispatchState, ACTIONS } = useVanContext();

  console.log(state.actions.gear);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-32">
        <img
          className={`object-cover w-full mx-auto border-8 rounded-full p-2 ${
            state.engineOn ? "border-green-500" : "border-red-500"
          }  mb-4`}
          src={Van}
        />
        <button
          className={`border ${state.engineOn ? "bg-green-500" : "bg-red-500"}`}
          onClick={() => dispatchState({ type: ACTIONS.START_STOP })}
        >
          {state.engineOn ? "Car Engine On" : "Car Engine Off"}
        </button>
      </div>
      <h3 className="mt-6">{`The current Gear is: ${state.actions.gear}  The current speed is: ${state.actions.speed}`}</h3>

      <div className="flex flex-col justify-center">
        <span>With the Speed {state.actions.speed} How many hours will you be driving?</span>
        <input 
          value={state.actions.distance} 
          onChange={(e) => dispatchState({type: ACTIONS.CALCULATE_DISTANCE, changePayload : e.target.value})} placeholder="Only Numbers" className="peer border-2 text-center"/>
        <span 
          className="peer-focus text-center">
          You've reached {parseInt(state.actions.distance * state.actions.speed)} km
        </span>
      </div>
    </div>
  );
}
