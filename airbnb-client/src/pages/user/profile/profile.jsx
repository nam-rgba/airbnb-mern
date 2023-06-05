import style from "./profile.module.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();

  if (ready && !user) {
    return navigate("/account/login");
  } else if (!ready) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={style.info}></div>

      <div className={style.action}></div>
    </>
  );
}
