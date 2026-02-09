import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { ProductList } from "../pages/product-list/ProductList";
import ProductDetails from "../pages/product-details/ProductDetails";
import { CartPage } from "../pages/cart/cart";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}