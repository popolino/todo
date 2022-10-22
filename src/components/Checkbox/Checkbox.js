import React from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const Checkbox = ({ value, className, onChange }) => (
  <button className={className} onClick={onChange}>
    <SvgSelector id={value ? "checkboxChecked" : "checkboxUnchecked"} />
  </button>
);

export default Checkbox;
