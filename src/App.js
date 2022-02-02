 
import './App.css';
import Products from './components/Products';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [products] = useState([
    {
      id: 1,
      image: "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta", 
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "torta"
    },
    {
      id: 3,
      image:"https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 4,
      image:"https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 5,
      image:"https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "sladoled"
    },
    {id: 6,
      image: "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 7,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta", 
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "torta"
    },
    {
      id: 8,
      image:"https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 9,
      image:"https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 10,
      image:"https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",
      
      description:
        "Elizabeta je neposredna i oštroumna mlada dama koja se ne pokorava opšteprihvaćenim pravilima lijepog ponašanja, već sluša glas svoga srca i svoje savjesti. ",
      price:600,
      amount: 0,
      category: "sladoled"
    },
  ]);

  return (
    <BrowserRouter className="App">
    {/* <NavBar cartNum={cartNum}></NavBar> */}
    <Routes>
      <Route
        path="/"
        element={<Products products={products}   />}
        // element={<Products products={products} onAdd={addProduct} />}
      />
      {/* <Route path="/korpa" element={<Cart books={cartBooks} />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
