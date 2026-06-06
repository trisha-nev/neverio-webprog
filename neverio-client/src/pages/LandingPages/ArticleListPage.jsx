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
        <div className="flex w-full flex-col gap-8">
            {/* Header Section */}
            <section className="border-b-2 border-[#384355] bg-[#7FCC7E] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                        Articles
                    </p>
                    <h1 className="font-display max-w-xl text-3xl font-extrabold leading-tight text-[#384355] sm:text-4xl lg:text-5xl">
                        Reminders and Caution for the Summer
                    </h1>
                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#384355]/90 sm:text-base"> 
                        Collection of articles related to summer vacation plans, including tips, destination highlights, and personal experiences to help you make the most of your summer adventures.
                    </p>
                    <div className="mt-8">
                        <Button to="/" variant="primary">Back Home</Button>
                    </div>
                </div>
            </section>

            {/* List Section */}
            <section className="border-t-2 border-[#384355] bg-[#fDFDFD] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/60">
                            Featured Articles
                        </p>
                        <h2 className="font-display mt-2 text-3xl font-extrabold text-[#384355]">
                            Tips and Highlights for a Great Summer
                        </h2>
                    </div>

                    {isLoading ? (
                        <div className="flex h-64 items-center justify-center">
                            <div className="rounded-2xl border-2 border-[#384355] bg-[#FCF886] px-6 py-4 shadow-[4px_4px_0px_0px_#384355] animate-pulse">
                                <p className="text-[#384355] text-xs font-bold uppercase tracking-[0.2em]">
                                    Loading Articles...
                                </p>
                            </div>
                        </div>
                    ) : articles.length > 0 ? (
                        <ArticleList articles={articles} />
                    ) : (
                        <div className="rounded-2xl border-2 border-dashed border-[#384355]/30 text-center py-16 text-zinc-500 font-medium">
                            No articles found. Check back later!
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default ArticleListPage;