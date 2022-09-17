import React from 'react';
import { useState } from 'react';
import "./App.css";

const App = () =>{

    const [bg, setBg] = useState("#8e44ad");
    const[name, setName] = useState("Clicked");
    const bgChange =() => {
        let newBg = '#31495e';
        setBg(newBg);
        setName("Ouch!!");
    }
    const bgBack =() =>{
        let newBg = '#ecf0f1';
        setBg(newBg);
        setName("Woow!!");
    }

    return(
        <>
        <div style={{ backgroundColor : bg }}>
            <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
        </div>
        </>
    );
}

export default App;