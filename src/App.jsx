import React from "react";
import Landing from "./Pages/Landing";
import Background from "./components/Background";
import Counting from './Pages/Counting';
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div >
      <Background>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Counting' element={<Counting />} />
      </Routes>
      </Background>
    </div>
  )
}

export default App;
