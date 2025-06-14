import { useState } from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

export default function Home() {
  const [showCart, setShowCart] = useState(0);
  return (
    <>
      <Navbar />
      {showCart === 0 ? (
        <img
          style={{
            width: "20vw",
            height: "auto",
            maxWidth: "80%",
            objectFit: "contain",
            display: "block",
            margin: "20px auto",
          }}
          onClick={() => setShowCart(1)}
          src="./img_home.png"
          alt="Imagen de inicio"
        />
      ) : (
        <ShoppingCart setShowCart={setShowCart} />
      )}
    </>
  );
}
