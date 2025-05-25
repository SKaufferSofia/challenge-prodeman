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

export const valueOptions = [
  {
    value: "Last modified",
    label: "Last modified",
  },
  {
    value: "Today",
    label: "Today",
  },
  {
    value: "This week",
    label: "This week",
  },
  {
    value: "Year 2024",
    label: "Year 2024",
  },
];

export const valueOptionDate = [
  {
    value: "startDateAsc",
    label: "Start Date (Oldest First)",
  },
  {
    value: "startDateDesc",
    label: "Start Date (Newest First)",
  },
  {
    value: "endDateAsc",
    label: "End Date (Oldest First)",
  },
  {
    value: "endDateDesc",
    label: "End Date (Newest First)",
  },
];

export const valueOptionPage = [
  {
    value: "pageCountAsc",
    label: "Fewest pages",
  },
  {
    value: "pageCountDesc",
    label: "Most pages",
  },
  {
    value: "pageCount100Plus",
    label: "100 pages or more",
  },
];
