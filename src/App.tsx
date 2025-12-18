import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'

function App() {
 return (
    <>
     <BrowserRouter>
					<Routes>
							<Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
