const API_SERVER = "http://localhost:3000/api";

import BottomNav from './components/BottomNav';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page
import Account from './pages/Account';
import Discover from './pages/Discover';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// API
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './trpc';

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
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
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
