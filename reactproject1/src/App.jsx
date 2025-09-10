import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskButton from './taskButton.jsx';
import NoteCard from './NoteCard.jsx';
import DeleteButton from './DeleteButton.jsx';
import ChangeButton from './ChangeButton.jsx';
import ResetButton from './ResetButton.jsx';


/*
Remember, if you want to create components in the parent with other components, 
create Arrays of Object containing the props for the component you want to spawn
*/
function App() {
    const [count, setCount] = useState(0)
    const [noteCards, setCards] = useState([
        { text: "You should type something", number: 1 },
        { text: "Then press the button", number: 2 },
    ]);


  return (
      <>
      <p>This is a Glorious Godlike task manager Interface</p>
        <div className ="parent-div">
          <TaskButton setCards={setCards} noteCards={noteCards} />
              <div className="button-div">
                  <div className="parent-div">
                    <DeleteButton setCards={setCards} />
                      <ChangeButton setCards={setCards} />
                      <ResetButton setCards={setCards} />
                  </div>
                  <div className="parent-div">
                      {noteCards.map((item) => (
                          <NoteCard text={item.text} number={item.number} />
                      ))}
                  </div>

          </div>
         </div>
      <div className ="card">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
