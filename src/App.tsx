import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'

function App() {
 return (
    <>
     <BrowserRouter>
					<Routes>
							<Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Skills />} />
              <Route path="/projects" element={<Skills />} />
              <Route path="/contact" element={<Skills />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
