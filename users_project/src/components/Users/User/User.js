import React from 'react';
import PropTypes from 'prop-types';

function User({ data }) {
  let {
    avatar,
    email,
    first_name,
    gender,
    id,
    ip_address,
    last_name,
    phone_number
  } = data;
  console.log(email);
  return <div></div>;
}

User.propTypes = {};

export default User;
