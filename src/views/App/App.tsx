import Header from "../../components/Header";
import { OrderItemProvider } from "../../hooks/useOrderItem";
import { ProductsProvider } from "../../hooks/useProducts";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <OrderItemProvider>
        <Header />
      </OrderItemProvider>
    </ProductsProvider>
  );
}

export default App;
