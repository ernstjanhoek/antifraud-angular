export interface Transaction {
  transactionId: number;
  amount: number;
  ip: string;
  number: string;
  region: string;
  date: Date;
  result: string;
}
