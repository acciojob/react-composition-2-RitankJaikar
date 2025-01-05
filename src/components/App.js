
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
        <button onClick={() => setShow(true)}>Show Modal</button>
        {show && <Modal setShow={setShow} />}
    </div>
  )
}

export default App;
