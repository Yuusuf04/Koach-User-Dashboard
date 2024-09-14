import React from 'react';

function UserProfile({ user }) {
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="user-profile">
      <div className="initials-circle">{initials}</div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.email} • {user.phone}</p>
      </div>
    </div>
  );
}

export default UserProfile;