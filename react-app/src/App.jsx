import "./App.css";
import { Header } from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CounterPage } from "./components/Pages/CounterPage";
import { ToDoPage } from "./components/Pages/ToDoPage";
import { DigitalClockPage } from "./components/Pages/DigitalClockPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/todo">
            <ToDoPage />
          </Route>
          <Route path="/digital_clock">
            <DigitalClockPage />
          </Route>
          <Redirect to="/counter" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
