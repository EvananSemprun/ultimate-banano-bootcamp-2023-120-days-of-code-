import React from 'react';

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>Debe iniciar sesión para ver esta página.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDashboard;