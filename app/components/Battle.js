var React = require("react");
var PropTypes = require("prop-types");

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    value = e.target.value;
    this.setState(function() {
      return {
        username: value
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="header">
          {this.props.label}
        </label>
        <input
          type="text"
          id="username"
          palceholder="github username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="button"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }

  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

    return (
      <div className="row">
        {!playerOneName && (
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={this.handleSubmit}
          />
        )}
        {!playerTwoName && (
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

module.exports = Battle;
