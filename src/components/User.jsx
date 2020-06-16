import React, { useState } from 'react';
import { CLICK_TO_DISPLAY_POSTS_TEXT } from '../contants';

// problem 1: fix (modify) code below to make it work
const User = ({ user }) => {
  const [isOpen, setOpen] = useState(false);

  const { name } = user;

  return (
    <li>
      {name}
      <button onClick={() => setOpen(!isOpen)}>
        {CLICK_TO_DISPLAY_POSTS_TEXT}
      </button>
      {isOpen && <span style={{ fontWeight: 'bold' }}> - show posts </span>}
    </li>
  );
};

export default User;
