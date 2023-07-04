import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import "./index.css"

export default function App() {
  
  return (
      <RouterProvider router={router} />
  );
}




