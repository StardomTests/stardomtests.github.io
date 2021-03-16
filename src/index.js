import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister as unregisterServiceWorker } from './registerServiceWorker'

unregisterServiceWorker();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
