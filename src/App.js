import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [activity, setActivity] = useState("");
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  async function fetchActivity() {
  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();
  setActivity(data.activity);
  }
 async function fetchJoke() {
  const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    headers: {
      'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      'x-rapidapi-key': 'fd65be7d58msh3299c23985e12fdp192729jsn1c340856e5e8'
    }
  };
  
  axios.request(options).then(function (response) {
     setSetup(response.data.body[0].setup);
     setPunchline(response.data.body[0].punchline);
  }).catch(function (error) {
    console.error(error);
  });

  }


  useEffect(() => {
    fetchActivity();
    fetchJoke();
  }, []);

  return (
    <div className="App">
       
      <h2>Do not get bored</h2>
     <div className="contJokes">
      <h3> Choose a joke</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
      <button
          onClick={() => {
            fetchJoke();
          }}
          className="btn"
        >
          Next Joke
        </button>
        </div>
        <header className="contActivity">
       <h3>Find activity to do</h3>
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
