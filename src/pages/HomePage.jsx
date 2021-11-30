import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";
import MediaCard from "../components/MediaCard";
import { clientContext } from "../contexts/ClientContext";
import Pagination from "../components/Pagination";
import MyCarousel from "../components/Carousel/Carousel";
import { pink } from "@mui/material/colors";
import Filter from "../components/FLTER/Filter";
import Header from "../components/Header/Header";

const HomePage = () => {
  const { getProducts, products, currentPosts } = useContext(clientContext);

  return (
    <>
      <Header />
    </>
  );
};

export default HomePage;
