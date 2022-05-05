import React from "react";
import { Container, Item } from "../ProductOrder/styles";
import { Button, Span } from "./styles";
import { CgMathMinus, CgMathPlus } from "react-icons/Cg";
import { MoneyFormatter } from "../../../../utils/MoneyFormat";
import { useOrderItem } from "../../../../hooks/useOrderItem";
import { Product } from "../../../../models/Product";

export type ProductItemProps = {
  product: Product
};

export function ProductItem({product}: ProductItemProps) {
  const { addItem, removeItem } = useOrderItem();

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
