import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import Button from 'react-bootstrap/Button';

function User({ data, deleteUser, editUser }) {
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
        <Button onClick={() => deleteUser(data)}>Delete</Button>
      </div>
      <div>{email}</div>
      <div>{phone_number}</div>
      <div>
        <Button variant='warning' onClick={() => editUser(data)}>
          Edit
        </Button>
      </div>
    </div>
  );
}

User.propTypes = {};

export default User;
