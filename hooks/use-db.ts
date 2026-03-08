import { useState, useEffect } from "react";
import { AntigravityDB, PricingPlan, SiteSettings } from "@/lib/db";

export function usePlans() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPlans() {
      try {
        const data = await AntigravityDB.getPlans();
        if (isMounted) {
          setPlans(data);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    }

    fetchPlans();

    return () => {
      isMounted = false;
    };
  }, []);

  return { plans, loading, error };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchSettings() {
      try {
        const data = await AntigravityDB.getSettings();
        if (isMounted) {
          setSettings(data);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    }

    fetchSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  return { settings, loading, error };
}
