import IconGrid from "src/assets/icon-grid.svg?react";
import IconList from "src/assets/icon-list.svg?react";
import { useControls } from "./context";
import styles from "./Controls.module.css";
import clsx from "clsx";
import { IconButton } from "src/components/icon-button";
import { FilterSelect } from "./components/filter-select/FilterSelect";

export const Controls = () => {
  const { view, setView } = useControls();

  return (
    <div className={styles.container}>
      <FilterSelect />
      <div className={styles.viewContainer}>
        <IconButton
          icon={
            <IconGrid
              className={clsx(
                styles.viewIcon,
                view === "detail" && styles.active
              )}
            />
          }
          onClick={() => setView("detail")}
        />
        <IconButton
          icon={
            <IconList
              className={clsx(
                styles.viewIcon,
                view === "compact" && styles.active
              )}
            />
          }
          onClick={() => setView("compact")}
        />
      </div>
    </div>
  );
};
