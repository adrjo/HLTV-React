import { adminStore } from "../App";
import "../styles/NewsList.css"
import { NewsEntry } from "./NewsEntry"


export function NewsList({ news }) {
    const adminMode = adminStore((state) => state.adminModeToggled);

    return (
        <main className="news mr-1 mb-5 flex flex-col">
            {news
            .sort((a, b) => b.date - a.date) // newest posts first
            .map((newsEntry) => (
                <NewsEntry key={newsEntry.id} entry={newsEntry} editable={adminMode} />
            ))}

        </main>
    )
}