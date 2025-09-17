import { adminStore } from "../store/stores";
import { NewsEntry } from "./NewsEntry";

export function NewsList({ news }) {
    const adminMode = adminStore((state) => state.adminModeToggled);

    let currentDay = -1;

    return (
        <main className="news mr-1 mb-5 flex flex-col">
            {news
                .sort((a, b) => b.date - a.date) // newest posts first
                .map((newsEntry) => {
                    const postDate = new Date(newsEntry.date);
                    const day = postDate.getDate();

                    const elements = [];

                    if (day != currentDay) {
                        currentDay = day;
                        const formatter = new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        });

                        elements.push(
                            <h3 className="mt-4 mb-2 font-bold text-xl">
                                Counter-Strike news on {formatter.format(postDate)}:
                            </h3>
                        );
                    }

                    elements.push(
                        <NewsEntry
                            entry={newsEntry}
                            editable={adminMode}
                        />
                    );

                    return elements;
                })}
        </main>
    );
}
