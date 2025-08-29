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
                <button>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="flex-1/2">
                <img src={article.img} />
            </div>
        </header>
    )
}