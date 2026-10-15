export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  code: string;
  description: string;
  specs: string[];
  duration: string;
  warranty: string;
  startingPriceUSD: number;
}

export interface CaseStudy {
  id: string;
  vehicle: string;
  color: string;
  year: string;
  clientArea: string;
  scope: string;
  specs: {
    paintDepthBefore: string;
    paintDepthAfter: string;
    glossLevel: string;
    filmThickness: string;
    curingCycle: string;
  };
  priceUSD: number;
  image: string;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  sportsCarUSD: number;
  supercarUSD: number;
  hypercarUSD: number;
  suvUSD: number;
  turnaround: string;
  features: string[];
  warranty: string;
}

export const ATELIER_INFO = {
  name: "APEX MIAMI",
  subBrand: "MIAMI DESIGN DISTRICT ATELIER",
  tagline: "Hypercar Surface Engineering & PPF Atelier",
  location: "2420 NE 2nd Ave, Miami Design District, FL 33137",
  coordinates: "25.7997° N, 80.1918° W",
  phoneDisplay: "(305) 555-0199",
  phoneRaw: "+13055550199",
  smsRaw: "+13055550199",
  whatsappRaw: "13055550199",
  email: "concierge@apexsurface.com",
  hours: "MON - SAT: 08:30 - 19:30 EST // SUN: VIP ADMISSION ONLY",
  licenseInfo: "FL Entity #L24000198421 • APEX SURFACE ENGINEERING LLC",
  stateRegistration: "State of Florida Division of Corporations (Sunbiz) Active LLC",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ppf-full",
    tag: "SURFACE ARMOUR",
    title: "10-Mil Self-Healing PPF",
    code: "ISO-PPF-10M",
    description: "Full-body optical polyurethane engineered specifically for harsh South Florida thermal cycling and high-velocity highway debris on I-95. Self-heals swirl marks instantly under ambient Miami sunshine. Disassembly-free precision pattern application via digital CAD database.",
    specs: [
      "XPEL Ultimate Plus 10-Mil Ballistic Thickness",
      "Digital DAP pattern cutting (Zero razor-to-paint contact)",
      "Full panel edge wrap for invisible seam alignment",
      "Optical clarity refractive index matched to factory clearcoat"
    ],
    duration: "4 - 5 Days",
    warranty: "10-Year Nationwide Transferable Warranty",
    startingPriceUSD: 5500
  },
  {
    id: "paint-correction",
    tag: "OPTICAL CLARITY",
    title: "Multi-Stage Nanotech Paint Correction",
    code: "ISO-CORR-MS",
    description: "Surgical removal of micro-scratches, buffer trails, factory orange peel, and wash haze. Paint thickness continuously verified with DeFelsko PosiTector ultrasonic gauges to preserve maximum clearcoat depth.",
    specs: [
      "3 to 4 stage compound & micro-fine jeweling polish",
      "DeFelsko multi-point ultrasonic paint depth profiling",
      "Restoration to 98.5+ GU (Gloss Units) optical depth",
      "5000K CRI-98 calibrated cleanroom lighting inspection"
    ],
    duration: "2 - 3 Days",
    warranty: "Lifetime Swirl-Free Handover Certificate",
    startingPriceUSD: 1450
  },
  {
    id: "ceramic-matrix",
    tag: "MOLECULAR BOND",
    title: "10H Diamond Matrix Ceramic",
    code: "ISO-CER-10H",
    description: "Cross-linking siloxane matrix delivering extreme hydrophobic properties (115° contact angle). Short-wave infrared lamp baked at 160°F for impervious resistance against Atlantic coastal salt spray, industrial fallout, and acidic lovebug damage.",
    specs: [
      "True 10H pencil hardness diamond matrix",
      "1200°C thermal flashpoint tolerance (Exhaust & Caliper safe)",
      "99.8% UV-A and UV-B solar radiation reflection",
      "Oleophobic slickness repelling coastal salt fog & road grime"
    ],
    duration: "2 Days",
    warranty: "5-Year Guarantee with Annual Telemetry Check",
    startingPriceUSD: 1950
  },
  {
    id: "cryo-detailing",
    tag: "CRYOGENIC DECONTAMINATION",
    title: "Sub-Zero Dry-Ice Detailing",
    code: "ISO-CRYO-78",
    description: "Non-abrasive blast cleaning utilizing solid CO2 pellets at -109.3°F (-78.5°C). Sublimates on contact, removing baked road grease, cosmoline, and carbon sediment from underbody, suspension linkages, and engine bay with zero moisture.",
    specs: [
      "Pure recycled food-grade solid CO2 cryogenic pellets",
      "100% moisture-free: zero short-circuit risk for hybrid systems (SF90, Revuelto)",
      "Restores raw magnesium, aluminum, and titanium castings",
      "Non-conductive, zero solvent runoff, environmentally certified"
    ],
    duration: "1 - 2 Days",
    warranty: "Cleanroom Handover Spec",
    startingPriceUSD: 1250
  },
  {
    id: "heat-tint",
    tag: "SOLAR BARRIER",
    title: "Florida DOT-Legal Nano-Ceramic Tint",
    code: "ISO-TINT-IR",
    description: "Multi-layer nano-ceramic film rejecting 99.8% infrared heat without signal interference. Fully compliant with Florida Statute § 316.2953 regulations (15% to 30% legal VLT).",
    specs: [
      "Up to 98% Total Solar Energy Rejection (TSER)",
      "Zero metallic particles: 100% GPS/Keyless/Radar/5G pass-through",
      "Reduces supercar cockpit heat soak by up to 25°F",
      "Official state DOT compliance certificate provided"
    ],
    duration: "4 Hours",
    warranty: "Lifetime Delamination & Bubble Warranty",
    startingPriceUSD: 750
  },
  {
    id: "interior-barrier",
    tag: "CABIN PRESERVATION",
    title: "Bespoke Leather & Alcantara Barrier",
    code: "ISO-INT-FEP",
    description: "Breathable fluoropolymer sealant protecting aniline leathers and Alcantara against perspiration, dye transfer from denim, and high subtropical humidity without altering natural matte texture or tactile grip.",
    specs: [
      "Nano-breathable membrane: preserves leather breathing",
      "Tested on Connolly, Semi-Aniline, and Nappa hides",
      "Zero artificial shine: factory OEM matte finish preserved",
      "Antimicrobial & anti-UV hardening"
    ],
    duration: "1 Day",
    warranty: "2-Year Cabin Surface Protection",
    startingPriceUSD: 950
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sf90",
    vehicle: "Ferrari SF90 Stradale Assetto Fiorano",
    color: "Giallo Montecarlo (Triple Layer Pearl)",
    year: "2024",
    clientArea: "Star Island, Miami Beach / Brickell",
    scope: "Full-Body 10-Mil Self-Healing PPF + Dry-Ice Engine Bay Detailing + 20% IR Ceramic Glass",
    specs: {
      paintDepthBefore: "118 µm (OEM clear)",
      paintDepthAfter: "115 µm (Corrected) + 250 µm PPF",
      glossLevel: "99.2 GU",
      filmThickness: "10.0 Mil (254 µm)",
      curingCycle: "36 hrs IR Chamber"
    },
    priceUSD: 7850,
    image: "/images/ferrari-sf90-miami.jpg"
  },
  {
    id: "gt3rs",
    vehicle: "Porsche 911 GT3 RS (992)",
    color: "Guards Red with Weissach Package",
    year: "2024",
    clientArea: "Bal Harbour / Coral Gables",
    scope: "Track Armor PPF + Carbon Aerokit Wrap + 1200°C Caliper & Monoblock Rim Ceramic + Sub-Zero Underbody",
    specs: {
      paintDepthBefore: "124 µm (OEM)",
      paintDepthAfter: "122 µm + Track PPF",
      glossLevel: "98.7 GU",
      filmThickness: "10.0 Mil Impact",
      curingCycle: "24 hrs Cleanroom"
    },
    priceUSD: 6200,
    image: "/images/porsche-gt3rs-miami.jpg"
  },
  {
    id: "spectre",
    vehicle: "Rolls-Royce Spectre",
    color: "Black Diamond / Mandarin Coachline",
    year: "2025",
    clientArea: "Fisher Island / Sunny Isles",
    scope: "Satin Stealth Matte PPF Conversion + White Leather Fluoropolymer Matrix + Silent Cabin Glass",
    specs: {
      paintDepthBefore: "145 µm",
      paintDepthAfter: "144 µm + Stealth PPF",
      glossLevel: "Satin 28 GU",
      filmThickness: "10.0 Mil Satin",
      curingCycle: "48 hrs Controlled"
    },
    priceUSD: 9800,
    image: "/images/rolls-royce-spectre-miami.jpg"
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: "track-pack",
    name: "TRACK ARMOUR",
    subtitle: "High-Velocity Impact Zones",
    sportsCarUSD: 2250,
    supercarUSD: 2750,
    hypercarUSD: 3500,
    suvUSD: 2950,
    turnaround: "2 Days",
    features: [
      "Front Bumper & Lip Splitters 100% Covered",
      "Full Hood & Extended Fender Protection",
      "Wing Mirrors & Rocker Panels Shield",
      "Luggage Area & Rear Quarter Impact Flares",
      "Headlights & Carbon Intakes Protected",
      "Handover with XPEL Nationwide Warranty Certificate"
    ],
    warranty: "10-Year Written Warranty"
  },
  {
    id: "full-body-armour",
    name: "FULL BODY ARMOUR",
    subtitle: "100% Panel Edge-Wrapped Coverage",
    badge: "MOST REQUESTED IN SOUTH FLORIDA",
    sportsCarUSD: 4950,
    supercarUSD: 5500,
    hypercarUSD: 7500,
    suvUSD: 6500,
    turnaround: "4 - 5 Days",
    features: [
      "100% Painted Bodywork Wrapped & Tucked",
      "Exposed Carbon Fiber Components Armoured",
      "Zero Disassembly of Critical Sensors/Radar Housings",
      "Digital DAP Cutting with Wrapped Edge Extensions",
      "Self-Healing Activation Under Miami Sun",
      "10H Hydrophobic Top-Coat Infused",
      "Complimentary 30-Day Inspection & Wash"
    ],
    warranty: "10-Year Full Warranty"
  },
  {
    id: "ultimate-connoisseur",
    name: "APEX CONNOISSEUR",
    subtitle: "Uncompromising Bespoke Commission",
    badge: "COLLECTOR SPECIFICATION",
    sportsCarUSD: 7500,
    supercarUSD: 8500,
    hypercarUSD: 11500,
    suvUSD: 9500,
    turnaround: "6 Days",
    features: [
      "Everything in Full Body Armour Package",
      "Cryogenic Dry-Ice Sub-Zero Engine & Chassis Cleaning",
      "Florida DOT-Legal 99.8% IR Nano-Ceramic Window Tinting",
      "1200°C Thermal Ceramic on Wheels & Brake Calipers",
      "Full Cabin Aniline Leather & Alcantara Barrier",
      "DeFelsko Ultrasonic Paint Telemetry Dossier",
      "Enclosed White-Glove Supercar Hydraulic Carrier Delivery"
    ],
    warranty: "10-Year PPF + 5-Year Ceramic Master Warranty"
  }
];

export const CLIMATE_METRICS = [
  {
    metric: "+110°F",
    title: "Thermal Shock Barrier",
    detail: "Cross-linked elastomeric polyurethane maintains molecular stability without yellowing, bubbling, or edge-lifting under intense Florida asphalt temperatures."
  },
  {
    metric: "10-MIL",
    title: "Interstate Debris Defense",
    detail: "Heavy-duty 254-micron ballistic shield withstands severe high-speed gravel, tire rubber, and construction fallout on I-95 and Florida Turnpike."
  },
  {
    metric: "99.8%",
    title: "Infrared & UV Solar Rejection",
    detail: "Nano-ceramic crystal technology reflects ultraviolet and infrared radiation, preventing carbon resin oxidation and clearcoat embrittlement."
  },
  {
    metric: "115°",
    title: "Coastal Salt & Acid Barrier",
    detail: "Ultra-low surface energy repels Atlantic salt fog, heavy subtropical downpours, and corrosive lovebug acid etching before permanent bonding."
  }
];

export const FAQ_DATA = [
  {
    q: "Does PPF installation void dealer warranties with The Collection (Ferrari/Porsche), Prestige Imports (Lamborghini/Pagani), or Braman Motorcars?",
    a: "No. Our installations strictly preserve OEM warranties. We utilize factory CAD templates cut via digital DAP plotters, entirely avoiding razor cuts against paintwork and eliminating unnecessary disassembly of calibrated factory bumper clips, parking sensors, and radar arrays."
  },
  {
    q: "How does the self-healing film perform during South Florida summer heat?",
    a: "Remarkably. In ambient temperatures above 85°F, the elastomeric top-coat self-heals swirl marks and light abrasions in real time without requiring heat guns or hot water. Under direct Miami sun, minor wash scratches disappear within minutes."
  },
  {
    q: "Can you provide Florida DOT-compliant window tinting and documentation?",
    a: "Yes. Our nano-ceramic window films are 100% compliant with Florida Statute § 316.2953 regulations (available in 15%, 28%, and 30% legal light transmission). We provide official state compliance certificates with every install."
  },
  {
    q: "What makes cryogenic dry-ice detailing safer than steam or water pressure washing for exotic hybrids?",
    a: "Dry-ice pellets (-109.3°F / -78.5°C) sublimate directly from solid to gas on contact. There is zero moisture, zero electrical short risk for 400V/800V hybrid powertrains (SF90, Revuelto, 296 GTB, Artura), and zero chemical corrosion on raw magnesium or aluminum components."
  },
  {
    q: "Do you offer enclosed hydraulic vehicle transport across South Florida?",
    a: "Yes. We operate our own dedicated hydraulic enclosed low-loader transporters equipped with soft-winch air-ride systems, serving Miami-Dade, Star Island, Brickell, Bal Harbour, Palm Beach, and Naples private residences directly to our Miami Design District atelier."
  }
];

/**
 * 1-Tap SMS Link builder compatible with iOS (iMessage/SMS) and Android
 */
export function buildSMSLink(serviceName: string, vehicleModel = "", packageTier = ""): string {
  let message = `Hello APEX MIAMI (Design District Atelier),\nI would like to inquire about booking a slot for my vehicle.`;
  if (serviceName) message += `\nService: ${serviceName}`;
  if (packageTier) message += `\nPackage: ${packageTier}`;
  if (vehicleModel) message += `\nVehicle: ${vehicleModel}`;
  message += `\nPlease provide current bay availability and instant quote.`;

  return `sms:${ATELIER_INFO.smsRaw}?&body=${encodeURIComponent(message)}`;
}

export function buildGPSLink(): string {
  const message = `Hello APEX MIAMI Concierge, sending my vehicle pickup location in South Florida for enclosed hydraulic carrier intake:`;
  return `sms:${ATELIER_INFO.smsRaw}?&body=${encodeURIComponent(message)}`;
}

export function buildWhatsAppLink(serviceName: string, vehicleModel = "", packageTier = ""): string {
  let message = `Hello APEX MIAMI,\nI would like to inquire about booking a slot for my vehicle.`;
  if (serviceName) message += `\nService: ${serviceName}`;
  if (packageTier) message += `\nPackage: ${packageTier}`;
  if (vehicleModel) message += `\nVehicle: ${vehicleModel}`;
  message += `\nPlease provide bay availability and confirmation.`;

  return `https://wa.me/${ATELIER_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
