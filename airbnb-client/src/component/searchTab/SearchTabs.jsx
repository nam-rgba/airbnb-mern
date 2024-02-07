import style from './searchTab.module.css';
import { useState, lazy, Suspense } from 'react';
import { CiSearch } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function SearchTab() {
  const [active, setActive] = useState('where');
  const bars = ['where', 'checkin', 'checkout', 'who'];
  const Outlet = lazy(() => import(`./Tabs/${active}.jsx`));

  function changeTabs(bar) {
    setActive(bar);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.container}
    >
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
        <div className={style.search_button}>
          <p>Search</p>
          <CiSearch color="#ffffff" size={22} />
        </div>
      </div>
      <div className={style.outlet}>
        <Suspense fallback={<p></p>}>
          <Outlet />
        </Suspense>
      </div>
    </motion.div>
  );
}
