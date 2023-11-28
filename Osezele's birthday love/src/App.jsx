import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="message">
        <h1>For Osezele</h1>
        <p>
          In a world full of billions of people, I will hear you, I will choose
          you, I will love you. Our laughter, from the first time we talked,
          still echoes after 7 years of friendship, Zele. I will choose you over
          and over again.
        </p>
      </div>
      <div class="gallery">
        <a href="https://ibb.co/FwMn8w5">
          <img
            src="https://i.ibb.co/C7ZWV7b/PXL-20230916-165331181-Original.jpg"
            alt="PXL-20230916-165331181-Original"
            border="0"
          />
        </a>
        <br />
        <a href="https://ibb.co/R43mwbK">
          <img src="https://i.ibb.co/k64fCBT/IMG-7173.jpg" alt="IMG-7173" />
        </a>
        <br />
        <a href="https://ibb.co/L1tvX6z">
          <img
            src="https://i.ibb.co/GR2F4kv/IMG-0340.jpg"
            alt="IMG-0340"
            border="0"
          />
        </a>
        <a href="https://ibb.co/qjZFv9t">
          <img
            src="https://i.ibb.co/6wdJkb3/IMG-2808.jpg"
            alt="IMG-2808"
            border="0"
          />
        </a>
        <a href="https://ibb.co/30tKY0V">
          <img
            src="https://i.ibb.co/gDsYFDQ/IMG-8728.jpg"
            alt="IMG-8728"
            border="0"
          />
        </a>
        <a href="https://ibb.co/CmPG6Qv">
          <img
            src="https://i.ibb.co/zQ6vFZb/IMG-0434.jpg"
            alt="IMG-0434"
            border="0"
          />
        </a>
      </div>
    </>
  );
}

export default App;
