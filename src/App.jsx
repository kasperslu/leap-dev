import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Home from './components/Home';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Header from './components/Header';
import Navigation from './components/Navigation';
import {
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const [isOpen, setState] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setState(false));

  function toggle() {
    setState(!isOpen);
    console.log(isOpen);
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
    <div className="app">
      <div ref={ref} className={`app__navigation ${isOpen ? 'app__navigation--mobile' : ''}`}>
        <Navigation toggleMenu={toggle} />
      </div>
      <div className={`app__content ${isOpen ? 'app__content--mobile' : ''}`}>
        <Header toggleMenu={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
          <Route path="/test4" component={Test4} />
          <Route path="/test5" component={Test5} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
