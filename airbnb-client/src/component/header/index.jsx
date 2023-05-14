import Image from "../../Image";
// import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <a className="flex w-20 h-16">
          <Image name="airbnb" />
        </a>

        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
