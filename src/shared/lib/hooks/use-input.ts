import { useState, ChangeEvent } from "react";

type UseInputReturn = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  setValue: (val: string) => void;
};

export const useInput = (initialValue = ""): UseInputReturn => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    onChange,
    reset,
    setValue,
  };
};
