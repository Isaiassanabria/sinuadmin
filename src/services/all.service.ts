import { IJSONData } from "../interfaces/data.interface";
import JSONData from "../mock/data.json";
import { TLoginSchema } from "../schemas/admin.schema";
import { TProductSchema } from "../schemas/product.schema";
import { TSaleSchema } from "../schemas/sale.schema";

let data: IJSONData = JSON.parse(localStorage.getItem("data") || "[]");

if (!data || data instanceof Array) {
  localStorage.setItem("data", JSON.stringify(JSONData));
  data = JSONData;
}
// products calls
export const getProducts = () => {
  return data.products;
};

export const getProduct = (id: number) => {
  const product = data.products.find((product) => product.id === id);
  return product;
};

export const addProduct = (product: TProductSchema) => {
  data.products.push({ id: data.products.length + 1, ...product });
  localStorage.setItem("data", JSON.stringify(data));
  const products = getProducts();
  return products;
};

export const deleteProduct = (id: number) => {
  const index = data.products.findIndex((product) => product.id === id);
  data.products.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  const products = getProducts();
  return products;
};

export const updateProduct = (product: TProductSchema) => {
  const index = data.products.findIndex((prod) => prod.id === product.id);
  data.products[index] = product;
  localStorage.setItem("data", JSON.stringify(data));
  const products = getProducts();
  return products;
};

export const reduceStock = (id: number, quantity: number) => {
  const product = data.products.find((product) => product.id === id);
  if (product) {
    product.stock -= quantity;
    localStorage.setItem("data", JSON.stringify(data));
    const products = getProducts();
    return products;
  }
  return false;
};

// Sales calls
export const addSale = (sale: TSaleSchema) => {
  data.sales.push({ id: data.sales.length + 1, ...sale });
  localStorage.setItem("data", JSON.stringify(data));
};

export const getSales = () => {
  return {
    data: data.sales,
    amount: data.sales.reduce((acc, sale) => acc + sale.total, 0),
  };
};

// Auth calls
export function login(credentials: TLoginSchema) {
  const user = data.users.find(
    (user) =>
      user.username === credentials.username &&
      user.password === credentials.password
  );

  if (!user) {
    return false;
  }

  return {
    user: {
      role: user.role,
      username: user.username,
      id: user.id,
    },
  };
}
