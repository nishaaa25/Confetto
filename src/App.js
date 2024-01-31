import Experience from "./components/Experience";
import Features from "./components/Features";
import Header from "./components/Header";
import Power from "./components/Power";
import Product from "./components/Product";

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
    </div>
  );
}

export default App;
