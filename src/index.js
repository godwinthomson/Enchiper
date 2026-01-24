import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Task1 from "./component/Task1";
import Task2 from "./component/Task2";
import Task3 from "./component/Task3";
import Task4 from "./component/Task4";
import Task5 from "./component/Task5";
import Task6 from "./component/Task6";
import Task7 from "./component/Task7";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
    <Task5 />
    <Task6 />
    <Task7 />
  </React.StrictMode>
);