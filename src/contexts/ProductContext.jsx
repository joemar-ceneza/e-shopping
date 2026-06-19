import { createContext, useState, useEffect } from "react";

// create context
export const ProductContext = createContext();

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch products
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Unable to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
