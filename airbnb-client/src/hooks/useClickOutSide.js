import { useEffect, useState, useRef, useCallback } from 'react';

const useClickOutSide = (initVisible = false) => {
  const [visible, setVisible] = useState(initVisible);
  const ref = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    },
    [setVisible]
  );

  const toogleVisible = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, [setVisible]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return [ref, visible, toogleVisible];
};
export default useClickOutSide;
