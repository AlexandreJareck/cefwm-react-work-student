import React from "react";
import { Container, Item } from "../ProductOrder/styles";
import { Button, Span } from "./styles";
import { CgMathMinus, CgMathPlus } from "react-icons/Cg";
import { MoneyFormatter } from "../../../../utils/MoneyFormat";

export type ProductItemProps = {
  name: string;
  price: number;
};

export function ProductItem({ name, price }: ProductItemProps) {
  return (
    <Container>
      <Item flexGrow={1}>
        <Span>{name}</Span>
      </Item>
      <Item flexGrow={0}>
        <Span>{MoneyFormatter.format(price)}</Span>
      </Item>
      <Item flexGrow={0}>
        <Button>
          <span>
            <CgMathPlus />
          </span>
        </Button>
      </Item>
      <Item flexGrow={0}>
        <Button>
          <span>
            <CgMathMinus />
          </span>
        </Button>
      </Item>
    </Container>
  );
}
