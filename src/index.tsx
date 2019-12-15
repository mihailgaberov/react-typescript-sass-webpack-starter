import "core-js";
import "regenerator-runtime/runtime";
import "../global.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import SampleComponent  from "./Component";

ReactDOM.render(
    <div>
        <SampleComponent name="World" />
    </div>,
    document.getElementById("app"),
);