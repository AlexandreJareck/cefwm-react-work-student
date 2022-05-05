import { Product } from "./Product";

export class OrderItem {

    public product: Product;
    public produto?: string
    public quantidade: number;

    constructor(product: Product, quantidade: number, produto: string) {
        this.product = product;
        this.quantidade = quantidade;
        this.produto = produto;
    }

}
