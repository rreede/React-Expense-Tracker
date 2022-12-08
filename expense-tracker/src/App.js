import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";
import PreviousMap from "postcss/lib/previous-map";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "TV",
      amount: 492.47,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e3",
      title: "Playstation 5: God of War Edition",
      amount: 994.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Toaster",
      amount: 42.42,
      date: new Date(2022, 2, 28),
    },
  ];

  return (
    <div>
      <Expenses items= {expenses}/>
    </div>
  );
}

export default App;
