import React from "react";
import classes from "./Item.module.scss";
import { SvgSelector } from "../../components/SvgSelector/SvgSelector";
import Checkbox from "../../components/Checkbox/Checkbox";

const Item = ({ title, task, isDone, onChange, onRemoveTodo, id }) => (
  <div className={classes.item}>
    <div className={classes.left}>
      <Checkbox
        value={isDone}
        className={classes.checkbox}
        onChange={onChange}
      />
      <div>
        <div className={classes.title}>{title}</div>
        <div
          className={
            isDone ? `${classes.task} ${classes["task-done"]}` : classes.task
          }
        >
          {task}
        </div>
      </div>
    </div>
    <button
      onClick={() => {
        onRemoveTodo(id);
      }}
    >
      <SvgSelector id="trash" />
    </button>
  </div>
);

export default Item;
