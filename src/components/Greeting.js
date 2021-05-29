import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      {" "}
      <h2>Hello World!!</h2>
      {!changedText && <Output>Great to be seeing you today...</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>ChangeText!</button>
    </div>
  );
};

export default Greeting;
