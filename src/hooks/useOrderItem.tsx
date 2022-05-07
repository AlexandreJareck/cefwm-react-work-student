import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Order } from "../models/Order";
import { createOrder } from "../services/OrderService";

interface OrderItemContextData {
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
}

const OrderItemContext = createContext<OrderItemContextData>(
  {} as OrderItemContextData
);

interface OrderItemProviderProps {
  children: React.ReactNode;
}

export function OrderItemProvider({ children }: OrderItemProviderProps) {
  const [order, setOrder] = useState<Order>({} as Order);

  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    if (order && order.uuid) return;
    if (uuid) {
      order.uuid = uuid;
      setOrder(order);
      return;
    }

    async function create() {
      const orderResult = await createOrder();
      localStorage.setItem("uuid", orderResult.uuid);
      setOrder(orderResult);
    }
    create();
  }, []);

  return (
    <OrderItemContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderItemContext.Provider>
  );
}

export function useOrderItem() {
  return useContext(OrderItemContext);
}
