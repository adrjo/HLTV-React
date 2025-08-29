import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./pages/MainPage";
import { ForumPage } from "./pages/ForumPage";

function App() {

  const featuredArticle = {
    title: "Spirit win Blast Open London 2025",
    img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
    id: 1
  };

  return (
    <BrowserRouter>
      <Header article={featuredArticle}/>
      <Navbar />


      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
