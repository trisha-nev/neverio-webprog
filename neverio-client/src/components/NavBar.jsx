import { NavLink, Link, useNavigate } from 'react-router-dom';

const navLinkClassName = ({ isActive }) =>
    [
        'rounded-full border-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ease-in-out',
        isActive
            ? 'border-[#384355] bg-[#FCF886] text-[#384355] shadow-[2px_2px_0px_0px_#384355]'
            : 'border-transparent text-[#384355] hover:border-[#384355] hover:bg-[#FCF886] hover:shadow-[2px_2px_0px_0px_#384355] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none',
    ].join(' ');

const NavBar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#384355] bg-[#fDFDFD]/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-102">
                    <img 
                        src="/logo.png" 
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </Link>

                <nav className="hidden items-center gap-3 md:flex">
                    <NavLink to="/" end className={navLinkClassName}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={navLinkClassName}>
                        About
                    </NavLink>
                    <NavLink to="/articles" className={navLinkClassName}>
                        Articles
                    </NavLink>

                    {user ? (
                        <>
                            <NavLink to="/dashboard" className={navLinkClassName}>
                                Dashboard
                            </NavLink>
                            <button 
                                onClick={handleLogout} 
                                className="rounded-full border-2 border-[#384355] bg-[#384355] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDFDFD] shadow-[2px_2px_0px_0px_#FCF886] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#FCF886] active:translate-x-0 active:translate-y-0 cursor-pointer"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/auth/signin" className={navLinkClassName}>
                                Sign In
                            </NavLink>
                            <NavLink to="/auth/signup" className={navLinkClassName}>
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;