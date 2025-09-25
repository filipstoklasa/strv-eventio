import { getAuthUser } from "src/utils/auth";
import { Typography } from "src/components/typography";
import style from "./Avatar.module.css";

export const Avatar = () => {
  const authUser = getAuthUser();

  if (!authUser) {
    return null;
  }

  return (
    <div className={style.avatar}>
      <Typography>{authUser.substring(0, 2).toUpperCase()}</Typography>
    </div>
  );
};
