import style from "./searchTab.module.css";
import { useState, lazy, Suspense, useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchbarContext } from "../../contexts/SearchbarContext";

export default function SearchTab() {
  const [active, setActive] = useState("where");
  const bars = ["where", "checkin", "checkout", "who"];
  const Outlet = lazy(() => import(`./Tabs/${active}.jsx`));
  const { show, setShow } = useContext(SearchbarContext);

  function changeTabs(bar) {
    setActive(bar);
  }
  return (
    <div className={style.container}>
      <div className={style.tabs}>
        {bars.map((bar) => (
          <div
            key={bar}
            onClick={() => changeTabs(bar)}
            className={bar == active ? style.tab_act : style.tab_off}
          >
            {bar}
          </div>
        ))}
        <div className={style.search_button} onClick={() => setShow(!show)}>
          <p>Search</p>
          <BiSearchAlt color="#ffffff" size={20} />
        </div>
      </div>
      <div className={style.outlet}>
        <Suspense fallback={<p></p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
