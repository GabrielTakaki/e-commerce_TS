export interface PropsContext {
  children: React.ReactNode;
};

export interface IUserRegister {
  email: string;
  password: string;
  role: string;
  name: string;
};

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
  registerErr: { conflict: string, badReq: string };
  loginErr: string;
}
