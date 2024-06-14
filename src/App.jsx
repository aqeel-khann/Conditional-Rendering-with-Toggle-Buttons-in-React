import { useState } from "react";
import "./App.css";

function App() {
  const [child, setChild] = useState(true);
  const [parent, setParent] = useState(true);

  function handleChild() {
    setChild(!child);
  }

  function handleParent() {
    setParent(!parent);
  }

  return (
    <>
      {parent && <Parent handleParentbtn={handleParent} />}
      {child && <Child handleChildbtn={handleChild} />}
    </>
  );
}

export default App;

const Parent = ({ handleParentbtn }) => {
  return (
    <>
      <h1>Parent</h1>
      <button onClick={handleParentbtn}>Parent</button>
    </>
  );
};

const Child = ({ handleChildbtn }) => {
  return <button onClick={handleChildbtn}>Child</button>;
};
