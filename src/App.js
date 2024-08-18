import React from 'react';
import Counter from './components/Counter';
import classes from './css/App.module.css';

export default function App() {
  return ( 
      <div className={classes.container}>
        <Counter />
      </div>
  );
};