import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Projects from "./components/Projects"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import MediumServices from "./components/MediumServices"

function App() {

  return (
    <>
      <Navbar />
      <main >
        <Introduction />
        <About />
        <Services />
        <MediumServices />
        <Team />
        <Projects />
        <Clients />
      </main>
      <Footer />
      <p className="text-sm text-center px-8 my-3 text-[var(--gray-1)]">© Copyright 2018 Mendleson Communication Pty Ltd </p>
    </>
  )
}

export default App;