import { productApi } from "./api/product";
import ProductTable from "./components/product/ProductTable";
import "./index.css";
import { Button } from "@/components/ui/button";

function App() {
  function getAllProducts() {
    productApi
      .getAll("0", "10")
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  }

  return (
    <>
      <ProductTable />
      <Button onClick={getAllProducts}> CLICK ME! </Button>
    </>
  );
}

export default App;
