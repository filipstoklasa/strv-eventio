import { useMemo } from "react";
import clsx from "clsx";
import { useEvents } from "src/api/get-events";
import { useControlsContext } from "src/context/controls-context";
import { PageLoader } from "src/components/page-loader";
import { EventCard } from "./components/event-card";
import { Controls } from "./components/controls";
import { filterPastEvents } from "./components/utils/filter-past-events";
import { filterFutureEvents } from "./components/utils/filter-future-events";
import styles from "./EventsList.module.css";

export const EventsList = () => {
  const { view, filter } = useControlsContext();
  const { data, isLoading } = useEvents();

  const filteredData = useMemo(() => {
    switch (filter) {
      case "past":
        return filterPastEvents(data);
      case "future":
        return filterFutureEvents(data);
      default:
        return data;
    }
  }, [filter, data]);

  return (
    <div className={styles.container}>
      <Controls />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <PageLoader />
        </div>
      ) : null}
      <div
        className={clsx(
          styles.listContainer,
          view === "detail" && styles.detailView
        )}
      >
        {filteredData?.map((item) => (
          <EventCard
            key={item.id}
            date={item.startsAt}
            name={item.title}
            id={item.id}
            organizer={item.owner.firstName + " " + item.owner.lastName}
            description={item.description}
            attendees={item.attendees}
            maxAttendees={item.capacity}
            ownerId={item.ownerId}
          />
        ))}
      </div>
    </div>
  );
};
