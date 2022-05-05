import { createContext, useContext, useEffect, useState } from "react";
import { ProductInputDTO } from "../dtos/ProductInputDTO";
import { Product } from "../models/Product";
import { getProdutos, postProduto } from "../services/ProductService";

interface ProductsContextData {
  products: Product[];
  createProduct: (productInputDTO: ProductInputDTO) => Promise<void>;
}

const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProdutos().then((data) => setProducts(data));
  }, []);

  async function createProduct(
    productInputDTO: ProductInputDTO
  ): Promise<void> {
    const product = await postProduto(productInputDTO);

    setProducts([...products, product]);
  }

  return (
    <ProductContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
