import React from 'react';
import Button from './Button';
import HamburgerIcon from '../images/hamburger.svg';
import Dropdown from './Dropdown';
import SVG from 'react-inlinesvg';

const Header = (props) => (
    <div className="header">
      <div className="header__content">
        <h1><SVG className="header__hamburger" src={HamburgerIcon} onClick={props.toggleMenu} />Heading</h1>
        <div className="header__buttons">
          <Button label="Button" type="primary" />
          <Button label="Button" type="secondary" />
        </div>
        <Dropdown />
      </div>
    </div>
);

export default Header;
