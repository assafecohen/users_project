import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PageNotFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div className='PageNotFound'>
        <h2>404</h2>
        <div>
          Click here to return home page! -{' '}
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
      </div>
    );
  }
}

PageNotFound.propTypes = {};

export default PageNotFound;
