import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {

  const featuredArticle = {
    title: "Spirit win Blast Open London 2025",
    img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
    id: 1
  };

  return (
    <>
      <Header article={featuredArticle}/>
      <Navbar />
    </>
  )
}

export default App
