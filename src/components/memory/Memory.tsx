import "./Memory.scss";
import MemoryContainer from "./components/MemoryContainer";
import MemoryProvider from "./context/MemoryProvider";

export default function Memory():React.ReactElement {
  return (
    <MemoryProvider>
      <MemoryContainer />
    </MemoryProvider>
  );
}
