import React from "react";
import { useSelector } from "react-redux";

export default function Checkredux() {
  let count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h4>ckeck redux :{count}</h4>
    </div>
  );
}
