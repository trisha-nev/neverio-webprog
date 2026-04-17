import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() { 
    return (
        <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
                <p className="mt-2 text-gray-600">
                    The link you followed to get here must be broken...
                </p>
                <Link to="/">
                    <button className="mt-6 rounded-full border-2 border-zinc-900 bg-zinc-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-zinc-900" variant='primary'>
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;