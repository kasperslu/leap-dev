import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.svg';
import HomeIcon from '../images/home.svg';
import HelpIcon from '../images/help.svg';
import SVG from 'react-inlinesvg';

const Navigation = (props) => (
  <div className="navigation">
    <div className="navigation__logo">
      <SVG src={Logo} />
    </div>
    <div className="navigation__links">
      <div className="navigation__main">
        <NavLink exact className="navigation__link" activeClassName="navigation__link--active" to="/" onClick={props.toggleMenu}>
          <SVG src={HomeIcon} />Home
        </NavLink>
        <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/test1" onClick={props.toggleMenu}>
          <SVG src={HelpIcon} />Test1
        </NavLink>
        <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/test2" onClick={props.toggleMenu}>
          <SVG src={HelpIcon} />Test2
        </NavLink>
        <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/test3" onClick={props.toggleMenu}>
          <SVG src={HelpIcon} />Test3
        </NavLink>
        <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/test4" onClick={props.toggleMenu}>
          <SVG src={HelpIcon} />Test4
        </NavLink>
      </div>
      <div className="navigation__bottom">
        <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/test5" onClick={props.toggleMenu}>
          <SVG src={HelpIcon} />Test5
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navigation;
