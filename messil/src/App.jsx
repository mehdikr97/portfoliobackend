import React from 'react'
import { Afficher } from './Component/Afficher'
import Leo from './Component/Leo'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
 const App = () => {
  return (
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<Leo/>}></Route>
        <Route path='/afficher' element={<Afficher/>}></Route>
      </Routes>
    </div>
  </Router>
  )
}
export default App;