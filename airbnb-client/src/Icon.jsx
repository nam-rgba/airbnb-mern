import loadable from "react-loadable";
import { IconBaseProps, IconType } from "react-icons/lib";

export default function Icon({ nameIcon, propIcon }) {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
}
