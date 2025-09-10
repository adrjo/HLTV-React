import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiFetchComments } from "../api/comments";
import { getRandomNumber } from "../util/Util";

export function ArticlePage() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        apiFetchComments(getRandomNumber(1,10)).then(setComments);
        console.log(comments)
    }, [])

    const { id } = useParams();

    if (comments.length == 0) {
        return "Loading comments...";
    }

    return (
        <>
            {id}

            {comments.map((comment) => (
                <div key={comment.id}>
                    {comment.user.username}
                    {comment.body}
                </div>
            ))}

        </>
    )
}