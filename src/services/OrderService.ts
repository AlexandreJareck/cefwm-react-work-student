import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import API from "./API";

export const createOrder = async (): Promise<Order> => {
  const order = {
    cliente: "2a9ead3e-ceac-4f40-88d7-13e27bec15e3",
    restaurante: "fb24cb0a-c84e-417f-b4d9-fa7d325edda2"
  }
  return (await API().post(`/pedidos`, order)).data;
}

export const createOrderItem = async (pedidoItems: OrderItem[], uuid: string): Promise<OrderItem> => {
  let obj = {
    pedidoItems
  }
  obj.pedidoItems.forEach(element => {
    element.produto = element.product.uuid
  });

  return (await API().post(`/pedidos/${uuid}/pedidoItems`, obj)).data;
}
