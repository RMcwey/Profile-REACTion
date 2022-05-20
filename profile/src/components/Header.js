import React from 'react';

export default function Header() {
  return (
<header>
  <h1 style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>Ross'React Portfolio</h1>
</header>
  );
}