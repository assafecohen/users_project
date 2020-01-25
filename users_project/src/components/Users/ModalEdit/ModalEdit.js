import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ModalEdit({ modalStatus, userData, handleEditUser, hideModal }) {
  const { avatar, first_name, phone_number, email, id } = userData;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailForm, setEmail] = useState('');
  const updatedData = {
    ...userData,
    avatar,
    first_name: firstName,
    phone_number: phoneNumber,
    email: emailForm
  };

  useEffect(() => {
    if (modalStatus) {
      setPhoneNumber(phone_number);
      setFirstName(first_name);
      setEmail(email);
    } else {
      setPhoneNumber('');
      setFirstName('');
      setEmail('');
    }
  }, [modalStatus]);
  return (
    <Modal show={modalStatus} onHide={hideModal} centered size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>
          EDIT - {first_name}
          <Image src={avatar} rounded />
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={emailForm}
          onChange={e => setEmail(e.target.value)}
        />

        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='tel'
          placeholder='Phone'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideModal}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handleEditUser(updatedData)}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalEdit;
