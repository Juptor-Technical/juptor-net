export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}

export interface PricingPlan {
  name: string;
  speed: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface Area {
  name: string;
  available: boolean;
  coordinates: [number, number];
  agents: number;
}

export interface Agent {
  id: number;
  name: string;
  phone: string;
  area: string;
  distance: string;
  rating: string;
  coordinates: [number, number];
}

export interface FAQ {
  question: string;
  answer: string;
}
