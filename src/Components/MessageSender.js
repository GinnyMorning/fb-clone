import { Avatar } from '@material-ui/core';
import React from 'react';
import './Style/MessageSender.css';

const MessageSender = () => (
  <div className="messageSender">
    <div className="messageSender_top">
      <Avatar />
        <form>
            <input
                placeholder={`What is on your mind`}
            />
            <input/>
        </form>
    </div>
    <div className="messageSender_bottom">

    </div>
  </div>
);

export default MessageSender;
