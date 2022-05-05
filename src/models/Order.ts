import { OrderItem } from "./OrderItem";

export class Order {
  public uuid: string
  public client: string;
  public pedidoItems: OrderItem[];
  public total?: number;

  constructor(client: string = "", pedidoItems: OrderItem[] = [], uuid: string = "") {
    this.client = client;
    this.pedidoItems = pedidoItems;
    this.total = 0;
    this.uuid = uuid

    pedidoItems.forEach(item => {
      this.total! += item.product.preco
    });
  }
}
