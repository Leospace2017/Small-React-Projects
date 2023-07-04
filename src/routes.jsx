import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Note, Tictactoc, DrumKit, Memory, VanApp } from "./components/index";
import { RootLayout, NotFound } from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path="/Small-React-Projects" element={<RootLayout />}>
        <Route path="VanBus" element={<VanApp />} />
        <Route path="TicTacToc" element={<Tictactoc />} />
        <Route path="Drumkit" element={<DrumKit />} />
        <Route path="Note" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Route>

  )
);
