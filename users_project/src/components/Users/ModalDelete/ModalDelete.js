import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ModalDelete({ modalStatus, userData, handleDeleteUser, hideModal }) {
  const { avatar, first_name, id } = userData;
  return (
    <Modal show={modalStatus} onHide={hideModal} centered size='md'>
      <Modal.Header closeButton>
        <Modal.Title>
          You are about to delete - {first_name}
          <Image src={avatar} rounded />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete???</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hideModal}>
          Close
        </Button>
        <Button variant='primary' onClick={() => handleDeleteUser(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
