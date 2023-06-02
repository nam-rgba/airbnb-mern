import { useEffect, useRef, useState } from "react";

export default function clickOutside(WrappedComponent) {
  const Component = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  };
  return Component;
}
