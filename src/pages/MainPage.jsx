import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import "../styles/MainPage.css"
import { NewsList } from "../components/NewsList";
import { Button } from "@headlessui/react";
import { NewPostForm } from "../components/PostForm";
import { adminStore, postsStore, toastsStore } from "../App";
import { Toasts } from "../components/Toasts";
import { getRandomNumber } from "../util/Util";

const featuredArticle = {
  title: "Spirit win Blast Open London 2025",
  img: "https://img-cdn.hltv.org/gallerypicture/9-jXDp3QMajFwZ0YckD_qe.jpg?auto=compress&ixlib=java-2.1.0&q=75&s=a715c020af2fedf5dc2517c050b5b66f",
  id: 1
};

export function MainPage() {
  const [article, setFeaturedArticle] = useState(featuredArticle);
  const adminMode = adminStore((state) => state.adminModeToggled);

  const posts = postsStore((state) => state.posts);

  const toasts = toastsStore((state) => state.toasts);

  const [show, setShow] = useState(false);

  const toggleShow = () => (
    setShow(!show)
  )

  const weekMs = 7 * 24 * 60 * 60 * 1000;
  useEffect(() => {
    let options = posts
      .filter(post => post.img != undefined && post.img != "")
      .filter(post => Date.now() - post.date < weekMs); // featured article shouldnt be too old

    if (options.length != 0) {
      setFeaturedArticle(options[getRandomNumber(0, options.length - 1)]);
    }
  }, [])

  return (
    <>
      <Header article={article} />
      <Navbar />

      {adminMode &&
        <Button
          onClick={toggleShow}
          className="bg-green-500 m-5 p-3 text-black">
          New Post
        </Button>
      }

      <NewsList news={posts} />
      <Toasts toasts={toasts} />

      {show && <NewPostForm setShow={setShow} />}
    </>
  )
}