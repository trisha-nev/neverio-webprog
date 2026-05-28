import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import ArticleList from '../../components/ArticleList'; 
import { getArticles } from '../../services/articleService';

const ArticleListPage = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getArticles();
                setArticles(response.data?.data || []);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#7FCC7E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#384355]">
                    Articles
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    Reminders and Caution for the Summer
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base"> 
                    Collection of articles related to summer vacation plans, including tips, destination highlights, and personal experiences to help you make the most of your summer adventures.
                </p>
                <div className="mt-6">
                    <Button to="/">Back Home</Button>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-[#FDFDFD] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#384355]">
                        Featured Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Tips and Highlights for a Great Summer</h2>
                </div>

                {isLoading ? (
                    <div className="flex h-48 items-center justify-center">
                        <p className="text-zinc-500 animate-pulse uppercase tracking-[0.2em] font-semibold text-xs">
                            Loading Articles...
                        </p>
                    </div>
                ) : articles.length > 0 ? (
                    <ArticleList articles={articles} />
                ) : (
                    <div className="text-center py-12 text-zinc-500">
                        No articles found. Check back later!
                    </div>
                )}
            </section>
        </div>
    );
}

export default ArticleListPage;