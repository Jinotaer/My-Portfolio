import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f6f7fb] px-6 pt-4 pb-10 transition-colors dark:bg-[#070811] md:px-8 md:pt-6 md:pb-14">
        <Home />
        <About />
        <Skill />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
