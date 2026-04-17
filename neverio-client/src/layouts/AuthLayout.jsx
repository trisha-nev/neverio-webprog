import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="https://img.freepik.com/premium-photo/landscape-coconut-palm-tree-tropical-beach-summer_1484-1524.jpg"
            alt="Campus marketplace"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <main className="flex items-center bg-[#7FCC7E] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;