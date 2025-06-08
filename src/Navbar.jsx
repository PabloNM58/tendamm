import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <img style={{ width: "30px" }} src="./logo.png"></img>
      </div>

      <div style={styles.right}>
        <span style={styles.link}>Inicio</span>
        <span style={styles.link}>Nós</span>
        <span style={styles.link}>Tenda</span>
        <span style={styles.link}>Contacto</span>
        <FaShoppingCart size={22} style={styles.cart} />
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#f2edea",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    color: "#333", // texto negro
  },
  cart: {
    cursor: "pointer",
    marginLeft: "10px",
    color: "#333", // icono de carrito en negro
  },
};
