export type BeforeAfterCategory =
  "fade" | "crop" | "classic" | "beard" | "suasana";

export type BeforeAfterItem = {
  id: string;
  title: string;
  categories: BeforeAfterCategory[];
  beforeImage?: string;
  afterImage: string;
};

export const beforeAfterUi = {
  beforeLabel: "Before",
  afterLabel: "After",
  allCategoriesLabel: "Semua Hasil",
  categoriesLabel: "Kategori hasil",
};

export const beforeAfterCategoryFilters: {
  key: BeforeAfterCategory;
  label: string;
}[] = [
  { key: "fade", label: "Fade & Taper" },
  { key: "crop", label: "Textured Crop" },
  { key: "classic", label: "Classic Styles" },
  { key: "beard", label: "Beard & Shave" },
  { key: "suasana", label: "Suasana" },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba-mid-fade-crop",
    title: "Mid Fade",
    categories: ["fade", "crop"],
    beforeImage: "/images/before1.avif",
    afterImage: "/images/after 1.avif",
  },
  {
    id: "ba-beard-sculpt",
    title: "Beard Grooming",
    categories: ["beard"],
    beforeImage: "/images/before2.avif",
    afterImage: "/images/after2.avif",
  },
  {
    id: "ba-classic-pompadour",
    title: "Classic Cut",
    categories: ["classic", "fade"],
    beforeImage: "/images/before3.avif",
    afterImage: "/images/after3.avif",
  },
  {
    id: "gallery-pompadour",
    title: "Pompadour",
    categories: ["classic"],
    afterImage: "/images/gallery-pompadour.jpg",
  },
  {
    id: "gallery-interior",
    title: "Area Grooming",
    categories: ["suasana"],
    afterImage: "/images/location-interior.jpg",
  },
  {
    id: "gallery-shop",
    title: "Suasana Barbershop",
    categories: ["suasana"],
    afterImage: "/images/location-shop.jpg",
  },
];
