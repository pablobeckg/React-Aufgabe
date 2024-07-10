import { useState } from "react";
import'./Day-Night-Shalter.css'

const DayNightShalter = () => {
const [shalter, setShalter] = useState<boolean>(false);
    
    return (
        <div className={`${shalter && "dark"}`}>
            {shalter ? <h1>Night</h1> : <h1>Day</h1>}
            <button onClick={() => setShalter((shalter) => !shalter)}>change to night</button>
        </div>
    );
}
 
export default DayNightShalter;