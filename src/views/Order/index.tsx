import React from "react";
import Header from "../../components/Header";
import ProductOrder from "./components/ProductOrder";
import {
  BreakLine,
  Button,
  Container,
  GroupItem,
  Heading,
  Item,
  Wrapper,
} from "./styles";

const productMock = [
  {
    quantity: 2,
    name: "Coca-cola 500ml",
    total: 10.0,
  },
  {
    quantity: 1,
    name: "Pespsi 500ml",
    total: 4.5,
  },
  {
    quantity: 1,
    name: "Kuat 500ml",
    total: 4.0,
  },
];

export default function Order() {
  return (
    <Container>
      <Wrapper color={"white"} maxWidth={"60%"}>

      </Wrapper>
      <Wrapper color={"lightcyan"} maxWidth={"40%"}>
        <Heading>
          <h2>Pedido</h2>
          <span>R$ 0,00</span>
        </Heading>
        <BreakLine />
        <GroupItem>
          {productMock.map((product) => (
            <ProductOrder
              key={product.name}
              name={product.name}
              quantity={product.quantity}
              total={product.total}
            />
          ))}
        </GroupItem>
        <Button>Salvar</Button>
      </Wrapper>
    </Container>
  );
}
