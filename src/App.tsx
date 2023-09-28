import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Vacancy } from "./components/Vacancy/Vacancy";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Vacancy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
