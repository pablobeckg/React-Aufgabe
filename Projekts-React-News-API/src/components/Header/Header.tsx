import { useState } from "react";
import News from "../News/News";

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <header>
      <h1 className="Big title">Breaking News</h1>
     
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(event.target.value)
          }}
        />
        <h1>{searchInput}</h1>
        <select name="" id="">
            <option value="">Hola</option>
        </select>
        <button onClick={() => { /* No need for a button handler since searchInput change re-renders News */ }}>Search</button>
      </div>
      <hr />
      <News searchInput={searchInput} />  {/* Pass searchInput as a prop */}
    </header>
  );
};

export default Header;
