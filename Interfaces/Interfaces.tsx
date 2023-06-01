export interface BankData {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

export interface BankListProps {
  bankData: BankData[];
}
