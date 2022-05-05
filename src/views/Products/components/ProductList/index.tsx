import { useProducts } from "../../../../hooks/useProducts";
import { MoneyFormatter } from "../../../../utils/MoneyFormat";
import { Container } from "./styles";

function ProductList() {
  const { products } = useProducts();

  const renderedProducts = products?.map((product) => (
    <tr key={product.uuid}>
      <td>{product.nome}</td>
      <td className="price">{MoneyFormatter.format(product.preco)}</td>
    </tr>
  ));

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th className="price">Preço</th>
          </tr>
        </thead>
        <tbody>{renderedProducts}</tbody>
      </table>
    </Container>
  );
}

export default ProductList;
