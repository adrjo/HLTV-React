import { Link } from "react-router";

export function NewsEntry({ entry, editable }) {
    return (
        <div id="news-entry" className="flex items-center bg-amber-900 mb-1">
            <Link to={`/news/${entry.id}`} className="flex-1-2">
                <h2>{entry.title}</h2>
            </Link>
            <div className="flex">
                <small>{entry.views}</small>
                <small>{entry.likes}</small>
            </div>

            {editable && ( // TODO: icons for deleting/editing
                <>
                    <button>Delete</button>
                    <button>Edit</button>
                </>
            )}
        </div>
    );
}