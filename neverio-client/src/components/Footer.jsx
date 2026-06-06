import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t-2 border-[#384355] bg-[#fDFDFD]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-xs font-medium text-[#384355]/80">
                    &copy; {new Date().getFullYear()} Neverio. Built with React and Tailwind CSS. All rights reserved.
                </p>
                <nav className="flex items-center gap-2">
                    <NavLink to="/privacy" className="rounded-full border-2 border-[#384355] bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#384355] transition-all duration-200 hover:bg-[#FCF886] hover:shadow-[2px_2px_0px_0px_#384355] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 cursor-pointer">
                        Privacy Policy
                    </NavLink>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;