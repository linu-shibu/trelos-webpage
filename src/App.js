import "./App.css";
import Browsemenu from "./components/Browsemenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Storemenu from "./components/Storemenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Storemenu />
      <Reviews />
      <Browsemenu />
      <Footer />
    </div>
  );
}

export default App;
