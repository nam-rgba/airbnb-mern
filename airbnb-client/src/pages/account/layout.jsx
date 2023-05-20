import Banner from "../../component/banner/banner";
import style from "./layout.module.css";
import { Outlet } from "react-router-dom";

const LayoutAccount = () => {
  return (
    <div className={style.container}>
      <Banner />
      <Outlet />
    </div>
  );
};

export default LayoutAccount;
