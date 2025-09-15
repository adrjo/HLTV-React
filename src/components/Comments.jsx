import { useEffect, useState } from "react";
import { apiFetchComments } from "../api/comments";
import { getRandomNumber } from "../util/Util";


//comments fetched from api
//todo: support for real comments
export function Comments({ id }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        apiFetchComments(getRandomNumber(1, 10)).then(setComments);
    }, []);

    if (comments == undefined) return "Loading comments...";
    console.log(comments)

    return (
        <section className="comments">
            {comments.map((comment) => (
            <div>
                <div className="flex">
                    <small className="flex-1/2">{comment.user.username}</small>
                    <small className="mr-0 text-right m-auto">2025-04-30 17:30</small>
                </div>
                <span>{comment.body}</span>
            </div>
            ))}

        </section>
    )
}