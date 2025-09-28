import { useState } from "react";
import { Input, type InputProps } from "src/components/input/Input";
import { IconButton } from "src/components/icon-button";
import IconShow from "src/assets/icons/icon-show.svg?react";

export const PasswordInput = (props: InputProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      endIcon={
        <IconButton
          onPointerDown={toggleVisibility}
          onPointerUp={toggleVisibility}
          icon={<IconShow />}
        />
      }
    />
  );
};
