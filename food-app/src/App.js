import "./App.css";

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Box from "@mui/material/Box";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Fab from "@mui/material/Fab";
import Home from "./pages/Home";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Orders from "./pages/Orders";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SingleFood from "./pages/SingleFood";
import img1 from './assets/burger1.png'
import img2 from './assets/pasta1.png'
import img3 from './assets/meat1.png'
import img4 from './assets/indomie.png'
import img5 from './assets/bread.png'
import img6 from './assets/soup.png'

function App() {

  const meals = [
    {
        id: 1,
        image: img1,
        title: 'Stir fry Pasta',
        description: 'Stir fry Pasta yada yada yada because of the season',
        price: 1000,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Delivered',
    },
    {
        id: 2,
        image: img2,
        title: 'Meat Balls',
        description: 'Meat Balls yada yada yada because of the season',
        price: 1200,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Cooking',
    },
    {
        id: 3,
        image: img3,
        title: 'Burger Meal',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1500,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Delivered',
    },
    {
        id: 4,
        image: img4,
        title: 'Fried Indomie',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1250,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Cooking',
    },
    {
        id: 5,
        image: img5,
        title: 'Baked Bread',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1350,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Delivered',
    },
    {
        id: 6,
        image: img6,
        title: 'Soup Meal',
        description: 'Burger Meal yada yada yada because of the season',
        price: 1100,
        action: 'Add to cart',
        remaction: 'remove',
        status: 'Cooking',
    },
 ]

 const [cartItems, setCartItems]=useState([]);

 const onAdd = (product) => {
  const exist = cartItems.find(x=>x.id===product.id)
  if(exist){
    setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, quantity: exist.quantity + 1} : x))
  }else {
    setCartItems([...cartItems, {...product, quantity: 1}])
  }
 }

 const onRemove = (product) => {
  const exist = cartItems.find(x=>x.id===product.id)
  if(exist.quantity===1){
    setCartItems(cartItems.filter(x=>x.id !== product.id))
  }else {
    setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, quantity: exist.quantity - 1} : x))
  }
 }
  
  const [show, setShow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    
      // "scroll",
      // (scroll = true => {
      //   let top = window.pageYOffset || document.documentElement.scrollTop;
      //   if (top > 500) {
      //     setShow(10);
      //   } else {
      //     setShow(-100);
      //   }
      // })
    ;
    //goUp();

    try {
      let data = JSON.parse(localStorage.getItem("token"));
      //console.log(data)
      if (data) {
        fetch(process.env.REACT_APP_API_URL + "api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": data.data,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            // setUsername(data.username);
            // setAffiliate(data.affiliate);
            // setCart(data.cart.length);
            // setEmail(data.email);
          })
          .catch((error) => {
            //console.log(error);
            return;
          });
      }
    } catch (error) {
      //console.log(error);
      return;
    }
    // return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home/>}
          />
          {/* {<Route path="/*" element={<Page404 />} /> } */}
          <Route
            path='/signup'
            element = {<Signup/>}
          />
          <Route
            path='/signin'
            element = {<Signin/>}
          />
          <Route
            path='/dashboard'
            element = {<Dashboard meals = {meals} onAdd={onAdd} count = {cartItems.length}/>}
          />
          <Route
            path='/meal/:id'
            element={meals.map(meal => <SingleFood key={meal.id} meal={meal} onAdd={onAdd} onRemove={onRemove} quantity={cartItems}/>)}
          />
          <Route
            path='/checkout'
            element = {<Checkout/>}
          />
          <Route
            path='/cart'
            element = {<Cart meals = {cartItems} onRemove={onRemove}/>}
          />
          <Route
            path='/orders'
            element = {<Orders meals = {meals} onRemove={onRemove}/>}
          />
        </Routes>
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              position: "fixed",
              bottom: show,
              right: 20,
              transition: "all 1s",
            },
          }}
        >
          <Fab size="medium" color="#E2B887" aria-label="top" onClick={goUp}>
            <KeyboardArrowUpRoundedIcon sx={{ fontSize: 30 }} />
          </Fab>
        </Box>
    </Router>
  );
}

export default App;