import { TProductSchema } from "../schemas/product.schema";
import { TSaleSchema } from "../schemas/sale.schema";

interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

export interface IJSONData {
  users: User[];
  products: TProductSchema[];
  sales: TSaleSchema[];
}
