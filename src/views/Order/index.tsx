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
import { useState } from "react";
import { OrderItem } from "../../models/OrderItem";
import { Product } from "../../models/Product";

export default function Order() {
  const { products } = useProducts();
  const { order, setOrder } = useOrderItem();

  const [orderItem, setOrderItem] = useState<OrderItem[]>([]);

  async function handleClick() {
    const uuid = localStorage.getItem("uuid");

    if (!uuid) {
      alert("Error");
      return;
    }
    await createOrderItem(orderItem, order.uuid);

    localStorage.setItem("uuid", "");
    alert('Pedido criado com sucesso!')
    setOrder({} as Ordert);
    setOrderItem([] as OrderItem[])
  }

  function addItem(product: Product) {
    const exist = orderItem.find((x) => x.product.uuid === product.uuid);

    if (exist) {
      setOrderItem(
        orderItem.map((x) =>
          x.product.uuid === product.uuid
            ? { ...exist, quantidade: exist.quantidade + 1 }
            : x
        )
      );
    } else {
      setOrderItem((oldArray) => [...oldArray, { product, quantidade: 1 }]);
    }

    if (!order.total) order.total = 0;
    order.total! += product.preco;
    order.pedidoItems = orderItem
    setOrder(order);
  }

  function removeItem(product: Product) {
    const exist = orderItem.find((x) => x.product.uuid === product.uuid);
    if(!exist) return;
    if (exist?.quantidade === 1) {
      setOrderItem(orderItem.filter((x) => x.product.uuid !== product.uuid));
    } else {
      setOrderItem(
        orderItem.map((x) =>
          x.product.uuid === product.uuid
            ? { ...exist, quantidade: exist.quantidade - 1 }
            : x
        )
      );
    }
    if (!order.total) order.total = 0;
    order.total! -= product.preco;
    order.pedidoItems = orderItem
    setOrder(order);
  }

  return (
    <Container>
      <Wrapper color={"white"} maxWidth={"60%"}>
        <GroupItem>
          <div style={{ margin: "1.5rem" }}>
            {products.map((product) => (
              <ProductItem
                addItem={addItem}
                removeItem={removeItem}
                product={product}
                key={product.uuid}
              />
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
