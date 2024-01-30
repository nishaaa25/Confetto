import Features from "./components/Features";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="App w-full relative bg-black">
      <div className="sticky top-3 z-50">
        <Header />
      </div>
      <Product />
      {/* <Features/> */}
    </div>
  );
}

export default App;
