import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";\

function App() {

  const [products] = useState([
    {
      id: 1,
      image:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      name: "Gordost i predrasuda",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "AA"
    },
    {
      id: 1,
      image:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      name: "Gordost i predrasuda",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "AA"
    },
    {
      id: 1,
      image:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      name: "Gordost i predrasuda",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "AA"
    },
    {
      id: 1,
      image:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      name: "Gordost i predrasuda",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "AA"
    },
    {
      id: 1,
      image:"https://www.delfi.rs/_img/artikli/2016/04/gordost_i_predrasuda_vv.jpg",
      name: "Gordost i predrasuda",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "AA"
    },
  ]);

  return (
    <BrowserRouter className="App">
    {/* <NavBar cartNum={cartNum}></NavBar> */}
    <Routes>
      <Route
        path="/"
        element={<Products products={products} onAdd={addProduct} />}
      />
      {/* <Route path="/korpa" element={<Cart books={cartBooks} />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
