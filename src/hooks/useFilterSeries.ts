import { ISeriesFront } from "@/interfaces/data";
import { useEffect, useState } from "react";

const useFilterSeries = () => {
  const [eventFilter, setEventFilter] = useState("all");

  function filterEventsByDate(event: ISeriesFront, filter: string): boolean {
    const startDate = new Date(event.startYear);
    const endDate = new Date(event.endYear);
    const now = new Date();

    switch (filter) {
      case "ongoing":
        return startDate <= now && endDate >= now;
      case "finished":
        return endDate < now;
      default:
        return true;
    }
  }

  function sortEventsByDate(events: ISeriesFront[], filter: string) {
    const sorted = [...events];

    switch (filter) {
      case "startDateAsc":
        return sorted.sort(
          (a, b) =>
            new Date(a.startYear).getTime() - new Date(b.startYear).getTime()
        );
      case "startDateDesc":
        return sorted.sort(
          (a, b) =>
            new Date(b.startYear).getTime() - new Date(a.startYear).getTime()
        );
      case "endDateAsc":
        return sorted.sort(
          (a, b) =>
            new Date(a.endYear).getTime() - new Date(b.endYear).getTime()
        );
      case "endDateDesc":
        return sorted.sort(
          (a, b) =>
            new Date(b.endYear).getTime() - new Date(a.endYear).getTime()
        );
      default:
        return sorted;
    }
  }

  const filteredEventsDate = (events: ISeriesFront[]) => {
    const filtered = events.filter((event) => {
      const matchesFilter =
        eventFilter === "all" ||
        (eventFilter === "ongoing" || eventFilter === "finished"
          ? filterEventsByDate(event, eventFilter)
          : true);
      return matchesFilter;
    });

    return sortEventsByDate(filtered, eventFilter);
  };

  useEffect(() => {
    const eventFilter = localStorage.getItem("eventFilter");
    if (eventFilter) {
      setEventFilter(eventFilter);
    }
  }, []);

  const handleChangeEventFilter = (eventFilter: string) => {
    localStorage.setItem("eventFilter", eventFilter);
    setEventFilter(eventFilter);
  };

  return {
    eventFilter,
    handleChangeEventFilter,
    filteredEventsDate,
  };
};

export default useFilterSeries;
