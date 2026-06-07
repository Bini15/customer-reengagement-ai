export function getCustomerSegment(
  purchaseCount: number,
  totalSpend: number,
  daysSinceLastPurchase: number
): string {

  if (daysSinceLastPurchase > 180) {
    return "CHURNED";
  }

  if (
    purchaseCount >= 10 &&
    totalSpend >= 20000 &&
    daysSinceLastPurchase < 30
  ) {
    return "VIP";
  }

  if (
    purchaseCount >= 5 &&
    daysSinceLastPurchase < 60
  ) {
    return "LOYAL";
  }

  if (
    purchaseCount <= 2 &&
    daysSinceLastPurchase > 90
  ) {
    return "AT_RISK";
  }

  return "REGULAR";
}