import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';
import theme from './ContactsList.scss';

const propTypes = {
  contacts: PropTypes.array.isRequired
};

const ContactsList = ({ contacts }) => (
    <ul className={ theme.listContainer }>
      { contacts.map(item => <ContactItem key={ item.id } fullName={ item.fullName }/>) }
    </ul>
);

ContactsList.propTypes = propTypes;

export default ContactsList;
