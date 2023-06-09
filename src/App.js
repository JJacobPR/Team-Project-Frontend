import "./App.css";
import Footer from "./Components/Header and Footer/Footer/Footer";
import Header from "./Components/Header and Footer/Header/Header";
import Main from "./Components/Main/Main";

const TestData = [
  {
    id: 0,
    name: "Crime Scene",
    tips: [
      { tip_body: "Get over here", tip_call: "John" },
      { tip_body: "Time to die", tip_call: "Ciri" },
    ],
  },
  {
    id: 1,
    name: "FairyTale",
    tips: [
      { tip_body: "Apples and meat", tip_call: "Wolf" },
      { tip_body: "Nothing Important", tip_call: "Donkey" },
      { tip_body: "Get out of my Swamp", tip_call: "Shrek" },
    ],
  },
];

function App() {
  return (
    <div className="body">
      <Header />
      <Main data={TestData} />
      <Footer />
    </div>
  );
}

export default App;
