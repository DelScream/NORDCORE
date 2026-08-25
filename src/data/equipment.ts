export const equipmentCategories = [
  { slug: "all", label: "Все" },
  { slug: "conveyors", label: "Конвейеры" },
  { slug: "automation", label: "Автоматизация" },
  { slug: "pumps", label: "Насосное оборудование" },
  { slug: "lines", label: "Производственные линии" },
] as const;

export type EquipmentCategory = (typeof equipmentCategories)[number]["slug"];

export type EquipmentItem = {
  slug: string;
  title: string;
  category: Exclude<EquipmentCategory, "all">;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
};

export const equipment: EquipmentItem[] = [
  {
    slug: "konveyer-nk-400",
    title: "Промышленный конвейер НК-400",
    category: "conveyors",
    image: "/images/warehouse.jpg",
    specs: [
      { label: "Производительность", value: "400 ед./ч" },
      { label: "Мощность", value: "12 кВт" },
      { label: "Длина", value: "18 м" },
      { label: "Материал", value: "Сталь" },
    ],
    description:
      "Магистральный конвейер для транспортировки штучных грузов на производственных линиях. Частотное регулирование, аварийный трос, датчики схода ленты.",
  },
  {
    slug: "konveyer-nk-220",
    title: "Пластинчатый конвейер НК-220",
    category: "conveyors",
    image: "/images/assembly.jpg",
    specs: [
      { label: "Производительность", value: "220 ед./ч" },
      { label: "Мощность", value: "7,5 кВт" },
      { label: "Длина", value: "12 м" },
      { label: "Материал", value: "Сталь / нерж." },
    ],
    description:
      "Пластинчатый транспортёр для тяжёлых и горячих изделий. Секции наращиваются по трассе цеха, предусмотрены узлы перегрузки.",
  },
  {
    slug: "shkaf-asu-nk-12",
    title: "Шкаф управления АСУ НК-12",
    category: "automation",
    image: "/images/control.jpg",
    specs: [
      { label: "Каналы I/O", value: "до 256" },
      { label: "Мощность", value: "3 кВт" },
      { label: "Климат", value: "IP54" },
      { label: "Материал", value: "Сталь RAL 7035" },
    ],
    description:
      "Комплектный шкаф автоматики с промышленным контроллером, частотными преобразователями и панелью оператора. Готов к интеграции в SCADA.",
  },
  {
    slug: "scada-nk-dispatch",
    title: "Комплекс диспетчеризации НК-Dispatch",
    category: "automation",
    image: "/images/energy.jpg",
    specs: [
      { label: "Рабочие места", value: "до 8" },
      { label: "Архив", value: "24 месяца" },
      { label: "Опрос", value: "от 200 мс" },
      { label: "Протоколы", value: "Modbus / OPC UA" },
    ],
    description:
      "Программно-аппаратный комплекс для диспетчерской: мнемосхемы, тренды, аварии, отчёты смен. Поставляется с проектом привязки сигналов.",
  },
  {
    slug: "nasos-nk-p80",
    title: "Насосный агрегат НК-P80",
    category: "pumps",
    image: "/images/pipes.jpg",
    specs: [
      { label: "Подача", value: "80 м³/ч" },
      { label: "Мощность", value: "18,5 кВт" },
      { label: "Напор", value: "32 м" },
      { label: "Материал", value: "Чугун / нерж." },
    ],
    description:
      "Центробежный агрегат в комплекте с рамой, муфтой, задвижками и датчиками. Исполнение под воду, эмульсии и технологические растворы.",
  },
  {
    slug: "nasosnaya-nk-s240",
    title: "Насосная станция НК-S240",
    category: "pumps",
    image: "/images/refinery.jpg",
    specs: [
      { label: "Подача", value: "240 м³/ч" },
      { label: "Мощность", value: "75 кВт" },
      { label: "Схема", value: "2 рабочие + 1 рез." },
      { label: "Материал", value: "Сталь 12Х18Н10Т" },
    ],
    description:
      "Блочная насосная станция с каскадным управлением, учётом расхода и защитой от сухого хода. Поставка модулем или монтаж на фундаменте.",
  },
  {
    slug: "liniya-nk-l1200",
    title: "Производственная линия НК-L1200",
    category: "lines",
    image: "/images/workshop.jpg",
    specs: [
      { label: "Производительность", value: "1 200 ед./ч" },
      { label: "Мощность", value: "110 кВт" },
      { label: "Посты", value: "8–14" },
      { label: "Материал", value: "Сталь / нерж." },
    ],
    description:
      "Комплектная линия с транспортным контуром, технологическими постами и единой системой управления. Конфигурация под изделие заказчика.",
  },
  {
    slug: "liniya-nk-pack",
    title: "Участок комплектации НК-Pack",
    category: "lines",
    image: "/images/food.jpg",
    specs: [
      { label: "Производительность", value: "600 ед./ч" },
      { label: "Мощность", value: "28 кВт" },
      { label: "Длина", value: "24 м" },
      { label: "Материал", value: "AISI 304" },
    ],
    description:
      "Участок комплектации и упаковки с накопителями, весовым контролем и отбраковкой. Подходит для пищевых и сборочных производств.",
  },
];

export function getEquipment(slug: string) {
  return equipment.find((item) => item.slug === slug);
}
