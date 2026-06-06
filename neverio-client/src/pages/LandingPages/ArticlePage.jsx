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
            <div className="flex w-full flex-col gap-8">
                <section className="border-b-2 border-[#384355] bg-[#fDFDFD] px-4 py-20 text-center">
                    <div className="mx-auto max-w-md rounded-2xl border-2 border-[#384355] bg-[#FCF886] px-6 py-4 shadow-[4px_4px_0px_0px_#384355] animate-pulse">
                        <p className="text-[#384355] text-xs font-bold uppercase tracking-[0.2em]">
                            Loading Article...
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="flex w-full flex-col gap-8">
                <section className="border-b-2 border-[#384355] bg-[#fDFDFD] px-4 py-16">
                    <div className="mx-auto max-w-3xl text-center"> 
                        <h1 className="font-display text-4xl font-extrabold text-[#384355]">Article Not Found</h1> 
                        <div className="mt-8">
                            <Button to="/articles" variant="primary">Back to Articles</Button> 
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-8">
            {/* Header Banner */}
            <section className="border-b-2 border-[#384355] bg-[#8ED9F4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-6">
                        <Button to="/articles" variant="secondary">← Back to Articles</Button> 
                    </div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                        Article detail
                    </p>
                    <h1 className="font-display text-3xl font-extrabold leading-tight text-[#384355] sm:text-4xl lg:text-5xl"> 
                        {article.title}
                    </h1>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#384355]/60">
                        Category: {article.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </p> 
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-[#fDFDFD] px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="group aspect-video overflow-hidden rounded-3xl border-2 border-[#384355] bg-zinc-100 p-3 shadow-[5px_5px_0px_0px_#384355] mb-8">
                        <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-[#384355]/20">
                            <img 
                                src={article.imageUrl || article.image || "/logo.png"}
                                alt={article.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                            />
                        </div>
                    </div>

                    <div className="prose prose-zinc max-w-none space-y-6 text-[#384355]"> 
                        {article.content && (Array.isArray(article.content) ? article.content : [article.content]).map((paragraph, index) => (
                            <p key={index} className="text-sm sm:text-base leading-relaxed text-[#384355]/90 whitespace-pre-wrap">
                                {paragraph}
                            </p>
                        ))} 
                    </div>

                    <div className="mt-12 border-t-2 border-[#384355]/20 pt-8 flex justify-between items-center">
                        <Button to="/articles" variant="secondary">Back to Articles</Button>
                        <Button to="/" variant="primary">Home</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArticlePage;