import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Info } from "./components/Info/Info";
import { Clientu } from "./components/Clientu/Clientu";
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";
import { Main } from "./components/Main/Main";
import { Revievs } from "./components/Revievs/Revievs";
import { Servise } from "./components/Servise/Servise";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Servise />
      <Info />
      <About />
      <Revievs />
      <Clientu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
