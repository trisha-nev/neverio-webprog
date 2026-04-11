import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t-2 border-[#384355] bg-[#fDFDFD]/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm: px-6 lg:px-8">
                <p className="text-sm text-[#384355]">&copy; 2026 Neverio. Built with React and Tailwind. All rights reserved.</p>
                <nav className="hidden items-center gap-2 md:flex">
                    <NavLink to="/privacy" className="rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition text-sm text-[#384355] hover:bg-[#FCF886] hover:text-[#384355]">
                        Privacy Policy
                    </NavLink>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;