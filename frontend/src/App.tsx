const API_SERVER = "http://localhost:3000/api";

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
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
import { useState } from 'react';

export default function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: API_SERVER
                }),
            ],
        }),
    );

    return (
        <div className="app">
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <Header />
                        <div className="page">
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/account" element={<Account />} />
                                <Route path="/discover" element={<Discover />}></Route>
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </div>
                        <BottomNav />
                    </Router>
                </QueryClientProvider>
            </trpc.Provider>
        </div>
    )
}
