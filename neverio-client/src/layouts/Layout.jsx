import { Outlet } from 'react-router-dom'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#fDFDFD] text-[#384355] selection:bg-[#FCF886] selection:text-[#384355]">
            <NavBar />
            <main className="pb-16 pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;