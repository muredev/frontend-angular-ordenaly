// Generated by https://quicktype.io

export interface IOrder {
  id:     string;
  waiter: string;
  ticket: number;
  table:  number;
  status: string
  items:  Item[];
}

export interface Item {
  id:       number;
  producto: string;
  catidad:  number;
}