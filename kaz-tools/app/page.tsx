import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";

const Home = () => {
  return (
    <main>

      <header>
        <Header />
      </header>

      <nav>
        <Nav />
      </nav>

      <section>
        <Section />
      </section>

      <footer>
        <Footer />
      </footer>

    </main>
  )
}

export default Home;