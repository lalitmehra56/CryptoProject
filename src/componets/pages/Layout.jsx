import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default MainLayout;
