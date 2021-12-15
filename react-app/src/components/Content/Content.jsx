import { Counter } from "../Counter/Counter";
import "./styles.css";

export const Content = () => {
  return (
    <div className="content">
      <Counter />
      {/* new Counter() */}
      <Counter />
    </div>
  );
};
