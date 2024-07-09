import toast from "react-hot-toast";
import { TProductSchema } from "../schemas/product.schema";
import { ICart } from "../interfaces/cart.interface";
import { reduceStock, addSale } from "./all.service";
import { TSaleSchema } from "../schemas/sale.schema";

export const addToCart = (product: ICart) => {
  const exists = JSON.parse(localStorage.getItem("cart") || "[]").find(
    (p: TProductSchema) => p.id === product.id
  );

  if (exists) {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        JSON.parse(localStorage.getItem("cart") || "[]").map((p: ICart) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1, total: p.total! + p.price }
            : p
        )
      )
    );
    toast.success(`${product.name} added to cart!`);
  } else {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart") || "[]"),
        { ...product, total: product.price },
      ])
    );
    toast.success(`${product.name} added to cart!`);
  }
};

export function submitCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const total = cart.reduce(
    (acc: number, product: ICart) => acc + product.total!,
    0
  );

  const sale: TSaleSchema = {
    products: [
      ...cart.map((product: ICart) => ({
        id: product.id,
        quantity: product.quantity,
      })),
    ],
    total,
    date: new Date().toISOString(),
  };

  console.log(sale);

  addSale(sale);
  cart.forEach((product: ICart) => reduceStock(product.id!, product.quantity));
  localStorage.removeItem("cart");
}
