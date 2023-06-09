import "./App.css";
import RoomProvider from "./Components/Context/RoomsContext";
import Footer from "./Components/Header and Footer/Footer/Footer";
import Header from "./Components/Header and Footer/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <RoomProvider>
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div>
    </RoomProvider>
  );
}

export default App;
