import { Container, HeaderS, Menu } from "./styles";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderS>
        <Container>
          <div>
            <Link to="/">
              <h1>Delivery</h1>
            </Link>
          </div>
          <nav aria-label="primaria">
            <Menu>
              <li>
                <Link to="/produtos">Produtos</Link>
              </li>
              <li>
                <Link to="/pedido">Pedido</Link>
              </li>
            </Menu>
          </nav>
        </Container>
      </HeaderS>
      <Outlet />
    </>
  );
}
