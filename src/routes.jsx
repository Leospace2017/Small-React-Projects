import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
    Note,
    Tictactoc,
    DrumKit,
    Memory,
    VanApp,
  } from "./components/index";
import { RootLayout } from "./Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/Small-React-Projects" element={<RootLayout />}>
            <Route index path="VanBus" element={<VanApp />}/>
            <Route path="TicTacToc" element={<Tictactoc />}/>
            <Route path="Drumkit" element={<DrumKit />}/>
            <Route path="Note" element={<Note />}/>
        </Route>
    )
)