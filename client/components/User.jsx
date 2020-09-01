import React from 'React';

const User = props => {
  const username = { firstName: 'Richard', lastName: 'Montgomery' };
  const getInitials = obj => {
    let initials = '';
    for (let name in obj) {
      initials += obj[name][0];
    }
    return initials;
  };

  return (
    <div className="user-container">
      <div className="username">
        {username.firstName} {username.lastName}
      </div>
      <div className="initial-circle">
        <div className="initials">{getInitials(username)}</div>
      </div>
    </div>
  );
};

export default User;
