import Header from './components/Header';
import BottomNav from './components/BottomNav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page
import Home from './pages/Home';
import Account from './pages/Account';
import Error from './pages/Error';
import Discover from './pages/Discover';

// API
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpcReact, TARGET } from './trpc';
import { useState } from 'react';
import { httpBatchLink } from '@trpc/client';

export default function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpcReact.createClient({
        links: [
            httpBatchLink({
                url: TARGET,
            })
        ]
    }));

    return (
        <div className="app">
            <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <Header />
                        <div className="page">
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/account" element={<Account />} />
                                <Route path="/discover" element={<Discover />} />
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </div>
                        <BottomNav />
                    </Router>
                </QueryClientProvider>
            </trpcReact.Provider>
        </div>
    )
}
