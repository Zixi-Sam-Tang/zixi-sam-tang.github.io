import "./App.css";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App app-shell">
      <div className="page-glow page-glow-one" aria-hidden="true" />
      <div className="page-glow page-glow-two" aria-hidden="true" />
      <Navbar />
      <main className="app-main">
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
