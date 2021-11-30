import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import { Button } from "@mui/material";
import Comments from "../components/Comments/Comments";
import { Container } from "react-bootstrap";

const DetailPage = () => {
  const { getDetails, productDetails } = useContext(clientContext);
  const params = useParams();
  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
      <div style={{ color: "white" }}>
        {productDetails ? (
          <>
            <div className="detail-page">
              <div className="detail-image">
                <img src={productDetails.image} alt="" />
              </div>
              <div>
                <h2>{productDetails.name}</h2>
                <p>{productDetails.composition}</p>
                <Button variant="contained" color="primary">
                  Добавить в корзину
                </Button>
                <div>
                  <h4 style={{ color: "black" }}>Описание:</h4>
                  <ul className="character" style={{ color: "black" }}>
                    <li>
                      <strong>Цена:</strong>
                      <span>{productDetails.price}сом</span>
                    </li>
                    <li>
                      <strong>Порция:</strong>
                      <span>{productDetails.gram}</span>
                    </li>
                    <li>
                      <strong>Категория:</strong>
                      <span>{productDetails.category}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Container>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "500px",
                  }}
                >
                  <Comments productId={productDetails.id} />
                </div>
              </Container>
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default DetailPage;
