import { useEffect, useRef, useState } from "react";

import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  product,
  value = 0,
  initialValues,
  onChange,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      Boolean(initialValues?.count) && initialValues?.maxCount === counter,
    reset,
  };
};
