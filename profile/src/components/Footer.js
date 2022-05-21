import React from 'react';
import { github, linkedIn, facebook } from './pages/images';

export default function Footer() {
  return (
  <div className='footer-container'>
    <div className='github-icon'>
      <a href={'https://github.com/RMcwey'}> <img src={github} alt='github'/>
      </a>
    </div>
    <div className='linkedin-icon'>
      <a href={'https://www.linkedin.com/in/ross-mcwey-079347168/'}> <img src={linkedIn} alt='linkedIn'/>
      </a>
    </div>
    <div className='facebook-icon'>
      <a href={'https://www.facebook.com/rmcwey'}> <img src={facebook} alt='facebook'/>
      </a>
    </div>
  </div>
  );
}