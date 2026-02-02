import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./pages/layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/login";
import Product from "./pages/pages";
import Productagent from "./pages/Productagent";
import Producttype from "./pages/Producttype";
import Productlist from "./pages/Productlist";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="About" element={<About />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Product" element={<Product />} />
                    <Route path="Productlist" element={<Productlist />} />
                    <Route path="Producttype" element={<Producttype />} />
                    <Route path="Productagent" element={<Productagent />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const r1 = ReactDom.createRoot(document.getElementById('root'))
r1.render(<App />)