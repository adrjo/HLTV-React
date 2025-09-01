import "../styles/Header.css"


// Render featured article
export function Header({ article }) {
    const handleReadMoreClick = () => {
        window.location.href = "/article/" + article.id
    };


    return (
        <header className="featured-article flex hover:cursor-pointer" onClick={handleReadMoreClick}>
            <div className="flex-1/2 justify-center">
                <h1>{article.title}</h1>
                <h2>Read More <i class="fa-solid fa-arrow-right"></i></h2>
            </div>
            <div className="flex-1/2">
                <img src={article.img} />
            </div>
        </header>
    )
}