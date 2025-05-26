import apiClient from "./apiClient";

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data.products;
  } catch (err) {
    throw err.response?.data?.message || "Failed to load products";
  }
};

export const fetchProductById = async (id) => {
  try {
    const res = await apiClient.get(`/products/${id}`);
    return res.data.products;
  } catch (e) {
    throw e.response?.data?.message || "Failed to load product details";
  }
};
