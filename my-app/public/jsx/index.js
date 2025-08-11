const Rchld = ({ v1, v2 }) => {  // Destructure props correctly
  console.log(v1);
  return React.createElement("p", null, v1);
};

const Subcomponent = () => {
  return React.createElement("div", null, [
    React.createElement(Rchld, { v1: "Hello, World!" ,v2: "world" }),
    React.createElement(Rchld, { v1: "Hello, World! 2." }),
  ]);
};

const App = () => {
  return React.createElement(Subcomponent);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));