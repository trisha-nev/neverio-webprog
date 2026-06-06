import { Link } from 'react-router-dom'; 
import Button from './Button';

const ArticleList = ({ articles }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article, index) => (
                <article 
                    key={article.name} 
                    className="flex flex-col rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-4 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#384355]"
                >
                    <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-100">
                        <img 
                            src={article.imageUrl || article.image || "/logo.png"}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between pt-4">
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#384355]/60">
                                Article {String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="font-display mt-2 text-base font-extrabold leading-snug text-[#384355] line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="mt-3 text-xs leading-relaxed text-[#384355]/85 line-clamp-3">
                                {Array.isArray(article.content) ? article.content[0] : article.content}
                            </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-[#384355]/10">
                            <Button to={`/articles/${article.name}`} variant="accent" className="w-full">
                                Read More
                            </Button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ArticleList;