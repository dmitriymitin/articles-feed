import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    console.log("test");
    dispatch(counterActions.increment());
  };

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={inc} data-testid="increment-btn">
        inc
      </Button>
      <Button onClick={dec} data-testid="decrement-btn">
        dec
      </Button>
    </div>
  );
};
