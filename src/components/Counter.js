import React, { useState } from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);

    return (
        <div>
            <h1>{num}</h1>
            <div>
                <button onClick={() => setNum(num + 1)}>++</button>
                <button onClick={() => (num > 0) ? setNum(num - 1) : null}>--</button>
            </div>
        </div>
    );
};

export default Counter;