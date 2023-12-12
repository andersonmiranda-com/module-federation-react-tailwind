import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import "components1/styles";
import "components2/styles";

const Header = lazy(() => import("components1/Header"));
const Footer = lazy(() => import("components2/Footer"));

const App = () => (
  <>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <div className="max-w-6xl mx-auto my-10 text-xl">
      <div>Name: container</div>
    </div>
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
