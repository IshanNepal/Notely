import  Layout  from "./Layout"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"


function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route index element ={<Homepage />}/>
      </Route>
    </Routes>
  )
}

export default App
