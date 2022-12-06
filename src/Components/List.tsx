import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import Buttons from "./Buttons";
import Input from "./Input";

const TodoList = () => {
  const handleClickCheckBox = (e: any) => {
    console.log(e.target);
  };
  const deleteTodo = () => {
    console.log("delete");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Checkbox defaultChecked onClick={(e) => handleClickCheckBox(e)} />
        <p>TODO TASK</p>
        <Buttons size="small" value="Delete" handleClick={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoList;
