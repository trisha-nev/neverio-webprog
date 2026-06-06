import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Hero Section */}
            <section className="border-b-2 border-[#384355] bg-[#8ED9F4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                            Neverio summer plans
                        </p>
                        <h1 className="font-display max-w-xl text-4xl font-extrabold leading-tight text-[#384355] sm:text-5xl lg:text-6xl">
                            Welcome to My Summer Vacation
                        </h1>
                        <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#384355]/90 sm:text-base">
                            Discover the exciting destinations and activities I have planned for my summer vacation. From cool mountain escapes to sandy beaches, join me as I explore new places and capture unforgettable memories.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button to="/about" variant="primary"> 
                                Learn More
                            </Button>
                            <Button to="/articles" variant="secondary"> 
                                View Articles
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-4 shadow-[6px_6px_0px_0px_#384355] transition-transform duration-300 hover:scale-[1.01]">
                        <div className="overflow-hidden rounded-[1.25rem] border-2 border-[#384355]">
                            <img 
                                src="https://davidsbeenhere.com/wp-content/uploads/2023/07/summer-vacation-ideas-davidsbeenhere-8.jpeg" 
                                alt="Summer vacation"
                                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y-2 border-[#384355] bg-[#fDFDFD] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/60">
                            Sunny Stats
                        </p>
                        <h2 className="font-display mt-2 text-3xl font-extrabold text-[#384355]">
                            Some Binge Stats of My Summer
                        </h2> 
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> 
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">12</p>
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Movies Watched
                            </p> 
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#8ED9F4] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">10</p>
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Books Finished
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#7FCC7E] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">11</p>
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Sunscreen Bottles
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-[#384355] bg-[#E8E8E2] p-6 shadow-[4px_4px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#384355]">
                            <p className="font-display text-4xl font-black text-[#384355]">4</p>
                            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355]/70">
                                Ice Cream Tubs
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destination Section */}
            <section className="border-t-2 border-[#384355] bg-[#7FCC7E] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#384355]/70">
                            Explore
                        </p>
                        <h2 className="font-display mt-2 text-3xl font-extrabold text-[#384355]">
                            Destination Plans
                        </h2>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3"> 
                        <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-5 shadow-[5px_5px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#384355]">
                            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghdAXK2vw0hEPw2hgYf88vmm_2Z0gCvgvv7sZ3QNA7b8hbsTd2oRY-GdoUo7zsuf_XeKcE1RJpTqVctdXk-HxeZXqWIdTkLp7a30nwUUTZ5FomaeeHowomdUQbcZelXxFsV-Zq6uX6E6AfLPXrnoweWeEAGsEA7LZLO6dXTAFJVBCagaKRNn-YwKPW_6E/s960/Starbucks-Tagaytay.jpeg" 
                                    alt="Tagaytay vacation"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display mt-5 text-xl font-bold text-[#384355]">Tagaytay</h3>
                            <p className="mt-3 text-xs leading-relaxed text-[#384355]/80">
                                A small reprieve from the heat of the city, Tagaytay offers a cool escape with its scenic volcano views and vibrant local cafes.
                            </p>
                            <div className="mt-5">
                                <Button to="/articles" variant="primary" className="w-full">
                                    View More
                                </Button>
                            </div>
                        </article>

                        <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-5 shadow-[5px_5px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#384355]">
                            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://tse2.mm.bing.net/th/id/OIP.WUrRLc9SNcdM32dND7Oz-QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" 
                                    alt="Beach vacation"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display mt-5 text-xl font-bold text-[#384355]">
                                Puerto Galera
                            </h3>
                            <p className="mt-3 text-xs leading-relaxed text-[#384355]/80">
                                Beach lovers will find their paradise in Puerto Galera, where crystal-clear waters and vibrant marine life create an unforgettable experience.
                            </p>
                            <div className="mt-5">
                                <Button to="/articles" variant="primary" className="w-full">
                                    View More
                                </Button>
                            </div>
                        </article>

                        <article className="rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-5 shadow-[5px_5px_0px_0px_#384355] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#384355]">
                            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-[#384355] bg-zinc-200">
                                <img 
                                    src="https://cdn-images-1.medium.com/max/1200/1*acl_kd5JJbgpWg4iRTHgtQ.png" 
                                    alt="Mountain vacation"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display mt-5 text-xl font-bold text-[#384355]">
                                Baguio
                            </h3>
                            <p className="mt-3 text-xs leading-relaxed text-[#384355]/80">
                                Known as the "Summer Capital," Baguio is a mountainous city that offers a refreshing pine-scented escape from the tropical heat.
                            </p>
                            <div className="mt-5">
                                <Button to="/articles" variant="primary" className="w-full">
                                    View More
                                </Button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;