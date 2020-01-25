import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ data, deleteUser }) {
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

  return (
    <div className='User'>
      <div>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='User_name'>{first_name}</div>
      <div>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
      <div>{email}</div>
      <div>{phone_number}</div>
      <div>
        <button>Edit</button>
      </div>
    </div>
  );
}

User.propTypes = {};

export default User;
