import VanMessage from "./components/VanMessage";
import VanControls from "./components/VanControls";
import "./index.css";

import VanContext from "./context/VanContex.jsx";

export default function VanApp() {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-20 md:mt-0">
      <VanContext>
        <VanMessage />
        <VanControls />
      </VanContext>
    </div>
  );
}
