import React, { useState } from "react";
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
    </>
  );
}

export default Products;
