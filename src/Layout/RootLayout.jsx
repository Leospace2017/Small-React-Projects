import { Outlet } from "react-router-dom";
import { Navigation, StarsCanvas } from ".";
import "./RootLayout.scss";

export default function RootLayout() {
  return (
    <main className="layout">
        <Navigation />
        <Outlet />
        <StarsCanvas />
    </main>
  )
}
