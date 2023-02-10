import React from "react"; //import React library on page
import { ReactDOM } from "react"; //import library for rendering a code on browser
//importing a file from another page
import am from "./App";
//let el = <h1>Hello Daksh It is your first React Project</h1>
let el1 = React.createElement("h1",null,"Daksh Kesarwani");

ReactDOM.render(el1, document.getElementById("root"));
ReactDOM.render(am , document.getElementById("num"));