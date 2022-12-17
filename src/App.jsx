
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import {Data, Home, Profile} from './pages'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/data" element={<Data/>} />
      <Route exact path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
