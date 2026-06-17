import React from "react";
import Landing from "./Pages/Landing";
import Background from "./components/Background";
import Counting from './Pages/Counting';
import { Routes, Route } from 'react-router-dom'
import Typing from "./Pages/Typing";


function App() {

  return (
    <div >
      <Background>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Counting' element={<Counting />} />
        <Route path='/Typing' element={<Typing/>}/>
      </Routes>
      </Background>
    </div>
  )
}

export default App;
