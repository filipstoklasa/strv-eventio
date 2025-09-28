import type { ChangeEvent } from "react";
import { Typography } from "src/components/typography";
import { useControlsContext, type Filter } from "src/context/controls-context";
import styles from "./FilterSelect.module.css";

export const FilterSelect = () => {
  const { filter, setFilter } = useControlsContext();

  const onSelectFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as Filter);
  };

  return (
    <>
      <div className={styles.mobileFilterContainer}>
        <Typography
          className={styles.filterLabel}
          sm="xs"
          variant="secondary"
          weight="bold"
        >
          SHOW:
        </Typography>
        <select
          name="filter-select"
          className={styles.filterSelect}
          value={filter}
          onChange={onSelectFilter}
        >
          <option value="all">ALL EVENTS</option>
          <option value="future">FUTURE EVENTS</option>
          <option value="past">PAST EVENTS</option>
        </select>
      </div>
      <div className={styles.desktopFilterContainer}>
        <Typography
          as="button"
          className={styles.filterLabel}
          sm="xs"
          variant={filter === "all" ? "main" : "secondary"}
          weight="bold"
          onClick={() => setFilter("all")}
        >
          ALL EVENTS
        </Typography>
        <Typography
          as="button"
          type="button"
          className={styles.filterLabel}
          sm="xs"
          variant={filter === "future" ? "main" : "secondary"}
          weight="bold"
          onClick={() => setFilter("future")}
        >
          FUTURE EVENTS
        </Typography>
        <Typography
          className={styles.filterLabel}
          as="button"
          sm="xs"
          variant={filter === "past" ? "main" : "secondary"}
          weight="bold"
          onClick={() => setFilter("past")}
        >
          PAST EVENTS
        </Typography>
      </div>
    </>
  );
};
