import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";

const App = () => (
  <>
    <Header />
    <div className="tw1-max-w-6xl tw1-mx-auto tw1-mt-10 tw1-text-xl">
      <div>Name: remote1</div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
