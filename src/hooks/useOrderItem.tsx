import { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { Product } from "../models/Product";
import { createOrder } from "../services/OrderService";

interface OrderItemContextData {
  order: Order;
  orderItem: OrderItem[]
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  setOrder: Dispatch<SetStateAction<Order>>
}

const OrderItemContext = createContext<OrderItemContextData>(
  {} as OrderItemContextData
);

interface OrderItemProviderProps {
  children: React.ReactNode;
}

export function OrderItemProvider({ children }: OrderItemProviderProps) {
  const [order, setOrder] = useState<Order>({} as Order);
  const [orderItem, setOrderItem] = useState<OrderItem[]>([] as OrderItem[])

  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    if(order && order.uuid) return;
    if (uuid) {
      order.uuid = uuid;
      setOrder(order);
      return;
    }

    async function create() {
      const orderResult = await createOrder();
      localStorage.setItem("uuid", orderResult.uuid)
      setOrder(orderResult);
    }
    create();
  }, []);

  function addItem(product: Product) {
    if (!order.pedidoItems) order.pedidoItems = [];

    const item = order?.pedidoItems?.find(
      (item) => item.product.uuid === product.uuid
    );

    if (item) {
      item.quantidade++;
    }
    if (!item) {
      order.pedidoItems.push({product: product, quantidade: 1, produto: product.uuid});
    }

    if (!order.total) order.total = 0;

    order.total! += product.preco;
    setOrder(order);
    setOrderItem(order.pedidoItems);
  }

  function removeItem(product: Product) {
    const item = order?.pedidoItems?.find(
      (item) => item.product.uuid === product.uuid
    );

    if (item) {
      item.quantidade--;

      order.total! -= product.preco;

      if (order.total === 0) {
        order.pedidoItems.splice(order.pedidoItems.indexOf(item), 1);
      }
    }

    setOrder(order);
    setOrderItem(order.pedidoItems)
  }


  return (
    <OrderItemContext.Provider value={{ order, addItem, removeItem, orderItem, setOrder }}>
      {children}
    </OrderItemContext.Provider>
  );
}

export function useOrderItem() {
  return useContext(OrderItemContext);
}
