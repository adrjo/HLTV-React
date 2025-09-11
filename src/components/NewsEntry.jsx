import { Link } from "react-router";
import "../styles/NewsEntry.css"



export function NewsEntry({ entry, editable }) {
    const id = entry.id;
    return (
        <Link to={`/article/${id}`} className="news-button bg-gray-700 flex gap-2 items-center shadow-2xs mb-0.5">
            <h2>{entry.title}</h2>
            <div className="news-info m-auto mr-0 text-xs">
                <div className="comments">5 comments</div>
                <div className="date">5 min ago</div>
            </div>
        </Link>
    );
}