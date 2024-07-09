interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface ISaleProduct {
  id: number;
  quantity: number;
}

interface ISale {
  id: number;
  date: string;
  products: ISaleProduct[];
  total: number;
}

interface ICart {
  customerId: number;
  products: ISaleProduct[];
  total: number;
}

interface IData {
  products: IProduct[];
  sales: ISale[];
  cart: ICart;
}

export type { IProduct, ISaleProduct, ISale, ICart, IData };
