import "./CartTable.css";
import { FaTrashAlt } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Tooltip } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#ddd",
  color: "#000",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "80vw", // para pantallas pequeñas
    md: "40vw", // para pantallas medianas o grandes
  },
  bgcolor: "#ddd",
  color: "#000",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const [openModalSum, setOpenModalSum] = useState(false);
  const [num, setNum] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenModalSum = () => setOpenModalSum(true);
  const handleCloseModalSum = () => setOpenModalSum(false);

  const handleSuma = () => {
    setNum(num + 1);
    if (num >= 4) {
      handleOpenModalSum();
      setNum(4);
    }
  };
  return (
    <>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDADE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="remove">
                <FaTrashAlt onClick={handleOpen} />
              </td>
              <td className="product-info">
                <img src="./img_cart.png" alt="Producto" />
                <span>ATRIL ORQUESTA</span>
              </td>
              <td data-label="Precio">25,00 €</td>
              <td className="quantity" data-label="Cantidad">
                <button
                  onClick={() => setNum(num - 1)}
                  disabled={num === 1}
                  style={{
                    color: num === 1 ? "#f2edea" : "#333",
                    cursor: num !== 1 ? undefined : "pointer",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                  }}
                >
                  -
                </button>
                <span>{num}</span>
                <button onClick={() => handleSuma()}>+</button>
              </td>
              <td data-label="Subtotal">{25 * num},00 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Typography sx={{ color: "#000", mt: 5, mb: 5 }}>
        Propostas de cambio para o carriño:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          width: "100%",
        }}
      >
        <ul
          style={{
            color: "#000",
            fontSize: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          <li>Sustituir o botón X da esquerda polo icono da papeleira</li>
          <li>
            Ó facer click no icono da papeleira, mostrar modal de aviso ANTES de
            eliminar para pedir confirmación da acción ó usuario
          </li>
          <li>
            Ocultar o botón de restar cantidade cando a cantidade está en 1,
            para que só se poidan eliminar os produtos desde o icono da
            papeleira
          </li>
          <li>
            Actualización automática do carriño e do prezo total cando o usuario
            modifica a cantidade de produtos. Quitar o botón de "Actualizar
            carriño"
          </li>
          <li>
            Cando se alcanza a cantidade máxima de produtos en stock, mostrar un
            modal para ofrecerlle ó usuario a posibilidade de contactar ca tenda
            para encargar o que necesite.
          </li>
          <li>
            O número que indica a cantidade, situado entre os botóns - e +, só
            poderá modificarse mediante estes botóns. Non se poderá editar
            directamente co teclado.
          </li>
        </ul>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "16px" }}
          >
            Vas a eliminar ATRIL ORQUESTA da túa cesta de compra
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Button variant="contained" color="success" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="error">
              ELIMINAR
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openModalSum}
        onClose={handleCloseModalSum}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style2}>
          <Typography
            id="modal-title"
            variant="h6"
            sx={{ mb: 2, fontSize: "16px" }}
          >
            📦 Neste momento só temos <strong>4 atrís</strong> dispoñibles para
            entrega inmediata. Podes encargar as unidades que necesites chamando
            ó noso teléfono
          </Typography>
          <Box>
            <Typography sx={{ mt: 1, fontSize: "16px" }}>
              📞 <strong> 678 123 456</strong>
            </Typography>

            <Typography sx={{ mt: 1, fontSize: "16px" }}>
              🕒 <strong>Horario de atención:</strong>
              <br />
              De 10:00 a 14:00 e de 16:00 a 20:00
            </Typography>
          </Box>

          <Typography sx={{ mt: 1, fontSize: "16px" }}>
            Ou ben deixarnos unha mensaxe{" "}
            <Tooltip
              title="Esto será un enlace á sección Contacto da web"
              arrow
            >
              <strong style={{ textDecoration: "underline", cursor: "help" }}>
                aquí
              </strong>
            </Tooltip>{" "}
            mesmo indicando os produtos que necesitas.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: "16px",
              borderTop: "1px solid #000",
              pt: 2,
              textAlign: "center",
            }}
          >
            <strong>
              Conseguiremos os produtos que necesites no menor tempo posible.
            </strong>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleCloseModalSum}
            >
              CERRAR
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
