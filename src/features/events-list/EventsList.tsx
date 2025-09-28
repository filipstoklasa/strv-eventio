import { useEvents } from "src/api/get-events";
import { EventCard } from "./components/event-card";
import clsx from "clsx";
import styles from "./EventsList.module.css";
import { Controls } from "./components/controls";
import { useControls } from "./components/controls/context";
import { useMemo } from "react";
import { filterPastEvents } from "./components/utils/filter-past-events";
import { filterFutureEvents } from "./components/utils/filter-future-events";
import { PageLoader } from "src/components/page-loader";

export const EventsList = () => {
  const { view, filter } = useControls();
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
