import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import ManageProduct from "./pages/admin/ManageProduct";
import ManageOrder from "./pages/admin/ManageOrder";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import List from "./pages/user/List";
import Detail from "./pages/user/Detail";
import ManageUser from "./pages/admin/ManageUser";
import UserPage from "./pages/user/UserPage";

function App() {
    const navigate = useNavigate();
    return (
        <div>

            <Routes>
                <Route path={''} element={<Home/>}></Route>
                <Route path={'login'} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'user'} element={<UserPage/>}>
                    <Route path={''} element={<List/>}></Route>
                    <Route path={'detail'} element={<Detail/>}></Route>

                </Route>
                <Route path={'admin'} element={<AdminPage/>}>
                    <Route path={''} element={<ManageUser/>}></Route>
                    <Route path={'product'} element={<ManageProduct/>}></Route>
                    <Route path={'order'} element={<ManageOrder/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
