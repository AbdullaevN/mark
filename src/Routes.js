import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import AdminContextProvider from "./contexts/AdminContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import CreditCardPage from "./pages/CreditCard/CreditCardPage";
import ClientContextProvider from "./contexts/ClientContext";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import Favorites from "./pages/Favorites";
import Filter from "./components/FLTER/Filter";
import CommentContextProvider from "./contexts/CommentContext";
import Comments from "./components/Comments/Comments";
import DetailModal from "./components/DetailModal";

const MyRoutes = () => {
  return (
    <CommentContextProvider>
      <AuthContextProvider>
        <ClientContextProvider>
          <AdminContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/admin/edit/:id" element={<EditPage />} />
                <Route path="/credit/card" element={<CreditCardPage />} />
                <Route path="/product/:id" element={<DetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/catalog" element={<Filter />} />
                <Route path="/comment" element={<Comments />} />
                <Route path="/detail" element={<DetailModal />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </AdminContextProvider>
        </ClientContextProvider>
      </AuthContextProvider>
    </CommentContextProvider>
  );
};

export default MyRoutes;
