import API from './API';

import { Product } from '../models/Produto';
import { ProductInputDTO } from '../dtos/ProductInputDTO';

export const getProdutos = async () : Promise<Product[]> => {
    return (await API().get("/produtos")).data;
}

export const postProduto = async(product: ProductInputDTO): Promise<Product> => {
  return (await API().post("/produtos", product)).data;
}
