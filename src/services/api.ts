import Decimal from "decimal.js";

const API_BASE = "http://localhost:8080/api/v1";

export interface Supplier {
  supplierCode: String;
  companyName: String;
  contactName: String;
  phoneNumber: String;
  email: String;
  address: String;
}

export interface Product {
  sku: String;
  name: String;
  supplierCode: String;
  supplierName: String;
  baseUnitOfMeasure: String;
  listProductPackaging: Array<ProductPackaging>;
}

export interface ProductPackaging {
  packagingCode: String;
  sku: String;
  productName: String;
  unitOfMeasure: String;
  conversionFactor: Number;
  price: Decimal;
}

export interface MainInventory {
  id: Number;
  sku: String;
  productName: String;
  quantityOnHand: Number;
  reorderLevel: Number;
}

export interface Inbound {
  supplierCode: String;
  encoderUsername: String;
  invoiceNumber: String;
  dateReceived: Date;
  listInboundItem: Array<InboundItem>;
}

export interface InboundItem {
  productSku: String;
  packagingCode: String;
  quantityReceived: Number;
}

export const inventoryApi = {
  getProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE}/products`);

    if (!response.ok) throw new Error("Failed to get the products.");

    return response.json();
  },
};
