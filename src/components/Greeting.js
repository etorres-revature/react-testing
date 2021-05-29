import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      {" "}
      <h2>Hello World!!</h2>
      {!changedText && <p>Great to be seeing you today...</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>ChangeText!</button>
    </div>
  );
};

export default Greeting;
