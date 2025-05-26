import { IOption } from "@/interfaces/ui";

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
    label: "All dates",
  },
  {
    value: "last5Years",
    label: "Last 5 years",
  },
  {
    value: "last10Years",
    label: "Last 10 years",
  },
  {
    value: "before2010",
    label: "Before 2010",
  },
];

export const valueOptionDate = [
  {
    value: "all",
    label: "All dates",
  },
  {
    value: "startDateAsc",
    label: "Start date (Oldest)",
  },
  {
    value: "startDateDesc",
    label: "Start date (Latest)",
  },
  {
    value: "endDateAsc",
    label: "Start date (Most recent)",
  },
  {
    value: "endDateDesc",
    label: "End date (Most recent)",
  },
  {
    value: "ongoing",
    label: "Ongoing events",
  },
  {
    value: "finished",
    label: "Finished events",
  },
];

export const valueOptionPage: IOption[] = [
  {
    value: "all",
    label: "All pages",
  },
  {
    value: "lessThan50",
    label: "Less than 50 pages",
  },
  {
    value: "50to100",
    label: "50–100 pages",
  },
  {
    value: "100to200",
    label: "100–200 pages",
  },
  {
    value: "moreThan200",
    label: "More than 200 pages",
  },
  {
    value: "noPages",
    label: "No pages defined",
  },
];
