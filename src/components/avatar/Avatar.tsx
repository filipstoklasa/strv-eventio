import { Typography } from "src/components/typography";
import styles from "./Avatar.module.css";

interface AvatarProps {
  firstName: string;
  lastName: string;
}

export const Avatar = ({ firstName, lastName }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Typography sm="sm" weight="regular" variant="secondary">
          {firstName.at(0)?.toUpperCase()}
          {lastName.at(0)?.toUpperCase()}
        </Typography>
      </div>
      <Typography
        sm="sm"
        weight="regular"
        variant="secondary"
        className={styles.avatarName}
      >
        {firstName} {lastName}
      </Typography>
    </div>
  );
};
