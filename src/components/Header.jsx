import { Link } from "react-router";
import "../styles/Header.css"


// Render featured article
export function Header({ article }) {
    if (!article) {
        return;
    }


    return (
        <Link to={`/article/${article.id}`} className="featured-article flex">
            <div className="flex-1/2 justify-center">
                <h1>{article.title}</h1>
                <h2>Read More <i className="fa-solid fa-arrow-right"></i></h2>
            </div>
            <div className="flex-1/2">
                <img src={article.img} />
            </div>
        </Link>
    )
}