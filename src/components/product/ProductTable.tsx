import { useEffect, useState } from "react";
import { Product, productApi, ResponseProduct } from "@/api/product";
import { Button } from "@/components/ui/button";

export default function ProductTable() {
  const [productResponse, setProductResponse] =
    useState<ResponseProduct | null>(null);
  const [page, setPage] = useState<number>(0);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    productApi
      .getAll(page.toString(), "10")
      .then((response) => {
        setProductResponse(response);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [page]);

  if (error) return <div> Error: {error}</div>;

  return (
    <div>
      <h1> THIS IS THE PRODUCT TABLE </h1>

      {loading ? (
        <div> Loading... </div>
      ) : (
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
            {productResponse?.data?.content.map((product, index) => {
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
      )}

      <Button
        onClick={() => setPage((page: Number) => Math.max(Number(page) - 1, 0))}
      >
        Previous
      </Button>
      <span> {(page + 1).toString()} </span>
      <Button onClick={() => setPage((page: number) => page + 1)}>Next</Button>
    </div>
  );
}
