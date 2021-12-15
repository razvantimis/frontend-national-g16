import { NavButton } from "./NavButton/NavButton";
import "./styles.css";

export const Navigation = () => {
  return (
    <div className="header-navigation">
      <NavButton label="Home" active={true} path="/" />
      <NavButton label="Articles" path="https://google.com" />
      <NavButton label="Contact" />
    </div>
  );
};
