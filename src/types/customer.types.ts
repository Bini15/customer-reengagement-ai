export interface Customer {
  id: string;
  name: string;
  email: string;

  purchaseCount: number;

  totalSpend: number;

  daysSinceLastPurchase: number;

  lastPurchasedCategory: string;
}