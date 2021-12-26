import { NavButton } from "./NavButton/NavButton";
import "./styles.css";

export const Navigation = () => {
  return (
    <div className="header-navigation">
      <NavButton label="Counter" path="/counter" />
      <NavButton label="ToDO" path="/todo" />
      <NavButton label="DigitalClock" path="/digital_clock" />
    </div>
  );
};
