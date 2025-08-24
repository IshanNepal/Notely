import  Layout  from "./Layout"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import NoNotesPages from "./Pages/NoNotesPages"


function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route index element ={<Homepage />}/>
        <Route path="/No-Notes" element ={<NoNotesPages />}/>
      </Route>
    </Routes>
  )
}

export default App
