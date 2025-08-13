import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    setPizza(prevPizza => {
      const newToppings = prevPizza.toppings.includes(topping)
        ? prevPizza.toppings.filter(item => item !== topping)
        : [...prevPizza.toppings, topping];
      return { ...prevPizza, toppings: newToppings };
    });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
