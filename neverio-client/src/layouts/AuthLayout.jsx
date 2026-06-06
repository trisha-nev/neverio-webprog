import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#FCF886] text-[#384355] selection:bg-[#8ED9F4] selection:text-[#384355]">
      <div className="grid min-h-screen w-full lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative hidden overflow-hidden lg:block border-r-2 border-[#384355]">
          <img
            src="https://img.freepik.com/premium-photo/landscape-coconut-palm-tree-tropical-beach-summer_1484-1524.jpg"
            alt="Summer tropical beach"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-101"
          />
        </div>

        <main className="flex items-center justify-center px-4 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md rounded-3xl border-2 border-[#384355] bg-[#fDFDFD] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#384355]">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;