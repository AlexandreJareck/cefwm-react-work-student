import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "./components/ProductItem";
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
  const { products } = useProducts();
  return (
    <Container>
      <Wrapper color={"white"} maxWidth={"60%"}>
        <GroupItem>
          <div style={{ margin: "1.5rem" }}>
            {products.map((product) => (
              <ProductItem
                name={product.nome}
                price={product.preco}
                key={product.uuid}
              />
            ))}
          </div>
        </GroupItem>
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
