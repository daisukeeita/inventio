import { useEffect, useState } from "react";
import { Product, productApi, ResponseProduct } from "@/api/product";

export default function ProductTable() {
  const [productResponse, setProductResponse] = useState<ResponseProduct>(null);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    productApi
      .getAll("0", "10")
      .then(setProductResponse)
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <div> Error: {error}</div>;

  if (!productResponse) return <div> Loading... </div>;

  const products: Product[] = productResponse.data.content;

  return (
    <>
      <h1> THIS IS THE PRODUCT TABLE </h1>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>NAME</th>
            <th>SUPPLIER CODE</th>
            <th>SUPPLIER NAME</th>
            <th>BASE UNIT OF MEASURE</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.supplierCode}</td>
                <td>{product.supplierName}</td>
                <td>{product.baseUnitOfMeasure}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
