import Header from './components/Header';
import BottomNav from './components/BottomNav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page
import Home from './pages/Home';
import Account from './pages/Account';
import Error from './pages/Error';

export default function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="page">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                <BottomNav />
            </Router>
        </div>
    )
}
