import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postsStore } from "../App";
import { Navbar } from "../components/Navbar";
import { Article } from "../components/Article";

export function ArticlePage() {
    const { id } = useParams();

    const getPost = postsStore((state) => state.getPost);
    const [post, setPost] = useState(null);


    useEffect(() => {
        setPost((getPost(id)));
    }, [])

    return (
        <>
            <Navbar />

            {post ? <Article article={post} /> : <p>404 Article Not Found</p>}
        </>
    )
}