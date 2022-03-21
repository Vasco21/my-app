import React, { useReducer } from 'react';
import { Layout } from "./Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './NavigationBar/Navbar'
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Cart } from "./Pages/Cart";
import { Product } from './Pages/Product';
import { Checkout } from './Pages/Checkout';
import { AboutUs } from './Pages/AboutUs'
import { Ctx } from "./Context";
import { initialState, reducer } from "./globalState";

import './App.scss';
import { StateInterface } from './globalTypes';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState())

  React.useEffect(() => {
    try{
      fetch('https://uzuriapi.el.r.appspot.com/fashionPromotions')
      .then(res => res.json())
      .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
    }catch(err){
      dispatch({ type: "ERROR" })
    }
  }, [])
  return (
    <div className="All">
    <Ctx.Provider value={state}>
      <section className="App">
      <BrowserRouter>
            <Navbar/>
            {/* <Slider/> */}
          <Layout dispatch={dispatch}>
            <Routes>
              <Route path="/" element={
                <Home
                  state={state as StateInterface}
                  dispatch={dispatch}
                  ctx={Ctx}
                />
              }
              />
            <Route path="/menu" element={
                <Menu 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }
              />
              <Route path='/shopping-cart' element={
                  <Cart 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }
            />
              <Route path='/products/:title' element={
                <Product
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
              <Route path='/checkout' element={
                <Checkout
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }
              />
               <Route path='' element={
                <AboutUs
                />
              }
              />
            </Routes> 
          </Layout>
        </BrowserRouter>
      </section>
     </Ctx.Provider> 
      <AboutUs/>
              
    </div>
  );
}

export default App;
