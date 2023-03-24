import React from 'react';

function Header({texto}) {

  return (
    <div style={{
      width: '100%',
      height: '30px',
      backgroundColor: 'orange',
      color: '#444',
      textAlign: 'center',
      paddingTop: '5px'
    }}>
      {texto}
    </div>
  )
}

export default Header;