export interface PropsContext {
  children: React.ReactNode;
};

export interface IProducts {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image?: string;
}

export interface IContext {
  products: IProducts[];
  getProducts: () => Promise<any>;
}
