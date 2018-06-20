import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = { 
      username: undefined 
    };
  }

  componentWillMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="greeting">
        { username ? this.renderGreeting(username) : this.renderError() }
      </div>
    );
  }

  renderGreeting(username) {
    return (
      <div className="content">
        <h1>Hello {username}!</h1>
        <h2>This is the Home Page</h2>
      </div>
    );
  }

  renderError() {
    return (
      <div className="error">
        <h1>No content to display</h1>
      </div>
    );
  }
}

export default Home;