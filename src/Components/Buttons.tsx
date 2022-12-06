import React from "react";
import Button from "@mui/material/Button";

interface Props {
  value: "small" | "medium";
  size: "small" | "medium" | "large" | undefined;
  handleClick: Function;
}

const Buttons = ({ value, size, handleClick }: Props) => {
  return (
    <div style={{ marginLeft: "10px", marginRight: "10px" }}>
      <Button variant="outlined" size={size} onClick={() => handleClick()}>
        {value}
      </Button>
    </div>
  );
};

export default Buttons;
