export function calculateRetentionScore(
  purchaseCount: number,
  totalSpend: number,
  daysSinceLastPurchase: number
) {

  let score = 0;

  // Purchase Recency (0-50 points)
  if (daysSinceLastPurchase > 120) {
    score += 50;
  } else if (daysSinceLastPurchase > 90) {
    score += 40;
  } else if (daysSinceLastPurchase > 30) {
    score += 20;
  } else {
    score += 5;
  }

  // Purchase Frequency (0-30 points)
  if (purchaseCount <= 1) {
    score += 30;
  } else if (purchaseCount <= 3) {
    score += 20;
  } else {
    score += 5;
  }

  // Lifetime Spend (0-20 points)
  if (totalSpend < 1000) {
    score += 20;
  } else if (totalSpend < 5000) {
    score += 10;
  } else {
    score += 2;
  }

  let riskLevel = "";

  if (score >= 70) {
    riskLevel = "HIGH";
  } else if (score >= 40) {
    riskLevel = "MEDIUM";
  } else {
    riskLevel = "LOW";
  }

  return {
    retentionScore: score,
    riskLevel,
  };
}