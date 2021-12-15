import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import "./styles.css";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};
