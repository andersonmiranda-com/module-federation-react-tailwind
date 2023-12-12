import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Footer from "./Footer";

const App = () => (
  <>
    <div className="tw2-max-w-6xl tw2-mx-auto tw2-my-10 tw2-text-xl">
      <div>Name: remote2</div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
