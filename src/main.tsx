import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App/App";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./views/Order";
import Products from "./views/Products";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/pedido" element={<Order />} />
          <Route path="/produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
