"use client";

import { useState } from "react";
import { equipment, equipmentCategories, type EquipmentCategory } from "@/data/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import styles from "./EquipmentCatalog.module.css";

export function EquipmentCatalog() {
  const [filter, setFilter] = useState<EquipmentCategory>("all");
  const items =
    filter === "all" ? equipment : equipment.filter((item) => item.category === filter);

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Категории оборудования">
        {equipmentCategories.map((category) => (
          <button
            key={category.slug}
            role="tab"
            aria-selected={filter === category.slug}
            className={filter === category.slug ? styles.active : ""}
            onClick={() => setFilter(category.slug)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <EquipmentCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
