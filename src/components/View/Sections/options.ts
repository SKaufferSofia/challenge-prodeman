import { IOption } from "@/components/UI/Select";

export const limitOptions: IOption[] = [
  {
    value: " 16",
    label: "16",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "48",
    label: "48",
  },
  {
    value: "64",
    label: "64",
  },
  {
    value: "80",
    label: "80",
  },
];

export const categories = [
  {
    id: 1,
    name: "characters",
  },

  {
    id: 2,
    name: "comics",
  },

  {
    id: 3,
    name: "series",
  },
];

export const valueOptions: IOption[] = [
  {
    value: "all",
    label: "Todas las fechas",
  },
  {
    value: "last5Years",
    label: "Últimos 5 años",
  },
  {
    value: "last10Years",
    label: "Últimos 10 años",
  },
  {
    value: "before2010",
    label: "Antes de 2010",
  },
];

export const valueOptionDate = [
  {
    value: "all",
    label: "Todas las fechas",
  },
  {
    value: "startDateAsc",
    label: "Fecha inicio (Más antigua)",
  },
  {
    value: "startDateDesc",
    label: "Fecha inicio (Más reciente)",
  },
  {
    value: "endDateAsc",
    label: "Fecha fin (Más antigua)",
  },
  {
    value: "endDateDesc",
    label: "Fecha fin (Más reciente)",
  },
  {
    value: "ongoing",
    label: "Eventos en curso",
  },
  {
    value: "finished",
    label: "Eventos finalizados",
  },
];

export const valueOptionPage = [
  {
    value: "all",
    label: "Todas las páginas",
  },
  {
    value: "lessThan50",
    label: "Menos de 50 páginas",
  },
  {
    value: "50to100",
    label: "50-100 páginas",
  },
  {
    value: "100to200",
    label: "100-200 páginas",
  },
  {
    value: "moreThan200",
    label: "Más de 200 páginas",
  },
  {
    value: "noPages",
    label: "Sin páginas definidas",
  },
];
