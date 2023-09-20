import React from "react";
import { createRoot } from "react-dom/client";
import Game from './game';
const App=()=>{
    return(
        <>
        <Game/>  
        </>
    )
};
const rootElement = document.getElementById("foo"); 
//id is given as app
const root = createRoot(rootElement);
root.render(<App />);
