import React from 'react';
import { ReactComponent as Facebook } from '../../svg/facebook.svg';
import { ReactComponent as Twitter } from '../../svg/twitter.svg';
import { ReactComponent as Instagram } from '../../svg/instagram.svg';

export default function Header({ logo, fbLink, twLink, igLink }) {
  return (
    <div className="Header">
      <div className="Header__red-stroke" />
      <div className="Header__black-container">
        
        <img src={logo} alt="" />

        <h2>HOME OF THE</h2>
        <h1>NEW YORK YANKEES</h1>

        <div className="Header__social-links-group">

          <a className="fbLink" href={fbLink} rel="noopener noreferrer" target="_blank">
            <Facebook />
          </a>
          <a className="twLink" href={twLink} rel="noopener noreferrer" target="_blank">
            <Twitter />
          </a>
          <a className="igLink" href={igLink} rel="noopener noreferrer" target="_blank">
            <Instagram />
          </a>

        </div>
      </div>
    </div>
  );
}
