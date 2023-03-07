import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ["Dimych", "Sveta", "Katya", "Victor", "Ignat"]
    const users = [{id: 1,name:"Dimych"}, {id: 121,name:"Sveta"}, {id: 12123,name:"Katya"}, {id: 2323,name:"Victor"}, {id: 99,name:"Ignat"}]
    // const liElements = names.map(n => <li>{n}</li>)
    const liElements = users.map( (u) => <div key={u.id}><li>{u.name}</li></div>)
    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
