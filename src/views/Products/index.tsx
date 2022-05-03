import React, { useState } from "react";
import Header from "../../components/Header";
import { ProductsProvider } from "../../hooks/useProducts";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import { Container, Wrapper } from "./styles";

function Products() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  function handleOpenProductModal() {
    setIsProductModalOpen(true);
  }

  function handleOpenCloseProductModal() {
    setIsProductModalOpen(false);
  }

  return (
    <>
      <ProductsProvider>
        <Container>
          <Wrapper>
            <h3>Lista de Produtos</h3>
            <button onClick={handleOpenProductModal}>Novo produto</button>
          </Wrapper>
          <ProductList />
          <ProductModal
            isOpen={isProductModalOpen}
            onRequestClose={handleOpenCloseProductModal}
          />
        </Container>
      </ProductsProvider>
    </>
  );
}

export default Products;
