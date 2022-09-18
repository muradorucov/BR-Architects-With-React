import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { PageContent } from "./components/PageContent/PageContent";



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PageContent/>
      <Footer />
    </>
  );
}

export default App;
