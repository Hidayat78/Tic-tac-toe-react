import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INC</button>
      {Math.max(0, count)}
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
};

export default Count;
