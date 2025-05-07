import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import UserCropView from './UserCropView';
import './User.css';
function User() {
  return (
    <div>
      <nav className="user-nav">
        <ul>
          <li>
            <Link to="/insurance">Insurance</Link><br/>
            <Link to="/Bid">Bidding</Link>
          </li>
        </ul>
      </nav>
      <UserForm />
      <UserCropView />
    </div>
  );
}

export default User;
