import  Layout  from "./Layout"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import NoNotesPages from "./Pages/NoNotesPages"
import CreateNotePage from "./Pages/CreateNotePage"


function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route index element ={<Homepage />}/>
        <Route path="/No-Notes" element ={<NoNotesPages />}/>
        <Route path="/Create-Note" element ={<CreateNotePage />}/>
      </Route>
    </Routes>
  )
}

export default App
