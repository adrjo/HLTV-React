import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiFetchComments } from "../api/comments";
import { getRandomNumber } from "../util/Util";
import { postsStore } from "../App";
import { Navbar } from "../components/Navbar";
import { Article } from "../components/Article";

export function ArticlePage() {
    const { id } = useParams();

    const getPost = postsStore((state) => state.getPost);
    const [post, setPost] = useState(null);

    const [comments, setComments] = useState([]);


    useEffect(() => {
        apiFetchComments(getRandomNumber(1, 10)).then(setComments);

        setPost((getPost(id)));
    }, [])

    return (
        <>
            <Navbar />

            {post ? <Article article={post} /> : <p>Loading article...</p>}
        </>
    )
}