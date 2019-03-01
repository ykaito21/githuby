var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");

class App extends React.Component {
  render() {
    return <h1>hello world</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
