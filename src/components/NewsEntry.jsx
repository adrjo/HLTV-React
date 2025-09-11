import { Link } from "react-router";
import "../styles/NewsEntry.css"
import { getElapsedTimeFormatted } from "../util/Util";



export function NewsEntry({ entry, editable }) {
    const id = entry.id;
    const dateObj = new Date(entry.date);

    let timeSince = Date.now() - entry.date;
    let formattedDate = getElapsedTimeFormatted(timeSince); // for same-day posts, display time since ("5 hours ago", "10 minutes ago", "just now")


    if ((timeSince / 3_600_000) > 24) {
        formattedDate = dateObj.toLocaleTimeString(["sv"], { hour: '2-digit', minute: '2-digit' }); //format like "15:30"
    }

    return (
        <Link to={`/article/${id}`} className="news-button bg-gray-700 flex gap-2 items-center shadow-2xs mb-0.5">
            <h2 className="flex gap-1">
                <i>{entry.flag}</i>
                {entry.title}
            </h2>
            <div className="news-info m-auto mr-0 text-xs">
                <div className="comments">5 comments</div>
                <div className="date">{formattedDate}</div>
            </div>
        </Link>
    );
}