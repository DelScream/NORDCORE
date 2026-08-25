export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://delscream.github.io/NORDCORE";

export const site = {
  name: "НОРДКОР",
  nameLatin: "NORDCORE",
  tagline: "Промышленная инженерия",
  positioning: "Инженерные решения для промышленности",
  description:
    "Проектирование, производство, модернизация и обслуживание промышленного оборудования. Инженерные решения для предприятий России.",
  phone: "+7 (495) 120-35-80",
  phoneHref: "tel:+74951203580",
  email: "info@nordcore.ru",
  salesEmail: "sales@nordcore.ru",
  techEmail: "engineering@nordcore.ru",
  serviceEmail: "service@nordcore.ru",
  address: "Москва, ул. Инженерная, 12, стр. 3",
  hours: "Пн–Пт 09:00–19:00, сервис 24/7",
} as const;

export const stats = [
  { value: 15, suffix: "+", label: "лет опыта" },
  { value: 120, suffix: "+", label: "реализованных проектов" },
  { value: 35, suffix: "", label: "регионов России" },
] as const;

export const aboutStats = [
  { value: 15, suffix: "+", label: "лет опыта" },
  { value: 120, suffix: "+", label: "проектов" },
  { value: 35, suffix: "", label: "регионов" },
  { value: 24, suffix: "/7", label: "техническая поддержка" },
] as const;

export const nav = [
  { href: "/proekty", label: "Проекты" },
  { href: "/oborudovanie", label: "Оборудование" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
] as const;

export const footerNav = {
  company: [
    { href: "/o-kompanii", label: "О компании" },
    { href: "/proekty", label: "Проекты" },
    { href: "/o-kompanii#komanda", label: "Команда" },
    { href: "/o-kompanii#sertifikaty", label: "Сертификаты" },
    { href: "/o-kompanii#partnery", label: "Партнёры" },
    { href: "/kontakty", label: "Контакты" },
  ],
  solutions: [
    { href: "/#uslugi", label: "Проектирование" },
    { href: "/#uslugi", label: "Производство" },
    { href: "/#uslugi", label: "Автоматизация" },
    { href: "/#uslugi", label: "Модернизация" },
    { href: "/#uslugi", label: "Сервис" },
  ],
} as const;

export const departments = [
  { name: "Отдел продаж", phone: "+7 (495) 120-35-81", email: "sales@nordcore.ru" },
  { name: "Технический отдел", phone: "+7 (495) 120-35-82", email: "engineering@nordcore.ru" },
  { name: "Сервисная служба", phone: "+7 (495) 120-35-83", email: "service@nordcore.ru" },
] as const;

export const developer = {
  name: "Валерий Гацкан",
  handle: "@DelScream",
  links: [
    { label: "VK", href: "https://vk.com/delscream" },
    { label: "Telegram", href: "https://t.me/delscream" },
    { label: "GitHub", href: "https://github.com/DelScream" },
  ],
} as const;

export const cities = [
  "Москва",
  "Санкт-Петербург",
  "Казань",
  "Екатеринбург",
  "Новосибирск",
  "Челябинск",
  "Нижний Новгород",
  "Самара",
  "Уфа",
  "Красноярск",
  "Пермь",
  "Воронеж",
  "Краснодар",
  "Ростов-на-Дону",
  "Тюмень",
] as const;
