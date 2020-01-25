import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Users.css';
import User from './User/User';
import ModalDelete from './ModalDelete/ModalDelete';
import ModalEdit from './ModalEdit/ModalEdit';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://api.myjson.com/bins/xko02')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  const [currentUser, setCurrentUser] = useState('');

  const [modalEditlStatus, setModalEditStatus] = useState(false);
  const handleOpenEditModal = userData => {
    setModalEditStatus(true);
    setCurrentUser(userData);
  };
  const handleCloseEditModal = () => {
    setModalEditStatus(false);
    setCurrentUser('');
  };
  const handleEditUser = userData => {
    const { id } = userData;
    const updatedUsers = users.map(user => (user.id !== id ? user : userData));
    setUsers(updatedUsers);
    setModalEditStatus(false);
  };

  const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
  const handleOpenDeleteModal = userData => {
    setModalDeleteStatus(true);
    setCurrentUser(userData);
  };
  const handleCloseDeleteModal = () => {
    setModalDeleteStatus(false);
    setCurrentUser('');
  };
  const handleDeleteUser = id => {
    let updatedUsers = users.filter(user => {
      return user.id !== id ? user : null;
    });
    setUsers(updatedUsers);
    setModalDeleteStatus(false);
    setCurrentUser('');
  };

  const usersArray = users.map(user => {
    return (
      <User
        deleteUser={handleOpenDeleteModal}
        editUser={handleOpenEditModal}
        key={user.id}
        data={user}
      />
    );
  });
  return (
    <Fragment>
      <div className='Users'>{usersArray}</div>;
      <ModalDelete
        modalStatus={modalDeleteStatus}
        hideModal={handleCloseDeleteModal}
        userData={currentUser}
        handleDeleteUser={handleDeleteUser}
      />
      <ModalEdit
        modalStatus={modalEditlStatus}
        userData={currentUser}
        hideModal={handleCloseEditModal}
        handleEditUser={handleEditUser}
      />
    </Fragment>
  );
};

export default Users;
