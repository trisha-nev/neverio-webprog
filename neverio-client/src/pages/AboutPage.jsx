import Button from '../components/Button';

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#FCF886] px-4 py-6 sm: px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center"> 
                    <div className="rounded-3xl border-2 border-dashed border-[#384355] bg-[#FDFDFD] p-6">
                        <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="/about.jpg" 
                                alt="Summer vacation"
                                className="h-65 w-full rounded-[1.25rem] object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            About Section
                        </p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text- zinc-900 sm:text-4x1">
                            Get to know me!
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm: text-base">
                            A brief introduction to my background, interests, and what I do. This section can include a short bio, my role or profession, and any other relevant information that gives visitors a quick overview of who I am.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button to="/" variant="primary">
                                Back Home
                            </Button>
                            <Button to="/articles">
                                Open Articles
                            </Button> 
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-zinc-50 px-4 py-6 sm: px-6 sm: py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Profile Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Smth about me
                    </h2> 
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> 
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-5">
                        <p className="text-2xl font-bold text-zinc-900">22</p> 
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Years Old
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-5">
                        <p className="text-2xl font-bold text-zinc-900">100</p> 
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Cortisol Level
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-5">
                        <p className="text-2xl font-bold text-zinc-900">9</p> 
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Happiness Level
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-5">
                        <p className="text-2xl font-bold text-zinc-900">75</p> 
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Boredom Level
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-[#8ED9F4] px-4 py-6 sm: px- 6 sm:py-8 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"> 
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking- [0.28em] text-zinc-500">
                            Things I Like
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-zinc- 900">
                            A Few of My Favorite Things
                        </h2>

                        <div className="mt-6 space-y-4">
                            <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                    Cats
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    I have a soft spot for cats. Their playful and independent nature always brings a smile to my face.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                    Traveling
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    I love exploring new places and experiencing different cultures.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                    Crocheting
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    I enjoy the process of creating something beautiful with my hands.
                                </p>
                            </article>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking- [0.28em] text-zinc-500">
                            Visual Grid
                        </p>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="flex aspect-square items-center justify-
                        center rounded-[1.25rem] bg-zinc-200">
                                <img 
                                    src="https://thumbs.dreamstime.com/b/cat-portrait-1396061.jpg" 
                                    alt="cat"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img 
                                    src="https://images.herzindagi.info/image/2022/Jun/travel-diary-influencers.jpg" 
                                    alt="Girl on vacation"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify- center rounded-[1.25rem] bg-zinc-200">
                                <img 
                                    src="https://images.hdqwalls.com/wallpapers/anime-violet-evergarden-art-1x.jpg" 
                                    alt="violet evergarden"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img 
                                    src="https://i.pinimg.com/736x/fe/6c/36/fe6c3602793a6cec65f487a47b137d7b.jpg" 
                                    alt="cats"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <Button className="mt-5">View Section</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;