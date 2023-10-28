import { Suspense, lazy } from "react";
import { IconContext } from "react-icons";

const DynamicIcon = ({ props }) => {
  const [library, icon] = props.icon.split("/");
  if (!library || !icon) {
    return <div>Cannot find icon</div>;
  }
  const path = `react-icons/${library}`;
  const Icon = lazy(async () => {
    const module = await import(path);
    return module[icon];
  });
};
