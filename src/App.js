import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  }

  const hidecartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
      {cartIsShown && <Cart onClose={hidecartHandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
