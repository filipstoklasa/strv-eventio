import { FilterSelect } from "./components/filter-select";
import { ViewSelect } from "./components/view-select";
import styles from "./Controls.module.css";

export const Controls = () => {
  return (
    <div className={styles.container}>
      <FilterSelect />
      <ViewSelect />
    </div>
  );
};
