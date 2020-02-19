import React, { useState, useEffect, useRef } from 'react';
import DropdownIcon from '../images/dropdown.svg';
import SVG from 'react-inlinesvg';

const Dropdown = (props) => {
  const [isOpen, setState] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setState(false));

  function toggle() {
    setState(!isOpen);
  }

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler]
    );
  }

  return (
    <div ref={ref} className="dropdown" onClick={toggle}>
      <SVG className="dropdown__icon" src={DropdownIcon} />
      { isOpen &&
        <div className="dropdown__content">
          <ul className="dropdown__list">
            <li className="dropdown__item">
              test1
            </li>
            <li className="dropdown__item">
              test2
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

export default Dropdown;
