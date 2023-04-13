import { useState } from "react";

export function useInput(initialValue, submitAction) {
  // 상태관리 로직
  const [value, setValue] = useState(initialValue);

  // 상태관리 로직
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  // 알림창 로직
  const onClickHandler = () => {
    setValue("");
    submitAction(value);
  };

  return [value, onChangeHandler, onClickHandler];
}
