/***
 * HMR - Hot Module Reloding
 * File Watcher Alogrithm - C++
 * Bundling
 * Minify
 * Cleaning Our Code
 * Dev abd Production Build
 * Super Fast Build Alogrithm
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatable with older version of browser
 * HTTPs on dev
 * Port Number
 * Consistent Hashing Alogrithm
 * Zero Config
 * Transitive Dependencies
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
