import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.css"


function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  function increaseCount() {
    dispatch({ type: "INCREASE_COUNT", payload: 1 })
  }

  function decreaseCount() {
    dispatch({ type: "DECREASE_COUNT", payload: 1 })
  }

  function removeCount() {
    dispatch({ type: "REMOVE_COUNT", payload: count })
  }



  return (
    <div className={"app"}>
      <h1>Это счётчик: {count}</h1>
      <button className={"btn"} onClick={() => increaseCount()}>Увеличить</button>
      <button className={"btn"} onClick={() => decreaseCount()}>Уменьшить</button>
      <button className={"btn"} onClick={() => removeCount()}>Обнулить</button>
    </div >
  );
}

export default App;