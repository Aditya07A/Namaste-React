import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Namaste React"
// );
// console.log(heading);

//jsx(transpiled before it reaches the Js) - Parcel - Babel
// Jsx => React.createElement => ReactElement - Js object =>HTMLElement(render)

//React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React jsx Elememt 🚀
  </h1>
);
// console.log(jsxHeading);
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React🚀
  </h1>
);

//React Functional Component
//component composition
const HeadingComponent = () => (
  <div id="container">
    {/* jsx Element inside component */}
    {jsxHeading}
    <Title />
    <h1 className="heading">Namaste React from Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
