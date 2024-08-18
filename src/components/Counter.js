import React, { useState } from 'react';
import classes from '../css/Counter.module.css';

const Counter = () => {
    const [num, setNum] = useState(0);

    return (
        <div className={classes.container}>
            <h1 className={classes.counter}>{num}</h1>
            <div className={classes.button_cont}>
                <button className={classes.button} onClick={() => setNum(num + 1)}>Add 1</button>
                {num > 0 ?
                    <button className={classes.button} onClick={() => setNum(num - 1)}>Remove 1</button> :
                    <button className={classes.button_dis}>Remove 1</button>}
            </div>
        </div>
    );
};

export default Counter;