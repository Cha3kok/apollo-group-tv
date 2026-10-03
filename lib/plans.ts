export interface PricingPlan {
  id: string
  name: string
  months: number
  price: number
  popular: boolean
  tagline: string
  extras: string[]
}

/** Features included in every plan. */
export const PLAN_FEATURES = [
  "21,000+ live channels (local & international)",
  "65,000+ movies & series, updated daily",
  "4K / UHD / FHD streaming quality",
  "All premium sports channels & PPV events",
  "Anti-freeze technology, no buffering",
  "Full EPG (electronic program guide)",
  "Smart TV, Firestick, Android, iOS & MAG",
  "24/7 customer support",
]

/** Single source of truth for prices: the pricing cards and the Product schema both read from here. */
export const PLANS: PricingPlan[] = [
  { id: "plan-1m", name: "1 Month", months: 1, price: 15.99, popular: false, tagline: "Best for testing the service", extras: [] },
  { id: "plan-3m", name: "3 Months", months: 3, price: 35.99, popular: false, tagline: "Smart choice", extras: [] },
  { id: "plan-6m", name: "6 Months", months: 6, price: 59.99, popular: false, tagline: "Great value", extras: ["7 days catch-up"] },
  { id: "plan-12m", name: "12 Months", months: 12, price: 89.99, popular: true, tagline: "Most popular", extras: ["Instant activation", "7 days catch-up"] },
  { id: "plan-24m", name: "24 Months", months: 24, price: 139.99, popular: false, tagline: "Lowest price per month", extras: ["VIP support", "7 days catch-up"] },
]

export const perMonth = (plan: PricingPlan) => plan.price / plan.months

export const savingsVsMonthly = (plan: PricingPlan) =>
  Math.round((1 - perMonth(plan) / PLANS[0].price) * 100)
