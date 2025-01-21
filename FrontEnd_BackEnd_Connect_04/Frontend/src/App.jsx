
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]) ;
  const fetchJokes = async () => { 
    const response = await fetch('/api/jokes');
    // if no Proxy is used then fetch :  http://localhost:4000/api/jokes
    const data = await response.json();
    console.log(data);
    setJokes(data);
  }
  useEffect(() => {
    fetchJokes();
  } , [])
  return (
    <>
     <h1>jokes display</h1>
      {
        jokes.map((joke) => {
          return <p key={joke.id}>{joke.joke}</p>
        })
      }
    </>
  )
}

export default App
