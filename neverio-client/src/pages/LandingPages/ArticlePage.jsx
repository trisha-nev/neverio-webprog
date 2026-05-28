import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import { getArticles } from '../../services/articleService';

function ArticlePage() {
    const { name } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticleData = async () => {
            try {
                const response = await getArticles();
                const foundArticle = response.data?.data?.find(a => a.name === name);
                setArticle(foundArticle || null);
            } catch (error) {
                console.error("Error loading article:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticleData();
    }, [name]);

    if (isLoading) {
        return (
            <div className="flex w-full flex-col gap-6">
                <section className="border-y-2 border-[#384355] bg-[#FDFDFD] px-4 py-16 text-center">
                    <p className="text-zinc-500 animate-pulse uppercase tracking-[0.2em] font-semibold text-xs">
                        Loading Article...
                    </p>
                </section>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="flex w-full flex-col gap-6">
                <section className="border-y-2 border-[#384355] bg-[#FDFDFD] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <div className="mx-auto max-w-3xl"> 
                        <h1 className="text-3xl font-bold text-[#384355]">Article not found</h1> 
                        <Button to="/articles" className="mt-6">Back to Articles</Button> 
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#8ED9F4] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="max-w-3xl">
                    <div className="mb-4">
                        <Button to="/articles">← Back to Articles</Button> 
                    </div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#384355]">
                        Article
                    </p>
                    <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl"> 
                        {article.title}
                    </h1>
                    <p className="mt-2 text-sm text-zinc-500">
                        {article.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </p> 
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 overflow-hidden bg-zinc-200 mb-8">
                        <img 
                            src={article.imageUrl || article.image || "/logo.png"}
                            alt={article.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="prose prose-sm max-w-none space-y-4 text-zinc-700"> 
                        {article.content && article.content.map((paragraph, index) => (
                            <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                                {paragraph}
                            </p>
                        ))} 
                    </div>

                    <div className="mt-8 border-t-2 border-zinc-900 pt-6">
                        <Button to="/articles">Back to Articles</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArticlePage;