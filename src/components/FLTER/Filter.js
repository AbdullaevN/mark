import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router";
import { clientContext } from "../../contexts/ClientContext";
import MediaCard from "../MediaCard";
import Pagination from "../Pagination";

const Filter = () => {
  const { getProducts, products, currentPosts } = useContext(clientContext);

  const [brandValue, setBrandValue] = useState("");
  const navigate = useNavigate();

  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("category"));
  }, [object]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="sidebar">
          <FormControl component="fieldset">
            <FormLabel
              className="category_h2"
              style={{
                color: "black",
                textAlign: "center",
                marginTop: "10px",
                fontFamily: "Francois One, sans-serif",
                letterSpacing: "1px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
              component="legend"
            >
              Категория
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterProducts("category", e.target.value)}
            >
              <FormControlLabel
                value="woman"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {},
                    }}
                  />
                }
                label="Women"
              />{" "}
              <img width="100px" src="" />
              <FormControlLabel
                value="men"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {},
                    }}
                  />
                }
                label="Men"
              />
              <FormControlLabel
                value="bag"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {},
                    }}
                  />
                }
                label="Bag"
              />
              <FormControlLabel
                value="shoes"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {},
                    }}
                  />
                }
                label="Shoes"
              />
              <FormControlLabel
                value="watches"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {},
                    }}
                  />
                }
                label="Watches"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {products ? (
          <>
            <div className="products">
              {currentPosts.map((product) => (
                <MediaCard product={product} key={product.id} />
              ))}
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default Filter;
