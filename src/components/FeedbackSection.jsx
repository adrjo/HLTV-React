import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { getLikeObj, setLikesStorage } from "../api/posts";

export function FeedbackSection({ articleId }) {
    const [likes, setLikes] = useState(0);
    useEffect(() => {
        setLikes(getLikeObj(articleId).amount);
    }, []);

    const likeArticle = () => {
        setLikes(likes + 1);
        setLikesStorage(articleId, likes + 1);
    };

    const dislikeArticle = () => {
        setLikes(likes - 1);
        setLikesStorage(articleId, likes - 1);
    };

    return (
        <section>
            {likes}
            <Button
                name="like"
                onClick={likeArticle}
                className="bg-green-500 m-5 p-3 text-black w-32">
                Like
            </Button>
            <Button
                name="dislike"
                onClick={dislikeArticle}
                className="bg-red-500 m-5 p-3 text-white w-32">
                Dislike
            </Button>
        </section>
    )
}