import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Users.css';
import User from './User/User';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://api.myjson.com/bins/xko02')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }
  render() {
    const users = this.state.users.map(user => {
      return <User data={user} />;
    });
    return <div className='Users'>{users}</div>;
  }
}

Users.propTypes = {};

export default Users;
