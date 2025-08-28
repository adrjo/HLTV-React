import "../styles/Header.css"


// Render featured article
export function Header({article}) {
    return (
        <header>
            <h1>{article.title}</h1>
            <div className="card">
                <img src={article.img} />
                <a href={"article/" + article.id}>Read more</a>
            </div>
        </header>
    )
}