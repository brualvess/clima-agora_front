import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import PaginaInicial from "./components/paginaInicial";
import Login from "./components/Login"
import Cadastro from "./components/Cadastro";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}