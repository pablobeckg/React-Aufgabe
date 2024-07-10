import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [faq, setFaq] = useState<boolean>(false);
  const [antwort, setAntwort] = useState<boolean>(false);

  const getFaq = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFaq(event.target.checked);
  };

  const getAntwort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAntwort(event.target.checked);
  };

  return (
    <div className="wrapper">
      <div className="check">
        <h3>Why is React great?</h3>
        <input type="checkbox" onChange={getFaq} id="faq" checked={faq} />
      </div>
      {faq && <hr />}
      <div className="antwort">
        <p>{faq && "Fast Learning Curve"}</p>
        {faq && <input type="checkbox" onChange={getAntwort} id="antwort" checked= {antwort}/>}
      </div>
      {antwort && (
        <p>
          React is very a simple and lightweight library that only deals with
          the view layer. It is not a beast like other MV* frameworks such as
          Angular or Ember. Any Javascript developer can understand the basics
          and start developing an awesome web application after only a couple of
          days reading tutorial. As the React guide says ‘Thinking in React’ may
          be a little different than you used to since it brings a new approach
          to the table, but it will become much easier and natural as you gain
          experience with it.
        </p>
      )}
    </div>
  );
};

export default FAQ;
