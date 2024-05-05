import { Routes, Route, Navigate } from "react-router-dom";
import { routePath } from "./path";
import PageLogin from "./Login";
import Home from "./Home";

export default function Pages() {
    return <Routes>
        <Route path={routePath.login} element={<PageLogin />} />
        <Route path={routePath.home} element={<Home/>} />
        <Route path="*" element={<Navigate to={routePath.home} />} />
    </Routes>
}