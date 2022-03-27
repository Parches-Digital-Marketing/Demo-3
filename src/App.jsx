import Navbar from "./components/Navbar"
import Intro from "./sections/Intro"
import About from "./sections/About"
import Membership from "./sections/Membership"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Intro />
        <About />
        <Membership />
        <Contact />
      </div>
    </div>
  )
}