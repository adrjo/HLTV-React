import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import "../styles/MainPage.css"
import { NewsList } from "../components/NewsList";
import { Button } from "@headlessui/react";
import { NewPostForm } from "../components/PostForm";
import { adminStore, postsStore, toastsStore } from "../store/stores";
import { Toasts } from "../components/Toasts";
import { selectFeaturedArticle } from "../util/Util";
import { fetchRandomArticles } from "../api/api";
import { Flag } from "../util/Flag";
import { savePosts } from "../api/posts";

export function MainPage() {
  const adminMode = adminStore((state) => state.adminModeToggled);

  const posts = postsStore((state) => state.posts);
  const setPosts = postsStore((state) => state.setPosts);

  const [article, setFeaturedArticle] = useState();

  const toasts = toastsStore((state) => state.toasts);

  const [show, setShow] = useState(false);

  const toggleShow = () => (
    setShow(!show)
  )

  const [hasFetched, setFetchedState] = useState(false);

  const fetchArticles = () => {
    fetchRandomArticles()
      .then(data => {
        // data is missing "flag" property, set default
        const normalized = data.map(article => ({
          ...article,
          flag: article.flag ?? Flag.WORLD,
          date: Number(article.date), // data has date as a string, convert to number
          id: crypto.randomUUID() // give id
        }));

        // merge into posts
        const merged = [...posts, ...normalized];
        setPosts(merged);
        savePosts(merged);
        selectFeaturedArticle(merged, setFeaturedArticle); // refresh header post

        setFetchedState(true);
        localStorage.setItem("hasFetched", true);
      })
      .catch(err => console.error("Failed to fetch articles:", err));
  };

  useEffect(() => {
    selectFeaturedArticle(posts, setFeaturedArticle);
    const fetchState = localStorage.getItem("hasFetched") || false;
    setFetchedState(fetchState);
  }, [])

  return (
    <>
      <Header article={article} />
      <Navbar />

      {adminMode &&
        <>
          <Button
            onClick={toggleShow}
            className="bg-green-500 m-5 p-3 text-black">
            New Post
          </Button>

          {!hasFetched &&
            <Button
              onClick={fetchArticles}
              className="bg-blue-500 m-5 p-3 text-black">
              Fetch Random Articles
            </Button>
          }
        </>
      }

      <NewsList news={posts} />

      <Toasts toasts={toasts} />

      {show && <NewPostForm setShow={setShow} />}
    </>
  )
}