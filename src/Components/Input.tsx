import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  inputValue?: string;
  inputSize: "small" | "medium" | undefined;
}

const Input = ({ inputValue, inputSize }: Props) => {
  const [input, setInput] = useState(inputValue);

  const handleInput = (e: string) => {
    setInput(e);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        onChange={(e) => handleInput(e.target.value)}
        size={inputSize}
        value={input}
      />
    </div>
  );
};

export default Input;
