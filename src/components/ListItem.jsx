import React from 'react';
import HelpIcon from '../images/help.svg';
import SVG from 'react-inlinesvg';
import Dropdown from './Dropdown';

const ListItem = (props) => {
  return (
    <div className="listItem">
      <div className="listItem__icon">
        <SVG src={HelpIcon} />
      </div>
      <div className="listItem__content">
        <div className="listItem__details">
          <div className="listItem__description">
            {props.description}
          </div>
          <div className="listItem__subtitle">
            {props.subtitle}
          </div>
        </div>
        <div className="listItem__actions">
          <div className="listItem__label">
          {props.label}
          </div>
          <div className="listItem__dropdown">
            <Dropdown position="left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
