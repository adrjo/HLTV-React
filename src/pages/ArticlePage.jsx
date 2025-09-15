import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postsStore } from "../App";
import { Navbar } from "../components/Navbar";
import { Article } from "../components/Article";
import { FeedbackSection } from "../components/FeedbackSection";
import { Comments } from "../components/Comments";

export function ArticlePage() {
    const { id } = useParams();

    const getPost = postsStore((state) => state.getPost);
    const [post, setPost] = useState(null);


    useEffect(() => {
        setPost((getPost(id)));
    }, [])

    console.log(id)
    return (
        <>
            <Navbar />

            {post ? (
                <>
                    <Article article={post} />
                    <FeedbackSection articleId={id} />

                    <Comments articleId={id} />
                </>
            ) : <p>404 Article Not Found</p>
            }


        </>
    )
}