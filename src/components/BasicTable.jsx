import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { adminContext } from "../contexts/AdminContext";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { API } from "../helpers/const";

export default function BasicTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(adminContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Фото </TableCell>
                <TableCell className="right" align="right">
                  Название
                </TableCell>
                <TableCell className="right" align="right">
                  Описание
                </TableCell>
                <TableCell className="right" align="right">
                  Цена
                </TableCell>
                <TableCell className="right" align="right">
                  Размер
                </TableCell>
                <TableCell className="right" align="right">
                  #
                </TableCell>
                <TableCell className="right" align="right">
                  #
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((phone) => (
                <TableRow
                  key={phone.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="right" align="right">
                    <img
                      className="right"
                      width="70"
                      src={phone.image}
                      alt="phone"
                    />
                  </TableCell>
                  <TableCell className="right" component="th" scope="row">
                    {phone.name}
                  </TableCell>
                  <TableCell className="right" align="right">
                    <Tooltip title={phone.composition}>
                      <p>{phone.composition.slice(0, 30)}...</p>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="right" align="right">
                    {phone.price} сом
                  </TableCell>
                  <TableCell className="right" align="right">
                    {phone.gram}
                  </TableCell>
                  <TableCell className="right" align="right">
                    <Link to={`/admin/edit/${phone.id}`}>
                      <Button color="warning" variant="outlined">
                        Изменить
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => deleteProduct(phone.id)}>
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2 style={{ color: "white" }}>Loading...</h2>
      )}
    </>
  );
}
