import Button from '../components/Button';
import ArticleList from '../components/ArticleList'; 
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#7FCC7E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#384355]">
                    Articles
                </p>
                <h1 className="max-w-xl_text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
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

                <ArticleList articles={articles} />
            </section>
        </div>
    );
}

export default ArticleListPage;