
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./assets/styles/global/global.css"
import Authentication from "./pages/authentication"
import User from "./pages/user";
import Home from "./pages/home/home";

const ProtectedRoute = ({redirectPath}) => { 
    if (localStorage.data) 
        return <Outlet/>
    else 
        return <Navigate to={redirectPath} replace/>
}

const App = () => {    
    return ( 
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />}/>
                <Route path="/login" element={<Authentication />}/>
                <Route element={ <ProtectedRoute redirectPath={"/login"}/> } >
                    <Route path="/user/:id" element={<User/>} />
                </Route>
                <Route path="*" element={<p>404 page not found</p>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default App;