import Button from '../../components/Button';

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Intro Section */}
            <section className="border-b-2 border-[#384355] bg-[#FCF886] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 lg:items-center"> 
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#FDFDFD] p-4 shadow-[6px_6px_0px_0px_#384355]">
                        <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                            <img 
                                src="/about.jpg" 
                                alt="About me"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                            About Section
                        </p>
                        <h1 className="font-display max-w-xl text-3xl font-extrabold leading-tight text-[#384355] sm:text-4xl lg:text-5xl">
                            Get to know me!
                        </h1>
                        <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#384355]/90 sm:text-base">
                            A brief introduction to my background, interests, and what I do. This section provides a quick overview of who I am, my academic journeys, and the things that keep me inspired every day.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button to="/" variant="primary">
                                Back Home
                            </Button>
                            <Button to="/articles" variant="secondary">
                                Open Articles
                            </Button> 
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Overview Section */}
            <section className="border-y-2 border-[#384355] bg-[#fDFDFD] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/60">
                            Profile Overview
                        </p>
                        <h2 className="font-display mt-2 text-3xl font-extrabold text-[#384355]">
                            Something About Me
                        </h2> 
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> 
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">22</p> 
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Years Old
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">100%</p> 
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Cortisol Level
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">9 / 10</p> 
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Happiness Level
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">75%</p> 
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Boredom Level
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Things I Like Section */}
            <section className="border-t-2 border-[#384355] bg-[#8ED9F4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"> 
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                            Things I Like
                        </p>
                        <h2 className="font-display mt-2 text-3xl font-extrabold text-[#384355]">
                            A Few of My Favorite Things
                        </h2>

                        <div className="mt-8 space-y-5">
                            <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#384355]">
                                <h3 className="font-display text-xl font-bold text-[#384355]">
                                    Cats
                                </h3>
                                <p className="mt-3 text-xs leading-relaxed text-[#384355]/85">
                                    I have a soft spot for cats. Their playful, independent, and sometimes sassy nature always brings a bright smile to my face.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#384355]">
                                <h3 className="font-display text-xl font-bold text-[#384355]">
                                    Traveling
                                </h3>
                                <p className="mt-3 text-xs leading-relaxed text-[#384355]/85">
                                    I love exploring new horizons, taking detours, and experiencing diverse environments to step outside my comfort zone.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#384355]">
                                <h3 className="font-display text-xl font-bold text-[#384355]">
                                    Crocheting
                                </h3>
                                <p className="mt-3 text-xs leading-relaxed text-[#384355]/85">
                                    I enjoy the slow, deliberate craft of crocheting, using warm color yarns to stitch unique handmade creations.
                                </p>
                            </article>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-6 shadow-[5px_5px_0px_0px_#384355]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/60">
                            Visual Grid
                        </p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://thumbs.dreamstime.com/b/cat-portrait-1396061.jpg" 
                                    alt="cat"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-108"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://images.herzindagi.info/image/2022/Jun/travel-diary-influencers.jpg" 
                                    alt="Girl on vacation"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-108"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://images.hdqwalls.com/wallpapers/anime-violet-evergarden-art-1x.jpg" 
                                    alt="violet evergarden"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-108"
                                />
                            </div>
                            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://i.pinimg.com/736x/fe/6c/36/fe6c3602793a6cec65f487a47b137d7b.jpg" 
                                    alt="cats"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-108"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button to="/" variant="accent" className="w-full">Back Home</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;