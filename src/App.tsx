import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddShow from './pages/AddShow'
import EditShow from './pages/EditShow'
import AddEpisode from './pages/AddEpisode'
import EditEpisode from './pages/EditEpisode'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AddShow' element={<AddShow/>}/>
        <Route path='EditShow' element={<EditShow/>}/>
        <Route path='AddEpisode' element={<AddEpisode/>}/>
        <Route path='EditEpisode' element={<EditEpisode/>}/>
      </Routes>
    </>
  )
}

export default App
