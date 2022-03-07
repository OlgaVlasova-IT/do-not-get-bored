import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activity, setActivity] = useState("");
  async function fetchActivity() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setActivity(data.activity);
  }

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{activity}</p>
        <button
          onClick={() => {
            fetchActivity();
          }}
          className="btn"
        >
          Next activity
        </button>
      </header>
    </div>
  );
}

export default App;
