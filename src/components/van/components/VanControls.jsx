import Gear from "../assets/gearshift.svg"
import { useVanContext } from "../context/VanContex"

export default function VanControls() {

    const {state, dispatchState, ACTIONS } = useVanContext();

  return (
    <div className="flex flex-col gap-20 mt-10 md:flex-row">
        <button className="flex items-center justify-around w-30 border-2 border-black p-1 w-40 hover:shadow-lg"
        onClick={() =>dispatchState({type: ACTIONS.GEAR_UP})}
        ><img src={Gear} className="w-3 h-3 object-bottom"/>GEAR UP</button>
        <button className="flex items-center justify-around w-30 border-2 border-black p-1 w-40 hover:shadow-lg" onClick={() => dispatchState({type:ACTIONS.GEAR_DOWN})}><img src={Gear} className="w-3 h-3 object-bottom"/>GEAR DOWN</button>
        <button className="flex w-30 border-2 border-black p-1 w-40 justify-center hover:shadow-lg" onClick={() => dispatchState({type: ACTIONS.SPEED_UP})}>ACCELERATE</button>
        <button className="flex w-30 border-2 border-black p-1 w-40 justify-center hover:shadow-lg"
        onClick={() =>dispatchState({type:ACTIONS.SPEED_DOWN })}
        >BRAKE</button>
    </div>
  )
}
