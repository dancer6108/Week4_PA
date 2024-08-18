import React from 'react';
import Counter from './components/Counter';
import classes from './css/App.module.css';
import Bad from './a_bad_change_i_dont_want';

export default function App() {
  return ( 
      <div className={classes.container}>
        <Counter />
        <Bad />
      </div>
  );
};