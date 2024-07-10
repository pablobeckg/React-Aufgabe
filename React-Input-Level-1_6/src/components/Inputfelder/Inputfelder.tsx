import { useState } from "react";
import './Inputfelser.css'

const Inputfelder = () => {

    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const getVorname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVorname(event.target.value);
    };
    const getNachname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNachname(event.target.value);
    };
    const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <input type="text" className=".child1" onChange={getVorname} placeholder="Vorname" value={vorname}/>
            <p>{vorname}</p>
            <input type="text" className=".child3" onChange={getNachname} placeholder="Nachname" value={nachname}/>
            <p>{nachname}</p>
            <input type="text" className=".child5" onChange={getEmail} placeholder="Nachname" value={email}/>
            <p>{email}</p>
        </div>
    );
}
 
export default Inputfelder;