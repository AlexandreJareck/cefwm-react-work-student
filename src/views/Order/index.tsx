import { useOrderItem } from "../../hooks/useOrderItem";
import { useProducts } from "../../hooks/useProducts";
import { MoneyFormatter } from "../../utils/MoneyFormat";
import { ProductItem } from "./components/ProductItem";
import ProductOrder from "./components/ProductOrder";
import { createOrderItem } from "../../services/OrderService";
import {
  BreakLine,
  Button,
  Container,
  GroupItem,
  Heading,
  Wrapper,
} from "./styles";
import { Order as Ordert } from "../../models/Order";

export default function Order() {
  const { products } = useProducts();
  const { order, orderItem, setOrder  } = useOrderItem();

  async function handleClick() {

    const uuid = localStorage.getItem("uuid")

    if (!uuid) {
      alert("Error")
      return
    }

    await createOrderItem(orderItem, order.uuid);

    localStorage.setItem("uuid", '')
    setOrder({} as Ordert)
  }

  return (
    <Container>
      <Wrapper color={"white"} maxWidth={"60%"}>
        <GroupItem>
          <div style={{ margin: "1.5rem" }}>
            {products.map((product) => (
              <ProductItem product={product} key={product.uuid} />
            ))}
          </div>
        </GroupItem>
      </Wrapper>

      <Wrapper color={"lightcyan"} maxWidth={"40%"}>
        <Heading>
          <h2>Pedido</h2>
          <span>{MoneyFormatter.format(order?.total)}</span>
        </Heading>
        <BreakLine />
        <GroupItem>
          {orderItem?.map((item) => (
            <ProductOrder
              key={item.product.uuid}
              name={item.product.nome}
              quantity={item.quantidade}
              total={MoneyFormatter.format(item.product.preco)}
            />
          ))}
        </GroupItem>
        <Button onClick={handleClick}>Salvar</Button>
      </Wrapper>
    </Container>
  );
}
