import Experience from "./components/Experience";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Power from "./components/Power";
import Product from "./components/Product";
import StartContainer from "./components/StartContainer";

function App() {
  return (
    <div className="App w-full relative bg-black">
      <div className="sticky top-3 z-50">
        <Header />
      </div>
      <Product />
      <Features/>
      <Power/>
      <Experience/>
      <StartContainer/>
      <Footer/>
    </div>
  );
}

export default App;
