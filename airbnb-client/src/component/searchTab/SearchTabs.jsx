import style from './searchTab.module.css';
import { useState, lazy, Suspense } from 'react';
import { CiSearch } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function SearchTab({ handleSubmitSearch }) {
  const [active, setActive] = useState('where');
  const [searchValue, setSearchValue] = useState({
    country: '',
    price: { min: 0, max: 1 },
    guest: 1,
    isPetAble: false
  });
  const bars = ['where', 'PriceRange', 'Guest'];
  const Outlet = lazy(() => import(`./Tabs/${active}.jsx`));
  console.log(searchValue);

  function changeTabs(bar) {
    setActive(bar);
  }

  const nextTab = () => {
    const index = bars.indexOf(active);
    if (index < bars.length - 1) {
      changeTabs(bars[index + 1]);
    }
  };

  // When take all values,
  const submitSearch = () => {
    handleSubmitSearch(searchValue);
  };
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
        <div className={style.search_button} onClick={submitSearch}>
          <p>Search</p>
          <CiSearch color="#ffffff" size={22} />
        </div>
      </div>
      <div className={style.outlet}>
        <Suspense fallback={<p></p>}>
          {/* when searchValue change, Outlet will re-render */}
          <Outlet
            handleChoose={nextTab}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        </Suspense>
      </div>
    </motion.div>
  );
}
