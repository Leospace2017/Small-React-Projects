import { Drum } from "./components/Drum"
import withHOC from "../hoc"

 function DrumKit () {

    return (<>
        <Drum />
    </>)
}

const HOCDrum = withHOC(DrumKit,0,-50)

export default HOCDrum;

