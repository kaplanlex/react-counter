import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    const handleClickM = () => {
        setCount(prevcount => prevcount - 1);

    }

    const handleClickP = () => {
        setCount(prevcount => prevcount + 1);

    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClickP}>+</button>
            <button onClick={handleClickM}>-</button>
        </>
    );
}