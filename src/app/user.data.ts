export interface Ledge {
  description: string;
  debit: number;
  credit: number;
}

export interface UserData {
  username: string;
  tokens: number;
  ledge: Ledge[];
}
