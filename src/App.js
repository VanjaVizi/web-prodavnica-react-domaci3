 

import Products from './components/Products';
import NavBar from "./components/Navbar";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Cart from './components/Cart';
 
import './App.css';
function App() {
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      image: "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta", 
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "torta"
    },
    {
      id: 3,
      image:"https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 4,
      image:"https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 5,
      image:"https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "sladoled"
    },
    {id: 6,
      image: "https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg",
      name: "Lizalica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "lizalica"
    },
    {
      id: 7,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU",
      name: "Cokoladna torta", 
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "torta"
    },
    {
      id: 8,
      image:"https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg ",
      name: "Gumene bombone u raznim oblicima",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 9,
      image:"https://s3.envato.com/files/240029552/DSC_2558.jpg",
      name: "Gumene bombone lubenica",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "bombone"
    },
    {
      id: 10,
      image:"https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg",
      name: "Ljubicasti sladoled",
      
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      price:600,
      amount: 0,
      category: "sladoled"
    },
  ]);
  function refreshCart() {
    let u_korpi = products.filter((p) => p.amount > 0);
    setCartProducts (u_korpi);
  }
  function addProduct(name, id) {
    alert(name);
    setCartNum(cartNum + 1);
    products.forEach((p) => {
      if (p.id === id) {
        p.amount++;
      }
    });
    refreshCart();

  }
 


  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products products={products} onAdd={addProduct} />}
        />
         <Route path="/korpa" element={<Cart products={cartProducts} />} />
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
