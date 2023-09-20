import style from "./searchTab.module.css";
import { useState, lazy, Suspense } from "react";

export default function SearchTab() {
  const [active, setActive] = useState("where");
  const bars = ["where", "checkin", "checkout", "who"];
  const Outlet = lazy(() => import(`./Tabs/${active}.jsx`));

  function changeTabs(bar) {
    setActive(bar);
  }
  return (
    <div className={style.container}>
      <div className={style.tabs}>
        {bars.map((bar) => (
          <div key={bar} onClick={() => changeTabs(bar)}>
            {bar}
          </div>
        ))}
      </div>
      <div className={style.outlet}>
        <Suspense fallback={<p></p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
