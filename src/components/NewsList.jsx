import "../styles/NewsList.css"
import { NewsEntry } from "./NewsEntry"


export function NewsList({ news, adminMode}) {
    return (
        <div className="news">
            {news.map((newsEntry) => (
                <NewsEntry key={newsEntry.id} entry={newsEntry} editable={adminMode}/>
            ))}

        </div>
    )
}