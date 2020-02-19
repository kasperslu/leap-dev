import React from 'react';

const Tile = (props) => (
    <div className="tile">
      <div className="tile__content">
        <div className="tile__description">
          {props.content}
        </div>
        <div className="tile__date">
          {props.date}
        </div>
      </div>
    </div>
);

export default Tile;
