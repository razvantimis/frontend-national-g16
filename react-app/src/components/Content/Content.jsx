import { Counter } from "../Counter/Counter";
import { DigitalClock } from "../DigitalClock/DigitalClock";
import { ToDo } from "../ToDo/ToDo";
import "./styles.css";

export const Content = () => {
  return (
    <div className="content">
      <Counter />
      {/* new Counter() */}
      <Counter />
      <ToDo />
      <DigitalClock />
    </div>
  );
};
