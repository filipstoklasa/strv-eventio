import clsx from "clsx";
import { IconButton } from "src/components/icon-button";
import IconGrid from "src/assets/icons/icon-grid.svg?react";
import IconList from "src/assets/icons/icon-list.svg?react";
import { useControlsContext } from "src/context/controls-context";
import styles from "./ViewSelect.module.css";

export const ViewSelect = () => {
  const { view, setView } = useControlsContext();

  return (
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
  );
};
