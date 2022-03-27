import Navbar from "./components/Navbar"
import Intro from "./sections/Intro"
import About from "./sections/About"
import Membership from "./sections/Membership"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Intro />
        <About />
        <Membership />
      </div>
    </div>
  )
}