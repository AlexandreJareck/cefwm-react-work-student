import Header from "../../components/Header";
import { ProductsProvider } from "../../hooks/useProducts";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <Header />
    </ProductsProvider>
  );
}

export default App;
