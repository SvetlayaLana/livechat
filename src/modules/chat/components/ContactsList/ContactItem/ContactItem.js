import React from 'react';
import getInitials from 'utils/getInitials';

import theme from './ContactItem.scss';

const ContactItem = ({ fullName }) => (
    <div className={ theme.item }>
      <div className={ theme.avatar }>
        { getInitials(fullName) }
      </div>
      <div className={ theme.fullName }>
        { fullName }
      </div>
      <div className={ theme.newMessage }>2</div>
    </div>
);

export default ContactItem;
