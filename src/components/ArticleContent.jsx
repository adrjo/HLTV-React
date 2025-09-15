export function ArticleContent({ text }) {
    //INLINE STYLING
    //split into spans for now

    let postSpans = [];
    for (let section of text.split("\n\n")) {
        postSpans.push(section);
    }

    return (
        <main>
            {postSpans.map((span) => (
                <span>{span}</span>
            ))}
        </main>
    )
}