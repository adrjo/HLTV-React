import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import "../styles/MainPage.css"
import { NewsList } from "../components/NewsList";
import { Button } from "@headlessui/react";
import { NewPostForm } from "../components/NewPostForm";
import { adminStore } from "../App";

const featuredArticle = {
  title: "Spirit win Blast Open London 2025",
  img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
  id: 1
};

export function MainPage() {
  //TODO: select random featured article on reload?
  const [article, setFeaturedArticle] = useState(featuredArticle);
  const adminMode = adminStore((state) => state.adminModeToggled);

  const news = [{
    id: 0,
    author: "Testauthor",
    title: "Test",
    img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
    imgText: "Test description",
    content: "Test content\nTest content line 2"
  },
{
    id: 2,
    author: "Testauthor",
    title: "Test2",
    img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
    imgText: "Test description",
    content: "Test content\nTest content line 2"
  }]

  const [show, setShow] = useState(false);

  const toggleShow = () => (
    setShow(!show)
  )


  return (
    <>
      {show && <NewPostForm setShow={setShow}/>}
      <Header article={article} />
      <Navbar />

      {adminMode &&
        <Button
          onClick={toggleShow}
          className="bg-green-400 m-5 p-3 text-black">
          New Post
        </Button>
      }

      <NewsList news={news} />
    </>
  )
}