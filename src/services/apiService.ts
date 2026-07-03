import { Product } from "@/types/apiTypes";

const API_BASE = "http://localhost:8080/api/v1";

export const inventoryApi = {
  getProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE}/products`);

    if (!response.ok) throw new Error("Failed to get the products.");

    return response.json();
  },
};
