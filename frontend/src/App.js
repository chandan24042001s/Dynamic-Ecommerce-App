import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Register from "./components/register/Register";
import Login from "./components/register/Login";


function App() {
    axios.defaults.withCredentials=true;
    return (
        <BrowserRouter>
            <ToastContainer/>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
       
        </BrowserRouter>
    );
}

export default App;
