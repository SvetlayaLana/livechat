import React from 'react';
import PageLayout from 'pages/_layouts/PageLayout';
import ContactsList from 'modules/chat/components/ContactsList';
import ChatRoom from 'modules/chat/components/ChatRoom';

import theme from './ChatPage.scss';

const ChatPage = () => (
    <PageLayout>
      <div className={ theme.container }>
        <div className={ theme.contactsList }>
          <ContactsList/>
        </div>
        <div className={ theme.chatRoom }>
        </div>
      </div>
    </PageLayout>
);

export default ChatPage;
