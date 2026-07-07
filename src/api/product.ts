import Decimal from "decimal.js";

const BASE_URL = "/api/v1/product";

export interface ResponseProduct {
  data: Data;
  httpStatus: Number;
  message: String;
  success: Boolean;
  timestamp: String;
}

export interface Data {
  content: Product[];
  page: Page;
}

export interface Page {
  size: Number;
  number: Number;
  totalElements: Number;
  totalPages: Number;
}

export interface Product {
  sku: String;
  name: String;
  supplierCode: String;
  supplierName: String;
  baseUnitOfMeasure: String;
  listPackaging: ProductPackaging[];
}

export interface ProductPackaging {
  packagingCode: String;
  sku: String;
  productName: String;
  unitOfMeasure: String;
  conversionFactor: Number;
  price: Decimal;
}

export const productApi = {
  getAll: async (page: string, size: string): Promise<ResponseProduct> => {
    const response = await fetch(
      `${BASE_URL}/getAll/?` + new URLSearchParams({ page: page, size: size }),
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    return response.json();
  },
};
