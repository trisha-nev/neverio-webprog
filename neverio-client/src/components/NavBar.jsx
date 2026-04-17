import { NavLink } from 'react-router-dom';

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Articles', to: '/articles' },
    { label: 'Sign In', to: '/auth/signin' },
    { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
    [
        'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
        isActive
            ? 'border-[#FCF886] bg-[#FCF886] text-[#384355]'
            : 'border-transparent text-[#384355] hover:border-[#FCF886] hover:bg-[#fDFDFD] hover: text-[#384355]',
    ].join(' ');

const NavBar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#384355] bg-[#fDFDFD]/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm: px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3">
                    <img 
                        src="/logo.png" 
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </NavLink>

                <nav className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;