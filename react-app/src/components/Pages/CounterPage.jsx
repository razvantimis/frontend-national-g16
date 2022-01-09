import { Counter } from "../Counter/Counter";
import { CounterHook } from "../CounterHook/CounterHook";

export const CounterPage = () => {
  return (
    <div className="page counter-page">
      <Counter
        initialNrOfClicks={5}
        buttonLabel="Press me class component counter"
      />
      <Counter buttonLabel="Press me 2" />
      <CounterHook initialNrOfClicks={10} />
    </div>
  );
};
