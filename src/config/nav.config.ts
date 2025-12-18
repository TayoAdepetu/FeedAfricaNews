export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Regions",
    href: "/regions",
    children: [
      { label: "West Africa", href: "/regions/west-africa" },
      { label: "East Africa", href: "/regions/east-africa" },
      { label: "Central Africa", href: "/regions/central-africa" },
      { label: "Southern Africa", href: "/regions/southern-africa" },
      { label: "North Africa", href: "/regions/north-africa" },
      { label: "Horn of Africa", href: "/regions/horn-of-africa" },
    ],
  },
  {
    label: "Countries",
    href: "/countries",
    children: [
      { label: "Nigeria", href: "/countries/nigeria" },
      { label: "Ghana", href: "/countries/ghana" },
      { label: "Kenya", href: "/countries/kenya" },
      { label: "South Africa", href: "/countries/south-africa" },
      { label: "Ethiopia", href: "/countries/ethiopia" },
      { label: "Egypt", href: "/countries/egypt" },
      { label: "View all countries", href: "/countries" },
    ],
  },
  {
    label: "Crops",
    href: "/crops",
    children: [
      { label: "Grains & Cereals", href: "/crops/grains" },
      { label: "Legumes", href: "/crops/legumes" },
      { label: "Roots & Tubers", href: "/crops/roots-tubers" },
      { label: "Cash Crops", href: "/crops/cash-crops" },
      { label: "Fruits", href: "/crops/fruits" },
      { label: "Vegetables", href: "/crops/vegetables" },
      { label: "Spices", href: "/crops/spices" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Crop Production", href: "/sectors/crop-production" },
      { label: "Livestock", href: "/sectors/livestock" },
      { label: "Agro-processing", href: "/sectors/agro-processing" },
      { label: "Agri-inputs", href: "/sectors/agri-inputs" },
      { label: "Agri-tech", href: "/sectors/agri-tech" },
      { label: "Logistics & Storage", href: "/sectors/logistics-storage" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Commodity Prices", href: "/markets/commodity-prices" },
      { label: "Input Markets", href: "/markets/inputs" },
      { label: "Livestock Markets", href: "/markets/livestock" },
      { label: "Export Markets", href: "/markets/exports" },
      { label: "Local Markets", href: "/markets/local" },
    ],
  },
];
