import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-[#384355] bg-[#8ED9F4] px-4 py-6 sm: px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            Hello
                        </p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#384355] sm:text-4xl">
                            Welcome to My Summer Vacation Plans
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-[#384355] sm:text-base">
                            Discover the exciting destinations and activities I have planned for my summer vacation. From beach getaways to mountain adventures, join me as I explore new places and create unforgettable memories.
                        </p>
                        <div className="mt-6">
                            <Button to="/about" variant="primary"> 
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-[#fDFDFD] p-6">
                        <img 
                            src="https://davidsbeenhere.com/wp-content/uploads/2023/07/summer-vacation-ideas-davidsbeenhere-8.jpeg" 
                            alt="Summer vacation"
                            className="h-65 w-full rounded-[1.25rem] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-[#fDFDFD] px-4 py-6 sm:px-6 sm: py-8 lg: px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Sunny Stats
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-
                    900">
                        Some Binge Stats of My Summer
                    </h2> 
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> 
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-5">
                        <p className="text-2xl font-bold text-zinc-900">12</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Movies
                        </p> 
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-5">
                        <p className="text-2xl font-bold text-zinc-900">10</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Books
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-5">
                        <p className="text-2xl font-bold text-zinc-900">11</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Bottles of Sunscreen
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#384355] bg-[#FCF886] p-5">
                        <p className="text-2xl font-bold text-zinc-900">4</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Tubs of Ice Cream
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#384355] bg-[#7FCC7E] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Explore
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Destination Plans
                    </h2>
                </div>
                
                <div className="grid gap-4 md:grid-cols-3"> 
                    <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghdAXK2vw0hEPw2hgYf88vmm_2Z0gCvgvv7sZ3QNA7b8hbsTd2oRY-GdoUo7zsuf_XeKcE1RJpTqVctdXk-HxeZXqWIdTkLp7a30nwUUTZ5FomaeeHowomdUQbcZelXxFsV-Zq6uX6E6AfLPXrnoweWeEAGsEA7LZLO6dXTAFJVBCagaKRNn-YwKPW_6E/s960/Starbucks-Tagaytay.jpeg" 
                                alt="Tagaytay vacation"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Tagaytay</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            A small reprieve from the heat of the city, Tagaytay offers a cool escape with its scenic views and vibrant culture.
                        </p>
                        <Button className="mt-4" variant="primary">
                            View More
                        </Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://tse2.mm.bing.net/th/id/OIP.WUrRLc9SNcdM32dND7Oz-QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" 
                                alt="Beach vacation"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                            Puerto Galera
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Beach lovers will find their paradise in Puerto Galera, where crystal-clear waters and vibrant marine life create an unforgettable experience.
                        </p>
                        <Button className="mt-4" variant="primary">
                            View More
                        </Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#384355] bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img 
                                src="https://cdn-images-1.medium.com/max/1200/1*acl_kd5JJbgpWg4iRTHgtQ.png" 
                                alt="Mountain vacation"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                            Baguio
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Known as the "City of Dreams," Baguio is a mountainous city that offers a refreshing escape from the tropical heat.
                        </p>
                        <Button className="mt-4" variant="primary">
                            View More
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;