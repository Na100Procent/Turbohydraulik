export interface City {
  id: number;
  slug: string;
  name: string;
}

export interface District {
  id: number;
  name: string;
  slug: string;
  cityId: number;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
}

export const cities: City[] = [
  { id: 0, name: "Home", slug: "home" },
  { id: 1, name: "Warszawa", slug: "warszawa" },
  { id: 2, name: "Kraków", slug: "krakow" },
];
export const districts: District[] = [
  { id: 0, name: "Bemowo", cityId: 1, slug: "bemowo" },
  { id: 1, name: "Huta", cityId: 2, slug: "huta" },
  { id: 2, name: "Mokotow", cityId: 1, slug: "mokotow" },
  { id: 2, name: "Stare Miasto", cityId: 2, slug: "stare_miasto" },
];

export const services: Service[] = [
  { id: 1, name: "Zmywanie kranu", slug: "zmywanie_kranu" },
  { id: 2, name: "Montaź Łazienki", slug: "montaz_lazienki" },
  { id: 3, name: "Naprawa", slug: "naprawa" },
];

export const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building server-side rendered applications.",
  },
  {
    question: "Can I cancel my plumber appointment?",
    answer:
      "Next.js is a React framework for bujs is a React framework for  js is a React framework for ilding server-side rendered applications.",
  },
  {
    question: "What is Turbo Plumber?",
    answer:
      "Next.js is a React framjs is a React framework for ework for building server-side rendered applications.",
  },
  {
    question: "How do I install Next.js?",
    answer:
      "js is a React framework for You can install Next.js by running npm install next react react-dom.",
  },
];
