"use client";
import { useState } from "react";

const categories = ["personajes", "comics", "eventos"];

export default function CategoryFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("personajes");
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("");

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchTerm("");
    setOrder("");
    onFilterChange({ category: cat, search: "", order: "" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ category: selectedCategory, search: value, order });
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOrder(value);
    onFilterChange({
      category: selectedCategory,
      search: searchTerm,
      order: value,
    });
  };

  const renderFilters = () => {
    switch (selectedCategory) {
      case "personajes":
        return (
          <>
            <input
              type="text"
              placeholder="Buscar personaje"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border px-3 py-2 rounded-md"
            />
            <select
              onChange={handleOrderChange}
              value={order}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Ordenar por</option>
              <option value="name">Nombre</option>
              <option value="-modified">Última modificación</option>
            </select>
          </>
        );
      case "comics":
        return (
          <>
            <input
              type="text"
              placeholder="Buscar cómic"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border px-3 py-2 rounded-md"
            />
            <select
              onChange={handleOrderChange}
              value={order}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Ordenar por</option>
              <option value="title">Título</option>
              <option value="-onsaleDate">Fecha de venta (desc)</option>
            </select>
          </>
        );
      case "eventos":
        return (
          <>
            <input
              type="text"
              placeholder="Buscar evento"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border px-3 py-2 rounded-md"
            />
            <select
              onChange={handleOrderChange}
              value={order}
              className="border px-3 py-2 rounded-md"
            >
              <option value="">Ordenar por</option>
              <option value="name">Nombre</option>
              <option value="-startDate">Fecha (desc)</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-6">
      {/* Tabs de categorías */}
      <div className="flex gap-4 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-bold uppercase transition ${
              selectedCategory === cat ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtros dinámicos */}
      <div className="flex gap-4 items-center">{renderFilters()}</div>
    </div>
  );
}
