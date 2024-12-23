"use client";
import { useState } from "react"

export const ExampleComponent = ({
  className
}: {
  className?: string
}) => {
  const [num, setNum] = useState(0);

  const clicked = () => {
    setNum(num => num + 1);
  };

  return (
    <button onClick={clicked} className={className}>Number is {num}</button>
  )
}