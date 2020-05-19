import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';
import theme from './ContactsList.scss';

const propTypes = {
  contacts: PropTypes.array.isRequired
};

const ContactsList = ({ contacts }) => (
    <ul className={ theme.listContainer }>
      { contacts.map(item =>
          <Link
              key={ item.id }
              to={ `/chat/${ item.id }` }
          >
            <ContactItem fullName={ item.fullName }/>
          </Link>)
      }
    </ul>
);

ContactsList.propTypes = propTypes;

export default ContactsList;
