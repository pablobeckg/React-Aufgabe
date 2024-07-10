import { useState } from "react";
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div className="counter-container">
            <div className="buttons-row">
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-</button>
            </div>
            <div className="reset-row">
                <button onClick={() => setCounter(0)}>Reset</button>
            </div>
        </div>
    );
}
 
export default Counter;