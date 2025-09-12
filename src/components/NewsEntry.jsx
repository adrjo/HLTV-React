import { Link } from "react-router";
import "../styles/NewsEntry.css"
import { getElapsedTimeFormatted } from "../util/Util";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { NewPostForm } from "./NewPostForm";



export function NewsEntry({ entry, editable }) {
    const [showForm, setShow] = useState(false);
    const id = entry.id;
    const dateObj = new Date(entry.date);

    let timeSince = Date.now() - entry.date;
    let formattedDate = getElapsedTimeFormatted(timeSince); // for same-day posts, display time since ("5 hours ago", "10 minutes ago", "just now")


    if ((timeSince / 3_600_000) > 24) {
        formattedDate = dateObj.toLocaleTimeString(["sv"], { hour: '2-digit', minute: '2-digit' }); //format like "15:30"
    }

    const editPost = () => {
        setShow(true);
    };

    const deletePost = () => {

    };

    const inner = (
        <>
            <h2 className="flex gap-3">
                <i title={entry.flag.name}>{entry.flag.code}</i>
                {entry.title}
                {editable &&
                    <>
                        <Button title="Edit Post" onClick={editPost}>
                            <i className="fa-solid fa-pen-to-square" />
                        </Button>
                        <Button title="Delete Post" onClick={deletePost}>
                            <i className="fa-solid fa-xmark" />
                        </Button>
                    </>
                }
            </h2>
            <div className="news-info m-auto mr-0 text-xs">
                <div className="comments">5 comments</div>
                <div className="date">{formattedDate}</div>
            </div>
        </>
    )

    // disable link when in editmode
    return (
        <>
            {editable ? (
                <div className="news-button bg-gray-700 flex gap-2 items-center shadow-2xs mb-0.5">
                    {inner}
                </div>
            ) : (
                <Link to={`/article/${id}`} className="news-button bg-gray-700 flex gap-2 items-center shadow-2xs mb-0.5">
                    {inner}
                </Link>
            )}

            {showForm && (
                <NewPostForm setShow={setShow} post={entry} />
            )}
        </>
    )
}