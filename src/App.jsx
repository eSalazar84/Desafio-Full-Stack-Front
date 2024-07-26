import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home/Home';
import NewTask from "./pages/Task/NewTask";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewTask" element={<NewTask />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
