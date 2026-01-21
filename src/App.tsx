import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import DashboardPage from "./pages/dashboard";
import LandingPage from "./pages/landing-page";
import CartPage from "./pages/cart-page";
import ProductCatelogPage from "./pages/product-catelog-page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route
                        path="/product-catelog"
                        element={<ProductCatelogPage />}
                    />
                    <Route path="/cart-page" element={<CartPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
