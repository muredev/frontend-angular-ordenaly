// Generated by https://quicktype.io

export interface IOrder {
  id:  number;
  turno:  number;
  // mesa:   number;
  mesero: string;
  estado: string;
  pedido: Pedido[];
}

export interface Pedido {
  id:       number;
  producto: string;
  cantidad: number;
}
