var React = require("react");

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All"
    };
    this.handleLang = this.handleLang.bind(this);
  }

  handleLang(lang) {
    this.setState(function() {
      return {
        selectedLang: lang
      };
    });
  }
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map(function(item) {
          return (
            <li
              key={item}
              onClick={this.handleLang.bind(null, item)}
              style={
                item === this.state.selectedLang ? { color: "#d0021b" } : null
              }
            >
              {item}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

module.exports = Popular;
