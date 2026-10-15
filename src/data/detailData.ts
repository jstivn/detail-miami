export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  features: string[];
  duration: string;
  priceUSD: number;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  vehicle: string;
  date: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const DETAIL_MIAMI_INFO = {
  name: "DETAIL MIAMI",
  tagline: "Miami #1 Car Service, Wash & Detailing Studio",
  headline: "Car Detailing & Wash Service in Miami",
  eyebrow: "The #1 and fastest growing in South Florida",
  location: "2420 NE 2nd Ave, Miami Design District, FL 33137",
  locationShort: "Miami Design District",
  coordinates: "25.7997° N, 80.1918° W",
  googleMapsUrl: "https://maps.google.com/?q=Miami+Design+District",
  phoneDisplay: "(305) 555-0199",
  phoneRaw: "+13055550199",
  smsRaw: "+13055550199",
  whatsappRaw: "13055550199",
  email: "concierge@detailmiami.com",
  hours: "MON - SAT: 08:00 AM - 07:30 PM // SUN: 09:00 AM - 05:00 PM",
  licenseInfo: "State of Florida Division of Corporations (Sunbiz) Entity #L24000198421",
  legalEntity: "DETAIL MIAMI STUDIO LLC • LICENSED & FULLY INSURED",
  stats: {
    carsServiced: "5,200+",
    rating: "4.9",
    reviewsCount: "140+",
    satisfaction: "100%"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "car-wash",
    title: "Car Wash",
    category: "Exterior & Interior Eco-Care",
    tag: "HAND WASH // ZERO CONTACT FOAM",
    description: "A thorough eco-friendly cleaning service that keeps your vehicle’s exterior and interior spotless, preserving its clearcoat finish and gloss using 100% de-ionized mineral-free water.",
    features: [
      "Two-bucket grit guard hand wash & pH-neutral snow foam bath",
      "De-ionized spot-free water rinse (zero mineral water spots)",
      "Wheel face, barrel, and brake caliper non-acid decontamination",
      "Interior cabin vacuuming, dash wipe-down & streak-free glass"
    ],
    duration: "45 - 60 Min",
    priceUSD: 95,
    image: "/images/service-wash.jpg"
  },
  {
    id: "car-polish",
    title: "Car Polish & Paint Correction",
    category: "Optical Surface Restoration",
    tag: "DEFECT REMOVAL // 99% GLOSS",
    description: "Restores your car’s paint with a mirror-like shine by removing micro-scratches, swirl marks, and wash haze using precision dual-action polishers with zero clearcoat compromise.",
    features: [
      "Multi-stage rotary and random orbital jewel polishing",
      "DeFelsko ultrasonic paint depth gauge profiling",
      "Removes up to 95% of wash swirls, water etching, and micro-marring",
      "Restores depth to 98.5+ GU (Gloss Units) optical clarity"
    ],
    duration: "3 - 5 Hours",
    priceUSD: 450,
    image: "/images/service-polish.jpg"
  },
  {
    id: "ceramic-ppf",
    title: "Ceramic & PPF",
    category: "Permanent Surface Armor",
    tag: "XPEL 10-MIL // 10H CERAMIC MATRIX",
    description: "Provides advanced protection with multi-layer ceramic coating and XPEL Paint Protection Film (PPF), shielding your car’s paint from stone chips, extreme Florida UV rays, and Atlantic salt air.",
    features: [
      "10-Mil self-healing ballistic polyurethane film (wrapped seams)",
      "10H Diamond ceramic coating with 115° hydrophobic contact angle",
      "Blocks 99.8% of destructive UV-A and UV-B solar radiation",
      "10-Year written nationwide warranty certificate"
    ],
    duration: "1 - 3 Days",
    priceUSD: 1850,
    image: "/images/porsche-gt3rs-miami.jpg"
  },
  {
    id: "detailing",
    title: "Complete Detailing",
    category: "Full Connoisseur Reconditioning",
    tag: "CABIN & UNDERBODY SPA",
    description: "Comprehensive deep cleaning and restoration of both interior and exterior, enhancing your vehicle’s tactile feel, air quality, and collector value.",
    features: [
      "Hot water extraction and sub-zero steam interior disinfection",
      "Leather hide pH rebalancing & breathable fluoropolymer conditioning",
      "Engine bay dry steam decontamination and plastic satin dress",
      "Exhaust tip mirror polish and wheel arch ceramic seal"
    ],
    duration: "4 - 6 Hours",
    priceUSD: 280,
    image: "/images/service-interior.jpg"
  }
];

export const TESTIMONIALS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    rating: 5,
    text: "Pretty good car wash and a friendly environment. This place is awesome! I have never been anything less than ecstatic about the quality of service. Best car wash in Miami. Mostly I loved the air-conditioned lounge and warm welcome in the Design District.",
    vehicle: "Porsche 911 Turbo S",
    date: "Verified Google Review"
  },
  {
    id: "rev-2",
    name: "Daniel Sebastian",
    rating: 5,
    text: "Had my car for interior, exterior, and engine bay cleaning with them. Really high quality work and the team is very kind and knowledgeable. Unique waiting area, haven’t seen anything like this anywhere else in Miami. Highly recommend!",
    vehicle: "Ferrari F8 Spider",
    date: "Verified Google Review"
  },
  {
    id: "rev-3",
    name: "Rakan Al Saifi",
    rating: 5,
    text: "By far the best Car Detailing place I've been to in South Florida. Value for money at its best! My truck looked like it rolled right out of the showroom. Keep it up folks, you've gained a client for life.",
    vehicle: "Mercedes-AMG G63",
    date: "Verified Google Review"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    q: "What services do you offer?",
    a: "We offer a comprehensive range of services, including hand car washes, multi-stage paint correction, XPEL Paint Protection Film (PPF), 10H ceramic coatings, interior steam disinfection, leather conditioning, and window tinting. Our goal is to meet all your vehicle care needs under one roof in the Miami Design District."
  },
  {
    q: "Are your products eco-friendly and safe for exotic finishes?",
    a: "Yes, at Detail Miami, we prioritize both the vehicle and the environment. We use 100% pH-neutral biodegradable cleaning formulas, spot-free deionized water, and advanced filtration techniques to ensure zero mineral water spots and zero clearcoat damage."
  },
  {
    q: "How long does a detailing or wash service take?",
    a: "Our signature hand wash takes approximately 45 to 60 minutes. Complete detailing packages average between 3 to 6 hours, while full PPF and ceramic installations require 1 to 3 days inside our climate-controlled cleanroom."
  },
  {
    q: "Do I need to make an appointment?",
    a: "While we welcome drive-ins when bays are available, we highly recommend booking an appointment online or via 1-Tap SMS to guarantee immediate bay ingress without waiting."
  },
  {
    q: "Can you pick up my vehicle or provide enclosed carrier transport?",
    a: "Yes! For exotic, hypercar, and collector vehicles, we offer white-glove hydraulic enclosed carrier transport covering Miami-Dade, Brickell, Star Island, Bal Harbour, Palm Beach, and Coral Gables."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, Apple Pay, Cash, Wire Transfer, and corporate invoicing."
  },
  {
    q: "Will polishing remove scratches and swirl marks?",
    a: "Yes. Our multi-stage paint correction safely removes 90% to 95% of swirl marks, wash marring, and light scratches. For deep stone chips or key scratches, we inspect with ultrasonic paint depth gauges to preserve factory clearcoat."
  },
  {
    q: "How often should I get my car detailed in Miami?",
    a: "Given South Florida's high UV index, frequent rainstorms, and Atlantic coastal salt air, we recommend our maintenance wash every 2 weeks and a comprehensive detailing reconditioning every 3 to 6 months."
  }
];

export function buildSMSLink(serviceName: string, notes = ""): string {
  let message = `Hello Detail Miami,\nI would like to book an appointment for my car.`;
  if (serviceName) message += `\nService: ${serviceName}`;
  if (notes) message += `\nVehicle: ${notes}`;
  message += `\nPlease confirm available slots.`;
  return `sms:${DETAIL_MIAMI_INFO.smsRaw}?&body=${encodeURIComponent(message)}`;
}

export function buildCallbackSMS(name: string, phone: string, time = "ASAP"): string {
  const message = `Callback Request - Detail Miami:\nClient: ${name}\nPhone: ${phone}\nPreferred Time: ${time}`;
  return `sms:${DETAIL_MIAMI_INFO.smsRaw}?&body=${encodeURIComponent(message)}`;
}
