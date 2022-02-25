export interface PropsContext {
  children: React.ReactNode;
};

export interface IUserRegister {
  email: string;
  password: string;
  role: string;
  name: string;
};
<<<<<<< HEAD

export interface IUser {
  email: string;
  password: string;
}

export interface IProducts {
  name: string;
  price: number;
  quantity: number;
  description: string;
  image?: string;
}

export interface IContext {
  user: IUserRegister[];
  products: IProducts[];
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string, role: string, name: string) => Promise<any>;
  getProducts: () => Promise<any>;
}
=======
>>>>>>> bb0030b80ee3df9a5811d9c9e4b38ccc092a6ba1
