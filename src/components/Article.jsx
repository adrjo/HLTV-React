import "../styles/Article.css"

import { ArticleContent } from "./ArticleContent";

export function Article({ article }) {
    let date = new Date(article.date).toDateString();

    return (
        <div className="article mb-5">
            <h1 className="uppercase font-extrabold text-4xl mt-1.5 pb-2">
                {article.title}
            </h1>

            <div className="flex">
                <small className="flex-1/2">{article.author}</small>
                <small className="mr-0 text-right m-auto">{date}</small>
            </div>


            <img src={article.img} className="border-black-1 p-4 pb-0"></img>
            <small className="block text-center m-auto">{article.imgText}</small>

            <ArticleContent text={article.content} />
        </div>
    )
}