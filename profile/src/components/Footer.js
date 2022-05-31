import React from 'react';
import { github, linkedIn, facebook } from './pages/images';
import { useLocation } from 'react-router';

function changeFooterHue (location) {
  if (location.hash === "") {
    return "footer-container"
  }
  if (location.hash === '#about') {
    return "footer-container"
  } 
  if (location.hash === '#portfolio') {
    return "green-hue footer-container"
  } 
  if (location.hash === '#contact') {
    return "summer-hue-footer footer-container"
  } 
  if (location.hash === '#resume') {
    return "fall-hue-footer footer-container"
  } else {
    return "foot-container"
  }
}
// {changeHeadandFoot(location)}
export default function Footer() {
  const location = useLocation();
  return (
  <div className={changeFooterHue(location)}>
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