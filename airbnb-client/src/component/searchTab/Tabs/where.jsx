import style from "./tabs.module.css";
export default function Where() {
  return (
    <div className={style.container}>
      <div className={style.search_input}></div>
      <div className={style.result}></div>
    </div>
  );
}
