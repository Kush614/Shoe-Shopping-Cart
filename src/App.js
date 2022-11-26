import { Route, Routes } from "react-router";
import "./App.css";
import { Nav } from "./components";
import { Journey, Contacts, Store, Teams } from "./pages";
import { SingleProduct } from "./pages/singleProduct/singleProduct";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Journey />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
