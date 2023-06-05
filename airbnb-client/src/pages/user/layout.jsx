// import style from './layout.module.css'
import Header from "../../component/header/index";
import { Outlet } from "react-router-dom";

export default function LayoutUser() {
  return (
    <>
      <Header hide="find" />
      <Outlet />
    </>
  );
}
