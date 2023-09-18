import Navbar from "./components/navbar/navbar";
import Intro from './components/Intro/Intro.js'
import Skills from "./components/Skills/skills.js";
import Works from "./components/Works/works.js";

function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills />
        <Works />
    </div>
  );
}

export default App;
