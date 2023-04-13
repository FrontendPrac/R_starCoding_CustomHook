import { useInput } from "./useInput";

function alertMessage(message) {
  alert(message);
}

const Input = () => {
  // Costom Hook 호출하기
  const [value, onChangeHandler, onClickHandler] = useInput("", alertMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input onChange={onChangeHandler} value={value} />
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
};

export default Input;
