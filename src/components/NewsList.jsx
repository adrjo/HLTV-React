import { adminStore } from "../App";
import "../styles/NewsList.css"
import { NewsEntry } from "./NewsEntry"


export function NewsList({ news }) {
    const adminMode = adminStore((state) => state.adminModeToggled);

    return (
        <div className="news">
            {news.map((newsEntry) => (
                <NewsEntry key={newsEntry.id} entry={newsEntry} editable={adminMode} />
            ))}

        </div>
    )
}