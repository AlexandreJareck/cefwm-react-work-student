import React from "react";
import { Container, Item } from "../ProductOrder/styles";
import { Button, Span } from "./styles";
import { CgMathMinus, CgMathPlus } from "react-icons/Cg";
import { MoneyFormatter } from "../../../../utils/MoneyFormat";
import { useOrderItem } from "../../../../hooks/useOrderItem";
import { Product } from "../../../../models/Product";

export type ProductItemProps = {
  product: Product
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
};

export function ProductItem({product, addItem, removeItem}: ProductItemProps) {

  return (
    <Container>
      <Item flexGrow={1}>
        <Span>{product.nome}</Span>
      </Item>
      <Item flexGrow={0}>
        <Span>{MoneyFormatter.format(product.preco)}</Span>
      </Item>
      <Item flexGrow={0}>
        <Button onClick={() => addItem(product)}>
          <span>
            <CgMathPlus/>
          </span>
        </Button>
      </Item>
      <Item flexGrow={0}>
        <Button onClick={() => removeItem(product)}>
          <span>
            <CgMathMinus />
          </span>
        </Button>
      </Item>
    </Container>
  );
}
