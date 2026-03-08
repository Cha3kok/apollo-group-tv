import { Shield, Star, Crown, Zap, MonitorPlay } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  durationMonths: number;
  iconName: string; // We'll map this to actual icons in the component
  popular: boolean;
  features: string[];
}

export interface SiteSettings {
  supportPhone: string;
  supportWhatsAppUrl: string;
}

// Mock Database service for Antigravity DB
export class AntigravityDB {
  static async getPlans(): Promise<PricingPlan[]> {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    const standardFeatures = [
      "+21,000 Live Channels (Local & International)",
      "+65,000 VOD Movies & Series (Daily Updates)",
      "4K / UHD / FHD Streaming Quality",
      "All Premium Sports Channels & PPV Events",
      "Anti-Freeze Technology & No Buffering",
      "24/7 Priority Customer Support",
      "Full EPG (Electronic Program Guide)",
      "Compatible with All Devices (Smart TV, Android, iOS, Mag, Firestick)"
    ];

    return [
      {
        id: "plan-1m",
        name: "1 Month",
        subtitle: "1 Device Connection",
        price: "15.99",
        durationMonths: 1,
        iconName: "MonitorPlay",
        popular: false,
        features: [
          "Best for Testing Service",
          ...standardFeatures
        ],
      },
      {
        id: "plan-3m",
        name: "3 Months",
        subtitle: "1 Device Connection",
        price: "35.99",
        durationMonths: 3,
        iconName: "Zap",
        popular: false,
        features: [
          "Smart Choice - Save 25%",
          ...standardFeatures
        ],
      },
      {
        id: "plan-6m",
        name: "6 Months",
        subtitle: "1 Device Connection",
        price: "59.99",
        durationMonths: 6,
        iconName: "Shield",
        popular: false,
        features: [
          "Great Value - Save 37%",
          "Includes 7 Days Catch-Up",
          ...standardFeatures
        ],
      },
      {
        id: "plan-12m",
        name: "12 Months",
        subtitle: "1 Device Connection",
        price: "89.99",
        durationMonths: 12,
        iconName: "Star",
        popular: true,
        features: [
          "Most Popular - Save 53%",
          "Instant Activation",
          ...standardFeatures
        ],
      },
      {
        id: "plan-24m",
        name: "24 Months",
        subtitle: "1 Device Connection",
        price: "139.99",
        durationMonths: 24,
        iconName: "Crown",
        popular: false,
        features: [
          "Ultimate Plan - Best Price",
          "Zero Downtime Guarantee",
          "VIP Support",
          ...standardFeatures
        ],
      },
    ];
  }

  static async getSettings(): Promise<SiteSettings> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    
    // Use the requested updated phone number globally
    const phone = "+212707711512";
    
    return {
      supportPhone: "+212 707 711 512",
      supportWhatsAppUrl: `https://wa.me/${phone}`,
    };
  }
}
