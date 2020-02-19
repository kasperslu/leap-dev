import React from 'react';
import Header from './Header';

const Section = ({ children, title, className }) => (
    <div className={`section section--${className}`}>
      <div className="section__title">
        {title}
      </div>
      <div className={`section__content section__content--${className}`}>
        {children}
      </div>
    </div>
);

export default Section;
