import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import { Landing } from "../pages/Landing"
import { NewShop } from "../pages/NewShop"
import { ShopDetails } from "../pages/ShopDetails"
import { ShopsMap } from "../pages/ShopsMap"

function WebRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/shops-map" element={<ShopsMap />} />
                <Route path="/shop-details" element={<ShopDetails />} />
                <Route path="/new-shop" element={<NewShop />} />
            </Routes>
        </BrowserRouter>
    )
}

export { WebRoutes }