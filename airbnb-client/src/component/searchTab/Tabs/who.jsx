import style from "./tabs.module.css";
import Quantity from "../../quantity/quantity";

const datas = [
  { cname: "Adult", old: "More than 13 years old" },
  {
    cname: "Children",
    old: "2-12 years old",
  },
  {
    cname: "Infants",
    old: "Under 2",
  },
  {
    cname: "Pets",
    old: "Bringing a service animal?",
  },
];
export default function Who() {
  return (
    <div className={style.container}>
      {datas.map((data) => (
        <Quantity key={data.cname} name={data.cname} old={data.old} />
      ))}
    </div>
  );
}
