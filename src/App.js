import React from 'react';
import './App.css';
import AddTask from "./components/AddTask/AddTask";
import ListTask from "./components/ListTask/ListTask";
import {FilterBar} from "./components/FilterBar/FilterBar";

function App() {
  return (
    <div className="App">
        <div className='actions'>
            <AddTask/>
            <FilterBar/>
        </div>
        <ListTask />

    </div>
  );
}

export default App;
