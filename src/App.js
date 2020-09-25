import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import ModalCustom from "./ModalCustom";
import Texto from "./Texto";

const App = () => {
  const handleScroll = (e) => {
    // e.stopPropagation();
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    console.log(scrollHeight, scrollTop, clientHeight);
    console.log(scrollHeight - scrollTop === clientHeight);
  };
  // <ModalCustom />
  return (
    <div
      className="App"
      onScroll={(e) => {
        // e.stopPropagation();
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        console.log(scrollHeight, scrollTop, clientHeight);
        console.log(scrollHeight - scrollTop === clientHeight);
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Texto />
    </div>
  );
};

export default App;
