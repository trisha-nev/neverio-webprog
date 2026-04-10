import Button from '../components/Button';

const ArticlePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#7FCC7E] px-4 py-6 sm: px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking- [0.28em] text-zinc-500">
                    Articles
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    Reminders and Caution for the Summer
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm: text-base">
                    Collection of articles related to summer vacation plans, including tips, destination highlights, and personal experiences to help you make the most of your summer adventures.
                </p>
                <div className="mt-6">
                    <Button to="/">Back Home</Button>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-[#FDFDFD] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc- 900">
                        Tips and Highlights for a Great Summer
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"> 
                    <article className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://www.northmyrtlebeachvacations.com/wp-content/uploads/2024/04/Depositphotos_264558204_L-1024x682.jpg" 
                                alt="Reef-safe sunscreen tips"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 01
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc- 900">
                            Reef-safe Sunscreen Tips
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600"> 
                            A quick guide to choosing reef-safe sunscreens to protect marine life while enjoying the sun.
                        </p>
                        <Button className="mt-4">Read More</Button> 
                    </article>

                    <article className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
                                alt="Beach"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 02
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc- 900">
                            Choosing the Right Beach Destination
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600"> 
                            Tips for selecting the perfect beach destination based on your preferences and travel style.
                        </p>
                        <Button className="mt-4">Read More</Button> 
                    </article>

                    <article className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://beachcommute.com/wp-content/uploads/2024/06/Beach-Commute-0054.jpg" 
                                alt="Guy on the beach"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 03
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc- 900">
                            Summer Travel Safety Tips
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600"> 
                            Essential safety tips for a worry-free summer travel experience.
                        </p>
                        <Button className="mt-4">Read More</Button> 
                    </article>

                    <article className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://www.gardenoflife.com/media/wysiwyg/GoL_BeachPrep_Blog_v1_905x400.jpg" 
                                alt="Things on the beach"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Article 04
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc- 900">
                            Packing Essentials for Summer Trips
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600"> 
                            A checklist of must-have items to pack for a comfortable and enjoyable summer vacation.
                        </p>
                        <Button className="mt-4">Read More</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default ArticlePage;